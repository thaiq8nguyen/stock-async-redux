import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Search from "./components/Search/Search";
import Dashboard from "./components/Dashboard/DashBoard";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Search />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
