import { useState, useEffect } from "react";
import { checkAuth } from "../api/users";
import TeamPerformanceChar from "../Charts/TeamPerformanceChart";
import PersonalPerformanceChart from "../Charts/PersonalPerformanceChart";

const MainContent = () => {
    const { user } = checkAuth();
    return (
        <>
            {user.data.admin ? (
                <div className="container flex mt-12">
                    <div className="w-full px-4 bg-white rounded-lg shadow-lg">
                        <TeamPerformanceChar />
                    </div>
                </div>
            ) : null}
            {user.data.leader ? (
                <div className="container flex mt-12">
                    <div className="w-full px-4 bg-white rounded-lg shadow-lg">
                        <TeamPerformanceChar />
                    </div>
                </div>
            ) : null}
            {user.data.employee ? (
                <div className="container mt-12">
                    <div className="w-full px-4 bg-white rounded-lg shadow-lg">
                        <PersonalPerformanceChart />
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default MainContent;
