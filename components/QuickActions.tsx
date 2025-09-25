"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import "../app/globals.css";

export default function QuickActions() {
    return (

        <Card className="rounded-xl shadow p-3 bg-card w-full h-full min-h-[250px]">
            <CardHeader className="p-0 mb-4" >
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center" >
                <div className="flex flex-col gap-3">
                    <Button className="bg-[#735B01] hover:bg-[#666600] text-white rounded-full text-sm font-semibold flex justify-start w-fit items-center px-4 py-2 gap-1 cursor-pointer ">
                        <Plus className="h-4 w-4" />
                        New Employee
                    </Button>
                    <Button className="bg-[#675F41] hover:bg-[#6b3410] text-white rounded-full text-sm font-semibold flex justify-start w-fit items-center px-4 py-2  gap-1 cursor-pointer">
                        <Plus className="h-4 w-4" />
                        New One Time Payout
                    </Button>
                    <Button className="bg-[#BA1A1A] hover:bg-[#8b1a1a] text-white rounded-full text-sm font-semibold flex justify-start w-fit items-center px-4 py-2 gap-1 cursor-pointer">
                        <Plus className="h-4 w-4" />
                        New Off Cycle Pay Run
                    </Button>
                    <Button className="bg-[#436801] hover:bg-[#176b17] text-white rounded-full text-sm font-semibold flex justify-start w-fit items-center px-4 py-2 gap-1 cursor-pointer">
                        <Plus className="h-4 w-4" />
                        New Loan
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
