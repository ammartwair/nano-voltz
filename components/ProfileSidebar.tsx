"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "../app/globals.css";

const reporters = [
    { name: "Noor Hassan", role: "Finance Controller" },
    { name: "Sharif Alaa", role: "Software Engineer" },
    { name: "Ahmed Tamer", role: "Product Manager" },
    { name: "Sara Khaled", role: "UX Designer" },
    { name: "Omar Youssef", role: "Data Analyst" },
];

export default function ProfileSidebar() {
    return (
        <div className="space-y-6">
            {/* Profile Card */}
            <Card className="rounded-2xl shadow-md p-6">
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/images/Salma.png"
                        alt="Salma Sakr"
                        width={80}
                        height={80}
                        className="rounded-full object-cover mb-3 border border-gray-300"
                    />
                    <h3 className="text-lg font-semibold">Salma Sakr</h3>
                    <p className="text-sm text-gray-500">CEO at</p>
                    <p className="text-sm text-gray-500 mb-3">
                        nanoVoltz Smart System Development L.L.C
                    </p>
                    <Button className="bg-[#6b6b2f] cursor-pointer hover:bg-[#555522] text-white text-xs rounded-md">
                        Update My Profile
                    </Button>
                </div>
            </Card>

            {/* Reportees List */}
            <div className="space-y-4">
                <h4 className="text-lg font-semibold">Reportees</h4>
                <div className="space-y-3">
                    {reporters.map((reporter, index) => (
                        <div
                            key={index}
                            className="flex items-center rounded-lg border shadow-sm overflow-hidden"
                        >
                            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                                400x400
                            </div>
                            <div className="flex flex-col px-3 py-2">
                                <p className="text-sm font-medium text-gray-800">
                                    {reporter.name}
                                </p>
                                <p className="text-xs text-gray-500">{reporter.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}