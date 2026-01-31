"use client";

import Link from "next/link";
import { Search, MapPin, Star, Shield, Zap } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col w-full" dir="rtl">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-20 px-4 overflow-hidden">
                {/* Abstract Background Design */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-cairo leading-tight mb-6">
                        احصل على <span className="text-primary italic">أفضل الخدمات</span> <br />
                        بلمسة واحدة في المغرب
                    </h1>
                    <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 font-cairo leading-relaxed">
                        نربطك بأمهر الحرفيين ومقدمي الخدمات المحليين في مدينتك. جودة عالية، سرعة في التنفيذ، وأمان تام.
                    </p>

                    {/* Search Box */}
                    <div className="relative max-w-4xl mx-auto glass p-2 rounded-2xl flex flex-col md:flex-row gap-2 items-center">
                        <div className="flex-1 flex items-center pr-4 border-l border-white/10 md:mb-0 mb-2 w-full">
                            <Search className="text-primary w-5 h-5 ml-3" />
                            <input
                                type="text"
                                placeholder="عن أي خدمة تبحث؟ (سباك، كهربائي...)"
                                className="bg-transparent border-none text-white focus:ring-0 w-full placeholder:text-gray-500 font-cairo text-sm"
                            />
                        </div>
                        <div className="flex-1 flex items-center pr-4 w-full">
                            <MapPin className="text-primary w-5 h-5 ml-3" />
                            <select className="bg-transparent border-none text-white focus:ring-0 w-full font-cairo text-sm appearance-none">
                                <option value="">كل المدن</option>
                                <option value="casablanca">الدار البيضاء</option>
                                <option value="rabat">الرباط</option>
                                <option value="marrakech">مراكش</option>
                                <option value="tangier">طنجة</option>
                            </select>
                        </div>
                        <button className="bg-primary hover:bg-secondary text-background font-bold py-3 px-10 rounded-xl transition-all w-full md:w-auto font-cairo">
                            بحث
                        </button>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">+10,000</div>
                            <div className="text-xs text-text-muted font-cairo uppercase tracking-wider">زبون سعيد</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">+2,500</div>
                            <div className="text-xs text-text-muted font-cairo uppercase tracking-wider">حرفي مؤهل</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">+50</div>
                            <div className="text-xs text-text-muted font-cairo uppercase tracking-wider">مدينة مغطاة</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white font-cairo mb-4">لماذا تختار HRFA.MA؟</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-2xl hover:border-primary/30 transition-all group">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background transition-all">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-cairo">أمان وثقة</h3>
                            <p className="text-text-muted font-cairo text-sm leading-relaxed">
                                جميع الحرفيين يتم التحقق من هويتهم وكفاءتهم لضمان تجربة آمنة وموثوقة لكل المستخدمين.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-2xl hover:border-primary/30 transition-all group">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background transition-all">
                                <Star className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-cairo">جودة عالية</h3>
                            <p className="text-text-muted font-cairo text-sm leading-relaxed">
                                نحرص على توفير أفضل المهارات لضمان نتائج متميزة ترقى لتطلعاتكم في كل مهمة.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-2xl hover:border-primary/30 transition-all group">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background transition-all">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-cairo">سرعة الاستجابة</h3>
                            <p className="text-text-muted font-cairo text-sm leading-relaxed">
                                اعثر على الحرفي المناسب في دقائق معدودة وابدأ العمل فوراً دون أي تعقيدات.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 overflow-hidden relative">
                <div className="max-w-5xl mx-auto glass p-12 rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 -skew-x-12 transform scale-150 pointer-events-none" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-cairo mb-6 relative z-10">
                        هل أنت حرفي موهوب؟ <br />
                        <span className="text-primary italic">انضم إلى مجتمعنا اليوم</span>
                    </h2>
                    <p className="text-text-muted mb-10 max-w-xl mx-auto font-cairo relative z-10 font-bold">
                        ضاعف مداخيلك وابدأ في استقبال طلبات حقيقية من زبناء يبحثون عن مهاراتك في مدينتك.
                    </p>
                    <Link
                        href="/register?type=artisan"
                        className="inline-block bg-primary hover:bg-secondary text-background font-bold py-4 px-12 rounded-2xl transition-all shadow-lg shadow-primary/20 relative z-10 font-cairo text-lg"
                    >
                        سجل كحرفي الآن
                    </Link>
                </div>
            </section>
        </div>
    );
}
