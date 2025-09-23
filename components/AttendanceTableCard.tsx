"use client";

import {
    Search,
    Download,
    Printer,
    Table as TableIcon,
    Filter,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import "../app/globals.css";

const attendanceRows = [
    { id: "EMP-1001", name: "Ali Saeed", dept: "DevOps", date: "2025-08-01", sched: 8, worked: 8, late: 0, absent: 0 },
    { id: "EMP-1001", name: "Ali Saeed", dept: "DevOps", date: "2025-08-01", sched: 8, worked: 7.5, late: 0.5, absent: 0 },
    { id: "EMP-1001", name: "Ali Saeed", dept: "DevOps", date: "2025-08-01", sched: 8, worked: 8, late: 0, absent: 0 },
    { id: "EMP-1001", name: "Ali Saeed", dept: "DevOps", date: "2025-08-01", sched: 8, worked: 7, late: 1, absent: 0 },
    { id: "EMP-1001", name: "Ali Saeed", dept: "DevOps", date: "2025-08-01", sched: 8, worked: 8, late: 0, absent: 0 },
    { id: "EMP-1001", name: "Ali Saeed", dept: "DevOps", date: "2025-08-01", sched: 8, worked: 8, late: 0, absent: 0 },
    { id: "EMP-1001", name: "Ali Saeed", dept: "DevOps", date: "2025-08-01", sched: 8, worked: 7.5, late: 0.5, absent: 0 },
    { id: "EMP-1001", name: "Ali Saeed", dept: "DevOps", date: "2025-08-01", sched: 8, worked: 8, late: 0, absent: 0 },
    { id: "EMP-1001", name: "Ali Saeed", dept: "DevOps", date: "2025-08-01", sched: 8, worked: 8, late: 0, absent: 0 },
    { id: "EMP-1001", name: "Ali Saeed", dept: "DevOps", date: "2025-08-01", sched: 8, worked: 7, late: 1, absent: 0 },
];

export default function AttendanceTableCard() {
    return (
        <>
            <h2 className="mb-6 text-base font-semibold">Attendance Report</h2>
            <Card className="rounded-2xl shadow-md p-6">
                <CardHeader className="pb-3 flex-row items-center justify-between">
                    <CardTitle className="text-md font-semibold">
                        Attendance Data Table
                    </CardTitle>

                    <div className="flex items-center gap-4 text-gray-600">
                        <Search className="w-4 h-4 cursor-pointer" />
                        <Download className="w-4 h-4 cursor-pointer" />
                        <Printer className="w-4 h-4 cursor-pointer" />
                        <TableIcon className="w-4 h-4 cursor-pointer" />
                        <Filter className="w-4 h-4 cursor-pointer" />
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="text-xs uppercase text-gray-500">
                                <tr>
                                    <th className="p-3 font-medium">Employee ID</th>
                                    <th className="p-3 font-medium">Employee Name</th>
                                    <th className="p-3 font-medium">Department</th>
                                    <th className="p-3 font-medium">Date</th>
                                    <th className="p-3 font-medium">Scheduled Hours</th>
                                    <th className="p-3 font-medium">Worked Hours</th>
                                    <th className="p-3 font-medium">Hours Late</th>
                                    <th className="p-3 font-medium">Hours Absent</th>
                                    <th className="p-3 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendanceRows.map((row, idx) => (
                                    <tr
                                        key={idx}
                                        className="border-t border-gray-200 text-gray-800"
                                    >
                                        <td className="p-3">{row.id}</td>
                                        <td className="p-3">{row.name}</td>
                                        <td className="p-3">{row.dept}</td>
                                        <td className="p-3">{row.date}</td>
                                        <td className="p-3">{row.sched}</td>
                                        <td className="p-3">{row.worked}</td>
                                        <td className="p-3">{row.late}</td>
                                        <td className="p-3">{row.absent}</td>
                                        <td className="p-3 font-semibold text-yellow-700 cursor-pointer">
                                            View
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                        <div></div>
                        <div className="flex items-center gap-6 ml-auto">
                            <div className="flex items-center gap-1">
                                <span>Rows per page:</span>
                                <span className="font-medium text-gray-800">10</span>
                                <ChevronDown className="w-4 h-4 cursor-pointer" />
                            </div>
                            <div>1–10 of 15</div>
                            <div className="flex items-center gap-2">
                                <ChevronLeft className="w-4 h-4 cursor-pointer" />
                                <ChevronRight className="w-4 h-4 cursor-pointer" />
                            </div>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </>
    );
}
