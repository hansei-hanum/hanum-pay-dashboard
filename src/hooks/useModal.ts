import { useRecoilState } from 'recoil';

import { ModalState } from '@/atoms';

export const useModal = () => {
  const [modalActive, setModalActive] = useRecoilState(ModalState);

  const closeModal = () => () => {
    setModalActive(false);
  };

  const openModal = () => () => {
    setModalActive(true);
  };

  return {
    modalActive,
    close: closeModal(),
    open: openModal(),
  };
};
