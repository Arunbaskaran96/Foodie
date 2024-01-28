import { useParams } from "react-router-dom";
import classes from "./restaurant.module.css";
import { FaRupeeSign } from "react-icons/fa";
import { useEffect, useState } from "react";
import Input from "../../components/UI/input/Input";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import {
  addToCart,
  addTotal,
  orderCart,
} from "../../redux/features/cart/cartSlice";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Restaurant() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { getItem } = useLocalStorage("token");
  const token = getItem();
  const [otherTRest, setOtherRest] = useState(false);
  const user: any = useAppSelector((state) => state.userSlice);
  const url = new URLSearchParams(window.location.search);
  const name = url.get("name");

  useEffect(() => {
    getItems();
  }, []);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getItems = async () => {
    try {
      const data = await fetch(`/api/getRestaurant/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "apllication/json",
        },
      });
      const result = await data.json();
      setItems(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (item: any) => {
    const newdata = {
      restaurantId: item.resturant._id,
      dishName: item.dishName,
      price: item.price,
    };
    try {
      const result = await fetch("/api/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(newdata),
      });
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
      await fetch("/api/deletecart/", {
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
      <div className={classes.top}>
        <h5>{name}</h5>
      </div>
      <hr />
      <div className={classes.foodContainer}>
        {items.length > 0 && (
          <div className={classes.inputContainer}>
            <Input
              onChange={searchHandler}
              placeholder="Search.."
              type="text"
            />
          </div>
        )}
        {items.length > 0 ? (
          items
            .filter((item: any) => {
              const lists = item.dishName
                .toLowerCase()
                .includes(search.toLowerCase());
              return lists;
            })
            .map((item: any) => {
              return (
                <div className={classes.food} key={item._id}>
                  <div className={classes.left}>
                    <div style={{ width: "200px" }}>
                      <h6>{item.dishName}</h6>
                    </div>
                    <p>
                      <FaRupeeSign /> {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleSubmit(item)}
                    className={classes.addBtn}
                  >
                    Add
                  </button>
                  <div className={classes.right}>
                    <img className={classes.image} src={item.img} />
                  </div>
                </div>
              );
            })
        ) : (
          <div>Start Soon</div>
        )}
      </div>
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
