import { useEffect, useState } from "react";
import Mind from "../../components/carousel/Carousel";
import Offers from "../../components/offers/Offers";
import Resturants from "../../components/resturants/Resturants";
import classes from "./home.module.css";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://foodieapi-7udh.onrender.com/api/getRestaurants",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await data.json();
      setRestaurants(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Mind />
      </div>
      <hr />
      <div>
        <h3>Top Offers</h3>
      </div>
      <div className={classes.middle}>
        <Offers />
        <Offers />
        <Offers />
        <Offers />
      </div>
      <hr />
      <div>
        <h3>Available Resturants</h3>
      </div>
      <div className={classes.bottom}>
        {restaurants &&
          restaurants.map((item: any) => {
            return (
              <div key={item._id}>
                <Resturants item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
