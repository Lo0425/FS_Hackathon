import React, { useState } from "react";
import Chart from "react-apexcharts";

const TeamPerformanceChart = () => {
    const [teamName, setTeamName] = useState("");
    const [data, setData] = useState([20, 30, 40, 50, 100]);
    const [categories, setCategories] = useState([
        "Jan",
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
    return (
        <>
            <Chart
                series={[
                    {
                        name: teamName,
                        data: data,
                    },
                ]}
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
                    },
                    xaxis: {
                        categories: categories,
                    },
                }}
                type="line"
                width={500}
            />
        </>
    );
};

export default TeamPerformanceChart;
