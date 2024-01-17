import styled from "styled-components";
//方式一
// import coverImg from "@/assets/img/cover_01.jpeg";
/* background: url(${coverImg}) center/cover; */

export const BannerWrapper = styled.div`
  height: 529px; //不显示图片是因为没有设置高度
  //导入图片路径的方式
  //方式二(推荐)
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
`;
