import { useEffect, useState } from "react";
import SideBar from "../Partials/SideBar";
import LoadingBar from "../Partials/LoadingBar";
import PerformanceContent from "../Contents/PerformanceContent";

const Performance = () => {
    return (
        <div className="flex">
            <SideBar />
            <PerformanceContent />
        </div>
    );
};

export default Performance;
