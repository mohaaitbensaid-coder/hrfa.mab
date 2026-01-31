"use client";

import {
    Star,
    MapPin,
    CheckCircle2,
    MessageCircle,
    Calendar,
    Image as ImageIcon,
    Clock,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function ArtisanProfilePage({ params }: { params: { id: string } }) {
    // Mock data for the artisan
    const artisan = {
        name: "ياسين الإدريسي",
        trade: "سباكة وكهرباء",
        city: "الدار البيضاء",
        rating: 4.9,
        reviewsCount: 156,
        ordersCount: 420,
        experience: "12 سنة من الخبرة",
        bio: "محترف في صيانة جميع أنواع السباكة المنزلية والصناعية. متخصص في إصلاح التسربات الخفية وتركيب أنظمة التدفئة المركزية. نعمل بجودة عالية وأسعار معقولة.",
        isVerified: true,
        isAvailable: true,
        portfolio: [1, 2, 3, 4],
        reviews: [
            { id: "r1", user: "أمين ب.", rating: 5, comment: "عمل متقن وسرعة في الحضور. أنصح به بشدة.", date: "منذ أسبوع" },
            { id: "r2", user: "سارة م.", rating: 4, comment: "خدمة جيدة جداً، السعر كان مناسباً.", date: "منذ أسبوعين" }
        ]
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 font-cairo" dir="rtl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Info & Booking */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Header Info */}
                    <div className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-right">
                        <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center text-primary relative">
                            <div className="text-4xl font-bold font-inter">YI</div>
                            {artisan.isAvailable && (
                                <div className="absolute -bottom-1 -right-1 bg-green-500 text-[10px] text-background font-bold px-2 py-0.5 rounded-full border-2 border-background">
                                    متاح الآن
                                </div>
                            )}
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                                        {artisan.name}
                                        {artisan.isVerified && <ShieldCheck className="w-6 h-6 text-primary" />}
                                    </h1>
                                    <p className="text-primary font-bold text-lg">{artisan.trade}</p>
                                </div>
                                <div className="flex gap-3 justify-center">
                                    <button className="bg-primary hover:bg-secondary text-background font-bold py-3 px-8 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        اطلب الخدمة
                                    </button>
                                    <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-green-400 hover:bg-green-400/10 transition-all shadow-lg">
                                        <MessageCircle className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-2 text-text-muted">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span className="text-sm">{artisan.city}</span>
                                </div>
                                <div className="flex items-center gap-2 text-text-muted">
                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                    <span className="text-sm font-bold text-white font-inter">{artisan.rating}</span>
                                    <span className="text-xs">({artisan.reviewsCount} تقييم)</span>
                                </div>
                                <div className="flex items-center gap-2 text-text-muted">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span className="text-sm">{artisan.ordersCount} طلب مكتمل</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About & Portfolio */}
                    <div className="space-y-8">
                        <section>
                            <h3 className="text-xl font-bold text-white mb-4">نبذة عن الحرفي</h3>
                            <p className="text-text-muted leading-relaxed text-base italic">"{artisan.bio}"</p>
                        </section>

                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <ImageIcon className="w-5 h-5 text-primary" />
                                    معرض الأعمال
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {artisan.portfolio.map((i) => (
                                    <div key={i} className="aspect-square glass rounded-2xl bg-white/5 hover:border-primary/30 transition-all group overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:scale-110 transition-transform">
                                            <ImageIcon className="w-10 h-10" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Right Column: Experience & Trust */}
                <div className="space-y-8">
                    <div className="glass p-8 rounded-3xl space-y-6 border-primary/10">
                        <h3 className="text-lg font-bold text-white border-b border-white/5 pb-4">معلومات تجارية</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted">الخبرة المهنية</div>
                                    <div className="text-sm font-bold text-white">{artisan.experience}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted">رقم التحقق</div>
                                    <div className="text-sm font-bold text-white font-inter">ID: 88721-MA</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Summary List */}
                    <div className="glass p-8 rounded-3xl space-y-6">
                        <h3 className="text-lg font-bold text-white border-b border-white/5 pb-4">تقييمات الزبناء</h3>
                        <div className="space-y-6">
                            {artisan.reviews.map((review) => (
                                <div key={review.id} className="space-y-2 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-bold text-white">{review.user}</span>
                                        <div className="flex text-yellow-400">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} className={`w-3 h-3 ${s <= review.rating ? "fill-current" : "opacity-30"}`} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-text-muted leading-relaxed">"{review.comment}"</p>
                                    <div className="text-[10px] text-gray-600 text-left">{review.date}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
