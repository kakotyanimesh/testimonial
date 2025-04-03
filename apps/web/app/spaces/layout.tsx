import React from "react";
import SideBar from "../components/sidebar";

export default function Layout({children} : {children : React.ReactNode}){
    return (
        <div className="md:ml-4 flex flex-row bg-slate-100">
            <SideBar/>
            {children}
        </div>
    )
}