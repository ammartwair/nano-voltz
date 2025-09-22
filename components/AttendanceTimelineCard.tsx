"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import "../app/globals.css";

const attendanceData = [
    {
        date: "21 Jun",
        status: "Absent",
        color: "bg-red-600",
        segments: [
            { time: "9:00", type: "absent" },
            { time: "10:00", type: "absent" },
            { time: "11:00", type: "absent" },
            { time: "12:00", type: "absent" },
            { time: "13:00", type: "absent" },
            { time: "14:00", type: "absent" },
            { time: "15:00", type: "absent" },
            { time: "16:00", type: "absent" },
        ],
    },
    {
        date: "22 Jun",
        status: "Present",
        color: "bg-yellow-600",
        segments: [
            { time: "9:00", type: "present" },
            { time: "10:00", type: "present" },
            { time: "11:00", type: "present" },
            { time: "12:00", type: "break" },
            { time: "13:00", type: "present" },
            { time: "14:00", type: "present" },
            { time: "15:00", type: "present" },
            { time: "16:00", type: "present" },
        ],
    },
];

const statusColors: Record<string, string> = {
    present: "bg-yellow-300",
    absent: "bg-red-200",
    break: "bg-green-200",
};

export default function AttendanceTimelineCard() {
    return (
        <>
            <h2 className="mb-6 text-lg font-semibold">Attendance</h2>
            <Card className="rounded-2xl shadow-md p-6">
                <CardHeader className="pb-3">
                    <CardTitle className="text-md font-semibold">
                        Shift & Attendance (Current Week)
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                    {attendanceData.map((day, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-16 text-sm font-semibold text-gray-700">
                                {day.date}
                            </div>

                            <div className="h-12 border-l mx-2"></div>

                            <div className="flex-1 flex">
                                <div
                                    className={`${day.color} w-2 rounded-l-lg`}
                                ></div>

                                <div className="flex-1 rounded-r-lg bg-gray-100 overflow-hidden">
                                    <div className="text-xs text-gray-600 px-2 py-3 border-b border-gray-200">
                                        Default 8hr Shift | Morning: 9AM - 12PM, Break: 12PM - 1PM,Night: 1PM - 6PM
                                    </div>

                                    <div className="grid grid-cols-8 text-[10px] text-gray-700">
                                        {day.segments.map((seg, i) => (
                                            <div
                                                key={i}
                                                className={`flex flex-col items-center justify-center border-r border-gray-300 ${statusColors[seg.type]}`}
                                            >
                                                {seg.time}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="h-12 border-l mx-2"></div>

                            <div >
                                <span
                                    className={`px-3 py-1 text-xs font-semibold rounded-md border ${day.status === "Present"
                                        ? "text-yellow-600 border-yellow-600"
                                        : "text-red-700 border-red-700"
                                        }`}
                                >
                                    {day.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </CardContent >
            </Card >
        </>
    );
}
