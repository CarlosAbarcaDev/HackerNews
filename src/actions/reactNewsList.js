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
        let filteredResponse = response.data.hits.filter( function(news){
            return news.story_title !== null && news.story_url && news.created_at;
          });
        dispatch(dataReactNews(filteredResponse));
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
  