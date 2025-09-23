"use client";

import {
    SquareSplitHorizontal,
    Calendar,
    BriefcaseBusiness,
    Clock4,
    UtensilsCrossed,
    ListFilter,
    Check,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AssignedShiftsCard() {
    return (
        <>
            <h2 className="text-base font-semibold mb-2">Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Assigned Shifts Card */}
                <Card className="rounded-2xl shadow-md p-6">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-md">
                            Assigned Shifts
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <SquareSplitHorizontal className="w-4 h-4" />
                                <span className=" font-medium">Shift Name:</span>
                                <span >Default 8hr Shift</span>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span className=" font-medium">Working Days:</span>
                                <span >Mon - Sat</span>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                <BriefcaseBusiness className="w-4 h-4" />
                                <span className=" font-medium">Rest Days:</span>
                                <span >Sun</span>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                <Clock4 className="w-4 h-4" />
                                <span className=" font-medium">Working Hours:</span>
                                <span >9AM - 12PM, 1PM - 6PM</span>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                <UtensilsCrossed className="w-4 h-4" />
                                <span className=" font-medium">Break Hours:</span>
                                <span>12PM - 1PM</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Attendance Data Card */}
                <Card className="rounded-2xl shadow-md p-6">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between">
                        <CardTitle className="text-md">
                            Attendance Data (Current Week)
                        </CardTitle>
                        <div className="flex items-center gap-2 text-xs">
                            <button className="px-2 py-1 border border-gray-300 rounded-md ">
                                Days
                            </button>
                            <button className="px-2 py-1 border border-gray-300 rounded-md flex items-center bg-gray">
                                <Check className="w-4 h-4 text-gray-500" />
                                Hours
                            </button>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <ListFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Total Hours 06:37 Hrs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ListFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Present Hours 06:37 Hrs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ListFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Paid Leave 00:00 Hrs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ListFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Weekend 08:00 Hrs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ListFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Overtime 00:00 Hrs</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <ListFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Payable Hours 14:37 Hrs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ListFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">On Duty 00:00 Hrs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ListFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Holidays 00:00 Hrs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ListFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Unpaid Leave 00:00 Hrs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ListFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Deviation Time 09:23 Hrs</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
