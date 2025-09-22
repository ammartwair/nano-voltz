"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import "../app/globals.css";


const payRuns = [
    { id: 1, date: "01-Aug-2025", amount: "75,000.00 AED" },
    { id: 2, date: "02-Jul-2025", amount: "79,000.00 AED" },
    { id: 3, date: "01-Jun-2025", amount: "" },
];

export default function PayRuns() {
    return (
        <Card className="rounded-2xl h-full shadow-md p-4">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Pay Runs</CardTitle>
                <p className="text-sm font-semibold text-[#b38b00]">
                    Total 75,000.00 AED
                </p>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col divide-y">
                    {payRuns.map((run) => (
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
