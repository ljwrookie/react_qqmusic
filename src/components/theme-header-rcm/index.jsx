import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import { HeaderWrapper } from './style';
const ThemeHeaderRCM = memo(function (props) {
    const { title, keywords, moreLink, keywordClick } = props;
    return (
        <HeaderWrapper>
            <div className="left">
                <h3 className='title'>{title}</h3>
                <div className="keyword">
                    {
                        keywords.map((item, index) => {
                            return (
                                <div className="item" key={item}>
                                    <span className="link" onClick={e => keywordClick(item)}>{item}</span>
                                
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">

                <NavLink className="link" to={moreLink}>
                    <span>更多</span><span className="iconfont icon">&#xe61f;</span>
                </NavLink>
            </div>
        </HeaderWrapper>
    )
})
ThemeHeaderRCM.defaultProps = {
    keywords: []
}

ThemeHeaderRCM.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}

export default ThemeHeaderRCM