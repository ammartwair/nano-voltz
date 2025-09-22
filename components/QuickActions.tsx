"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import "../app/globals.css";

export default function QuickActions() {
    return (
        <Card className="rounded-2xl h-full shadow-md p-2 min-h-full">
            <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-3">
                    <Button className="bg-[#808000] hover:bg-[#666600] text-white w-full rounded-md text-xs flex justify-start items-center gap-2">
                        <Plus className="h-4 w-4" />
                        New Employee
                    </Button>
                    <Button className="bg-[#8B4513] hover:bg-[#6b3410]  text-white w-full rounded-md text-xs flex justify-start items-center gap-2">
                        <Plus className="h-4 w-4" />
                        New One Time Payout
                    </Button>
                    <Button className="bg-[#B22222] hover:bg-[#8b1a1a] text-white w-full rounded-md text-xs flex justify-start items-center gap-2">
                        <Plus className="h-4 w-4" />
                        New Off Cycle Pay Run
                    </Button>
                    <Button className="bg-[#228B22] hover:bg-[#176b17] text-white w-full rounded-md text-xs flex justify-start items-center gap-2">
                        <Plus className="h-4 w-4" />
                        New Loan
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
