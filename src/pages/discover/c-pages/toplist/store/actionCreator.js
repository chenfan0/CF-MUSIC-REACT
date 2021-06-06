import {
  CHANGE_TOTAL_TOPLIST,
  CHANGE_TOPLIST_DETAIL
} from './constant'



import {
  getTotalTopList,
  getToplistDetail
} from '@/services/toplist'


export const changeTotalToplistAction = (res) => ({
  type: CHANGE_TOTAL_TOPLIST,
  totalToplist: res.list
})

export const changeToplistDetailAction = (res) => ({
  type: CHANGE_TOPLIST_DETAIL,
  toplistDetail: res.playlist || []
})


export const getTotalToplistAction = () => {
  return dispatch => {
    getTotalTopList().then((res) => {
      console.log(res);
      dispatch(changeTotalToplistAction(res))
    })
  }
}

export const getToplistDetailAction = (id) => {
  return dispatch => {
    if (id === '') {
      id = 19723756
    }
    getToplistDetail(id).then(res => {
      dispatch(changeToplistDetailAction(res))
    })
  }
}