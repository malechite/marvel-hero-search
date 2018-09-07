import { CALL_API } from 'redux/middleware/api';

//User Actions
const ADD = 'marvelherosearch/heroes/ADD';
const DELETE = 'marvelherosearch//heroes/DELETE';
const EDIT = 'marvelherosearch/heroes/EDIT';
const SEARCH_REQUEST = 'marvelherosearch/heroes/SEARCH_REQUEST';
const SEARCH_RESPONSE = 'marvelherosearch/heroes/SEARCH_RESPONSE';
const SEARCH_FAILURE = 'marvelherosearch/heroes/SEARCH_FAILURE';
const UPDATE_SEARCH_TERM = 'marvelherosearch/heroes/UPDATE_SEARCH_TERM';

//Initial State
const initialState = {
  loading: false,
  list: [],
  searchTerm: ''
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        loading:true
      };
    }
    case SEARCH_RESPONSE: {
      return {
        ...state,
        loading:false,
        list: action.response.heroes.results
      };
    }
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm:action.searchTerm
      };
    default:
      return state;
  }
};

export default reducer;

//Action Creators
export function updateSearchTerm(string) {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm: string
  };
}

export const addHero = (user) => {
  return {
    type: ADD,
    user
  };
};

export const deleteHero = (user) => {
  return {
    type: DELETE,
    user
  };
};

export const editHero = (user) => {
  return {
    type: EDIT,
    user
  };
};

//Async actions
export const getHeroes = (searchTerm) => {
  return {
    [CALL_API]: {
      type: 'POST',
      endpoint: 'heroes',
      options: {
        searchTerm
      },
      actions: {
        request: SEARCH_REQUEST,
        success: SEARCH_RESPONSE,
        failure: SEARCH_FAILURE
      }
    }
  };
};
