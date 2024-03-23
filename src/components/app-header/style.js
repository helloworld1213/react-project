import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border: 1px solid #eee;

  /* &表示父级 */
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .content {
    position: relative;
    z-index: 99;
    background-color: #fff;

    .top {
      display: flex;
      height: 80px;
      align-items: center;
    }

    /* .search-area {
      height: 100px;
    } */
  }

  .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const SearchAreaWrapper = styled.div`
  transition: height 200ms ease;
  height: ${(props) => (props.isSearch ? "100px" : "0")};
`;
