export default interface IExchangeItem {
  id: number,
  timestamp: number,
  rate: number,
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  convertedAmount: number,
}