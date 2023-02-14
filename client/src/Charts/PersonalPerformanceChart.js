import React, { useState } from "react";
import Chart from "react-apexcharts";

const PersonalPerformanceChart = () => {
    const [data, setData] = useState([5, 6, 7, 10]);
    const [categories, setCategories] = useState([
        "Quality of Work",
        "Initiative",
        "Productivity",
        "Customer Focus",
    ]);

    return (
        <>
            <Chart
                series={[
                    {
                        name: "Performance Evaluation",
                        data: data,
                    },
                ]}
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
                width={500}
            />
        </>
    );
};

export default PersonalPerformanceChart;
