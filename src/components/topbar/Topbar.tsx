import classes from "./topbar.module.css";
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";

import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";

export default function Topbar() {
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
        <Link className={classes.nav} to="/layout/cart">
          <CiShoppingCart /> <span>cart</span>
        </Link>
      </div>
      <div className={classes.menuIconContainer}>
        <CiMenuBurger />
      </div>
    </div>
  );
}
