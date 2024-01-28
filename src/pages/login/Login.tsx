import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import classes from "./login.module.css";
import { FormEvent, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Oauth from "../../components/oauth/Oauth";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { signInStart } from "../../redux/features/user/userSlice";

export default function Login() {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const { setItem } = useLocalStorage("token");

  const { user, loading, error } = useAppSelector(
    (state: any) => state.userSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user != null) {
      setItem(user?.token);
      navigate("/layout/home");
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(signInStart(formData));
  };

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
        <form onSubmit={handleSubmit}>
          <label className={classes.labelText}>Email</label>
          <br />
          <Input
            id="email"
            onChange={handleChange}
            required
            placeholder="email"
            type="email"
          />
          <label className={classes.labelText}>Password</label>
          <br />
          <Input
            id="password"
            onChange={handleChange}
            required
            placeholder="password"
            type="password"
          />
          <Button disabled={loading} value="Signin" variant="signin" />
        </form>
        <div style={{ textAlign: "center", marginBottom: "15px" }}>or</div>
        <div className={classes.oauthcontainer}>
          <Oauth />
          {error && <p className={classes.error}>{error}</p>}
        </div>
      </div>
    </div>
  );
}
