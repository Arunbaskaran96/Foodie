import classes from "./cart.module.css";
import { MdCancel, MdVerified } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaRupeeSign } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { useEffect } from "react";
import {
  fetchingCart,
  orderCart,
  removeCart,
  subTotal,
} from "../../redux/features/cart/cartSlice";
import useLocalStorage from "../../hooks/useLocalStorage";
import { addToOrder } from "../../redux/features/user/userSlice";

export default function Cart() {
  const { cartItem, total } = useAppSelector((state) => state.cartSlice);
  const { name, address } = useAppSelector((state) => state.cartSlice);
  const { user } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const { getItem } = useLocalStorage("token");
  const token = getItem();

  useEffect(() => {
    dispatch(fetchingCart());
  }, []);

  const cancelHandler = async (item: any) => {
    if (cartItem.length === 1) {
      dispatch(orderCart());
      await fetch("/api/deletecart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
    } else {
      dispatch(removeCart(item));
      dispatch(subTotal(item.price));
      try {
        await fetch(`/api/removeCart/${item._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      dispatch(orderCart());
      await fetch("/api/deletecart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      await fetch("/api/addtoorders", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify([...cartItem]),
      });
      dispatch(addToOrder(cartItem));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      {cartItem && cartItem.length > 0 ? (
        <>
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
                {/* <p className={classes.change}>CHANGE</p> */}
              </div>
              <div className={classes.bottom}>
                <h4>Home</h4>
                <p>{user.address}</p>
              </div>
            </div>
            <div className={classes.paymentContainer}>
              <button onClick={handleSubmit} className={classes.paymentBtn}>
                Proceed to pay
              </button>
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
                <p>{name}</p>
                <p>{address}</p>
              </div>
            </div>
            <hr />
            <div className={classes.foodContainer}>
              {cartItem && cartItem.length > 0 ? (
                cartItem.map((item: any) => {
                  return (
                    <div key={item._id} className={classes.list}>
                      <div>
                        <GoDotFill size="10px" color="green" />
                        <span className={classes.foodName}>
                          {item?.dishName}
                        </span>
                      </div>
                      {/* <div className={classes.quantityContainer}>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div> */}
                      <div className={classes.ruppees}>
                        <FaRupeeSign /> <span>{item?.price}</span>
                      </div>
                      <div>
                        <MdCancel
                          onClick={() => cancelHandler(item)}
                          className={classes.cancelIcon}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>No cart Items</div>
              )}
            </div>
            <hr />
            <div className={classes.bottomContainer}>
              <p>TO PAY</p>
              <p>
                <FaRupeeSign /> {total}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div style={{ fontSize: "30px", margin: "auto", marginTop: "150px" }}>
          No cart Item
        </div>
      )}
    </div>
  );
}
