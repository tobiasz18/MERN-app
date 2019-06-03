
import { GET_EVENTS, LOAD_EVENTS, ADD_EVENT, GET_EVENT, SEARCH_EVENTS, EDIT_EVENT, REMOVE_EVENT } from './constants'

const initialState = {
  events: [],
  singleEvent: {},
  searchEvents: {},
  loading: false
}

const events = (state = initialState, action) => {
  switch(action.type) {
    case GET_EVENTS:
      return {  
        ...state,    
        events: action.events,
        result: action.result,
        loading: false,
      }
    case ADD_EVENT: 
      return {
        ...state, loading: false, events: { ...state.events, [action.event.id]: action.event}
      }  
    case GET_EVENT:
      return {
       ...state, loading: false, singleEvent: {[action.singleEvent.id]: action.singleEvent}
      }  
    case SEARCH_EVENTS:
      return {
        ...state, loading: false, searchEvents: action.searchEvents
      } 
    case EDIT_EVENT:
      return {
        ...state, loading: false, events: {...state.events, [action.updated.id]: action.updated},
        singleEvent: {[action.updated.id]: action.updated}
      }    
    case REMOVE_EVENT: 
      return {
        ...state, loading: false
      }  
    case LOAD_EVENTS: 
      return {
        ...state,
        loading: true
      }  
      
    default:
      return state  
  }

}

export default events