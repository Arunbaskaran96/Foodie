import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Search from "./pages/search/Search";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import ProtectedLayout from "./components/protectedLayout/ProtectedLayout";
import Restaurant from "./pages/restaurant/Restaurant";
import Category from "./pages/category/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/layout" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<Profile />} />
            <Route path="restaurant/:id" element={<Restaurant />} />
            <Route path="category" element={<Category />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
