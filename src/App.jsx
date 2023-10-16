import Navbar from "./comp/Navbar/Navbar";
import NotFound from "./comp/NotFound/NotFound";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Details from "./comp/Details/Details";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
