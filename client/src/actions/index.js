import axios from "axios";

export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SEARCH_STOCK_SYMBOL_STARTED = "SEARCH_STOCK_SYMBOL_STARTED";
export const SEARCH_STOCK_SYMBOL_SUCCESS = "SEARCH_STOCK_SYMBOL_SUCCESS";
export const SEARCH_STOCK_SYMBOL_FAILURE = "SEARCH_STOCK_SYMBOL_FAILURE";
export const ADD_STOCK_TO_WATCH_LIST = "ADD_STOCK_TO_WATCH_LIST";
export const REMOVE_SEARCH_RESULTS = "REMOVE_SEARCH_RESULTS";

const client = axios.create({
  baseURL: "https://cloud.iexapis.com/stable"
});

const token = process.env.REACT_APP_IEXCLOUD_PUBLIC_KEY;

export const setSearchQuery = query => {
  return {
    type: SET_SEARCH_QUERY,
    payload: query
  };
};

export const searchStockSymbol = symbol => dispatch => {
  dispatch({ type: SEARCH_STOCK_SYMBOL_STARTED });
  client
    .get(`/stock/${symbol}/dividends?token=${token}`)
    .then(response =>
      dispatch({ type: SEARCH_STOCK_SYMBOL_SUCCESS, payload: response.data })
    )
    .catch(error =>
      dispatch({ type: SEARCH_STOCK_SYMBOL_FAILURE, payload: error })
    );
};

export const addStockToWatchList = stock => {
  return {
    type: ADD_STOCK_TO_WATCH_LIST,
    payload: {
      symbol: stock.symbol,
      shares: stock.shares,
      dividendPaid: stock.dividendPaid,
      paidFrequency: stock.paidFrequency
    }
  };
};

export const removeSearchResults = () => {
  return {
    type: REMOVE_SEARCH_RESULTS
  };
};
