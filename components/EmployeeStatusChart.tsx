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
        fill: "#9ca3af",
    },
    {
        name: "Active",
        value: 280,
        fill: "#b38b00",
    },
    {
        name: "On-leave",
        value: 40,
        fill: "#6b6b2f",
    },
    {
        name: "Inactive",
        value: 180,
        fill: "#2f6b4f",
    },
];

export default function EmployeeStatusChart() {
    return (
        <div className="bg-card rounded-2xl shadow p-6 min-h-full">

            <h3 className="text-base font-semibold text-[#171717] mb-1">
                Employee Status
            </h3>
            <p className="font-semibold text-[#FFD700] mb-4">Total 532</p>

            <div className="h-60">
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
