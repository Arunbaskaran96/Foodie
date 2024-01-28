import { FaRupeeSign } from "react-icons/fa";
import { useAppSelector } from "../../redux/app/hook";
import classes from "./orders.module.css";

export default function Orders() {
  const { user } = useAppSelector((state) => state.userSlice);

  console.log(user);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>Image</h3>
        <h3>Food</h3>
        <h3>Restaurant</h3>
        <h3>Price</h3>
      </div>
      <div className={classes.orders}>
        {user &&
          user.orders?.map((item: any) => {
            return (
              <div className={classes.order}>
                <img className={classes.img} src={item?.img} alt="orderImage" />
                <h4>{item.dishName}</h4>
                <h4 style={{ backgroundColor: "transparent" }}>
                  {item.resturant.name}
                </h4>
                <p>
                  <FaRupeeSign style={{ backgroundColor: "transparent" }} />
                  {item.price}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
