"use client";

import { useState } from "react";
import {
    Plus,
    Search,
    Settings2,
    Trash2,
    Edit3,
    Image as ImageIcon
} from "lucide-react";

export default function TradeManagement() {
    const [trades, setTrades] = useState([
        { id: "1", nameAr: "سباكة", nameFr: "Plumbing", icon: "Droplets", status: "ACTIVE", count: 45 },
        { id: "2", nameAr: "كهرباء", nameFr: "Electricity", icon: "Zap", status: "ACTIVE", count: 32 },
        { id: "3", nameAr: "نجارة", nameFr: "Carpentry", icon: "Hammer", status: "ACTIVE", count: 28 },
        { id: "4", nameAr: "صباغة", nameFr: "Painting", icon: "Palette", status: "DRAFT", count: 0 },
    ]);

    return (
        <div className="space-y-8 font-cairo" dir="rtl">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">إدارة المهن والمجالات</h1>
                    <p className="text-text-muted">أضف، عدل، أو عطل التصنيفات المتوفرة على المنصة.</p>
                </div>
                <button className="bg-primary hover:bg-secondary text-background font-bold py-3 px-6 rounded-2xl transition-all flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    إضافة مهنة جديدة
                </button>
            </header>

            {/* Trades Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trades.map((trade) => (
                    <div key={trade.id} className="glass p-6 rounded-3xl group hover:border-primary/20 transition-all">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                                <ImageIcon className="w-6 h-6" />
                            </div>
                            <div className={cn(
                                "text-[10px] font-bold px-2 py-0.5 rounded-full",
                                trade.status === "ACTIVE" ? "bg-green-400/10 text-green-400" : "bg-gray-400/10 text-gray-400"
                            )}>
                                {trade.status === "ACTIVE" ? "مفعل" : "مسودة"}
                            </div>
                        </div>
                        <div className="space-y-1 mb-6">
                            <h3 className="text-xl font-bold text-white">{trade.nameAr}</h3>
                            <p className="text-xs text-text-muted font-inter">{trade.nameFr}</p>
                        </div>
                        <div className="flex items-center justify-between border-t border-white/5 pt-4">
                            <span className="text-xs text-text-muted font-bold">{trade.count} حرفي</span>
                            <div className="flex gap-1">
                                <button className="p-2 text-text-muted hover:text-white transition-colors">
                                    <Edit3 className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-text-muted hover:text-red-400 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cities Management Card */}
            <div className="glass p-8 rounded-3xl border-white/5">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-white">إدارة المدن</h3>
                    <div className="relative">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="بحث في المدن..."
                            className="bg-white/5 border border-white/10 rounded-xl pr-10 pl-4 py-2 text-sm text-white focus:ring-1 focus:ring-primary outline-none w-48"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-3">
                    {["الدار البيضاء", "الرباط", "مراكش", "طنجة", "فاس", "أكادير"].map((city) => (
                        <div key={city} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm text-white flex items-center gap-3 group">
                            {city}
                            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400">
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                    <button className="border border-dashed border-white/20 px-4 py-2 rounded-xl text-sm text-text-muted hover:border-primary hover:text-primary transition-all flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        إضافة مدينة
                    </button>
                </div>
            </div>
        </div>
    );
}

// Simple X icon
function X(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

// Simple CN helper for this file
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
