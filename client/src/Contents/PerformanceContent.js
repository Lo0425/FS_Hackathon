import { useState, useEffect } from "react";
import { checkAuth } from "../api/users";
import PersonalPerformanceChart from "../Charts/PersonalPerformanceChart";

const PerformanceContent = () => {
    const { user } = checkAuth();

    return (
        <>
            {user.data.employee ? (
                <div className="container mx-12 mt-12">
                    <div className="flex justify-center">
                        <div className="w-1/2 px-4 py-5 bg-white rounded-lg shadow-lg">
                            <PersonalPerformanceChart />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default PerformanceContent;
