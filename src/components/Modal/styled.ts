import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles';

export const modalOpenKeyframe = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const modalCloseKeyframe = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.8);
    }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9901;
`;

export const ModalContainer = styled.div`
  z-index: 9903;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 12px;
  animation: 200ms cubic-bezier(0.33, 1, 0.68, 1) ${modalOpenKeyframe};
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 14px;
`;
