import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import { HeaderWrapper } from './style';
import { LIGHT_MODE, DARK_MODE, getMode } from '../../common/constants';

const {themeColor} = (getMode()==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)
const ThemeHeaderRCM = memo(function (props) {
    const { index, title, keywords, moreLink, keywordClick, moreDisplay } = props;
    return (
        <HeaderWrapper>
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {keywords.map((item, id) => {
                        return (
                            <div className="item" key={item}>
                                <NavLink
                                    to="#"
                                    className="link"
                                    style={{
                                        color:
                                            index === id ? themeColor : '',
                                    }}
                                    onClick={() => keywordClick(item)}
                                >
                                    {item}
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="right">
                <NavLink
                    className="link"
                    to={moreLink}
                    style={{
                        display: moreDisplay===undefined ? 'visible' : 'none',
                    }}
                >
                    <span>更多</span>
                    <span className="iconfont icon">&#xe61f;</span>
                </NavLink>
            </div>
        </HeaderWrapper>
    );
})
ThemeHeaderRCM.defaultProps = {
    keywords: []
}

ThemeHeaderRCM.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}

export default ThemeHeaderRCM