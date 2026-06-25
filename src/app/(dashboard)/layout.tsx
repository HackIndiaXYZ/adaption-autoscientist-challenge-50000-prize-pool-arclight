"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, CalendarCheck, BarChart3, TrendingUp, Settings, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Hide sidebar on the onboarding wizard
  if (pathname === "/onboard") {
    return <div className="flex-1 w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black min-h-screen">{children}</div>;
  }

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: Bot },
    { name: "Brand DNA", href: "/business/1", icon: ChevronRight },
    { name: "Content Calendar", href: "/business/1/calendar", icon: CalendarCheck },
    { name: "Weekly Pulse", href: "/business/1/pulse", icon: TrendingUp },
    { name: "Analytics & ROI", href: "/business/1/analytics", icon: BarChart3 },
    { name: "Settings", href: "#", icon: Settings },
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-black overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl flex flex-col">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3 p-2 bg-white/5 rounded-xl border border-white/10">
            <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-lg font-bold shadow-lg">☕</div>
            <div className="flex-1 overflow-hidden">
              <h3 className="font-bold text-sm truncate text-white">Chandigarh Coffee Co.</h3>
              <p className="text-xs text-gray-500 truncate">Free Plan</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">BrandPilot Modules</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black p-8">
        {children}
      </main>
    </div>
  );
}
