/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { ArrowRight, Bot, Target, Megaphone, CalendarCheck, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-center px-4 py-32 text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm">
          <Bot className="mr-2 h-4 w-4" />
          The AI Marketing Manager for Local Businesses
        </div>
        
        <h1 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl">
          Your business deserves a <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            marketing manager.
          </span>
        </h1>
        
        <p className="mb-10 max-w-2xl text-xl text-gray-400 leading-relaxed">
          BrandPilot reads your business, understands your customers, and creates 30 days of ready-to-post content—automatically. <strong className="text-gray-200">No marketing knowledge needed.</strong>
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link href="/onboard" className={cn(buttonVariants({ size: "lg" }), "h-14 bg-blue-600 px-8 text-lg font-semibold hover:bg-blue-700 shadow-[0_0_30px_rgba(37,99,235,0.4)] w-full sm:w-auto transition-all hover:scale-105")}>
            Set up my business for free <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-2">Takes 5 minutes. No credit card required.</p>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-white/5 py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-white/10 p-8 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 border border-red-500/30">
                <Target className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">You're doing everything yourself</h3>
              <p className="text-gray-400 leading-relaxed">
                Running the business AND doing marketing is exhausting. Most owners give up on marketing because there's simply no time.
              </p>
            </Card>

            <Card className="bg-black/40 border-white/10 p-8 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 border border-orange-500/30">
                <Bot className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI tools are built for marketers</h3>
              <p className="text-gray-400 leading-relaxed">
                Jasper, HubSpot, ChatGPT—they're powerful but require you to already know what you're doing to write good prompts.
              </p>
            </Card>

            <Card className="bg-black/40 border-white/10 p-8 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 border border-amber-500/30">
                <TrendingUp className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Generic content doesn't convert</h3>
              <p className="text-gray-400 leading-relaxed">
                Templates from the internet don't know your customers, your city, or what makes your specific business special.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 sm:text-5xl">How BrandPilot Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From setup to a full marketing calendar in three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />

            <div className="relative flex flex-col items-center text-center">
              <div className="z-10 h-16 w-16 rounded-full bg-blue-900 border-4 border-black flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                <span className="text-2xl font-bold text-blue-300">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tell us about your business</h3>
              <p className="text-gray-400">Answer 5 simple questions about what you sell, who you sell to, and what your goals are.</p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="z-10 h-16 w-16 rounded-full bg-blue-800 border-4 border-black flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                <span className="text-2xl font-bold text-blue-200">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">We scan your digital footprint</h3>
              <p className="text-gray-400">BrandPilot automatically reads your existing Instagram, Google reviews, and website to build your unique Brand DNA.</p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="z-10 h-16 w-16 rounded-full bg-blue-600 border-4 border-black flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.8)]">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Get 30 days of content</h3>
              <p className="text-gray-400">We generate and schedule a month's worth of ready-to-post content tailored exactly to your business and local trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="bg-gradient-to-b from-blue-900/10 to-black py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Everything a marketing agency does, for free.</h2>
              <ul className="space-y-6 mt-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mr-3 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-white">Brand DNA Builder</h4>
                    <p className="text-gray-400">Automatically creates your brand voice, identifies your USPs, and targets your perfect audience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mr-3 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-white">Trend-Aware Content Calendar</h4>
                    <p className="text-gray-400">Content that leverages local festivals, industry trends, and competitor movements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mr-3 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-white">WhatsApp & Multi-Channel Marketing</h4>
                    <p className="text-gray-400">Optimized copy for Instagram, WhatsApp broadcasts, Google Posts, and Email.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mr-3 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-white">Weekly Pulse Reports</h4>
                    <p className="text-gray-400">Actionable advice delivered every Monday so you know exactly what to do next.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
              <Card className="relative bg-black/60 border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
                <div className="border-b border-white/10 bg-white/5 p-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-amber-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs font-mono text-gray-400">BrandPilot Dashboard</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">☕</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Chandigarh Coffee Co.</h3>
                      <p className="text-sm text-gray-400">Next post scheduled for today at 5:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center gap-4">
                      <div className="h-10 w-10 bg-pink-500/20 text-pink-400 rounded-lg flex items-center justify-center"><Megaphone className="h-5 w-5" /></div>
                      <div className="flex-1">
                        <div className="h-2 w-32 bg-white/20 rounded mb-2" />
                        <div className="h-2 w-48 bg-white/10 rounded" />
                      </div>
                      <div className="h-6 w-16 bg-green-500/20 text-green-400 text-xs font-bold rounded flex items-center justify-center">Score: 9.2</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center gap-4">
                      <div className="h-10 w-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center"><CalendarCheck className="h-5 w-5" /></div>
                      <div className="flex-1">
                        <div className="h-2 w-40 bg-white/20 rounded mb-2" />
                        <div className="h-2 w-56 bg-white/10 rounded" />
                      </div>
                      <div className="h-6 w-16 bg-green-500/20 text-green-400 text-xs font-bold rounded flex items-center justify-center">Score: 8.8</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 text-center container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-6">Stop putting off your marketing.</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join thousands of local business owners who have automated their entire marketing strategy with AI.
        </p>
        <Link href="/signup" className={cn(buttonVariants({ size: "lg" }), "h-14 bg-white text-black px-10 text-lg font-bold hover:bg-gray-200 transition-all hover:scale-105")}>
          Start for Free
        </Link>
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>Built with Claude Sonnet 3.5</span>
          <span>·</span>
          <span>Fine-tuned on 12,000 marketing samples</span>
          <span>·</span>
          <span>AutoScientist Challenge</span>
        </div>
      </section>
    </div>
  );
}
