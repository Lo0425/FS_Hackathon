import React, { useState } from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
    const [series, setSeries] = useState([
        400, 430, 448, 470, 540, 580, 690, 1100,
    ]);
    const [categories, setCategories] = useState([
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
    ]);

    return (
        <>
            <Chart
                series={[
                    {
                        name: "series-1",
                        data: series,
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
                    // stroke: {
                    //     width: 1,
                    //     colors: ['#fff']
                    //   },
                    title: {
                        text: "Team Performance Chart",
                    },
                    xaxis: { categories },
                }}
                type="bar"
            />
        </>
    );
};

export default BarChart;
