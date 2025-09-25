"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Moon, Palette, Search, Menu } from "lucide-react";
import { useState } from "react";
import "../app/globals.css";
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: "Dashboard", href: "/" },
        { label: "Employees", href: "/employees" },
        { label: "Pay Runs", href: "/pay-runs" },
        { label: "Revisions", href: "/revisions" },
        { label: "Loans", href: "/loans" },
        { label: "Settings", href: "/settings" },
    ];
    const profNavItems = [
        { label: "Dashboard", href: "/" },
        { label: "Me", href: "/profile" },
        { label: "Department", href: "/department" },
        { label: "Organization", href: "/organization" },
    ];

    return (
        <header className="h-16 bg-[#f4ede3] border-b border-gray-200 flex items-center px-4 lg:px-6 shadow-sm">
            {/* Left side: Logo + Menu toggle */}
            <div className="flex items-center flex-shrink-0">
                <button
                    className="lg:hidden mr-3 text-gray-600 hover:text-blue-600"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Menu size={22} />
                </button>
                <Image
                    src="/images/nanoVoltzLogo.svg"
                    alt="Nano Voltz"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                    priority
                />
            </div>

            {/* Desktop Nav */}

            <nav className="hidden lg:flex items-center space-x-4 ml-6">
                {pathname !== "/profile" ? <>
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`text-xs uppercase navbar_menu font-medium ${pathname === item.href
                                ? "text-[#715C00] border-b-4 border-[#715C00]"
                                : "text-[#333333]"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </> : <>
                    {profNavItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`text-xs uppercase navbar_menu font-medium ${pathname === item.href
                                ? "text-[#715C00] border-b-4 border-[#715C00]"
                                : "text-[#333333]"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </>}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4 ml-auto w-full lg:w-auto">

                {/* Search: full width on mobile */}
                <div className="relative w-40 lg:w-30 xl:w-100">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />
                </div>

                <button className="hidden sm:block text-gray-600 hover:text-blue-600">
                    <Moon size={20} />
                </button>
                <button className="hidden sm:block text-gray-600 hover:text-blue-600">
                    <Palette size={20} />
                </button>

                <div className="hidden sm:flex items-center space-x-2">
                    <span className="font-medium text-[#333333]">Ammar</span>
                    <Link
                        href="/profile"
                        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#e5e5e5] flex items-center justify-center"
                    >
                        <span className="text-[#171717]">A</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#f4ede3] border-t shadow-md lg:hidden z-50">
                    <nav className="flex flex-col p-4 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-sm font-medium ${pathname === item.href ? "text-[#1e40af]" : "text-[#333333]"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
