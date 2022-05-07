import React, { memo, useEffect, useState } from 'react'
import { getFollows, getUserDetail } from '@/service/user'
import { useSearchParams, Link } from 'react-router-dom'
import { getSizeImage } from '@/utils/format-utils';
import {FollowWarper} from './style'
const Follow = memo(() => {
  const [userId, setUserId] = useSearchParams()
  const [follows, setFollows] = useState([])
  const [userDetail, setUserDetail] = useState({})
  const uid = userId.get('uid')
  useEffect(()=>{
    getFollows(uid).then((res)=>{
      console.log(res)
      setFollows(res.follow)
    })
    getUserDetail(uid).then((res)=>{
      setUserDetail(res.profile)
    })
  },uid)
  return (
    <FollowWarper>
      <div className='title'>{`${userDetail.nickname}的关注`}</div>
      <div className='main'>
      {
        follows.map((item)=>{
          return (
            <Link to={`/userdetail?uid=${item.userId}`}>
            <div>
              <img src={getSizeImage(
                            item?.avatarUrl,
                            200,
                            200
                        )}></img>
              <span className='text-nowrap'>{item.nickname}</span>
              <button>已关注</button>
            </div>
            </Link>
          )
        })
      }
      </div>
    </FollowWarper>
    
  )
})

export default Follow