import React, { useState } from "react";
import Chart from "react-apexcharts";

const Donut = () => {
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState([44, 55, 41, 17, 15]);
    const [labels, setLabels] = useState(["A", "B", "C", "D", "E"]);

    return (
        <div className="donut">
            <Chart
                options={{
                    chart: {
                        width: 380,
                        type: "pie",
                    },
                    labels: labels,
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
                series={series}
                type="donut"
                width="380"
            />
        </div>
    );
};

export default Donut;
