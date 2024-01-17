import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      font-weight: 600;
      color: ${(props) => props.theme.text.secondaryColor};
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primaryColor};
      color: #fff;
    }
  }
`;
