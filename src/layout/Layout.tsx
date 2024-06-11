import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
export default function Layout() {
    return (
        <div className="flex">
            <Menu />
            <div className="">
                <Header />
                <div className="mt-[2vh]"> <Outlet /> </div>
            </div>
            
        </div>
    )
}
