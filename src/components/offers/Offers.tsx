import classes from "./offer.module.css";

export default function Offers() {
  return (
    <div className={classes.container}>
      <div className={classes.offerContainer}>
        <div className={classes.imageContainer}>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ece5e40637bf1f1ef1868484db7a5775"
            alt="food"
            className={classes.image}
          />
          <br />
          <p>30% OFF</p>
        </div>
        <div className={classes.bottom}>
          <h5 className={classes.hotelname}>Briyani Zone</h5>
          <p className={classes.address}>Chennai</p>
        </div>
      </div>
    </div>
  );
}
