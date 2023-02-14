import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { checkAuth } from "../api/users";

const TeamPerformanceChart = () => {
    const { user } = checkAuth();
    const userId = user.data._id;
    const [teamName, setTeamName] = useState("");
    const [employeeData, setEmployeeData] = useState([]);
    const [leaderData, setLeaderData] = useState([]);
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]);

    const employeeDataFetch = async () => {
        let employeeData = await (
            await fetch("http://localhost:8000/performance/employee/" + userId)
        ).json();
        setEmployeeData(employeeData);
    };

    const leaderDataFetch = async () => {
        let leaderData = await (
            await fetch("http://localhost:8000/users/leader/")
        ).json();
        setLeaderData(leaderData);
    };

    useEffect(() => {
        employeeDataFetch();
        leaderDataFetch();
    }, []);

    const onSelectLeaderHandler = async (e) => {
        let newLeader = await (
            await fetch(
                "http://localhost:8000/performance/employee/" + e.target.value
            )
        ).json();
        setEmployeeData(newLeader);
    };

    useEffect(() => {
        onSelectLeaderHandler();
    }, []);

    console.log({ employeeData });
    console.log({ leaderData });

    return (
        <>
            {user.data.admin ? (
                <>
                    <div className="flex justify-center">
                        <select
                            className="
                mb-5
          px-5
        py-2.5
        bg-white-500
        font-bold
        text-black
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-white-500 hover:shadow-lg
        focus:bg-white-500 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-white-700 active:shadow-lg active:text-black
        transition
        duration-150
        ease-in-out
        flex
        items-center
        whitespace-nowrap"
                            onChange={onSelectLeaderHandler}
                            defaultValue={"DEFAULT"}
                        >
                            <option value="DEFAULT" disabled hidden>
                                Select a Leader
                            </option>
                            {leaderData?.map((user, index) => (
                                <option key={index} value={user._id}>
                                    {user.username}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Chart
                        series={employeeData}
                        options={{
                            stroke: {
                                curve: "straight",
                            },
                            title: {
                                text: "Team Performance Chart by Month",
                                align: "left",
                            },
                            grid: {
                                row: {
                                    colors: ["#f3f3f3", "transparent"],
                                    opacity: 0.5,
                                },
                            },
                            yaxis: {
                                title: {
                                    text: "Performance Score",
                                },
                                labels: {
                                    formatter: function (val) {
                                        return val;
                                    },
                                },
                            },
                            xaxis: {
                                categories: categories,
                            },
                        }}
                        type="line"
                        width={800}
                    />
                </>
            ) : null}
            {user.data.leader ? (
                <Chart
                    series={employeeData}
                    options={{
                        stroke: {
                            curve: "straight",
                        },
                        title: {
                            text: "Team Performance Chart by Month",
                            align: "left",
                        },
                        grid: {
                            row: {
                                colors: ["#f3f3f3", "transparent"],
                                opacity: 0.5,
                            },
                        },
                        yaxis: {
                            title: {
                                text: "Performance Score",
                            },
                            labels: {
                                formatter: function (val) {
                                    return val;
                                },
                            },
                        },
                        xaxis: {
                            categories: categories,
                        },
                    }}
                    type="line"
                    width={800}
                />
            ) : null}
        </>
    );
};

export default TeamPerformanceChart;
