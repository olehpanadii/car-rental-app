import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "components/redux/store";
import { GlobalStyle } from "GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/car-rental-app">
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
