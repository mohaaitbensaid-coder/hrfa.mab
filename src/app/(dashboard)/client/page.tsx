import {
    ClipboardList,
    MapPin,
    Star,
    History,
    Heart
} from "lucide-react";

export default function ClientDashboard() {
    const stats = [
        { name: "طلبات جارية", value: "2", icon: ClipboardList, color: "text-blue-400" },
        { name: "طلبات مكتملة", value: "12", icon: History, color: "text-green-400" },
        { name: "المفضلة", value: "5", icon: Heart, color: "text-red-400" },
    ];

    return (
        <div className="space-y-8 font-cairo">
            <header>
                <h1 className="text-3xl font-bold text-white mb-2">مرحباً، يا زبون!</h1>
                <p className="text-text-muted">تتبع طلباتك الحالية وإدارتها بكل سهولة.</p>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                {/* Active Orders Section */}
                <div className="glass p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">الطلبات الجارية</h3>
                    </div>
                    <div className="space-y-4">
                        {[1, 2].map((i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-bold text-white">إصلاح عطب كهربائي</div>
                                    <div className="text-xs font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-500">
                                        قيد التنفيذ
                                    </div>
                                </div>
                                <div className="flex items-center text-xs text-text-muted gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>الرباط، حسان</span>
                                </div>
                                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                                    <div className="text-xs text-white">الحرفي: <span className="text-primary font-bold">ياسين ن.</span></div>
                                    <button className="text-xs text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-all">
                                        تواصل
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Favorite Artisans */}
                <div className="glass p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white">الحرفيون المفضلون</h3>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-gray-800 border border-white/10 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-primary">
                                        <Star className="w-6 h-6 fill-current" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white font-inter">Mohamed S.</div>
                                    <div className="text-xs text-text-muted">سباك محترف • الدار البيضاء</div>
                                </div>
                                <div className="text-yellow-400 flex items-center gap-1">
                                    <span className="text-xs font-bold font-inter">4.9</span>
                                    <Star className="w-3 h-3 fill-current" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
