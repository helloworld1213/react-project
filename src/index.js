import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Suspense } from "react";
import { Provider } from "react-redux";

import App from "@/App";
import "normalize.css";
import "./assets/css/index.less";
import "antd/dist/antd.less";

import store from "@/store";
import { ThemeProvider } from "styled-components";
import theme from "@/assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <Suspense fallback="loading">
  //   <Provider store={store}>
  //     <ThemeProvider theme={theme}>
  //       <HashRouter>
  //         <App />
  //       </HashRouter>
  //     </ThemeProvider>
  //   </Provider>
  // </Suspense>
  // </React.StrictMode>

  <Provider store={store}>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
);
