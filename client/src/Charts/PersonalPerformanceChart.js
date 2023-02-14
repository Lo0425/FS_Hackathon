import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { checkAuth } from "../api/users";

const PersonalPerformanceChart = () => {
    const { user } = checkAuth();
    const userId = user.data._id;
    const [userData, setUserData] = useState();
    const [userPerformance, setUserPerformance] = useState([]);
    const [data, setData] = useState([5, 6, 7, 10]);
    const [categories, setCategories] = useState([
        "Quality of Work",
        "Initiative",
        "Productivity",
        "Customer Focus",
    ]);

    const employeePerformanceFetch = async () => {
        let userPerformance = await (
            await fetch("http://localhost:8000/performance/" + userId)
        ).json();
        setUserPerformance(userPerformance);
    };

    useEffect(() => {
        employeePerformanceFetch();
    }, []);

    console.log(userPerformance);

    return (
        <>
            <Chart
                series={userPerformance}
                options={{
                    chart: {
                        id: "basic-bar",
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            horizontal: true,
                            dataLabels: {
                                total: {
                                    enabled: true,
                                    offsetX: 0,
                                    style: {
                                        fontSize: "13px",
                                        fontWeight: 900,
                                    },
                                },
                            },
                        },
                    },
                    title: {
                        text: "Personal Performance Chart",
                    },
                    xaxis: {
                        max: 10,
                        categories: categories,
                    },
                }}
                type="bar"
                width={800}
            />
        </>
    );
};

export default PersonalPerformanceChart;
