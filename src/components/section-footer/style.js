import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  display: flex;

  .info {
    margin-top: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.color};

    .text {
      margin-right: 3px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
