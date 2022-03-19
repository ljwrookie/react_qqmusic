import {
    getArtistDesc,
    getArtistDetail,
    getSimArtist,
} from '@/service/artist'
import * as actionType from './actionType'
export const changeArtistDescAction = (res) => ({
    type: actionType.CHANGE_ARTIST_DESC,
    artistDesc: res,
})
export const changeArtistDetailAction = (res) => ({
    type: actionType.CHANGE_ARTIST_DETAIL,
    artistDetail: res.data,
})
export const changeSimArtistAction = (res) => ({
    type: actionType.CHANGE_SIM_ARTIST,
    simArtist: res.artists,
})

export const getArtistDescAction = (id) => {
    return ( dispatch) => {
        getArtistDesc(id).then((res) => {
                dispatch(changeArtistDescAction(res))
        })
        }
}
export const getArtistDetailAction = (id) => {
    return ( dispatch) => {
        getArtistDetail(id).then((res) => {
                dispatch(changeArtistDetailAction(res))
        })
        }
}


export const getSimArtistAction = (id) => {
    return (dispatch) => {
        getSimArtist(id).then((res) => {
            dispatch(changeSimArtistAction(res))
        })
    }
}
