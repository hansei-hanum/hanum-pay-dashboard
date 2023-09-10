import React from 'react';

import * as S from './styled';

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <S.ButtonElement onClick={onClick}>{children}</S.ButtonElement>;
};
