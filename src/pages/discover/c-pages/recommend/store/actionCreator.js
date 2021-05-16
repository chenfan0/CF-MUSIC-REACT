import { getTopBanners } from '@/services/recommend'
import {
  CHANGE_BANNERS
} from './constants'

export const changeTopBanners = (res) => ({
  type: CHANGE_BANNERS,
  topBanners: res.banners
})

export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBanners(res))
    })
  }
}
