import "./App.css";
import Calc from "./pages/Calc";
import Converter from "./pages/Converter";
import Exchanges from "./pages/Exchanges";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calc />}></Route>
        <Route path="/converter" element={<Converter />}></Route>
        <Route path="/exchanges" element={<Exchanges />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
