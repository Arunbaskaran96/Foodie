import classes from "./search.module.css";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <input
          placeholder="Search for resturants and food"
          className={classes.input}
        />
        <CiSearch className={classes.icon} />
      </div>
    </div>
  );
}
