import { useEffect, useState } from "react";
import SideBar from "../Partials/SideBar";
import LoadingBar from "../Partials/LoadingBar";
import MobileNav from "../Partials/MobileNav";
import PerformanceContent from "../Contents/PerformanceContent";

const Performance = () => {
    const [editOpen, setEditOpen] = useState({ visible: true });

    return (
        <div className="relative flex flex-col">
            <MobileNav />
            <div className="relative flex min-h-screen bg-white">
                <div
                    className={`${
                        editOpen.visible ? "w-16" : "w-3/12"
                    } bg-gradient-to-tr from-[#3f51b5]  to-purple-500 sticky top-0 left-0 hidden md:block`}
                >
                    <SideBar editOpen={editOpen} />
                </div>
                <div>
                    <PerformanceContent />
                </div>
            </div>
        </div>
    );
};

export default Performance;
