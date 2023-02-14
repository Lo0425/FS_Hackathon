import { useEffect, useState } from "react";
import SideBar from "../Partials/SideBar";
import LoadingBar from "../Partials/LoadingBar";
import MainContent from "../Contents/MainContent";

const Main = () => {
    return (
        <div className="flex">
            <SideBar />
            <MainContent />
        </div>
    );
};

export default Main;
