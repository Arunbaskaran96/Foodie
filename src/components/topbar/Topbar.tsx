import classes from "./topbar.module.css";
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";

import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchingCart } from "../../redux/features/cart/cartSlice";
import { useAppSelector } from "../../redux/app/hook";
import classNames from "classnames";

export default function Topbar() {
  const { cartItem } = useAppSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingCart());
  }, []);
  return (
    <div className={classes.container}>
      <div>
        <Link className={classes.name} to="/layout/home">
          Foodie
        </Link>
      </div>
      <div className={classes.right}>
        <Link className={classes.nav} to="/layout/search">
          <CiSearch /> <span>Search</span>
        </Link>
        <Link className={classes.nav} to="/layout/profile">
          <IoPersonOutline /> <span>Arun</span>
        </Link>
        <Link
          className={classNames(classes.nav, classes.cartIconContainer)}
          to="/layout/cart"
        >
          <CiShoppingCart />
          {cartItem && (
            <div className={classes.cartCount}>{cartItem.length}</div>
          )}
          <div>cart</div>
        </Link>
      </div>
      <div className={classes.menuIconContainer}>
        <CiMenuBurger />
      </div>
    </div>
  );
}
