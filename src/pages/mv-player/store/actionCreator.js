import {
    getMvDetail,
    getMvDetailInfo,
    getMvUrl,
    getSimMv,
    getMvComments,
} from '@/service/mvPlayer'
import * as actionType from './actionType'
export const changeMvDetailAction = (res) => ({
    type: actionType.CHANGE_MV_DETAIL,
    mvDetail: res.data,
})
export const changeMvDetailInfoAction = (res) => ({
    type: actionType.CHANGE_MV_DETAIL_INFO,
    mvDetailInfo: res,
})

export const changeMvUrlAction= (res) => ({
    type: actionType.CHANGE_MV_URL,
    mvUrl: res.data.url
})

export const changeSimMvAction = (res) => ({
    type: actionType.CHANGE_SIM_MV,
    simMv: res.mvs,
})
export const changeMvCommentsAction = (res) => ({
    type: actionType.CHANGE_MV_COMMENTS,
    mvComments: res,
})

export const getMvDetailAction = (mvid) => {
    return ( dispatch) => {
        getMvDetail(mvid).then((res) => {
                dispatch(changeMvDetailAction(res))
        })
        }
}
export const getMvDetailInfoAction = (mvid) => {
    return ( dispatch) => {
        getMvDetailInfo(mvid).then((res) => {
                dispatch(changeMvDetailInfoAction(res))
        })
        }
}

export const getMvUrlAction = (id,r) => {
    return (dispatch) => {
        getMvUrl(id,r).then((res) => {
            dispatch(changeMvUrlAction(res))
        })
    }
}

export const getSimMvAction = (mvid) => {
    return (dispatch) => {
        getSimMv(mvid).then((res) => {
            dispatch(changeSimMvAction(res))
        })
    }
}
export const getMvCommentsAction = (id,limit, offset) => {
    return (dispatch) => {
        getMvComments(id,limit, offset).then((res) => {
            dispatch(changeMvCommentsAction(res))
        })
    }
}