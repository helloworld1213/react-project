import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./modules/home";
// import entireSlice from './modules/entire/index'
import entireSlice from "./modules/entire";
import detailSlice from "./modules/detail";
import mainSlice from "./modules/main";

const store = configureStore({
  reducer: {
    main: mainSlice,
    home: homeSlice,
    entire: entireSlice,
    detail: detailSlice,
  },
});

export default store;
