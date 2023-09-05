import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const Scrollbar = styled(SimpleBar)`
  .simplebar-content-wrapper {
    scroll-snap-type: x mandatory;
  }

  .simplebar-track.simplebar-horizontal {
    position: fixed;
    bottom: 20px;
    left: auto;
    right: auto;

    width: 335px;
    height: 12px;
    border-radius: 12px;

    background: #f2f2f2;

    transform: scale(1);

    @media screen and (min-width: 768px) {
      width: 704px;
      left: auto;
      right: auto;
      height: 14px;
    }
  }

  .simplebar-scrollbar.simplebar-horizontal {
    position: fixed;
    bottom: 20px;

    padding: 0 20px;

    width: auto;
    height: 12px;
    border-radius: 12px;

    background: #e7e5e5;

    transform: scale(1);

    @media screen and (min-width: 768px) {
      height: 14px;
    }
  }

  .simplebar-scrollbar::before {
    top: 0;
    left: 0;
    right: 0;

    width: auto;
    height: 12px;

    background: #e7e5e5;
    opacity: 1;

    @media screen and (min-width: 768px) {
      height: 14px;
    }
  }
`;
