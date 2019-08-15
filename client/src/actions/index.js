import axios from "axios";

export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SEARCH_STOCK_SYMBOL_STARTED = "SEARCH_STOCK_SYMBOL_STARTED";
export const SEARCH_STOCK_SYMBOL_SUCCESS = "SEARCH_STOCK_SYMBOL_SUCCESS";
export const SEARCH_STOCK_SYMBOL_FAILURE = "SEARCH_STOCK_SYMBOL_FAILURE";

const client = axios.create({
  baseURL: "https://sandbox.iexapis.com/stable"
});

const token = process.env.REACT_APP_IEXCLOUD_SANDBOX_KEY;

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
