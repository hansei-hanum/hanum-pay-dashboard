import React from 'react';

import { useRecoilValue } from 'recoil';

import { ModalState } from '@/atoms';
import { useModal } from '@/hooks';

import { Text } from '../Text';
import { Button } from '../Button';

import * as S from './styled';

export const ModalElement: React.FC = () => {
  const { close } = useModal();
  return (
    <S.ModalContainer>
      <Text size={22} weight={700}>
        환불확인
      </Text>
      <Text size={16} weight={400}>
        박*영님에게 10,000원을 환불해요.
        <br />
        환불을 진행하면 부스 수익금이 감소하며 즉시 박*영님의 한움페이 잔액에 환불금이 입금돼요.
        <br />
        계속할까요?
      </Text>
      <Button.Container>
        <Button onClick={close} isSecondary>
          취소
        </Button>
        <Button onClick={close}>확인</Button>
      </Button.Container>
    </S.ModalContainer>
  );
};

export const ModalContainer: React.FC = () => {
  const modalValue = useRecoilValue(ModalState);
  if (modalValue === false) return null;
  return (
    <Modal.Overlay>
      <Modal />
    </Modal.Overlay>
  );
};

export const Modal = Object.assign(ModalElement, {
  Overlay: S.ModalOverlay,
  Container: ModalContainer,
});
