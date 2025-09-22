"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import "../app/globals.css";

const payouts = [
    { id: 1, date: "15-Jan-2025", amount: "75,000.00 AED" },
    { id: 2, date: "16-Feb-2025", amount: "72,000.00 AED" },
    { id: 3, date: "17-Mar-2025", amount: "" },
];

export default function Payouts() {
    return (
        <Card className="rounded-2xl h-full shadow-md p-4">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Payouts</CardTitle>
                <p className="text-sm font-semibold text-[#b38b00]">
                    Total 12
                </p>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col divide-y">
                    {payouts.map((payout) => (
                        <div
                            key={payout.id}
                            className="flex items-center justify-between py-3"
                        >
                            <div>
                                <p className="font-semibold text-sm">{payout.date}</p>
                                {payout.amount && (
                                    <p className="text-xs text-gray-500">{payout.amount}</p>
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
