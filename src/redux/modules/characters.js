import { CALL_API } from 'redux/middleware/api';
import { filterCharacters } from 'Utilities/filterCharacters';

//User Actions
const ADD = 'marvelherosearch/characters/ADD';
const DELETE = 'marvelherosearch/characters/DELETE';
const EDIT = 'marvelherosearch/characters/EDIT';
const SEARCH_REQUEST = 'marvelherosearch/characters/SEARCH_REQUEST';
const SEARCH_RESPONSE = 'marvelherosearch/characters/SEARCH_RESPONSE';
const SEARCH_FAILURE = 'marvelherosearch/characters/SEARCH_FAILURE';
const UPDATE_SEARCH_TERM = 'marvelherosearch/characters/UPDATE_SEARCH_TERM';

//Initial State
const initialState = {
  loading: false,
  list: [],
  filteredList: [],
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
        list: action.response.characters,
        filteredList: action.response.characters
      };
    }
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm:action.searchTerm,
        filteredList: filterCharacters(state.list, action.searchTerm)
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

export const addCharacter = (character) => {
  return {
    type: ADD,
    character
  };
};

export const deleteCharacter = (character) => {
  return {
    type: DELETE,
    character
  };
};

export const editCharacter = (character) => {
  return {
    type: EDIT,
    character
  };
};

//Async actions
export const getCharacters = () => {
  return {
    [CALL_API]: {
      type: 'POST',
      endpoint: 'characters',
      options: {},
      actions: {
        request: SEARCH_REQUEST,
        success: SEARCH_RESPONSE,
        failure: SEARCH_FAILURE
      }
    }
  };
};
