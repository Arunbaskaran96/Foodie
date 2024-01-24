import classes from "./food.module.css";
import { FaRupeeSign } from "react-icons/fa";

export default function Food() {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h5>Dubai Resturant</h5>
      </div>
      <hr />
      <div className={classes.foodContainer}>
        <div className={classes.food}>
          <div className={classes.left}>
            <h6>Grill Chicken</h6>
            <p>
              <FaRupeeSign /> 300
            </p>
          </div>
          <button className={classes.addBtn}>Add</button>
          <div className={classes.right}>
            <img
              className={classes.image}
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/0387817e239462fcfb98a1f568fa1a76"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
