"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid } from "recharts";
import { TrendingUp, MousePointerClick, Eye, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AnalyticsPage() {
  const channelData = [
    { name: "Instagram", value: 45, color: "#ec4899" }, // pink-500
    { name: "Google Business", value: 30, color: "#eab308" }, // yellow-500
    { name: "WhatsApp", value: 15, color: "#22c55e" }, // green-500
    { name: "Email", value: 10, color: "#3b82f6" }, // blue-500
  ];

  const weeklyData = [
    { name: "Mon", reach: 1200, clicks: 45 },
    { name: "Tue", reach: 1800, clicks: 65 },
    { name: "Wed", reach: 1400, clicks: 50 },
    { name: "Thu", reach: 2200, clicks: 85 },
    { name: "Fri", reach: 3100, clicks: 120 },
    { name: "Sat", reach: 3500, clicks: 150 },
    { name: "Sun", reach: 2800, clicks: 95 },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics & ROI</h1>
          <p className="text-gray-400">See how your marketing is actually performing.</p>
        </div>
        <Select defaultValue="30days">
          <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="90days">Last 90 Days</SelectItem>
            <SelectItem value="all">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center text-gray-400">
              <Eye className="mr-2 h-4 w-4 text-blue-400" /> Total Reach
            </CardDescription>
            <CardTitle className="text-3xl font-bold text-white">45.2k</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-green-400 flex items-center mt-1">
              <TrendingUp className="mr-1 h-3 w-3" /> +24.5% vs last month
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center text-gray-400">
              <MousePointerClick className="mr-2 h-4 w-4 text-green-400" /> Link Clicks
            </CardDescription>
            <CardTitle className="text-3xl font-bold text-white">1,842</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-green-400 flex items-center mt-1">
              <TrendingUp className="mr-1 h-3 w-3" /> +12.3% vs last month
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center text-gray-400">
              <Users className="mr-2 h-4 w-4 text-purple-400" /> New Leads/Followers
            </CardDescription>
            <CardTitle className="text-3xl font-bold text-white">324</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-green-400 flex items-center mt-1">
              <TrendingUp className="mr-1 h-3 w-3" /> +8.1% vs last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10" />
          <CardHeader className="pb-2 relative z-10">
            <CardDescription className="flex items-center text-gray-300">
              Estimated ROI
            </CardDescription>
            <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              340%
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-xs text-gray-400 mt-1 leading-snug">
              Based on your estimated customer lifetime value of $120.
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm lg:col-span-2">
          <CardHeader>
            <CardTitle>Reach & Engagement (Last 7 Days)</CardTitle>
            <CardDescription>Daily performance across all channels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis yAxisId="left" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis yAxisId="right" orientation="right" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#000', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar yAxisId="left" dataKey="reach" name="Total Reach" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" dataKey="clicks" name="Clicks" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Channel Performance</CardTitle>
            <CardDescription>Where your audience is engaging</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#000', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-3">
              {channelData.map((channel) => (
                <div key={channel.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: channel.color }} />
                    <span className="text-sm text-gray-300">{channel.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">{channel.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
