import { UseQueryResult, useQuery } from 'react-query';

import { AxiosError } from 'axios';

import {
  APIErrorResponse,
  APIResponse,
  GetPaymentDetail,
  GetPaymentDetailResponse,
  GetPaymentDetailValues,
} from '@/api';

export const useGetPaymentDetail = ({
  page,
  limit,
}: GetPaymentDetailValues): UseQueryResult<
  APIResponse<GetPaymentDetailResponse>,
  AxiosError<APIErrorResponse>
> => {
  return useQuery('useGetPaymentDetail', () => GetPaymentDetail({ page, limit }), {
    onError: (error) => {
      console.log('error', error);
    },
    staleTime: Infinity,
    retry: 0,
  });
};
