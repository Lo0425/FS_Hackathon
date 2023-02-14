import React, { useState } from "react";
import Chart from "react-apexcharts";

const EmergencyLeaveChart = () => {
    const [data, setData] = useState([3, 10]);
    const [categories, setCategories] = useState(["Used", "Remaining"]);

    return (
        <>
            <Chart
                series={data}
                options={{
                    chart: {
                        id: "chart",
                    },
                    labels: categories,
                    plotOptions: {
                        pie: {
                            startAngle: -90,
                            endAngle: 270,
                        },
                    },
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
                    title: {
                        text: "Emergency Leave Chart",
                    },
                    fill: {
                        type: "gradient",
                    },
                    legend: {
                        formatter: function (val, opts) {
                            return (
                                val +
                                " - " +
                                opts.w.globals.series[opts.seriesIndex]
                            );
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200,
                                },
                                legend: {
                                    position: "bottom",
                                },
                            },
                        },
                    ],
                }}
                type="donut"
            />
        </>
    );
};

export default EmergencyLeaveChart;
