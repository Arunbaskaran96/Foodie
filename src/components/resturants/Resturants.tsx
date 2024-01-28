import { Link } from "react-router-dom";
import classes from "./resturant.module.css";

export default function Resturants(props: any) {
  const { item } = props;

  return (
    <Link
      key={item._id}
      to={`/layout/restaurant/${item._id}?name=${item?.name}`}
      className={classes.container}
    >
      <img className={classes.image} src={item.img} alt="resturantImg" />
      <div>
        <h5 className={classes.name}>{item.name}</h5>
        <p className={classes.address}>{item.address}</p>
      </div>
    </Link>
  );
}
