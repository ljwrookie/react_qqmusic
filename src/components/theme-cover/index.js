import React, { memo } from 'react';

import {
  getSizeImage,
  getCount
} from "@/utils/format-utils";

import {
  ThemeCoverWrapper
} from "./style";

export default memo(function HYThemeCover(props) {
  const { info, right } = props;

  return (
    <ThemeCoverWrapper right={right}>
      <div className="cover-top">
        <img className="image" src={getSizeImage(info.picUrl, 180)} alt={info.name} />
        <div className="cover">
          <div className="logo"><i className="iconfont icon">&#xe601;</i></div>
          <div className='play'><i className="iconfont icon">&#xea83;</i></div>
          <div className="info">
            <span>
              <i className="iconfont listen">&#xe718;</i>
              {getCount(info.playCount)}
            </span>
    
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
    </ThemeCoverWrapper>
  )
})
