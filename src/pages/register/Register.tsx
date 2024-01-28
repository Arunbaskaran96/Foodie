import classes from "./register.module.css";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await data.json();
      if (result.success === false) {
        setError(result.message);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <Input
            required
            onChange={handleChange}
            id="name"
            placeholder="Name"
            type="text"
          />
          <Input
            required
            onChange={handleChange}
            id="mobile"
            placeholder="Mobile"
            type="number"
          />
          <Input
            required
            onChange={handleChange}
            id="email"
            placeholder="Email"
            type="email"
          />
          <Input
            required
            onChange={handleChange}
            id="password"
            placeholder="Password"
            type="password"
          />
          <Input
            required
            onChange={handleChange}
            id="address"
            placeholder="Address"
            type="text"
          />
          <Button disabled={isLoading} value="Signup" variant="signin" />
        </form>
        {error && <p className={classes.error}>{error}</p>}
      </div>
    </div>
  );
}
