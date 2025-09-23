"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import "../app/globals.css";

const offPayRuns = [
    { id: 1, date: "10-Aug-2025", amount: "75,000.00 AED" },
    { id: 2, date: "11-Jul-2025", amount: "72,000.00 AED" },
    { id: 3, date: "12-Jun-2025", amount: "" },
];

export default function OffCyclePayRuns() {
    return (
        <Card className="rounded-xl shadow p-3 bg-card w-full h-full min-h-[250px]">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Off Cycle Pay Runs</CardTitle>
                <p className="text-sm font-semibold text-[#808000]">
                    Total 10,000.00 AED
                </p>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col divide-y">
                    {offPayRuns.map((run) => (
                        <div
                            key={run.id}
                            className="flex items-center justify-between py-3"
                        >
                            <div>
                                <p className="font-semibold text-sm">{run.date}</p>
                                {run.amount && (
                                    <p className="text-xs text-gray-500">{run.amount}</p>
                                )}
                            </div>
                            <ChevronRight className="text-gray-500 w-4 h-4" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
