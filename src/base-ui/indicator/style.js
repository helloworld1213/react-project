import styled from "@emotion/styled";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    display: flex;
    position: relative;
    transition: transform 250ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`;
