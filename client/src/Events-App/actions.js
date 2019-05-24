import axios from 'axios';
import {
  GET_EVENTS,
  LOAD_EVENTS,
  ADD_EVENT,
  GET_EVENT
} from './constants';
// set api to development environment
const url = process.env.NODE_ENV === 'production' ? '/api' : `http://localhost:${process.env.PORT || 5000}/api`;
axios.defaults.baseURL = url;

export const getEvents = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_EVENTS })

    axios.get('/')
      .then(res => dispatch({
        type: GET_EVENTS,
        events: res.data
      }))
      .catch(err => console.log(err))
  }
}

export const addEvent = (data) => {
  return (dispatch) => {
    dispatch({ type: LOAD_EVENTS })
    
    axios.post('/', data).then(res => dispatch({
      type: ADD_EVENT,
      event: res.data
    }))
    .catch(err => console.log(err))
  }
}

export const getSingleEvent = (title) => {
  return (dispatch) => {
    dispatch({ type: LOAD_EVENTS })

    axios.get(`/${title}`).then(res => dispatch({
      type: GET_EVENT,
      singleEvent: res.data
    }))
    .catch(err => console.log(err))
  }
}