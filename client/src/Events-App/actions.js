import axios from 'axios';
import { eventsSchema, searchSchema } from './helpers/normalizrSchema';
import { normalize } from 'normalizr'

import {
  GET_EVENTS,
  LOAD_EVENTS,
  ADD_EVENT,
  GET_EVENT,
  SEARCH_EVENTS,
  EDIT_EVENT
} from './constants';
// set api to development environment
const url = process.env.NODE_ENV === 'production' ? '/api' : `http://localhost:${process.env.PORT || 5000}/api`;
axios.defaults.baseURL = url;

export const getEvents = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_EVENTS })

    axios.get('/')
      .then(res => {
        const normalizedData = normalize(res.data, eventsSchema);
        const { events } = normalizedData.entities;
        dispatch({
          type: GET_EVENTS,
          events: events,
          result: normalizedData.result
        })
      })
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


export const getEventByTitle = (title) => {
  return (dispatch) => {
    dispatch({ type: LOAD_EVENTS })

    axios.get(`/search/title/${title}`).then(res => dispatch({
      type: GET_EVENT,
      singleEvent: res.data
    }))
    .catch(err => console.log(err))
  }
}

export const getEventByLocation = (location) => {
  return (dispatch) => {
    dispatch({ type: LOAD_EVENTS })

    axios.get(`/search/location/${location}`).then(res => {
      const normalizedData = normalize(res.data, searchSchema);
        const { search } = normalizedData.entities;
        console.log(normalizedData, 'asd', res.data)
      dispatch({
        type: SEARCH_EVENTS,
        searchEvents: search
      })
    })
    .catch(err => console.log(err))
  }
}

export const editEvet = (data) => {
  return (dispatch) => {
    dispatch({ type: LOAD_EVENTS })
    console.log(data)
    axios.put(`/${data.id}`, data).then(res => dispatch({
      type: EDIT_EVENT,
      updated: res.data
    }))
  }
}