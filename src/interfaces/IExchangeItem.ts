export default interface ExchangeItem {
  id: number;
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  convertedAmount: number;
}