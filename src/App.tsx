import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Search from "./pages/search/Search";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import Food from "./pages/food/Food";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/layout" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="food" element={<Food />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
