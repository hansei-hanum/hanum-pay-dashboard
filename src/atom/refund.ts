import { atom } from 'recoil';

export interface refundAtomProps {
  modalOpen: boolean;
  status: 'SUCCESS' | 'FAILED';
  message: string;
}

export const refundAtom = atom<refundAtomProps>({
  key: 'refundAtom',
  default: {
    modalOpen: false,
    status: 'SUCCESS',
    message: '',
  },
});
