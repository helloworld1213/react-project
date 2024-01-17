import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;

  .wrapper {
    width: 1080px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 48px 24px;

    .service {
      display: flex;
      justify-content: space-around;
      font-weight: 700;

      .name {
        margin-bottom: 16px;
      }

      .list {
        color: #767676;
        cursor: pointer;
        margin-bottom: 20px;

        .subItem {
          margin-bottom: 8px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .statement {
      margin-top: 30px;
      text-align: center;
      border-top: 1px solid #ebebeb;
      padding: 20px;
      color: #767676;
    }
  }
`;
