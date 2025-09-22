"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Moon, Palette, Search } from "lucide-react";
import "../app/globals.css";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/" },
        { label: "Employees", href: "/employees" },
        { label: "Pay Runs", href: "/pay-runs" },
        { label: "Revisions", href: "/revisions" },
        { label: "Loans", href: "/loans" },
        { label: "Settings", href: "/settings" },
    ];

    return (
        <header className="h-16 bg-[#f4ede3] border-b border-gray-200 flex items-center px-6 shadow-sm">
            <div className="flex items-center space-x-8">
                <h1 className="text-xl font-semibold text-[#171717]">
                    Nano Voltz
                </h1>
                <nav className="flex items-center space-x-6 ml-5">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`text-sm font-medium ${pathname === item.href
                                ? "text-[#1e40af] border-b-2 border-[#1e40af]"
                                : "text-[#333333]"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="flex items-center space-x-6 ml-auto">
                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-text hover:text-blue-600" size={18} />
                </div>
                <button className="text-gray-600 hover:text-blue-600 cursor-pointer">
                    <Moon size={20} />
                </button>
                <button className="text-gray-600 hover:text-blue-600 cursor-pointer">
                    <Palette size={20} />
                </button>

                <div className="flex items-center space-x-2">
                    <span className="font-medium text-[#333333]">Ammar</span>
                    <Link
                        href="/profile"
                        className="w-10 h-10 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                        <span className="text-[#171717] cursor-pointer hover:text-blue-600">A</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
