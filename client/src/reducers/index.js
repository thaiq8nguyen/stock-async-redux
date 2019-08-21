import {
  SET_SEARCH_QUERY,
  SEARCH_STOCK_SYMBOL_STARTED,
  SEARCH_STOCK_SYMBOL_SUCCESS,
  SEARCH_STOCK_SYMBOL_FAILURE,
  ADD_STOCK_TO_WATCH_LIST,
  REMOVE_SEARCH_RESULTS
} from "../actions";
const DEFAULT_STATE = {
  searchQuery: "",
  isSearching: false,
  error: "",
  searchResults: [],
  responseMessage: "",
  isDuplicate: false,
  watchList: [
    {
      symbol: "AAPL",
      shares: 5,
      dividendPaid: 0.77
    }
  ],
  incomeGoal: 500
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

const addStockToWatchList = (state, action) => {
  return {
    ...state,
    watchList: [
      ...state.watchList,
      {
        symbol: action.payload.symbol,
        shares: action.payload.shares,
        dividendPaid: action.payload.dividendPaid
      }
    ]
  };
};

const removeSearchResults = (state, action) => {
  return {
    ...state,
    searchResults: [],
    searchQuery: ""
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
    case ADD_STOCK_TO_WATCH_LIST:
      return addStockToWatchList(state, action);
    case REMOVE_SEARCH_RESULTS:
      return removeSearchResults(state, action);
    default:
      return state;
  }
};

export default rootReducer;
