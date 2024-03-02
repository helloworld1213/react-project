import styled from "@emotion/styled";

export const TabsWrapper = styled.div`
  /* display: flex; */
  position: relative;

  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    margin-bottom: 5px;
    border: 0.5px solid #d8d8d8;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      /* ${(props) => props.theme.color} */
      background-color: rgb(0, 130, 138);
    }
  }
`;
