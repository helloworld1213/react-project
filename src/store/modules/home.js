import { getHomeGoodsPriceData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  async () => {
    const res = await getHomeGoodsPriceData();
    // console.log(res);
    return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    //修改state中的数据,则必须在这里创建一个action
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      // console.log(action.payload);
      // state.goodPriceInfo = action.payload;
      state.goodPriceInfo = payload;
    });
  },
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
