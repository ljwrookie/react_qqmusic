import React, { memo, useEffect, useState } from 'react'
import { getFolloweds, getUserDetail } from '@/service/user'
import { useSearchParams, Link } from 'react-router-dom'
import { getSizeImage } from '@/utils/format-utils';
import {FollowedWarper} from './style'
const Followed = memo(() => {
  const [userId, setUserId] = useSearchParams()
  const [followeds, setFolloweds] = useState([])
  const [userDetail, setUserDetail] = useState({})
  const uid = userId.get('uid')
  useEffect(()=>{
    getFolloweds(uid).then((res)=>{
      console.log(res)
      setFolloweds(res.followeds)
    })
    getUserDetail(uid).then((res)=>{
      setUserDetail(res.profile)
    })
  },uid)
  return (
    <FollowedWarper>
      <div className='title'>{`${userDetail.nickname}的粉丝`}</div>
      <div className='main'>
      {
        followeds.map((item)=>{
          return (
            <Link to={`/userdetail/love?uid=${item.userId}`}>
            <div>
              <img src={getSizeImage(
                            item?.avatarUrl,
                            200,
                            200
                        )}></img>
              <span className='text-nowrap'>{item.nickname}</span>
              <button className='iconfont'>&#xeb78;关注</button>
            </div></Link>
          )
        })
      }
      </div>
    </FollowedWarper>
    
  )
})

export default Followed