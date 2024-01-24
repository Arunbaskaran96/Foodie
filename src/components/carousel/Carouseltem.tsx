import classes from "./carousel.module.css";

export default function Carouseltem({ data }: any) {
  return (
    <div className={classes.itemContainer}>
      <img className={classes.image} src={data.img} />
      <br />
      <p className={classes.text}>{data.name}</p>
    </div>
  );
}
