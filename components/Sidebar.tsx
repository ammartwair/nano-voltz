"use client";

import {
    Users,
    Menu,
    CarFront,
    CircleAlert,
    ClipboardCheckIcon,
    Wallet,
    ShoppingCartIcon,
    CircleDollarSign,
    UserRoundPlus,
    Truck,
} from "lucide-react";
import Link from "next/link";
import "../app/globals.css";


const navItems = [
    { href: "/", icon: Menu, label: "Menu" },
    { href: "/FleetManagement", icon: CarFront, label: "Fleet Management" },
    { href: "/hr", icon: Users, label: "HR" },
    { href: "/reports", icon: CircleAlert, label: "PMV Maintenance" },
    { href: "/pmv-hiring", icon: ClipboardCheckIcon, label: "PMV Hiring" },
    { href: "/finance", icon: Wallet, label: "Finance & Costing" },
    { href: "/procurement", icon: ShoppingCartIcon, label: "Procurement & Inventory" },
    { href: "/payroll", icon: CircleDollarSign, label: "Payroll" },
    { href: "/hiring", icon: UserRoundPlus, label: "Hiring" },
    { href: "/projects", icon: Truck, label: "Projects" },
];

export default function Sidebar() {
    return (
        <aside className="h-screen bg-[#f4ede3] w-20 shadow-md flex flex-col items-center py-6 space-y-8">
            <nav className="flex flex-col items-center space-y-6 text-gray-600">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <item.icon size={20} />
                        <span className="text-[10px] mt-1 text-center">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
