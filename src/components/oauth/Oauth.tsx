import { useEffect, useState } from "react";
import { app } from "../../firebase";
import Button from "../UI/button/Button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { oAuthSigninStart } from "../../redux/features/user/userSlice";

export default function Oauth() {
  const { setItem } = useLocalStorage("token");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state: any) => state.userSlice);

  useEffect(() => {
    if (user != null) {
      setItem(user?.token);
      navigate("/layout/home");
    }
  }, [user]);

  const clickHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      if (result) {
        dispatch(
          oAuthSigninStart({
            email: result.user.email,
            name: result.user.displayName,
          })
        );
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button
        onClick={clickHandler}
        value="Connect with google"
        variant="signup"
      />
    </div>
  );
}
