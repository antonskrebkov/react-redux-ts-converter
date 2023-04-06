export default interface ExchangeItem {
  id: number,
  timestamp: number,
  rate: number,
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  convertedAmount: number,
}