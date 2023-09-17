export const formattedMoney = (amount: number) => {
  if (amount < 999) return amount.toString();
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
