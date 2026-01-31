export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 py-12" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-primary font-cairo mb-4">HRFA.MA</h3>
                        <p className="text-text-muted text-sm leading-relaxed font-cairo">
                            المنصة المغربية الرائدة لربط الزبناء مع أمهر الحرفيين في مختلف المجالات المنزلية والمهنية.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4 font-cairo">المهن الشائعة</h4>
                        <ul className="space-y-2 text-sm text-text-muted font-cairo">
                            <li>سباكة (Plumbing)</li>
                            <li>كهرباء (Electricity)</li>
                            <li>صباغة (Painting)</li>
                            <li>نجارة (Carpentry)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4 font-cairo">روابط سريعة</h4>
                        <ul className="space-y-2 text-sm text-text-muted font-cairo">
                            <li>من نحن</li>
                            <li>كيف يعمل الموقع</li>
                            <li>الشروط والأحكام</li>
                            <li>اتصل بنا</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4 font-cairo">تواصل معنا</h4>
                        <p className="text-sm text-text-muted font-cairo mb-4">
                            اشترك في القائمة البريدية للحصول على آخر التحديثات.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                            />
                            <button className="bg-primary text-background px-4 py-2 rounded-lg text-sm font-bold">
                                اشترك
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-text-muted font-cairo">
                    © {new Date().getFullYear()} HRFA.MA. جميع الحقوق محفوظة.
                </div>
            </div>
        </footer>
    );
}
