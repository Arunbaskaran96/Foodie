import React, { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import Button from "../UI/button/Button";
import classes from "./editprofile.module.css";
import { updateStart } from "../../redux/features/user/userSlice";
import { TiTick } from "react-icons/ti";

export default function Editprofile() {
  const { user } = useAppSelector((state) => state.userSlice);
  const [formData, setFormData] = useState({});
  const [disable, setDisable] = useState(true);
  const dispatch = useAppDispatch();
  const [success, setSuccess] = useState(false);

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateStart(formData));
    setSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisable(false);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <div className={classes.container}>
      <form onSubmit={handelSubmit}>
        <div className={classes.form}>
          <div className={classes.left}>
            <h5 className={classes.label}>Name :</h5>
            <h5 className={classes.label}>Email :</h5>
            <h5 className={classes.label}>Mobile :</h5>
            <h5 className={classes.label}>Address :</h5>
          </div>
          <div className={classes.right}>
            <input
              id="name"
              defaultValue={user?.name}
              className={classes.input}
              placeholder="Name"
              type="text"
              required
              onChange={handleChange}
            />
            <br />
            <input
              id="email"
              defaultValue={user?.email}
              className={classes.input}
              placeholder="Email"
              type="email"
              required
              onChange={handleChange}
            />
            <br />
            <input
              id="mobile"
              defaultValue={user?.mobile}
              className={classes.input}
              placeholder="Mobile"
              type="number"
              required
              onChange={handleChange}
            />
            <br />
            <input
              id="address"
              defaultValue={user?.address}
              className={classes.input}
              placeholder="Name"
              type="text"
              required
              onChange={handleChange}
            />
            <br />
          </div>
        </div>
        <div className={classes.btn}>
          <Button disabled={disable} value="Update" variant="signin" />
        </div>
      </form>
      {success && (
        <div className={classes.SuccessfullyContainer}>
          <p>Edited Successfully</p>
          <TiTick size="25px" />
        </div>
      )}
    </div>
  );
}
