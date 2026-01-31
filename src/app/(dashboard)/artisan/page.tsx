import {
    ClipboardList,
    Wallet,
    Star,
    TrendingUp,
    Clock
} from "lucide-react";

export default function ArtisanDashboard() {
    const stats = [
        { name: "إجمالي الطلبات", value: "24", icon: ClipboardList, color: "text-blue-400" },
        { name: "الرصيد الحالي", value: "1,250 DH", icon: Wallet, color: "text-green-400" },
        { name: "متوسط التقييم", value: "4.8", icon: Star, color: "text-yellow-400" },
        { name: "ساعات العمل", value: "120h", icon: TrendingUp, color: "text-primary" },
    ];

    return (
        <div className="space-y-8 font-cairo">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">مرحباً، يا حرفي!</h1>
                <p className="text-text-muted">إليك نظرة سريعة على أدائك وطلباتك اليوم.</p>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="glass p-6 rounded-2xl hover:border-primary/20 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-text-muted">{stat.name}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Orders Section */}
                <div className="glass p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">الطلبات الأخيرة</h3>
                        <button className="text-sm text-primary hover:underline">عرض الكل</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">طلب صيانة سباكة</div>
                                    <div className="text-xs text-text-muted">منذ 3 ساعات • الدار البيضاء</div>
                                </div>
                                <div className="text-xs font-bold px-2 py-1 rounded bg-yellow-500/10 text-yellow-500">
                                    قيد الانتظار
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reviews Summary */}
                <div className="glass p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">آخر التقييمات</h3>
                        <button className="text-sm text-primary hover:underline">عرض الكل</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2].map((i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm font-bold text-white font-inter">Ahmed K.</div>
                                    <div className="flex text-yellow-400">
                                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-current" />)}
                                    </div>
                                </div>
                                <p className="text-xs text-text-muted leading-relaxed">
                                    "عمل ممتاز وسريع جداً. الحرفي كان محترفاً وخلوقاً. أنصح بالتعامل معه."
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
