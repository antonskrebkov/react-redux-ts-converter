import { useState, useMemo } from "react";
import Loader from "../components/UI/loader/Loader";
import trash from "../assets/images/trash.svg";
import ExchangeItem from "../components/ExchangeItem/ExchangeItem";
import { exchangeAPI } from "../services/ExchangeService";
import IExchangeItem from "../interfaces/IExchangeItem";
import { Tooltip } from "@material-tailwind/react";

const Exchanges: React.FC = () => {
  const [searchField, setSearchField] = useState<string>("");

  const { data: exchangeList, isLoading: isExchangeListLoading } =
    exchangeAPI.useGetExchangeHistoryQuery("");

  const [removeExchangeItem] = exchangeAPI.useDeleteExchangeItemMutation();

  const findedItems = useMemo(() => {
    return exchangeList?.filter(
      (item) =>
        item.fromCurrency.toLowerCase().includes(searchField) ||
        item.toCurrency.toLowerCase().includes(searchField) ||
        String(item.amount).includes(searchField)
    );
  }, [searchField, exchangeList]);

  const cleanHistory = () => {
    if (window.confirm("Do you really want to clear history?")) {
      exchangeList?.map((item) => removeExchangeItem(item));
    }
  };

  return (
    <div className="App bg-gray-600">
      <div className="item-body scale-125 sm:scale-150 shadow-2xl">
        <h2 className="font-bold text-lg mb-4">Exchange history</h2>
        <div className="flex justify-between items-center mb-1.5 gap-1">
          <input
            type="text"
            name="amount"
            id="amount"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            className="w-11/12 text-sm rounded border px-1 py-0.5 bg-white text-black border-gray-300"
            placeholder="Search..."
          />
          <Tooltip
            className="bg-gray-900 rounded px-2 py-1"
            content="Clean History"
          >
            <button
              onClick={cleanHistory}
              className="p-0.5 rounded-sm hover:bg-gray-300 transition duration-200"
            >
              <img className="w-5 h-5" src={trash} alt="" />
            </button>
          </Tooltip>
        </div>
        <ul className="overflow-scroll h-48 border border-gray-300 rounded">
          {searchField ? (
            findedItems?.length ? (
              <>
                {findedItems
                  .slice()
                  .reverse()
                  .map((exchangeItem: IExchangeItem) => {
                    return (
                      <ExchangeItem
                        key={exchangeItem.id}
                        exchangeItem={exchangeItem}
                        remove={removeExchangeItem}
                      />
                    );
                  })}
              </>
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                Nothing was found :&#40;
              </div>
            )
          ) : isExchangeListLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <Loader color="fill-gray-900" />
            </div>
          ) : exchangeList && exchangeList.length ? (
            <>
              {exchangeList
                .slice()
                .reverse()
                .map((exchangeItem: IExchangeItem) => {
                  return (
                    <ExchangeItem
                      key={exchangeItem.id}
                      exchangeItem={exchangeItem}
                      remove={removeExchangeItem}
                    />
                  );
                })}
            </>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              History is empty
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Exchanges;
