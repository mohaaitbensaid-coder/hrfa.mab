"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    User,
    ClipboardList,
    Wallet,
    Star,
    Settings,
    Image as ImageIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const artisanLinks = [
    { name: "لوحة التحكم", href: "/dashboard/artisan", icon: LayoutDashboard },
    { name: "الطلبات", href: "/dashboard/artisan/orders", icon: ClipboardList },
    { name: "الملف الشخصي", href: "/dashboard/artisan/profile", icon: User },
    { name: "معرض الأعمال", href: "/dashboard/artisan/portfolio", icon: ImageIcon },
    { name: "المحفظة", href: "/dashboard/artisan/earnings", icon: Wallet },
    { name: "التقييمات", href: "/dashboard/artisan/reviews", icon: Star },
    { name: "الإعدادات", href: "/dashboard/artisan/settings", icon: Settings },
];

export default function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 bg-background border-l border-white/10 flex flex-col h-full sticky top-0" dir="rtl">
            <div className="p-6">
                <h2 className="text-xl font-bold text-primary font-cairo">لوحة التحكم</h2>
            </div>
            <nav className="flex-1 px-4 space-y-1">
                {artisanLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-cairo text-sm font-medium",
                                isActive
                                    ? "bg-primary text-background shadow-lg shadow-primary/20"
                                    : "text-text-muted hover:text-white hover:bg-white/5"
                            )}
                        >
                            <link.icon className="w-5 h-5" />
                            <span>{link.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
