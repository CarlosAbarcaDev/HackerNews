import {
    VUE_NEWS_INIT,
    VUE_NEWS_SUCCESS,
    VUE_NEWS_ERROR
} from '../types'
import axiosClient from '../config/axios'



export function vueNewsList() {
    return async (dispatch) => {
      dispatch(newsListInit());
  
      try {
        const response = await axiosClient.get('search_by_date?query=vuejs&page=0');
        dispatch(dataVueNews(response.data.hits));
      } catch (error) {
        dispatch(dataVueError);
      }
    };
  }
  
  const newsListInit = () => ({
    type: VUE_NEWS_INIT,
    payload: true,
  });
  
  const dataVueNews = (news) => ({
    type: VUE_NEWS_SUCCESS,
    payload: news,
  });
  
  const dataVueError = () => ({
    type: VUE_NEWS_ERROR,
    payload: true,
  });
  