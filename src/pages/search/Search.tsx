import { useEffect, useState } from "react";
import classes from "./search.module.css";
import { CiSearch } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import Button from "../../components/UI/button/Button";
import useDebounce from "../../hooks/useDebounce";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import {
  addToCart,
  addTotal,
  orderCart,
} from "../../redux/features/cart/cartSlice";
import { isAdded } from "../../utils/isAdded";

export default function Search() {
  const [inputValue, setInputValue] = useState<any>(null);
  const deboundedValue = useDebounce(inputValue);
  const [dishes, setDishes] = useState([]);
  const { getItem } = useLocalStorage("token");
  const token = getItem();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice);
  const [otherTRest, setOtherRest] = useState(false);

  useEffect(() => {
    getItems();
  }, [deboundedValue]);

  const getItems = async () => {
    try {
      try {
        const result = await fetch(`/api/search?dishName=${inputValue}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await result.json();
        setDishes(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clickHandler = async (item: any) => {
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

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <input
          value={inputValue}
          placeholder="Search for resturants and food"
          className={classes.input}
          onChange={handleChange}
        />
        <CiSearch className={classes.icon} />
      </div>
      {
        <div className={classes.itemsContainer}>
          {dishes &&
            dishes.map((item: any) => {
              return (
                <div key={item._id} className={classes.itemContainer}>
                  <div>
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
                    <Button
                      onClick={() => clickHandler(item)}
                      value="Add"
                      variant="signup"
                      // disabled={()=>isAdded(item._id)}
                    />
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
