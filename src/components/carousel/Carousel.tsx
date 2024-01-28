import { useState } from "react";
import Carouseltem from "./Carouseltem";
import classes from "./carousel.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export interface ItemProps {
  name: string;
  img: string;
}
const items: Array<ItemProps> = [
  {
    name: "Briyani",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
  },
  {
    name: "Idli",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
  },
  {
    name: "Pizza",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
  },
  {
    name: "Dosa",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
  },
  {
    name: "Parotta",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
  },
  {
    name: "Chapati",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/28a9680fe83b4caa02ce460a95e8bd43",
  },
  {
    name: "Burger",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/ac6cd19ec0940e13058d1646e6837915",
  },
];

export default function Mind() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextItem = (percentage: any) => {
    setActiveIndex(activeIndex + percentage);
  };

  return (
    <div className={classes.container} style={{ overflow: "hidden" }}>
      <div className={classes.topContainer}>
        <h3>What's on your mind?</h3>
        <div className={classes.arrowContainer}>
          <button
            disabled={activeIndex === 0}
            className={classes.leftArrow}
            onClick={() => nextItem(100)}
          >
            <FaArrowLeft />
          </button>
          <button
            disabled={activeIndex === -100 * Math.floor(items.length / 5)}
            className={classes.rightArrow}
            onClick={() => nextItem(-100)}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "60px",
          alignItems: "center",
          transition: "500ms ease-in-out",
          transform: `translate(${activeIndex * 1}%)`,
        }}
      >
        {items.map((item: any) => {
          return <Carouseltem data={item} />;
        })}
      </div>
    </div>
  );
}
