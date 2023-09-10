export const PAY_HISTORY_HEADER_LIST: string[] = ['이름', '금액', '일시', '환불하기'];

export interface PayHistoryItem {
  name: string;
  amount: number;
  date: string;
  refund: boolean;
}

export const PAY_HISTORY_LIST: PayHistoryItem[] = [
  {
    name: '김철수',
    amount: 10000,
    date: '2021-08-01T21:40:42',
    refund: false,
  },
  {
    name: '김철수',
    amount: 10000,
    date: '2023-09-10T15:29:07',
    refund: false,
  },
  {
    name: '김철수',
    amount: 10000,
    date: '2021-08-01T21:40:42',
    refund: false,
  },
];
