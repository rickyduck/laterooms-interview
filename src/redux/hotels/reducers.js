import {
  FETCH_HOTELS_STARTED,
  FETCH_HOTELS_SUCCEEDED,
  FETCH_HOTELS_FAILED
} from './actions';

const defaultState = {
  list: [],
  fetching: false,
  error: false
};

const hotelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_HOTELS_STARTED:
      return {
        ...state,
        fetching: true,
        error: false
      };
    case FETCH_HOTELS_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        list: action.data.response,
        error: false
      };
    case FETCH_HOTELS_FAILED:
      return {
        ...state,
        fetching: false,
        list: [],
        error: action.error
      };
    default:
      return state;
  }
};

export default hotelsReducer;
