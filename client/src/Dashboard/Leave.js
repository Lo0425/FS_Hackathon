import { useEffect, useState } from "react";
import SideBar from "../Partials/SideBar";
import LoadingBar from "../Partials/LoadingBar";
import MobileNav from "../Partials/MobileNav";
import LeaveContent from "../Contents/LeaveContent";

const Leave = () => {
    const [editOpen, setEditOpen] = useState({ visible: true });

    return (
        <>
            {/* <div className="relative flex">
                <SideBar />
                <LeaveContent />
            </div> */}
            <div className="flex flex-col">
                <MobileNav />
                <div className="flex min-h-screen bg-white">
                    <div
                        className={`${
                            editOpen.visible ? "w-16" : "w-1/2"
                        } sticky top-0 left-0 hidden md:block`}
                    >
                        <SideBar />
                    </div>
                    <div className="mx-auto">
                        <LeaveContent />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Leave;
