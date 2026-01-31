"use client";

import {
    Users,
    ShieldCheck,
    Map,
    AlertCircle,
    ArrowUpRight,
    MoreVertical,
    Check,
    X
} from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { name: "إجمالي المستخدمين", value: "1,420", change: "+12%", icon: Users },
        { name: "حرفيون موثقون", value: "85", change: "+5%", icon: ShieldCheck },
        { name: "المدن المغطاة", value: "12", change: "0%", icon: Map },
        { name: "بلاغات معلقة", value: "4", change: "-2%", icon: AlertCircle },
    ];

    return (
        <div className="space-y-10 font-cairo" dir="rtl">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">لوحة تحكم الإدارة</h1>
                <p className="text-text-muted">نظرة عامة على أداء المنصة وإدارة المحتوى.</p>
            </header>

            {/* Admin Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="glass p-6 rounded-3xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-white/5 rounded-2xl text-primary">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                                {stat.change}
                                <ArrowUpRight className="w-3 h-3" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1 font-inter">{stat.value}</div>
                        <div className="text-xs text-text-muted">{stat.name}</div>
                    </div>
                ))}
            </div>

            {/* Artisan Moderation Table */}
            <div className="glass rounded-3xl overflow-hidden border-white/5">
                <div className="p-8 border-b border-white/5 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">طلبات توثيق الحرفيين</h3>
                    <button className="text-xs text-primary hover:underline font-bold">عرض الكل</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-right border-collapse">
                        <thead>
                            <tr className="bg-white/5 text-[11px] text-text-muted uppercase tracking-wider">
                                <th className="px-8 py-4 font-bold">الحرفي</th>
                                <th className="px-8 py-4 font-bold">المهنة</th>
                                <th className="px-8 py-4 font-bold">المدينة</th>
                                <th className="px-8 py-4 font-bold">تاريخ الطلب</th>
                                <th className="px-8 py-4 font-bold">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[1, 2, 3].map((i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                {i === 1 ? "أح" : i === 2 ? "عث" : "مج"}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">أحمد العلمي</div>
                                                <div className="text-[10px] text-text-muted font-inter">ahmed@example.ma</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-text-muted">صباغة عصرية</td>
                                    <td className="px-8 py-6 text-text-muted">طنجة</td>
                                    <td className="px-8 py-6 text-text-muted font-inter">2024-02-01</td>
                                    <td className="px-8 py-6">
                                        <div className="flex gap-2">
                                            <button className="p-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all">
                                                <Check className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                                                <X className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 bg-white/5 text-text-muted rounded-lg hover:text-white transition-all">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
