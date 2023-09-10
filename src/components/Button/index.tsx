/** @jsxImportSource @emotion/react */

import React from 'react';

import { css } from '@emotion/react';

import { colors } from '@/styles';

import * as S from './styled';

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isSecondary?: boolean;
}

export const ButtonElement: React.FC<ButtonProps> = ({ onClick, children, isSecondary }) => {
  return (
    <S.ButtonElement
      onClick={onClick}
      css={
        isSecondary &&
        css`
          background: ${colors.secondary};
          color: ${colors.black};
        `
      }
    >
      {children}
    </S.ButtonElement>
  );
};

export interface ButtonContainerProps {
  children: React.ReactNode;
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({ children }) => {
  return <S.ButtonContainer>{children}</S.ButtonContainer>;
};

export const Button = Object.assign(ButtonElement, {
  Container: ButtonContainer,
});
