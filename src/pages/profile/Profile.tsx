import { useState } from "react";
import classes from "./profile.module.css";
import { IoPersonCircleSharp, IoBag } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [section, setSection] = useState("profile");
  const navigate = useNavigate();

  const handleChange = (sec: string) => {
    setSection(sec);
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div
          className={classes.section}
          onClick={() => handleChange("profile")}
        >
          <IoPersonCircleSharp size="30px" /> <span>Profile</span>
        </div>
        <div className={classes.section} onClick={() => handleChange("orders")}>
          <IoBag size="30px" /> <span>Orders</span>
        </div>
        <div
          className={classes.section}
          onClick={() => handleChange("address")}
        >
          <CiLocationOn size="30px" /> <span>Addresses</span>
        </div>
        <div className={classes.section} onClick={() => navigate("/")}>
          <FaSignOutAlt size="30px" /> <span>SignOut</span>
        </div>
      </div>
      <div className={classes.right}>
        {section === "profile" && (
          <div className={classes.profileContainer}>
            <div>
              <p className={classes.text}>
                Name :<span>Arun</span>
              </p>
              <p className={classes.text}>
                Email :<span>arundhilla@gmail.com</span>
              </p>
              <p className={classes.text}>
                Mobile :<span>7539913570</span>
              </p>
            </div>
            <button
              onClick={() => setSection("editProfile")}
              className={classes.editBtn}
            >
              Edit Profile
            </button>
          </div>
        )}
        {section === "orders" && <div>Orders</div>}
        {section === "address" && (
          <div>
            <div>
              <h3>Manage Address</h3>
              <div className={classes.addressContainer}>
                <div className={classes.add}>
                  <h5>Home</h5>
                  <p>
                    007,, Shakti Nagar, Sri Balaji Krupa Layout, RK Hegde Nagar,
                    Bengaluru, Karnataka 560077, India
                  </p>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {section === "editProfile" && (
          <div style={{ textAlign: "center", paddingTop: "100px" }}>
            <div>
              <div>
                <label className={classes.label}>Name : </label>
                <input className={classes.input} />
              </div>
              <div>
                <label className={classes.label}>Email : </label>
                <input className={classes.input} />
              </div>
              <div>
                <label className={classes.label}>Mobile : </label>
                <input className={classes.input} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
