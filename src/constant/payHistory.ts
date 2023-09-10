export const PAY_HISTORY_HEADER_LIST: string[] = ['이름', '금액', '일시', '환불하기'];

export interface PayHistoryItem {
  name: string;
  amount: number;
  time: string;
  refund: boolean;
}

export const PAY_HISTORY_LIST: PayHistoryItem[] = [
  {
    name: '김철수',
    amount: 10000,
    time: '2023-08-01T14:40:42',
    refund: false,
  },
  {
    name: '김철수',
    amount: 10000,
    time: '2023-09-10T15:29:07',
    refund: false,
  },
  {
    name: '김철수',
    amount: 10000,
    time: '2023-08-01T13:40:42',
    refund: false,
  },
];
