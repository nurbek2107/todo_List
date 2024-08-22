//components
import {Navbar} from "../components"

//rrd
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar  />
    <main className=" ">
        <Outlet />
      </main>
    </>
  );
}
export default MainLayout