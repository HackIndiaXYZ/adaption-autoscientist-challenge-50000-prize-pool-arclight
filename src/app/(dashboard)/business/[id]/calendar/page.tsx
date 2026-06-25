/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, CheckCircle2, Megaphone, Send, Camera, Mail, Plus, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContentCalendarPage() {
  const [selectedDay, setSelectedDay] = useState(1);

  const posts = [
    { day: 1, type: "Instagram", title: "Monsoon Coffee Special", status: "ready", score: 9.2, time: "5:00 PM" },
    { day: 2, type: "WhatsApp", title: "Weekend Combo Broadcast", status: "ready", score: 8.8, time: "9:00 AM" },
    { day: 3, type: "Google", title: "New Pastry Menu", status: "ready", score: 9.5, time: "6:30 PM" },
    { day: 5, type: "Instagram", title: "Meet the Barista Reel", status: "draft", score: 7.4, time: "5:00 PM" },
    { day: 7, type: "Email", title: "Coffee Bean Subscription Launch", status: "draft", score: 8.1, time: "10:00 AM" },
  ];

  const getChannelIcon = (type: string) => {
    switch (type) {
      case "Instagram": return <Camera className="h-4 w-4 text-pink-400" />;
      case "WhatsApp": return <MessageSquare className="h-4 w-4 text-green-400" />;
      case "Email": return <Mail className="h-4 w-4 text-blue-400" />;
      case "Google": return <Search className="h-4 w-4 text-yellow-400" />;
      default: return <Megaphone className="h-4 w-4 text-gray-400" />;
    }
  };

  const MessageSquare = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">30-Day Calendar</h1>
          <p className="text-gray-400">Content generated for September based on your Brand DNA.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
            <CalendarIcon className="mr-2 h-4 w-4" /> Sync to Google Calendar
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="mr-2 h-4 w-4" /> Add Custom Post
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar View */}
        <div className="lg:col-span-2">
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
            <CardHeader className="border-b border-white/10 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle>September</CardTitle>
                <div className="flex gap-2">
                  <span className="flex items-center text-xs text-gray-400"><span className="h-2 w-2 rounded-full bg-pink-500 mr-1"></span> IG</span>
                  <span className="flex items-center text-xs text-gray-400"><span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span> WA</span>
                  <span className="flex items-center text-xs text-gray-400"><span className="h-2 w-2 rounded-full bg-yellow-500 mr-1"></span> GMB</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-7 text-center border-b border-white/10">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                  <div key={day} className="py-3 text-xs font-medium text-gray-500">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 border-l border-white/10">
                {Array.from({ length: 30 }).map((_, i) => {
                  const day = i + 1;
                  const dayPosts = posts.filter(p => p.day === day);
                  const isSelected = selectedDay === day;

                  return (
                    <div 
                      key={day} 
                      onClick={() => setSelectedDay(day)}
                      className={`min-h-[100px] border-r border-b border-white/10 p-2 cursor-pointer transition-colors ${isSelected ? 'bg-blue-900/20' : 'hover:bg-white/5'}`}
                    >
                      <div className={`text-sm font-medium mb-1 ${isSelected ? 'text-blue-400' : 'text-gray-400'}`}>{day}</div>
                      <div className="space-y-1">
                        {dayPosts.map((post, idx) => (
                          <div 
                            key={idx} 
                            className={`text-[10px] px-1.5 py-1 rounded truncate border ${
                              post.type === 'Instagram' ? 'bg-pink-500/10 border-pink-500/20 text-pink-300' :
                              post.type === 'WhatsApp' ? 'bg-green-500/10 border-green-500/20 text-green-300' :
                              post.type === 'Google' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-300' :
                              'bg-blue-500/10 border-blue-500/20 text-blue-300'
                            }`}
                          >
                            {post.time}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Day Details */}
        <div>
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm sticky top-8">
            <CardHeader className="border-b border-white/10 pb-4">
              <CardTitle>September {selectedDay}</CardTitle>
              <CardDescription>
                {posts.filter(p => p.day === selectedDay).length} posts scheduled
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {posts.filter(p => p.day === selectedDay).length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <CalendarIcon className="h-8 w-8 mx-auto mb-3 opacity-50" />
                  <p>No content scheduled for this day.</p>
                  <Button variant="outline" className="mt-4 border-white/10 hover:bg-white/5 text-gray-300">
                    Generate Post
                  </Button>
                </div>
              ) : (
                posts.filter(p => p.day === selectedDay).map((post, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                        {getChannelIcon(post.type)} {post.type}
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full font-medium ${post.status === 'ready' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {post.status === 'ready' ? 'Ready to post' : 'Needs review'}
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-white mb-2">{post.title}</h4>
                    
                    <div className="bg-black/50 p-3 rounded-lg text-sm text-gray-400 mb-4 font-mono leading-relaxed">
                      "Monsoons in Chandigarh hit different when you have a warm cup of single-origin pour over in hand. 🌧️☕ Drop by Sector 17 today, we've got the Wi-Fi running and the beans roasting."
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 mr-2">Score:</span>
                        <span className="text-green-400 font-bold">{post.score}/10</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-400 hover:text-white">Edit</Button>
                        <Button size="sm" className="h-8 px-3 bg-blue-600 hover:bg-blue-700 text-white">
                          <Send className="mr-2 h-3 w-3" /> Post Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
