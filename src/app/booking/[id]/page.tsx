"use client";

import { useState } from "react";
import {
    Calendar,
    MapPin,
    Clock,
    FileText,
    ChevronRight,
    ShieldCheck,
    CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookingPage({ params }: { params: { id: string } }) {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const artisan = {
        name: "ياسين الإدريسي",
        trade: "سباكة",
        price: "250 DH"
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 font-cairo" dir="rtl">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-12 max-w-md mx-auto relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2" />
                {[1, 2, 3].map((s) => (
                    <div
                        key={s}
                        className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= s ? "bg-primary text-background" : "bg-gray-800 text-text-muted"
                            }`}
                    >
                        {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Form Area */}
                <div className="lg:col-span-2">
                    {step === 1 && (
                        <div className="glass p-8 rounded-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-2xl font-bold text-white mb-6">صف لنا ما تحتاجه</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-bold text-white block mb-2">وصف المشكلة / الخدمة</label>
                                    <textarea
                                        rows={4}
                                        placeholder="مثال: لدي تسرب في أنبوب المطبخ يحتاج إصلاحاً عاجلاً..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    />
                                </div>
                                <div className="flex items-center gap-2 p-4 bg-primary/5 border border-primary/10 rounded-xl text-xs text-primary">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>توضيحك للتفاصيل يساعد الحرفي على تقديم سعر دقيق.</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setStep(2)}
                                className="w-full bg-primary hover:bg-secondary text-background font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                            >
                                المتابعة
                                <ChevronRight className="w-5 h-5 rotate-180" />
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="glass p-8 rounded-3xl space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                            <h2 className="text-2xl font-bold text-white mb-6">متى وأين؟</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm font-bold text-white block mb-2">تاريخ الزيارة</label>
                                    <div className="relative">
                                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                                        <input
                                            type="date"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl pr-12 pl-4 py-4 text-white focus:ring-1 focus:ring-primary outline-none transition-all [color-scheme:dark]"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-white block mb-2">عنوان العمل</label>
                                    <div className="relative">
                                        <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="العنوان التفصيلي في الدار البيضاء"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl pr-12 pl-4 py-4 text-white focus:ring-1 focus:ring-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex-1 bg-white/5 border border-white/10 text-white font-bold py-4 rounded-2xl hover:bg-white/10 transition-all font-cairo"
                                >
                                    رجوع
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    className="flex-[2] bg-primary hover:bg-secondary text-background font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                                >
                                    تأكيد الحجز
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="glass p-12 rounded-3xl text-center space-y-6 animate-in zoom-in-95 duration-500">
                            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-12 h-12" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">تم إرسال طلبك بنجاح!</h2>
                            <p className="text-text-muted max-w-sm mx-auto">
                                لقد توصل {artisan.name} بطلبك. ستحصل على إشعار فور قبول الحرفي للموعد.
                            </p>
                            <div className="pt-8">
                                <Link
                                    href="/dashboard/client/orders"
                                    className="bg-primary hover:bg-secondary text-background font-bold py-4 px-12 rounded-2xl transition-all inline-block"
                                >
                                    تتبع الطلب
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Summary */}
                <div className="space-y-6">
                    <div className="glass p-6 rounded-3xl border-primary/10">
                        <h3 className="text-lg font-bold text-white border-b border-white/5 pb-4 mb-4">ملخص الحجز</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted">الحرفي المختير</div>
                                    <div className="text-sm font-bold text-white">{artisan.name}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted">نوع الخدمة</div>
                                    <div className="text-sm font-bold text-white">{artisan.trade}</div>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-white/5 mt-4 flex justify-between items-center">
                                <span className="text-xs text-text-muted uppercase tracking-wider">سعر الزيارة المقدر</span>
                                <span className="text-xl font-bold text-white font-inter">{artisan.price}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl text-[11px] text-primary leading-relaxed opacity-80">
                        ملاحظة: هذا السعر يغطي فقط الزيارة والتشخيص الأولي. أي قطع غيار أو إصلاحات إضافية سيتم الاتفاق عليها مباشرة مع الحرفي.
                    </div>
                </div>

            </div>
        </div>
    );
}
