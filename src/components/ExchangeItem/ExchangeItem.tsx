import IExchangeItem from "../../interfaces/IExchangeItem";
import arrowRight from "../../assets/images/arrow-right.svg";
import trash from "../../assets/images/trash.svg";
import { formatDate, formatTime } from "../../helpers";
interface ExchangeItemProps {
  exchangeItem: IExchangeItem;
  remove: (item: IExchangeItem) => void;
}

const ExchangeItem: React.FC<ExchangeItemProps> = ({
  exchangeItem,
  remove,
}) => {
  return (
    <li className="relative text-gray-700 border-b border-gray-400 mx-2.5 py-1 text-xs">
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
      <div className="text-xxs font-bold flex justify-center items-center">
        <p>
          1 {exchangeItem.fromCurrency} = {exchangeItem.rate}{" "}
          {exchangeItem.toCurrency}
        </p>
      </div>
      <button
        onClick={() => remove(exchangeItem)}
        className="absolute right-0 bottom-1 rounded-sm hover:bg-gray-300 transition duration-200"
      >
        <img src={trash} alt="" />
      </button>
    </li>
  );
};

export default ExchangeItem;
