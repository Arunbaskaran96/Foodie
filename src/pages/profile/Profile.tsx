import { useState } from "react";
import classes from "./profile.module.css";
import { IoPersonCircleSharp, IoBag } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Orders from "../../components/orders/Orders";
import Editprofile from "../../components/editprofile/Editprofile";
import { useAppSelector } from "../../redux/app/hook";

export default function Profile() {
  const [section, setSection] = useState("profile");
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.userSlice);

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
        <div className={classes.section} onClick={() => navigate("/")}>
          <FaSignOutAlt size="30px" /> <span>SignOut</span>
        </div>
      </div>
      <div className={classes.right}>
        {section === "profile" && (
          <div className={classes.profileContainer}>
            <div>
              <p className={classes.text}>
                Name :<span>{user?.name}</span>
              </p>
              <p className={classes.text}>
                Email :<span>{user?.email}</span>
              </p>
              <p className={classes.text}>
                Mobile :<span>{user?.mobile}</span>
              </p>
              <p className={classes.text}>
                Adress :<span>{user?.address}</span>
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
        {section === "orders" && <Orders />}
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
        {section === "editProfile" && <Editprofile />}
      </div>
    </div>
  );
}
