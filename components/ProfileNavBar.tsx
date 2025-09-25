"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "../app/globals.css";

export default function ProfileNavbar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Feed", href: "/feed" },
        { label: "Requests", href: "/requests" },
        { label: "Leave", href: "/leave" },
        { label: "Attendance & Shift", href: "/profile" },
        { label: "Files", href: "/files" },
        { label: "Help Disk", href: "/helpDisk" },
    ];

    return (
        <header className="h-12 bg-[#f4ede3] flex items-center m-0">
            <div className="border-b border-gray-300" >
                <nav className="hidden lg:flex items-center space-x-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`relative text-xs uppercase font-medium px-2 py-2 ${pathname === item.href
                                ? "text-[#715C00] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-[#715C00]"
                                : "text-[#333333]"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
