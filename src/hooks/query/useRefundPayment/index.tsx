/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseMutationResult, useMutation } from 'react-query';

import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse, RefundPayment, RefundPaymentValue } from '@/api';

import { useGetPaymentDetail } from '../useGetPaymentDetail';

export const useRefundPayment = (
  page: number,
): UseMutationResult<APIResponse<any>, AxiosError<APIErrorResponse>, RefundPaymentValue> => {
  const paymentData = useGetPaymentDetail({ page: page, limit: 17 });
  return useMutation('useRefundPayment', RefundPayment, {
    onSuccess: (data) => {
      paymentData.refetch();
      console.log('data', data);
    },
    onError: (error) => {
      console.log('error', error);
    },
    retry: 0,
  });
};
