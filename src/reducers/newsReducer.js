/* eslint-disable */ 
import {
    ANGULAR_NEWS_INIT,
    ANGULAR_NEWS_SUCCESS,
    ANGULAR_NEWS_ERROR,
    ANGULAR_NEWS_UPDATE,
    REACT_NEWS_INIT,
    REACT_NEWS_SUCCESS,
    REACT_NEWS_ERROR,
    VUE_NEWS_INIT,
    VUE_NEWS_SUCCESS,
    VUE_NEWS_ERROR,
  } from "../types";
  
  const initialState = {
    news: [],
    loading: false,
    error: false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ANGULAR_NEWS_INIT:
        return {
          ...state,
          loading: action.payload,
        };
      case ANGULAR_NEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          news: action.payload,
        };
      case ANGULAR_NEWS_UPDATE:
        return {
          ...state,
          news: [...state.news, ...action.payload],
        };
      case ANGULAR_NEWS_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      case REACT_NEWS_INIT:
        return {
          ...state,
          loading: action.payload,
        };
      case REACT_NEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          news: action.payload,
        };
      case REACT_NEWS_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      case VUE_NEWS_INIT:
        return {
          ...state,
          loading: action.payload,
        };
      case VUE_NEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          news: action.payload,
        };
      case VUE_NEWS_ERROR:
        return {
          ...state,
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  