import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { checkAuth } from "../api/users";

const TeamPerformanceChart = () => {
    const { user } = checkAuth();
    const userId = user.data._id;
    const [teamName, setTeamName] = useState("");
    const [teamData, setTeamData] = useState();
    const [employeePerformance, setEmployeePerformance] = useState();
    const [data, setData] = useState([]);
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

    const teamDataFetch = async () => {
        let teamData = await (
            await fetch("http://localhost:8000/users/employee/" + userId)
        ).json();
        setTeamData(teamData);
    };

    useEffect(() => {
        teamDataFetch();
    }, []);

    console.log(teamData);

    // {data?.map((user, index) => (
    //     <option key={index} value={user._id}>
    //         {user.username}
    //     </option>
    // ))}
    return (
        <>
            {/* {teamData.map((employee, index) => console.log(employee, index))} */}
            <Chart
                series={[
                    {
                        name: teamData?.map((employee, i) => employee.username),
                        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
                    },
                    // {
                    //     name: "Employee 2",
                    //     data: [
                    //         10, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15,
                    //     ],
                    // },
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
