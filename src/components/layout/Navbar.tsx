/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bot } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            BrandPilot<span className="text-blue-500">.ai</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className={cn(buttonVariants({ variant: "ghost" }), "text-gray-300 hover:text-white")}>
            Dashboard
          </Link>
          <div className="ml-4 h-6 w-px bg-white/10" />
          <Link href="/login" className={cn(buttonVariants({ variant: "ghost" }), "text-gray-300 hover:text-white")}>
            Log in
          </Link>
          <Link href="/signup" className={cn(buttonVariants({ className: "bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]" }))}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
