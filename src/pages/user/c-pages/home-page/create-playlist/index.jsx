import React, { memo, useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { getUserPlayList, deletePlayList } from '@/service/user';
import { CreatePlaylistWrapper } from './style'
import ThemeCover from '@/components/theme-cover';
const CreatePlaylist = memo(() => {
    const [userId, setUserId] = useSearchParams()
    
    const uid = userId.get('uid')
    const length = userId.get('l')
    const [playlist, setPlaylist] = useState([])
    // const [refresh, setRefresh] = useState(false)
    const deleteFunc = (id) => {
        return (e) => {
            e.preventDefault();
            if (window.confirm('确定删除？')) {
                deletePlayList(id).then((res) => {
                    console.log(res);
                    setPlaylist(playlist.filter((item) => item.id !== id));
                    setUserId(`uid=${uid}&l=${length-1}`)
                });
            }
            
        }
    }
    useEffect(() => {
        getUserPlayList(uid).then((res) => {
            setPlaylist(res.playlist)
            console.log(res)
        });
    }, [])
    return (
        <CreatePlaylistWrapper>{
            playlist.slice(0, length).map((item) => {
                
                    const cover_props = {
                        img_url: item.coverImgUrl,
                        name: item.name,
                        // playCount: it.playCount,
                        width: 160,
                        height: 160,
                        deleteIt: true,
                        deleteThis: deleteFunc(item.id),
                    };
                //                 key={item.id}
                // name={item.name}
                // singer={item.artist.name}
                // img_url={item.picUrl}
                // width={200}
                // height={200}
                return (
                    <Link
                        className="item"
                        key={item.id}
                        to={`/playlist/detail?id=${item.id}`}
                    >
                        <ThemeCover className="cover" {...cover_props} />
                    </Link>
                );
                
        })
        }
        </CreatePlaylistWrapper>
    )
})

export default CreatePlaylist