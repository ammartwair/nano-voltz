"use client";

import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from "recharts";
import "../app/globals.css";

const data = [
    {
        name: "Total",
        value: 532,
        fill: "#7D7666",
    },
    {
        name: "Active",
        value: 280,
        fill: "#715C00",
    },
    {
        name: "On-leave",
        value: 40,
        fill: "#675D3D",
    },
    {
        name: "Inactive",
        value: 180,
        fill: "#46654B",
    },
];

export default function EmployeeStatusChart() {
    return (
        <div className="bg-card rounded-xl shadow p-3 min-h-full">

            <h2 className="text-base font-semibold text-[#171717] mb-1">
                Employee Status
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-bold text-[#715C00] mb-2">Total 532</p>

            <div className="h-[200px] sm:h-[210px] lg:h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="45%"
                        cy="60%"
                        innerRadius="15%"
                        outerRadius="90%"
                        barSize={10}
                        data={data}
                    >
                        <RadialBar
                            dataKey="value"
                            background
                            cornerRadius={5}
                        />
                        <Legend
                            iconSize={10}
                            layout="vertical"
                            verticalAlign="middle"
                            align="right"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
