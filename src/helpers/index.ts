import IExchangeItem from "../interfaces/IExchangeItem";
import IDate from "../interfaces/IDate";
import ITime from "../interfaces/ITime";

export const formatDate = (exchangeItem: IExchangeItem) => {
  const dateAdded: Date = new Date(exchangeItem.timestamp)
  const date: IDate = {
    day: dateAdded.getDate().toString().padStart(2, '0'),
    month: (dateAdded.getMonth() + 1).toString().padStart(2, '0'),
    year: dateAdded.getFullYear().toString()
  }
  return `${date.day}/${date.month}/${date.year}`
}

export const formatTime = (exchangeItem: IExchangeItem) => {
  const dateAdded: Date = new Date(exchangeItem.timestamp)
  const time: ITime = {
    hours: dateAdded.getHours().toString().padStart(2, '0'),
    minutes: dateAdded.getMinutes().toString().padStart(2, '0'),
    seconds: dateAdded.getSeconds().toString().padStart(2, '0')
  }
  return `${time.hours}:${time.minutes}:${time.seconds}`
}