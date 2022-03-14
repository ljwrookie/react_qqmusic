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
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <div className="cover">
          <div>
            <i className="iconfont">&#xe658;</i>
          </div>
          <div className="info">
            <span>
              <i className="listen">&#xe718;</i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play">&#xe600;</i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
    </ThemeCoverWrapper>
  )
})
