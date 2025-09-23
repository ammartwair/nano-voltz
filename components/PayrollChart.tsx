"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../app/globals.css";

const data = [
    { month: "Jan", cost: 24 },
    { month: "Feb", cost: 62 },
    { month: "Mar", cost: 90 },
    { month: "Apr", cost: 15 },
    { month: "May", cost: 20 },
    { month: "Jun", cost: 62 },
    { month: "Jul", cost: 38 },
    { month: "Aug", cost: 40 },
    { month: "Sep", cost: 52 },
    { month: "Oct", cost: 30 },
    { month: "Nov", cost: 24 },
    { month: "Dec", cost: 20 },
];

export default function PayrollChart() {
    return (
        <div className="rounded-xl shadow p-3 bg-card">
            <h2 className="text-base sm:text-lg font-semibold mb-1">Payroll Cost Summary 2025</h2>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#808000] mb-2">Total 500,250.52 AED</p>
            <div className="h-[200px] sm:h-[210px] lg:h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="cost" fill="#b38b00" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
