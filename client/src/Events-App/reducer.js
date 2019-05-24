
import { GET_EVENTS, LOAD_EVENTS, ADD_EVENT, GET_EVENT } from './constants'

const initialState = {
  events: [],
  singleEvent: {},
  loading: false
}

const events = (state = initialState, action) => {
  switch(action.type) {
    case GET_EVENTS:
      return {  
        ...state,    
        events: action.events,
        loading: false,
      }
    case ADD_EVENT: 
      return {
        ...state, loading: false, events: [action.event, ...state.events] 
      }  
    case GET_EVENT:
      return {
       ...state, loading: false, singleEvent: action.singleEvent
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