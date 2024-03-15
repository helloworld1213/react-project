import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.text.primaryColor};

  .icon {
    padding: 12px 15px;
    cursor: pointer;
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 1px solid #ccc;
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow}

    /* 小点 */
    .dot {
      position: absolute;
      top: 4px;
      right: 10px;
      z-index: 9;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #f00;
    }

    /* 面板 */
    .panel {
      position: absolute;
      right: 0;
      top: 60px;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      color: #666;
      /* div:nth-child(1) .item:nth-child(1) {
        font-weight: 700;
      } */

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            text-decoration: underline;
            font-weight: 700;
          }
        }
      }

      .top {
        border: 1px solid #ddd;
      }
    }
  }
`;
