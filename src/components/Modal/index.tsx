import React from 'react';

import { Text } from '../Text';

import * as S from './styled';

export interface ModalProps {
  title: string;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ title, body, footer }) => {
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <Text size={22} weight={700}>
          {title}
        </Text>
        <Text size={16} weight={400}>
          {body}
        </Text>
        {footer}
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};
