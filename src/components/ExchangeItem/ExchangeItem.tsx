import IExchangeItem from "../../interfaces/IExchangeItem";
import arrowRight from "../../assets/images/arrow-right.svg";
import { formatDate, formatTime } from "../../helpers";
interface ExchangeItemProps {
  exchangeItem: IExchangeItem;
}

const ExchangeItem: React.FC<ExchangeItemProps> = ({ exchangeItem }) => {
  return (
    <li className="text-gray-700 border-b border-gray-400 mx-2.5 py-1 text-xs">
      <div className="text-xxs flex justify-between items-center">
        <p>{formatDate(exchangeItem)}</p>
        <p>{formatTime(exchangeItem)}</p>
      </div>
      <div className="flex justify-center items-center">
        <span>
          {exchangeItem.amount} {exchangeItem.fromCurrency}
        </span>
        <img className="w-4 h-4" src={arrowRight} alt="" />
        <span>
          {exchangeItem.convertedAmount} {exchangeItem.toCurrency}
        </span>
      </div>
    </li>
  );
};

export default ExchangeItem;
