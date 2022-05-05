import React, { memo, useState, useEffect } from 'react'
import {  useSearchParams } from 'react-router-dom'
import {getPlaylistAllSongs} from "@/service/playlist"
import { getUserPlayList} from '@/service/user'
import SongListItem from '@/components/song-item';
import { LoveWrapper } from './style';
const Love = memo(() => {
  const [userId, setUserId] = useSearchParams()
  const [showSong, setShowSong] = useState(true)
  const [musicList, setMusicList] = useState([])
  // const [videoList, setVideoList] = useState([])
  // const [playlist, setPlaylist] = useState()
  const uid = userId.get('uid')
  const love = async ()=>{
    let res = await getUserPlayList(uid)
    // setPlaylist(res.playlist[0].id)
    
    let res1 = await getPlaylistAllSongs(res.playlist[0].id)
    console.log(res1.songs)
    setMusicList(res1.songs)
    // let res2 = await getLikeVideo()
    // console.log(res2)
  }
  // const changeShowSong = ()=>{
  //   setShowSong(true)
  // }
  // const changeShowVideo = ()=>{
  //   setShowSong(false)
  // }
  useEffect(()=>{
    love()
  },[])
  return (
    <LoveWrapper>
    {/* // <div onClick={changeShowSong}>歌曲</div>
   
    // <div onClick={changeShowVideo}>视频</div> */}

    {musicList.length !==0 ?(
     musicList 
     &&
      musicList.map((item) => {
          const props = {
              id: item.id,
              name: item.name,
              dt: item.dt,
              album: item.al.name,
              artist: item.ar[0].name,
              alias: item.alia,
          };
          return (
              <SongListItem
                  className="song_list"
                  key={item.id}
                  {...props}
                  lazyload="true"
              />
          );
      })): 
      <div className='un-open'>
        <span className='iconfont'>&#xe664;</span>
        <span> 主人信息未公开</span>
    </div>
  }
  
    </LoveWrapper>
    
  )
})

export default Love