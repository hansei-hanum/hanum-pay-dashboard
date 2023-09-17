import { API_SUFFIX, instance, setAccessToken } from './api';

export interface GetPaymentDetailValues {
  page: number;
  limit: number;
}

export interface GetPaymentDetailResponse {
  balanceAmount: number;
  payments: [
    {
      id: number;
      paidAmount: number | null;
      refundedAmount: number | null;
      status: 'paid' | 'refunded';
      paidTime: string;
      refundedTime: string;
    },
  ];
  page: number;
  limit: number;
  totalPage: number;
}

export const GetPaymentDetail = async ({ page, limit }: GetPaymentDetailValues) => {
  const token = localStorage.getItem('key');
  if (!token) return null;
  setAccessToken(token);
  const { data } = await instance.get(
    `${API_SUFFIX.BOOTH_PAYMENT_DETAIL}?page=${page}&limit=${limit}`,
  );
  return data;
};
