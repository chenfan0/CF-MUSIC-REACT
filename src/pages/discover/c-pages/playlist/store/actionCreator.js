import {
  CHANGE_TOTAL_CATEGORY
} from './constants'

import { getPlaylistTotalCategory } from '@/services/playlist'

export const changePlaylistCategoriesAction = (res) => ({
  type: CHANGE_TOTAL_CATEGORY,
  categories: res
})

export const getPlaylistTotalCategoryAction = () => {
  return dispatch => {
    getPlaylistTotalCategory().then(res => {
      const categoryInfo = []
      //  处理获取到的数据
      for (let i in res.categories) {
        categoryInfo.push({ name: res.categories[i], subs: [] })
      }

      for (let i of res.sub) {
        switch (i.category) {
          case 0:
            categoryInfo[0].subs.push(i)
            break
          case 1:
            categoryInfo[1].subs.push(i)
            break
          case 2:
            categoryInfo[2].subs.push(i)
            break
          case 3:
            categoryInfo[3].subs.push(i)
            break
          case 4:
            categoryInfo[4].subs.push(i)
            break
          default:
            break
        }
      }
      dispatch(changePlaylistCategoriesAction(categoryInfo))
    })
  }
}
