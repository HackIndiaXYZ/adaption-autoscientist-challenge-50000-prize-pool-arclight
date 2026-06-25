/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client";

import { Flame, TrendingUp, AlertTriangle, Lightbulb, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PulseReportPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Weekly Pulse Report</h1>
          <p className="text-gray-400">Week of September 12 - actionable intelligence for Chandigarh Coffee Co.</p>
        </div>
        <Button className="bg-white/10 hover:bg-white/20 text-white">
          Download PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm md:col-span-2">
          <CardHeader className="bg-gradient-to-r from-blue-900/40 to-transparent border-b border-white/10">
            <CardTitle className="flex items-center text-xl text-blue-400">
              <Lightbulb className="mr-2 h-5 w-5" /> Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              It's going to rain all week in Chandigarh. This is a massive opportunity for coffee shops. Engagement on cozy, indoor-focused content is up 45% locally. We've automatically added 3 "Monsoon Special" posts to your calendar for this week.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-lg text-orange-400">
              <Flame className="mr-2 h-5 w-5" /> Local Trends Identified
            </CardTitle>
            <CardDescription>What people in your area are talking about right now</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="font-bold text-white mb-2">#ChandigarhMonsoon</div>
              <p className="text-sm text-gray-400 mb-3">Trending across local Instagram accounts. 15,000+ local interactions in 48 hours.</p>
              <div className="text-xs font-semibold text-green-400 flex items-center">
                Action Taken: Added to 3 upcoming posts.
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="font-bold text-white mb-2">"Co-working spaces in Tricity"</div>
              <p className="text-sm text-gray-400 mb-3">Google search volume for this phrase spiked 300% this week as college terms begin.</p>
              <div className="text-xs font-semibold text-green-400 flex items-center">
                Action Taken: Added GMB post highlighting your fast Wi-Fi.
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-lg text-red-400">
              <AlertTriangle className="mr-2 h-5 w-5" /> Competitor Alerts
            </CardTitle>
            <CardDescription>Moves your competitors made this week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-white">Sector 9 Cafe</div>
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Promotion</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">They launched a "1+1 on all Frappes" offer running Tuesday-Thursday.</p>
              <div className="text-sm border-t border-white/10 pt-3 text-gray-300">
                <span className="font-semibold text-blue-400">Our Counter Strategy:</span> Highlight the superior quality of your single-origin beans. Don't compete on price; compete on taste.
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center text-lg text-green-400">
              <TrendingUp className="mr-2 h-5 w-5" /> Past Week Performance
            </CardTitle>
            <CardDescription>How BrandPilot's content performed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl font-bold text-white">12.4k</div>
                <div className="text-xs text-gray-500 mt-1">Total Reach</div>
                <div className="text-xs text-green-400 mt-1">↑ 14%</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl font-bold text-white">412</div>
                <div className="text-xs text-gray-500 mt-1">Profile Visits</div>
                <div className="text-xs text-green-400 mt-1">↑ 8%</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl font-bold text-white">84</div>
                <div className="text-xs text-gray-500 mt-1">Link Clicks</div>
                <div className="text-xs text-green-400 mt-1">↑ 22%</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-xs text-gray-500 mt-1">Posts Published</div>
                <div className="text-xs text-gray-400 mt-1">Automated</div>
              </div>
            </div>

            <div className="bg-black/50 p-4 rounded-xl border border-white/5">
              <h4 className="font-semibold text-white mb-2 text-sm">Winning Content</h4>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-300">
                  <ExternalLink className="h-4 w-4 mr-2 text-pink-400" />
                  "Behind the scenes: Roasting our Ethiopian blend"
                </div>
                <div className="text-green-400 font-semibold">Highest engagement (8.4%)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
