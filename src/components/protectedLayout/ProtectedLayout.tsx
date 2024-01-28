import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/app/hook";

export default function ProtectedLayout() {
  const { user } = useAppSelector((state) => state.userSlice);

  return user ? <Outlet /> : <Navigate to="/" />;
}
