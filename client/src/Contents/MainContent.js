import { useState, useEffect } from "react";
import { checkAuth } from "../api/users";
import BarChart from "../Charts/TeamPerformanceChart";
import PersonalPerformanceChart from "../Charts/PersonalPerformanceChart";

const MainContent = () => {
    const { user } = checkAuth();
    return (
        <>
            {user.data.admin ? (
                <div className="container flex mt-12">
                    <div className="w-full px-4 bg-white rounded-lg shadow-lg">
                        <BarChart />
                    </div>
                </div>
            ) : null}
            {user.data.leader ? (
                <div className="container mx-12 mt-12">
                    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total users
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                12,00
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total Profit
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                $ 450k
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total Orders
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                20k
                            </div>
                        </div>
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
