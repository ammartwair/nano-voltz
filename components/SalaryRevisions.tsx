"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import "../app/globals.css";

const employers = [
    { id: "EMP1234", name: "Ahmad Jameel", date: "OCT 2025" },
    { id: "EMP4321", name: "John Doe", date: "Oct 2025" },
    { id: "EMP5678", name: "Jane Smith", date: "OCt 2025" },
];

export default function SalaryRevisions() {
    return (
        <Card className="rounded-2xl h-full shadow-md p-4">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Salary Revisions</CardTitle>
                <p className="text-sm font-semibold text-[#b38b00]">
                    Total 5
                </p>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col divide-y">
                    {employers.map((emp) => (
                        <div
                            key={emp.id}
                            className="flex items-center justify-between py-3"
                        >
                            <div>
                                <p className="font-semibold text-sm">{emp.id} | {emp.name}</p>
                                {emp.date && (
                                    <p className="text-xs text-gray-500">{emp.date}</p>
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
