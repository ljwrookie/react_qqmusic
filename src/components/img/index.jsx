import React, { useState } from 'react'
// 下面这两个是导入默认的图片
import loadImg from '@/assets/image/loading.png';
import errorImg from './../../../assets/image/error.png'
export default function Img(props) {
  // 图片地址
  const [src, setSrc] = useState(props.loadingImg)
  // 是否第一次加载，如果不使用这个会加载两次
  const [isFlag, setIsFlag] = useState(false)
  /**
   * 图片加载完成
   */
  const handleOnLoad = () => {
    // 判断是否第一次加载
    if (isFlag) return;
    // 创建一个img标签
    const imgDom = new Image();
    imgDom.src = props.src;
    // 图片加载完成使用正常的图片
    imgDom.onload = function () {
      setIsFlag(true)
      setSrc(props.src)
    }
    // 图片加载失败使用图片占位符
    imgDom.onerror = function () {
      setIsFlag(true)
      setSrc(props.errorImg)
    }
  }
  
  return (
   
      <img src={src}
        onLoad={handleOnLoad}
        style={{
          height: 'inherit',
        }}
      ></img>
    
  )
}
// 设置默认的图片加载中的样式和失败的图片
Img.defaultProps = {
  loadingImg: loadImg,
  errorImg: errorImg
}
