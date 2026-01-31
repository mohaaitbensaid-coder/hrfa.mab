import DashboardSidebar from "@/components/layouts/DashboardSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background" dir="rtl">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col">
                <main className="p-8 pb-20">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
