import { FaRupeeSign } from "react-icons/fa";
import classes from "./category.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  addToCart,
  addTotal,
  orderCart,
} from "../../redux/features/cart/cartSlice";

export default function Category() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const user: any = useAppSelector((state) => state.userSlice);
  const url = new URLSearchParams(window.location.search);
  const urlType = url.get("type");
  const [otherTRest, setOtherRest] = useState(false);
  const { getItem } = useLocalStorage("token");
  const token = getItem();
  const dispatch = useAppDispatch();

  const { cartItem } = useAppSelector((state) => state.cartSlice);

  const isAdded = (id: string) => {
    return cartItem.some((item: any) => item.dishId === id);
  };

  useEffect(() => {
    getDishes();
  }, []);

  const getDishes = async () => {
    try {
      const result = await fetch(
        `https://foodieapi-7udh.onrender.com/api/search?dishName=${urlType}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await result.json();
      setDishes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = async (item: any) => {
    const newdata = {
      restaurantId: item.resturant._id,
      dishName: item.dishName,
      price: item.price,
      dishId: item._id,
    };
    try {
      const result = await fetch(
        "https://foodieapi-7udh.onrender.com/api/addtocart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(newdata),
        }
      );
      const data = await result.json();
      if (data.success === false) {
        setOtherRest(true);
      } else {
        dispatch(addToCart({ ...item, userId: user.user._id }));
        dispatch(addTotal(item.price));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addNewCart = async () => {
    try {
      await fetch("https://foodieapi-7udh.onrender.com/api/deletecart/", {
        method: "DELETE",
        headers: {
          "Content-Type": "appplication/json",
          Authorization: token,
        },
      });
      dispatch(orderCart());
      setOtherRest(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.container}>
      {loading && <p>Loading...</p>}
      {
        <div className={classes.itemsContainer}>
          {dishes &&
            dishes.map((item: any) => {
              return (
                <div key={item._id} className={classes.itemContainer}>
                  <div style={{ width: "100px" }}>
                    <img
                      className={classes.image}
                      src={item.img}
                      alt="foodImage"
                    />
                  </div>
                  <div style={{ width: "150px" }}>
                    <p className={classes.foodName}>{item.dishName}</p>
                    <p className={classes.foodPrice}>
                      <FaRupeeSign size="12px" /> <span>{item.price}</span>
                    </p>
                  </div>
                  <div>
                    <p className={classes.hotel_Name}>{item.resturant.name}</p>
                    <p className={classes.hote_address}>
                      {item.resturant.address}
                    </p>
                  </div>
                  <div>
                    <button
                      className={classes.addBtn}
                      onClick={() => clickHandler(item)}
                      disabled={isAdded(item._id)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      }
      {otherTRest && (
        <div className={classes.otherRestaurantContainer}>
          <h6>Items already in cart</h6>
          <p>Your cart contains items from other restaurant</p>
          <div className={classes.otherBtnContainer}>
            <button
              onClick={() => setOtherRest(false)}
              className={classes.noBtn}
            >
              No
            </button>
            <button onClick={addNewCart} className={classes.yesBtn}>
              Yes,Start Fresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
