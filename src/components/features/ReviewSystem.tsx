"use client";

import { useState } from "react";
import { Star, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ReviewSystem({ orderId }: { orderId: string }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="glass p-12 rounded-3xl text-center space-y-6 animate-in zoom-in-95 duration-500 max-w-2xl mx-auto font-cairo">
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold text-white">شكراً لتقييمك!</h2>
                <p className="text-text-muted">
                    مشاركتك تساعدنا على تحسين جودة الخدمات في مغربنا.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto py-12 px-4 font-cairo" dir="rtl">
            <div className="glass p-8 rounded-3xl space-y-8">
                <header className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">كيف كانت تجربتك؟</h2>
                    <p className="text-text-muted">قيم عمل الحرفي وساعد الآخرين في الاختيار.</p>
                </header>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Star Selection */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                    onClick={() => setRating(star)}
                                    className="transition-transform hover:scale-125 focus:outline-none"
                                >
                                    <Star
                                        className={cn(
                                            "w-10 h-10 transition-all duration-200",
                                            (hover || rating) >= star
                                                ? "text-yellow-400 fill-current drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                                                : "text-gray-700"
                                        )}
                                    />
                                </button>
                            ))}
                        </div>
                        <span className="text-lg font-bold text-white">
                            {rating === 1 ? "سيء" :
                                rating === 2 ? "مقبول" :
                                    rating === 3 ? "جيد" :
                                        rating === 4 ? "جيد جداً" :
                                            rating === 5 ? "ممتاز" : "حدد تقييمك"}
                        </span>
                    </div>

                    {/* Comment Input */}
                    <div className="space-y-4">
                        <label className="text-sm font-bold text-white flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-primary" />
                            أضف تعليقك (اختياري)
                        </label>
                        <textarea
                            rows={4}
                            placeholder="اكتب تجربتك هنا بكل صدق..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2 p-4 bg-primary/5 border border-primary/10 rounded-xl text-[11px] text-primary">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span>تقييمك سيكون عاماً وسيساعد الحرفي على بناء سمعته المهنية.</span>
                    </div>

                    <button
                        type="submit"
                        disabled={rating === 0}
                        className="w-full bg-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary text-background font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/20"
                    >
                        نشر التقييم
                    </button>
                </form>
            </div>
        </div>
    );
}
