import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const Scrollbar = styled(SimpleBar)`
  width: 100%;
  height: fit-content;
  max-height: 50vh;

  .simplebar-track {
    right: -12px;

    width: 6px;
    border-radius: 12px;
    padding: 0;

    background: #f2f2f2;

    @media screen and (min-width: 768px) {
      right: -14px;

      width: 8px;
    }
  }

  .simplebar-scrollbar {
    width: 6px;
    border-radius: 12px;

    background: #e7e5e5;

    @media screen and (min-width: 768px) {
      width: 8px;
    }
  }

  .simplebar-scrollbar::before {
    display: none;
  }
`;
