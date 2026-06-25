"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Bot, CheckCircle2, ArrowRight, ArrowLeft, Building2, MapPin, Users, Link as LinkIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export default function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [scanStatus, setScanStatus] = useState("Initializing BrandPilot...");

  const handleNext = () => setStep(s => Math.min(5, s + 1));
  const handleBack = () => setStep(s => Math.max(1, s - 1));

  useEffect(() => {
    if (step === 5) {
      // Simulate the SSE Scan process
      const scanSequence = [
        { time: 1000, progress: 10, msg: "Reading your Instagram profile..." },
        { time: 3000, progress: 30, msg: "Analyzing your customer reviews..." },
        { time: 5000, progress: 50, msg: "Building your Brand DNA..." },
        { time: 7000, progress: 65, msg: "Finding trending content ideas..." },
        { time: 9000, progress: 75, msg: "Generating your content calendar..." },
        { time: 12000, progress: 92, msg: "Scoring all content..." },
        { time: 14000, progress: 100, msg: "Done! Your marketing is ready." },
      ];

      scanSequence.forEach(({ time, progress, msg }) => {
        setTimeout(() => {
          setProgress(progress);
          setScanStatus(msg);
          if (progress === 100) {
            setTimeout(() => {
              router.push("/dashboard");
            }, 1000);
          }
        }, time);
      });
    }
  }, [step, router]);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                  step > i ? "bg-blue-600 border-blue-600 text-white" :
                  step === i ? "bg-blue-600/20 border-blue-500 text-blue-400" :
                  "bg-white/5 border-white/10 text-gray-500"
                }`}>
                  {step > i ? <CheckCircle2 className="h-5 w-5" /> : i}
                </div>
              </div>
            ))}
          </div>
          <Progress value={(step / 5) * 100} className="h-2 bg-white/10" />
        </div>

        <Card className="bg-black/60 border-white/10 backdrop-blur-xl">
          {step === 1 && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Building2 className="text-blue-500 h-5 w-5" /> Business Basics</CardTitle>
                <CardDescription>Tell us about what you do.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Business Name</Label>
                  <Input placeholder="e.g. Chandigarh Coffee Co." className="bg-white/5 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label>Industry</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurant">Restaurant / Cafe</SelectItem>
                      <SelectItem value="fitness">Gym / Fitness</SelectItem>
                      <SelectItem value="retail">Retail / Clothing</SelectItem>
                      <SelectItem value="salon">Salon / Beauty</SelectItem>
                      <SelectItem value="medical">Medical Clinic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>One-line description</Label>
                  <Textarea placeholder="What makes you special?" className="bg-white/5 border-white/10 resize-none" />
                </div>
                <div className="space-y-2">
                  <Label>Primary Goal</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="What do you want to achieve?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="footfall">More footfall / walk-ins</SelectItem>
                      <SelectItem value="orders">Online orders</SelectItem>
                      <SelectItem value="awareness">Brand awareness</SelectItem>
                      <SelectItem value="leads">Generate leads</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </>
          )}

          {step === 2 && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><MapPin className="text-blue-500 h-5 w-5" /> Location</CardTitle>
                <CardDescription>Where are you based?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input placeholder="e.g. Chandigarh" className="bg-white/5 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label>Area / Locality</Label>
                  <Input placeholder="e.g. Sector 17" className="bg-white/5 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label>Business Type</Label>
                  <Select defaultValue="physical">
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="physical">Physical store</SelectItem>
                      <SelectItem value="online">Online only</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users className="text-blue-500 h-5 w-5" /> Your Customers</CardTitle>
                <CardDescription>Who buys from you?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Who are your typical customers? (Select all that apply)</Label>
                  <div className="flex flex-wrap gap-2">
                    {["College students", "Young professionals", "Families", "Women 25-45", "Men 25-45", "Senior citizens", "Children", "B2B clients"].map((chip) => (
                      <div key={chip} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer text-sm transition-colors text-gray-300">
                        {chip}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <Label>What do they care most about?</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Price / Deals", "Quality", "Convenience", "Status / Prestige", "Health / Wellness", "Speed", "Variety"].map((chip) => (
                      <div key={chip} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer text-sm transition-colors text-gray-300">
                        {chip}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {step === 4 && (
            <>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><LinkIcon className="text-blue-500 h-5 w-5" /> Existing Presence</CardTitle>
                <CardDescription>Provide links so BrandPilot can scan your business. (Optional)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Instagram Profile URL</Label>
                  <Input placeholder="https://instagram.com/yourbusiness" className="bg-white/5 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label>Google Business URL or exact name</Label>
                  <Input placeholder="e.g. Chandigarh Coffee Co Sector 17" className="bg-white/5 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label>Website URL</Label>
                  <Input placeholder="https://yourwebsite.com" className="bg-white/5 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label>WhatsApp Business Number</Label>
                  <Input placeholder="+91 9876543210" className="bg-white/5 border-white/10" />
                </div>
              </CardContent>
            </>
          )}

          {step === 5 && (
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="relative h-24 w-24 mb-8">
                <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full" />
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Analyzing your business</h3>
              <p className="text-blue-400 font-mono text-sm mb-8 h-5 flex items-center gap-2 justify-center">
                <Sparkles className="h-4 w-4" /> {scanStatus}
              </p>
              <div className="w-full max-w-md bg-white/5 rounded-full h-3 mb-2 border border-white/10 overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-gray-500 text-xs">{progress}% Complete</p>
            </CardContent>
          )}

          {step < 5 && (
            <CardFooter className="flex justify-between border-t border-white/10 pt-6">
              <Button variant="ghost" onClick={handleBack} disabled={step === 1} className="text-gray-400">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white">
                {step === 4 ? "Start Scanning" : "Next Step"} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
}
