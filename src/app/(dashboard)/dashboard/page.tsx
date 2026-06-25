/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, CalendarCheck, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardOverview() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Owner</h1>
          <p className="text-gray-400">Here's what BrandPilot has been working on for Chandigarh Coffee Co.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Sparkles className="mr-2 h-4 w-4" /> Generate New Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center text-gray-400">
              <CalendarCheck className="mr-2 h-4 w-4 text-blue-400" /> Content Queue
            </CardDescription>
            <CardTitle className="text-2xl font-bold">14 Posts Ready</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-gray-500">Next post in 4 hours</span>
              <Link href="/business/1/calendar" className="text-blue-400 font-medium hover:underline flex items-center">
                View Calendar <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center text-gray-400">
              <TrendingUp className="mr-2 h-4 w-4 text-green-400" /> Est. Weekly Reach
            </CardDescription>
            <CardTitle className="text-2xl font-bold">12,450</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-green-400 flex items-center"><TrendingUp className="mr-1 h-3 w-3" /> +14% from last week</span>
              <Link href="/business/1/analytics" className="text-blue-400 font-medium hover:underline flex items-center">
                View Analytics <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20" />
          <CardHeader className="pb-2 relative z-10">
            <CardDescription className="flex items-center text-gray-200">
              <Megaphone className="mr-2 h-4 w-4 text-purple-400" /> Action Required
            </CardDescription>
            <CardTitle className="text-xl font-bold text-white">Weekly Pulse is ready</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="mt-2 mb-2 text-sm text-gray-300">
              3 new trending topics in Chandigarh identified.
            </div>
            <Link href="/business/1/pulse" className="inline-flex mt-2 text-sm font-medium bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-colors">
              Read Report <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "Today, 5:00 PM", channel: "Instagram", title: "Monsoon Special Coffee Reel", score: "9.2" },
                { time: "Tomorrow, 9:00 AM", channel: "WhatsApp", title: "Weekend Breakfast Combo Offer", score: "8.8" },
                { time: "Friday, 6:30 PM", channel: "Google", title: "New Pastry Menu Announcement", score: "9.5" }
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between border-b border-white/5 pb-4 last:pb-0 last:border-0">
                  <div>
                    <div className="text-sm text-blue-400 font-medium mb-1">{item.time}</div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.channel}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500 mb-1">Quality Score</span>
                    <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">{item.score}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/business/1/calendar" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 w-full mt-6 border-white/10 text-gray-300 hover:text-white">
              View Full Calendar
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Recent Brand Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                <div className="font-semibold text-blue-300 mb-1 flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" /> Audience Shift Detected
                </div>
                <p className="text-sm text-gray-300">
                  Your recent posts about "workspace" are getting 40% more engagement from the 25-34 demographic. We've adjusted your Brand DNA to target remote workers.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="font-semibold text-gray-200 mb-1">Competitor Movement</div>
                <p className="text-sm text-gray-400">
                  "Sector 9 Cafe" is running a 1+1 promotion this week. We recommend highlighting your "Premium Quality over Quantity" messaging in upcoming posts.
                </p>
              </div>
            </div>
            <Link href="/business/1" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 w-full mt-6 border-white/10 text-gray-300 hover:text-white">
              View Brand DNA
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
