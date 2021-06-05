import {
  CHANGE_TOTAL_TOPLIST
} from './constant'


import { getTotalTopList } from '@/services/toplist'


export const changeTotalToplistAction = (res) => ({
  type: CHANGE_TOTAL_TOPLIST,
  totalToplist: res.list
})

export const getTotalToplistAction = () => {
  return dispatch => {
    getTotalTopList().then((res) => {
      dispatch(changeTotalToplistAction(res))
    })
  }
}
