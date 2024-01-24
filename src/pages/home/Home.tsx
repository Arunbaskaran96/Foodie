import Mind from "../../components/carousel/Carousel";
import Offers from "../../components/offers/Offers";
import Resturants from "../../components/resturants/Resturants";
import classes from "./home.module.css";

export default function Home() {
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
        <Resturants />
        <Resturants />
        <Resturants />
        <Resturants />
        <Resturants />
        <Resturants />
        <Resturants />
        <Resturants />
        <Resturants />
        <Resturants />
      </div>
    </div>
  );
}
