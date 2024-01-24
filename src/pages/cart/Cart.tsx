import classes from "./cart.module.css";
import { MdVerified } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaRupeeSign } from "react-icons/fa";

export default function Cart() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.addressContainer}>
          <div className={classes.top}>
            <>
              <p className={classes.address}>
                Delivery address
                <span style={{ marginLeft: "15px" }}>
                  <MdVerified color="green" />
                </span>
              </p>
            </>
            <p className={classes.change}>CHANGE</p>
          </div>
          <div className={classes.bottom}>
            <h4>Home</h4>
            <p>
              65, X96M+3QH, Anna Nagar, Kumbakonam, Tamil Nadu 612001, India
            </p>
          </div>
        </div>
        <div className={classes.paymentContainer}>
          <h4>Choose payment method</h4>
          <button className={classes.paymentBtn}>Proceed to pay</button>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.righttop}>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/rkhbvswuyvtxnfzdskqe"
            alt="foodImg"
            className={classes.image}
          />
          <div className={classes.rightAddress}>
            <p>Aathurar Briyani</p>
            <p>Kumbakonam</p>
          </div>
        </div>
        <hr />
        <div className={classes.foodContainer}>
          <div className={classes.list}>
            <div>
              <GoDotFill size="10px" color="green" />
              <span className={classes.foodName}>Chicken Shawarma Roll</span>
            </div>
            <div className={classes.quantityContainer}>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <div className={classes.ruppees}>
              <FaRupeeSign /> <span>65</span>
            </div>
          </div>
        </div>
        <hr />
        <div className={classes.bottomContainer}>
          <p>TO PAY</p>
          <p>
            <FaRupeeSign /> 183
          </p>
        </div>
      </div>
    </div>
  );
}
