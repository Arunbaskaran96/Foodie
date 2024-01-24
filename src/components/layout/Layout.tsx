import Topbar from "../topbar/Topbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Topbar />
      <div style={{ paddingTop: "9vh" }}>
        <Outlet />
      </div>
    </div>
  );
}
