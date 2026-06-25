"use client";

import { Target, MessageSquare, Zap, Users, Edit3, Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function BrandDNAPage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Brand DNA</h1>
          <p className="text-gray-400">The core intelligence BrandPilot uses to generate your content.</p>
        </div>
        <Button 
          variant={isEditing ? "default" : "outline"}
          className={isEditing ? "bg-green-600 hover:bg-green-700 text-white" : "border-white/10 text-white hover:bg-white/5"}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? <><Save className="mr-2 h-4 w-4" /> Save Changes</> : <><Edit3 className="mr-2 h-4 w-4" /> Edit DNA</>}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Target className="mr-2 h-5 w-5 text-red-400" /> Core Positioning
            </CardTitle>
            <CardDescription>How BrandPilot views your business in the market</CardDescription>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <Textarea 
                defaultValue="A premium, artisanal coffee shop in Chandigarh focusing on single-origin beans and a quiet, productive atmosphere for remote workers and young professionals."
                className="min-h-[100px] bg-white/5 border-white/10 text-white"
              />
            ) : (
              <p className="text-gray-300 leading-relaxed bg-white/5 p-4 rounded-lg border border-white/5">
                A premium, artisanal coffee shop in Chandigarh focusing on single-origin beans and a quiet, productive atmosphere for remote workers and young professionals.
              </p>
            )}
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <MessageSquare className="mr-2 h-5 w-5 text-blue-400" /> Brand Voice
            </CardTitle>
            <CardDescription>The tone used in all generated content</CardDescription>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <Textarea 
                defaultValue="Sophisticated but approachable. Knowledgeable about coffee without being pretentious. Uses warm, inviting language."
                className="min-h-[100px] bg-white/5 border-white/10 text-white"
              />
            ) : (
              <p className="text-gray-300 leading-relaxed bg-white/5 p-4 rounded-lg border border-white/5">
                Sophisticated but approachable. Knowledgeable about coffee without being pretentious. Uses warm, inviting language.
              </p>
            )}
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Users className="mr-2 h-5 w-5 text-green-400" /> Target Audience Personas
            </CardTitle>
            <CardDescription>Who BrandPilot writes for</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="font-bold text-white mb-1">The Remote Worker</div>
                <div className="text-xs text-gray-500 mb-3">Ages 24-35 • High Income</div>
                <p className="text-sm text-gray-400">Looking for fast Wi-Fi, good seating, and endless black coffee. Values a quiet environment over cheap prices.</p>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-blue-400">Trigger:</span> <span className="text-xs text-gray-300">Productivity, Focus</span>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="font-bold text-white mb-1">The Coffee Snob</div>
                <div className="text-xs text-gray-500 mb-3">Ages 20-40 • Medium Income</div>
                <p className="text-sm text-gray-400">Cares deeply about roast dates, origin, and brewing methods. Reads the tasting notes.</p>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-blue-400">Trigger:</span> <span className="text-xs text-gray-300">Quality, Exclusivity</span>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="font-bold text-white mb-1">The Weekend Date</div>
                <div className="text-xs text-gray-500 mb-3">Ages 18-30 • Variable Income</div>
                <p className="text-sm text-gray-400">Looking for an aesthetic place with good pastries and sweet drinks for weekend meetups.</p>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-blue-400">Trigger:</span> <span className="text-xs text-gray-300">Aesthetics, Vibe</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-sm md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Zap className="mr-2 h-5 w-5 text-yellow-400" /> Unique Selling Propositions (USPs)
            </CardTitle>
            <CardDescription>What BrandPilot highlights to beat competitors</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Only cafe in Sector 17 with gigabit Wi-Fi and designated 'quiet zones'",
                "All beans roasted in-house within the last 7 days",
                "Pastries sourced daily from local French bakeries, never frozen"
              ].map((usp, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold">{i+1}</span>
                  <span className="text-gray-300 text-sm mt-0.5">{usp}</span>
                </li>
              ))}
            </ul>
            {isEditing && (
              <Button variant="outline" className="w-full mt-4 border-dashed border-white/20 text-gray-400 hover:text-white">
                + Add New USP
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
