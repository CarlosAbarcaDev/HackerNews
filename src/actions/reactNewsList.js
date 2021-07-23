import {
    REACT_NEWS_INIT,
    REACT_NEWS_SUCCESS,
    REACT_NEWS_ERROR
} from '../types'
import axiosClient from '../config/axios'



export function reactNewsList() {
    return async (dispatch) => {
      dispatch(newsListInit());
  
      try {
        const response = await axiosClient.get('search_by_date?query=reactjs&page=0');
        dispatch(dataReactNews(response.data.hits));
      } catch (error) {
        dispatch(dataReactError);
      }
    };
  }
  
  const newsListInit = () => ({
    type: REACT_NEWS_INIT,
    payload: true,
  });
  
  const dataReactNews = (news) => ({
    type: REACT_NEWS_SUCCESS,
    payload: news,
  });
  
  const dataReactError = () => ({
    type: REACT_NEWS_ERROR,
    payload: true,
  });
  