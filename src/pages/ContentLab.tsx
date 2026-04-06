import React, { useState } from 'react';
import { 
  Sparkles, 
  Wand2, 
  Search, 
  Save, 
  Eye, 
  BarChart,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Markdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { generateContent, analyzeSEO } from '@/services/gemini';
import { toast } from 'sonner';

export default function ContentLab() {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [content, setContent] = useState('');
  const [seoData, setSeoData] = useState<any>(null);

  const handleGenerate = async () => {
    if (!topic) return toast.error('Please enter a topic');
    
    setIsGenerating(true);
    try {
      const result = await generateContent(
        `Write a comprehensive, SEO-optimized article about: ${topic}. Include headings, bullet points, and a professional tone.`,
        "You are an expert content strategist and SEO copywriter."
      );
      setContent(result || '');
      
      const analysis = await analyzeSEO(result || '');
      setSeoData(analysis);
      toast.success('Content generated successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to generate content');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Lab</h1>
          <p className="text-[#6b7280]">Generate and optimize high-performing content with AI.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-full gap-2">
            <Eye className="w-4 h-4" />
            Preview
          </Button>
          <Button className="bg-black text-white hover:bg-black/90 rounded-full gap-2">
            <Save className="w-4 h-4" />
            Save Draft
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Editor Side */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-2">
                <Input 
                  placeholder="What should we write about today?" 
                  className="flex-1 h-12 rounded-xl border-[#e5e7eb] focus:ring-black"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating}
                  className="h-12 px-6 bg-black text-white hover:bg-black/90 rounded-xl gap-2"
                >
                  {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                  Generate
                </Button>
              </div>

              <div className="min-h-[500px] border border-[#e5e7eb] rounded-xl p-6 bg-[#fafafa]">
                {content ? (
                  <div className="prose prose-sm max-w-none">
                    <Markdown>{content}</Markdown>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-[#9ca3af] space-y-4">
                    <Sparkles className="w-12 h-12 opacity-20" />
                    <p className="text-sm">Enter a topic above to start generating content.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intelligence Side */}
        <div className="space-y-6">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart className="w-5 h-5" />
                SEO Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {seoData ? (
                <>
                  <div className="text-center p-6 bg-[#f8f9fa] rounded-2xl border border-[#e5e7eb]">
                    <p className="text-sm font-medium text-[#6b7280] mb-1">SEO Score</p>
                    <h2 className="text-5xl font-bold">{seoData.score}</h2>
                    <p className="text-xs text-[#10b981] font-bold mt-2 uppercase tracking-wider">Excellent</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-bold uppercase tracking-wider text-[#9ca3af]">Keywords Found</p>
                    <div className="flex flex-wrap gap-2">
                      {seoData.keywords.map((kw: string, i: number) => (
                        <Badge key={i} variant="secondary" className="bg-[#f3f4f6] text-black border-none">
                          {kw}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-bold uppercase tracking-wider text-[#9ca3af]">Suggested Improvements</p>
                    <div className="space-y-2">
                      {seoData.improvements.map((imp: string, i: number) => (
                        <div key={i} className="flex gap-3 p-3 bg-[#fef2f2] rounded-xl border border-[#fee2e2]">
                          <AlertCircle className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
                          <p className="text-xs text-[#b91c1c] font-medium leading-relaxed">{imp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-[#9ca3af]">
                  <p className="text-sm">Generate content to see SEO analysis.</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { label: 'Primary keyword in H1', done: !!content },
                  { label: 'Meta description generated', done: false },
                  { label: 'Readability score > 80', done: (seoData?.score || 0) > 80 },
                  { label: 'Internal linking suggestions', done: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={cn(
                      "w-5 h-5 rounded-full border flex items-center justify-center",
                      item.done ? "bg-[#10b981] border-[#10b981]" : "border-[#d1d5db]"
                    )}>
                      {item.done && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>
                    <span className={cn("text-sm", item.done ? "text-black font-medium" : "text-[#6b7280]")}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
