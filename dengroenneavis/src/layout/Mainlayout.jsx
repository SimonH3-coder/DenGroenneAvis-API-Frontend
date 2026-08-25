import { Footer } from "../component/footer/Footer";
import { Outlet } from "react-router";
import { Header } from "../component/header/Header";

export function Mainlayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}