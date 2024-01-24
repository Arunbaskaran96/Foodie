import classes from "./resturant.module.css";

export default function Resturants() {
  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/w5d2y9e09t0stfgytkmg"
        alt="resturantImg"
      />
      <div>
        <h5 className={classes.name}>Dubai Resturant</h5>
        <p className={classes.address}>Chenai</p>
      </div>
    </div>
  );
}
