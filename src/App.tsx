import "./App.css";
import Calc from "./pages/Calc";
import Exchange from "./pages/Exchange";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calc />}></Route>
        <Route path="/exchange" element={<Exchange />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
