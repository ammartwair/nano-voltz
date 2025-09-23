"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Banknote } from "lucide-react";
import "../app/globals.css";

const data = [
    { country: "National", count: 177 },
    { country: "Yemen", count: 88 },
    { country: "India", count: 72 },
    { country: "Pakistan", count: 195 },
];

export default function NationalitySummary() {
    return (
        <Card className="rounded-xl shadow p-3 bg-card w-full h-full min-h-[250px]">
            <CardHeader>
                <CardTitle className="text-sm font-semibold">
                    Top 5 Nationality Summary
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className="flex justify-between text-sm text-gray-700"
                        >
                            <Banknote />
                            <span>{item.country}</span>
                            <span className="font-medium">{item.count}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
