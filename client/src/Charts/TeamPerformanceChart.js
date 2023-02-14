import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { checkAuth } from "../api/users";

const TeamPerformanceChart = () => {
    const { user } = checkAuth();
    const userId = user.data._id;
    const [teamName, setTeamName] = useState("");
    const [employeeData, setEmployeeData] = useState([]);
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

    useEffect(() => {
        employeeDataFetch();
    }, []);

    console.log({ employeeData });

    return (
        <>
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
    );
};

export default TeamPerformanceChart;
