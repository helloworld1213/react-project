import styled from "@emotion/styled";

export const RoomsWrapper = styled.div`
  padding: 30px 20px;

  .title {
    font-weight: 700;
    font-size: 22px;
    color: #222;
    margin: 0 0 10px 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
