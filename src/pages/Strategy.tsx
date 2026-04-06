import React, { useState } from 'react';
import { 
  Target, 
  Plus, 
  Search, 
  Filter,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { suggestTopics } from '@/services/gemini';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function Strategy() {
  const [niche, setNiche] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSuggest = async () => {
    if (!niche) return toast.error('Please enter your niche');
    setIsGenerating(true);
    try {
      const topics = await suggestTopics(niche);
      setSuggestions(topics);
      toast.success('Strategy suggestions generated!');
    } catch (error) {
      toast.error('Failed to generate suggestions');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Strategy Engine</h1>
          <p className="text-[#6b7280]">Identify high-value content gaps and plan your roadmap.</p>
        </div>
        <Button className="bg-black text-white hover:bg-black/90 rounded-full gap-2">
          <Plus className="w-4 h-4" />
          New Roadmap
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-lg">Niche Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">Your Niche / Industry</label>
                <Input 
                  placeholder="e.g. B2B SaaS, Sustainable Fashion" 
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="rounded-xl"
                />
              </div>
              <Button 
                onClick={handleSuggest}
                disabled={isGenerating}
                className="w-full bg-black text-white hover:bg-black/90 rounded-xl"
              >
                {isGenerating ? 'Analyzing...' : 'Generate Strategy'}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-lg">Current Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'AI Ethics in 2026', status: 'In Progress', icon: Clock, color: 'text-blue-500' },
                { title: 'SaaS Pricing Models', status: 'Pending', icon: AlertCircle, color: 'text-amber-500' },
                { title: 'Content Distribution', status: 'Completed', icon: CheckCircle2, color: 'text-emerald-500' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-xl border border-[#e5e7eb]">
                  <div className="flex items-center gap-3">
                    <item.icon className={cn("w-4 h-4", item.color)} />
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] uppercase font-bold">{item.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-sm bg-white min-h-[400px]">
            <CardHeader>
              <CardTitle className="text-lg">AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              {suggestions.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {suggestions.map((topic, i) => (
                    <div key={i} className="group p-6 bg-white border border-[#e5e7eb] rounded-2xl hover:border-black transition-all cursor-pointer flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-bold text-lg">{topic}</h4>
                        <div className="flex items-center gap-4 text-xs text-[#6b7280]">
                          <span className="flex items-center gap-1">
                            <Search className="w-3 h-3" />
                            High Volume
                          </span>
                          <span className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            Low Competition
                          </span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-[#9ca3af] py-20 space-y-4">
                  <Target className="w-12 h-12 opacity-20" />
                  <p className="text-sm">Enter your niche to generate a custom content strategy.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
