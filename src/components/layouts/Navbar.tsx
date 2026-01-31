"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="text-2xl font-bold text-primary font-cairo tracking-tight">
                            HRFA<span className="text-white">.MA</span>
                        </Link>
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text-muted">
                            <Link href="/search" className="hover:text-white transition-colors">ابحث عن حرفي</Link>
                            <Link href="/trades" className="hover:text-white transition-colors">المهن</Link>
                            <Link href="/about" className="hover:text-white transition-colors">عن المنصة</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {session ? (
                            <div className="flex items-center gap-4">
                                <Link
                                    href={`/dashboard/${session.user.role.toLowerCase()}`}
                                    className="text-sm font-medium text-white hover:text-primary transition-colors"
                                >
                                    لوحة التحكم
                                </Link>
                                <button
                                    onClick={() => signOut()}
                                    className="text-sm font-medium text-text-muted hover:text-red-400 transition-colors"
                                >
                                    خروج
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link href="/login" className="text-sm font-medium text-white hover:text-primary transition-colors">
                                    دخول
                                </Link>
                                <Link
                                    href="/register?type=client"
                                    className="bg-primary hover:bg-secondary text-background px-4 py-2 rounded-lg text-sm font-bold transition-all"
                                >
                                    ابدأ الآن
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
