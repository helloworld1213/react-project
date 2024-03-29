import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  cursor: pointer;

  /* color: #ff385c; */
  color: ${(props) => props.theme.color.primaryColor};

  .logo-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    margin-left: 24px;
  }
  .content {
    font-weight: 700;
    margin-left: 4px;
    font-size: 18px;
    margin-bottom: 2px;
  }
`;
