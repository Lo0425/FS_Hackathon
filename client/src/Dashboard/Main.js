import { useEffect, useState } from "react";
import SideBar from "../Partials/SideBar";
import LoadingBar from "../Partials/LoadingBar";
import Content from "../Contents/MainContent";
import moment from "moment";
import { checkAuth } from "../api/users";

const Main = () => {
    const { user } = checkAuth();
    const [data, setData] = useState();

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
        <div className="flex">
            <SideBar />
            <Content />
        </div>
    );
};

export default Main;
