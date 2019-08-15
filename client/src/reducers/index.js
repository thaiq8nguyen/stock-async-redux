import {
  SET_SEARCH_QUERY,
  SEARCH_STOCK_SYMBOL_STARTED,
  SEARCH_STOCK_SYMBOL_SUCCESS,
  SEARCH_STOCK_SYMBOL_FAILURE
} from "../actions";
const DEFAULT_STATE = {
  searchQuery: "",
  isSearching: false,
  error: "",
  searchResults: []
};

const setSearchQuery = (state, action) => {
  return {
    ...state,
    searchQuery: action.payload
  };
};

const setSearchSymbolStarted = (state, action) => {
  return {
    ...state,
    isSearching: true,
    error: ""
  };
};

const setSearchSymbolSuccess = (state, action) => {
  return {
    ...state,
    isSearching: false,
    searchResults: action.payload,
    error: ""
  };
};

const setSearchSymbolFailure = (state, action) => {
  return {
    ...state,
    isSearching: false,
    error: action.payload
  };
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return setSearchQuery(state, action);
    case SEARCH_STOCK_SYMBOL_STARTED:
      return setSearchSymbolStarted(state, action);
    case SEARCH_STOCK_SYMBOL_SUCCESS:
      return setSearchSymbolSuccess(state, action);
    case SEARCH_STOCK_SYMBOL_FAILURE:
      return setSearchSymbolFailure(state, action);
    default:
      return state;
  }
};

export default rootReducer;
