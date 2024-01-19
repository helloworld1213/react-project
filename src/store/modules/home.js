import {
  getDiscountData,
  getHomeGoodsPriceData,
  getHomeHighScoreData,
} from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchHomeDataAction = createAsyncThunk(
//   "fetchdata",
//   async (payload, extraInfo) => {
//     // console.log(extraInfo);//extraInfo里面包含了很多东西,比如dispatch
//     const res = await getHomeGoodsPriceData();
//     // console.log(res);
//     return res;
//   }
// );

//针对多个请求action的改进
//数据请求不需要经过extraReducers处理
export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
    // console.log(extraInfo);//extraInfo里面包含了很多东西,比如dispatch
    //请求高性价比数据
    getHomeGoodsPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    //请求高评分数据
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    //请求折扣数据
    getDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
  },
  reducers: {
    //修改state中的数据,则必须在这里创建一个action
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      // console.log(payload);
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
  },
  extraReducers: (build) => {
    // build.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
    //   // console.log(action.payload);
    //   // state.goodPriceInfo = action.payload;
    //   state.goodPriceInfo = payload;
    // });
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
