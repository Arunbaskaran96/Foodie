import classes from "./register.module.css";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>Foodie</div>
      <h5 className={classes.authType}>New to Foodie?</h5>
      <div className={classes.loginContainer}>
        <div className={classes.userInformation}>
          <div className={classes.loginbtnContainer}>
            <Link to="/" className={classes.loginbtn}>
              Login
            </Link>
          </div>
          <div className={classes.signupContainer}>
            <div className={classes.signupbtn}>Sign Up</div>
          </div>
        </div>
        <form>
          <Input placeholder="name" type="text" />
          <Input placeholder="mobile" type="number" />
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Button value="Signup" variant="signin" />
        </form>
        <div style={{ textAlign: "center", marginBottom: "15px" }}>or</div>
        <div className={classes.oauthcontainer}>
          <Button value="Connect with google" variant="signup" />
        </div>
      </div>
    </div>
  );
}
