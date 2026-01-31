"use client";

import { useState } from "react";
import {
    Search,
    Filter,
    Calendar,
    MapPin,
    Phone,
    CheckCircle2,
    XCircle,
    Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const orders = [
    {
        id: "ORD-1234",
        client: "ياسين الإدريسي",
        service: "إصلاح تسرب مياه",
        date: "2024-02-01",
        time: "10:00 AM",
        address: "حي الرياض، الرباط",
        status: "PENDING",
        price: "250 DH"
    },
    {
        id: "ORD-1235",
        client: "فاطمة الزهراء",
        service: "تركيب سخان كهربائي",
        date: "2024-02-02",
        time: "02:00 PM",
        address: "المعاريف، الدار البيضاء",
        status: "ACCEPTED",
        price: "400 DH"
    },
    {
        id: "ORD-1236",
        client: "محمد بناني",
        service: "صيانة عامة",
        date: "2024-01-30",
        time: "09:00 AM",
        address: "المنارة، مراكش",
        status: "COMPLETED",
        price: "600 DH"
    }
];

export default function ArtisanOrdersPage() {
    const [activeTab, setActiveTab] = useState("ALL");

    const filteredOrders = activeTab === "ALL"
        ? orders
        : orders.filter(o => o.status === activeTab);

    return (
        <div className="space-y-8 font-cairo">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">إدارة الطلبات</h1>
                    <p className="text-text-muted">تواصل مع زبنائك وحدث حالة عملك.</p>
                </div>
                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="بحث في الطلبات..."
                            className="bg-white/5 border border-white/10 rounded-xl pr-10 pl-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none transition-all w-full md:w-64"
                        />
                    </div>
                    <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-text-muted hover:text-white transition-all">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-white/5 pb-1 overflow-x-auto no-scrollbar">
                {["ALL", "PENDING", "ACCEPTED", "COMPLETED", "CANCELLED"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "px-6 py-3 text-sm font-bold transition-all border-b-2 whitespace-nowrap",
                            activeTab === tab
                                ? "border-primary text-primary"
                                : "border-transparent text-text-muted hover:text-white"
                        )}
                    >
                        {tab === "ALL" ? "الكل" :
                            tab === "PENDING" ? "في الانتظار" :
                                tab === "ACCEPTED" ? "مقبول" :
                                    tab === "COMPLETED" ? "مكتمل" : "ملغى"}
                    </button>
                ))}
            </div>

            {/* Orders Grid */}
            <div className="grid grid-cols-1 gap-6">
                {filteredOrders.map((order) => (
                    <div key={order.id} className="glass p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="text-xs font-bold text-primary font-inter uppercase tracking-widest">{order.id}</div>
                                <div className={cn(
                                    "text-xs font-bold px-3 py-1 rounded-full",
                                    order.status === "PENDING" ? "bg-yellow-500/10 text-yellow-500" :
                                        order.status === "ACCEPTED" ? "bg-blue-500/10 text-blue-500" :
                                            order.status === "COMPLETED" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                                )}>
                                    {order.status === "PENDING" ? "قيد الانتظار" :
                                        order.status === "ACCEPTED" ? "تم القبول" :
                                            order.status === "COMPLETED" ? "مكتمل" : "ملغى"}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white">{order.service}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-sm text-text-muted">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span>{order.date} • {order.time}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text-muted">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>{order.address}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white font-bold pt-2">
                                <span>الزبون:</span>
                                <span className="text-primary">{order.client}</span>
                            </div>
                        </div>

                        <div className="w-full md:w-auto flex flex-col gap-3 min-w-[200px]">
                            <div className="text-center md:text-left mb-2">
                                <div className="text-xs text-text-muted mb-1 uppercase tracking-wider">السعر المتوقع</div>
                                <div className="text-2xl font-bold text-white font-inter">{order.price}</div>
                            </div>
                            {order.status === "PENDING" && (
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-primary hover:bg-secondary text-background font-bold py-2.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        قبول
                                    </button>
                                    <button className="flex-1 bg-white/5 hover:bg-red-500/10 text-red-400 font-bold py-2.5 rounded-xl border border-white/10 transition-all text-sm flex items-center justify-center gap-2">
                                        <XCircle className="w-4 h-4" />
                                        رفض
                                    </button>
                                </div>
                            )}
                            {order.status === "ACCEPTED" && (
                                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    إكمال الخدمة
                                </button>
                            )}
                            <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-2.5 rounded-xl border border-white/10 transition-all text-sm flex items-center justify-center gap-2">
                                <Phone className="w-4 h-4" />
                                اتصال بالزبون
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
