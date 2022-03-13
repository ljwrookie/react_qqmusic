import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './style';
const ThemeHeaderRCM = memo(function(props) {
    const { title } = props;
    return (
        <HeaderWrapper>
            <NavLink className="content" to="#">
                <span className='title'>{title}</span> <span className="iconfont icon">&#xe61f;</span>
            </NavLink>
        </HeaderWrapper>
    )
})

export default ThemeHeaderRCM