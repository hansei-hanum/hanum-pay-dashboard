/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';

import { colors } from '@/styles';

import * as S from './styled';

export interface TextProps {
  children: React.ReactNode;
  size: number;
  color?: string;
  weight?: number;
  onClick?: () => void;
}

export const Text: React.FC<TextProps> = ({ children, size, color, weight, onClick }) => {
  return (
    <S.TextElement
      onClick={onClick}
      css={css`
        font-size: ${size}px;
        color: ${color ? color : colors.black};
        font-weight: ${weight ? weight : 500};
      `}
    >
      {children}
    </S.TextElement>
  );
};
