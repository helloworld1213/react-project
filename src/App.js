import React, { memo } from "react";
import "@/assets/css/index.less";
import routes from "@/router";
import { useRoutes } from "react-router-dom";
// import Header from "@/components/app-header";
import Footer from "@/components/app-footer";
import Header from "./components/app-header";

const App = memo(() => {
  return (
    <div className="app">
      <Header />
      <div className="page">
        {/* 放置路由映射关系 */}
        {useRoutes(routes)}
      </div>
      <Footer />
    </div>
  );
});

export default App;
