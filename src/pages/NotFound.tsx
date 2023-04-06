import notFound from "../assets/images/not-found.svg";
import arrowLeft from "../assets/images/arrow-left.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="App bg-gray-600">
      <div className="item-body flex flex-col justify-between scale-125 sm:scale-150 shadow-2xl">
        <h2 className="font-bold text-lg">Page not found</h2>
        <img className="w-9/12 h-9/12 mx-auto" src={notFound} alt="" />
        <Link
          className="flex justify-center items-center rounded bg-sky-700 hover:bg-sky-800 transition duration-200 text-white text-sm py-1"
          to="/"
        >
          <img className="w-3 h-3 mr-2" src={arrowLeft} alt="" />
          <span>Return to Main Page</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
