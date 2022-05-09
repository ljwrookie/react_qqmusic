import React, { memo } from 'react';
import { Popconfirm, message } from 'antd';
import { getSizeImage, getCount } from '@/utils/format-utils';

import { ThemeCoverWrapper } from './style';

export default memo(function ThemeCover(props) {
    const { name, singer, img_url, playCount, width, height, hover,  deleteIt , deleteThis} = props; // const {url_name} =
    // console.log(urlList)

    async function confirm(e) {
        e.preventDefault();
        // console.log(e)
        await deleteThis();
        
        message.success({
            content:
                '删除成功',
            style: {
                marginTop: '5vh',
                borderRadius: '5px',
            },
        });
      }
      
      function cancel(e) {
        e.preventDefault();
        
        message.error({
            content:
                '取消删除',
            style: {
                marginTop: '5vh',
                borderRadius: '5px',
            },
        });
      }
    return (
        <ThemeCoverWrapper width={width} height={height} hover={hover}>
            <div className="cover-top">
                <img
                    className="image"
                    src={getSizeImage(img_url, height*2, width*2)}
                    alt={name}
                />
                <div className="mask"></div>
                <div className="cover">
                    {/* <div className="logo"><i className="iconfont icon">&#xe601;</i></div> */}
                    <i className="iconfont play">&#xea82;</i>
                    <div
                        className="info"
                        style={{
                            visibility: playCount ? 'visible' : 'hidden',
                        }}
                    >
                        <span>
                            <i className="iconfont listen">&#xe718;</i>
                            {getCount(playCount)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="cover-bottom  ">
                <div className="text-nowrap">{name}</div>
                {deleteIt ? (
                    <Popconfirm
                    title="确定删除这个歌单吗?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="确定"
                    cancelText="取消"
                  >
                    <div className="delete-it iconfont">
                        &#xe61c;
                    </div>
                  </Popconfirm>
                ) : null}
            </div>
            <div className="singer_name">{singer}</div>
        </ThemeCoverWrapper>
    );
});
