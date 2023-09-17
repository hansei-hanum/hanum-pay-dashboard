/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseMutationResult, useMutation } from 'react-query';

import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';

import { APIErrorResponse, APIResponse, RefundPayment, RefundPaymentValue } from '@/api';
import { refundAtom } from '@/atom';
import { formattedMoney } from '@/utils';

import { useGetPaymentDetail } from '../useGetPaymentDetail';

export interface useRefundPaymentProps {
  page: number;
  userName: string;
}

export const useRefundPayment = ({
  page,
  userName,
}: useRefundPaymentProps): UseMutationResult<
  APIResponse<any>,
  AxiosError<APIErrorResponse>,
  RefundPaymentValue
> => {
  const setRefund = useSetRecoilState(refundAtom);
  const paymentData = useGetPaymentDetail({ page: page, limit: 17 });

  return useMutation('useRefundPayment', RefundPayment, {
    onSuccess: ({ data }) => {
      paymentData.refetch();
      setRefund({
        status: 'SUCCESS',
        modalOpen: true,
        message: `환불이 완료되어 부스 수익금에서 ${formattedMoney(
          data.refundedAmount,
        )}원이 ${userName}님에게 반환되었어요.`,
      });
    },
    onError: (error) => {
      const message = error.response?.data.message;
      const FAILED = 'FAILED';
      switch (message) {
        case 'NOT_ALLOWED':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '허용되지 않은 사용자가 환전을 시도했어요',
          });
          break;
        case 'BOOTH_NOT_FOUND':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '부스를 찾을 수 없어요',
          });
          break;
        case 'PAYMENT_NOT_FOUND':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '결제 정보를 찾을 수 없어요',
          });
          break;
        case 'BOOTH_BALANCE_NOT_FOUND':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '부스 잔액을 찾을 수 없어요',
          });
          break;
        case 'INSUFFICIENT_SENDER_BALANCE':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '잔액이 부족해요',
          });
          break;
        case 'USER_NOT_FOUND':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '사용자를 찾을 수 없어요',
          });
          break;
        case 'NOT_A_PERSONAL_BALANCE':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '개인 잔액이 아니에요',
          });
          break;
        case 'PAYMENT_ALREADY_CANCELLED':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '이미 취소된 결제에요',
          });
          break;
        case 'PAYMENT_CANCELLATION_STATUS_NOT_UPDATED':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '결제 취소 상태가 업데이트 되지 않았어요',
          });
          break;
        case 'SENDER_ID_EQUALS_RECEIVER_ID':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '본인에게는 환전할 수 없어요',
          });
          break;
        case 'INVALID_TRANSFER_AMOUNT':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '환전할 수 없는 금액이에요',
          });
          break;
        case 'INVALID_SENDER_ID':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '잘못된 보내는 사람 ID에요',
          });
          break;
        case 'INVALID_RECEIVER_ID':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '잘못된 받는 사람 ID에요',
          });
          break;
        case 'SENDER_BALANCE_NOT_UPDATED':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '보내는 사람 잔액이 업데이트 되지 않았어요',
          });
          break;
        case 'RECEIVER_BALANCE_NOT_UPDATED':
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '받는 사람 잔액이 업데이트 되지 않았어요',
          });
          break;
        default:
          console.log(error, 'error');
          setRefund({
            status: FAILED,
            modalOpen: true,
            message: '알 수 없는 오류가 발생했어요',
          });
          break;
      }
      console.log('error', error);
    },
    retry: 0,
  });
};
