import { Link } from "react-router-dom";
import classes from "./carousel.module.css";

export default function Carouseltem({ data }: any) {
  return (
    <Link
      to={`/layout/category?type=${data.name}`}
      className={classes.itemContainer}
      key={data._id}
    >
      <img className={classes.image} src={data.img} />
      <br />
      <p className={classes.text}>{data.name}</p>
    </Link>
  );
}
