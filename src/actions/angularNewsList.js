import {
  ANGULAR_NEWS_INIT,
  ANGULAR_NEWS_SUCCESS,
  ANGULAR_NEWS_ERROR,
} from "../types";

import axiosClient from "../config/axios";

export function angularNewsList() {
  return async (dispatch) => {
    dispatch(newsListInit());

    try {
      const response = await axiosClient.get('search_by_date?query=angular&page=0');
      dispatch(dataAngularNews(response.data.hits));
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
