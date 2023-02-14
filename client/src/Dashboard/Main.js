import { useEffect, useState } from "react";
import SideBar from "../Partials/SideBar";
import LoadingBar from "../Partials/LoadingBar";
import MobileNav from "../Partials/MobileNav";
import MainContent from "../Contents/MainContent";
import moment from "moment";
import { checkAuth } from "../api/users";

const Main = () => {
    const { user } = checkAuth();
    const [data, setData] = useState();
    const [editOpen, setEditOpen] = useState({ visible: true });

    useEffect(() => {
        const dataFetch = async () => {
            let data = await (
                await fetch("http://localhost:8000/users/" + user.data._id)
            ).json();
            setData(data);
        };
        dataFetch();
    }, []);

    //   console.log(data.user.daysofservice);

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
                    <MainContent />
                </div>
            </div>
        </div>
    );
};

export default Main;
