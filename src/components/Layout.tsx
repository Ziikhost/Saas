import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Target, 
  Settings, 
  LogOut, 
  Sparkles,
  Search,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Content Lab', path: '/content-lab' },
    { icon: Target, label: 'Strategy', path: '/strategy' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#e5e7eb] bg-white flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">Lumina</span>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-[#f3f4f6] text-black"
                  : "text-[#6b7280] hover:text-black hover:bg-[#f9fafb]"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[#e5e7eb]">
          <Button variant="ghost" className="w-full justify-start gap-3 text-[#ef4444] hover:text-[#ef4444] hover:bg-[#fef2f2]">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-bottom border-[#e5e7eb] bg-white flex items-center justify-between px-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" />
            <input 
              type="text" 
              placeholder="Search content, strategies..." 
              className="w-full pl-10 pr-4 py-2 bg-[#f3f4f6] border-none rounded-full text-sm focus:ring-2 focus:ring-black outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="w-5 h-5 text-[#4b5563]" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-semibold">Alex Rivera</p>
                <p className="text-xs text-[#6b7280]">Pro Plan</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#e5e7eb] border border-[#d1d5db]" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
