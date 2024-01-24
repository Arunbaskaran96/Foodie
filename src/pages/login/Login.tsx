import { Link } from "react-router-dom";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import classes from "./login.module.css";

export default function Login() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>Foodie</div>
      <h5 className={classes.authType}>Login To Your Foodie Account</h5>
      <div className={classes.loginContainer}>
        <div className={classes.userInformation}>
          <div className={classes.loginbtnContainer}>
            <p className={classes.loginbtn}>Login</p>
          </div>
          <div className={classes.signupContainer}>
            <Link to="/signup" className={classes.signupbtn}>
              Sign Up
            </Link>
          </div>
        </div>
        <form>
          <label className={classes.labelText}>Email</label>
          <br />
          <Input placeholder="email" type="email" />
          <label className={classes.labelText}>Password</label>
          <br />
          <Input placeholder="password" type="password" />
          <Button value="Signin" variant="signin" />
        </form>
        <div style={{ textAlign: "center", marginBottom: "15px" }}>or</div>
        <div className={classes.oauthcontainer}>
          <Button value="Connect with google" variant="signup" />
        </div>
      </div>
    </div>
  );
}
