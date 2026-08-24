import { Footer } from "../component/footer/Footer";
import { Outlet } from "react-router";

export function Mainlayout() {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}