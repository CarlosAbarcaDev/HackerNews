import {
  ANGULAR_NEWS_INIT,
  ANGULAR_NEWS_SUCCESS,
  ANGULAR_NEWS_ERROR,
  ANGULAR_NEWS_UPDATE,
} from "../types";

import axiosClient from "../config/axios";

export function angularNewsList(page) {
  return async (dispatch) => {
    dispatch(newsListInit());

    try {
      const response = await axiosClient.get(`search_by_date?query=angular&page=${page}`);
      let filteredResponse = response.data.hits.filter( function(news){
        return news.author !== null && news.story_title !== null && news.story_url && news.created_at;
      });
      // dispatch(dataAngularNews(filteredResponse));
      dispatch(moreNews(filteredResponse));

    } catch (error) {
      dispatch(dataAngularError);
    }
  };
}

const newsListInit = () => ({
  type: ANGULAR_NEWS_INIT,
  payload: true,
});

const dataAngularNews = (news) => ({
  type: ANGULAR_NEWS_SUCCESS,
  payload: news,
});

const dataAngularError = () => ({
  type: ANGULAR_NEWS_ERROR,
  payload: true,
});

const moreNews = (news) =>({
  type: ANGULAR_NEWS_UPDATE,
  payload: news
})
