import { useEffect, useState } from "react";
import SideBar from "../Partials/SideBar";
import LoadingBar from "../Partials/LoadingBar";
import Content from "../Contents/MainContent";

const Main = () => {
    return (
        <div className="flex">
            <SideBar />
            <Content />
        </div>
    );
};

export default Main;
