import { getEntireRoomListData } from "@/services/modules/entire";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

//请求数据
// export const fetchEntireDataAction = createAsyncThunk(
//   "fetchdata",
//   // 不写payload函数不执行(不用也要写)
//   async (payload, extroInfo) => {
//     //根据页码获取最新的数据
//     console.log(extroInfo);
//     //获取数据方式一
//     // const res = await getEntireRoomListData(currentPage * 20);

//     // //将最新获取到的数据保存到redux中
//     // const roomList = res.list;
//     // const totalCount = res.totalCount;
//     // dispatch(changeRoomListAction(roomList));
//     // dispatch(changeTotalCountAction(totalCount));

//     //获取数据方式二(和home里面一样)
//     //唯一的区别就是这里的函数是由数据的(要根据传入的页码(偏移量)获取到对应页码的数据)
//     getEntireRoomListData().then((res) => {
//       // console.log(res);
//       extroInfo.dispatch(changeRoomListAction(res.list));
//       extroInfo.dispatch(changeTotalCountAction(res.totalCount));
//     });
//   }
// );

//这里用的是redux-thunk(已经被redux集成了, 可以直接用)
export const fetchEntireDataAction = (page = 0) => {
  return async (dispatch) => {
    //修改当前page(将获取到的页面调用action赋值到redux中)
    dispatch(changeCurrentPageAction(page));

    //请求数据的时候显示蒙版,请求完成取消蒙版
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomListData(page * 20);
    dispatch(changeIsLoadingAction(false));

    // console.log(res);
    const roomList = res.list;
    const totalCount = res.totalCount;

    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0, //当前页码
    roomList: [], //房间列表
    totalCount: 0, //房间总个数
    isLoading: false, //是否显示蒙版
  },
  reducers: {
    changeRoomListAction(state, { payload }) {
      state.roomList = payload;
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload;
    },
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  changeRoomListAction,
  changeTotalCountAction,
  changeCurrentPageAction,
  changeIsLoadingAction,
} = entireSlice.actions;

//不要忘了导出的是reducer,之前报错Store does not have a valid reducer
export default entireSlice.reducer;
