import styled from "@emotion/styled";

export const BrowersWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;

  background-color: #333;

  .browers-top {
    position: relative;
    height: 86px;
    font-size: 18px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .swiper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    flex: 1;

    .swiper-control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .pictures {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vh !important;

      img {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      /* 动画样式 */
      .pic-enter {
        transform: translateX(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }
  .preview {
    position: relative;
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .preview-info {
      position: absolute;
      max-width: 105vh;
      bottom: 10px;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${(props) => (props.showList ? "67px" : "0")};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
