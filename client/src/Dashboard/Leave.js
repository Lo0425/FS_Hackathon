import { useEffect, useState } from "react";
import SideBar from "../Partials/SideBar";
import LoadingBar from "../Partials/LoadingBar";
import LeaveContent from "../Contents/LeaveContent";

const Leave = () => {
    return (
        <div className="flex">
            <SideBar />
            <LeaveContent />
        </div>
    );
};

export default Leave;
