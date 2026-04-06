import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, BarChart3, ShieldCheck, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">Lumina</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:opacity-60 transition-opacity">Features</a>
          <a href="#pricing" className="hover:opacity-60 transition-opacity">Pricing</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" className="text-sm font-medium">Log in</Button>
          </Link>
          <Link to="/dashboard">
            <Button className="bg-black text-white hover:bg-black/90 rounded-full px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-32 px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f3f4f6] text-xs font-bold uppercase tracking-widest mb-6">
            The Future of Content Strategy
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Scale your content <br />
            <span className="text-[#6b7280]">without the noise.</span>
          </h1>
          <p className="text-xl text-[#4b5563] max-w-2xl mx-auto mb-10 leading-relaxed">
            Lumina uses advanced AI to analyze your niche, identify high-value content gaps, 
            and generate production-ready SEO articles in seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-14 text-lg group">
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Hero Image / Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full" />
          <div className="bg-[#f8f9fa] rounded-3xl border border-[#e5e7eb] p-4 shadow-2xl overflow-hidden aspect-video max-w-5xl mx-auto">
            <div className="w-full h-full bg-white rounded-2xl border border-[#e5e7eb] flex items-center justify-center text-[#9ca3af]">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-[#f3f4f6] rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <p className="font-medium">Interactive Dashboard Preview</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 bg-[#0a0a0a] text-white">
        <div className="px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">SEO Intelligence</h3>
              <p className="text-[#9ca3af] leading-relaxed">
                Real-time keyword analysis and gap identification using live search data.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Brand Voice Sync</h3>
              <p className="text-[#9ca3af] leading-relaxed">
                Train the AI on your existing content to maintain a consistent tone across all channels.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Enterprise Security</h3>
              <p className="text-[#9ca3af] leading-relaxed">
                Your data is yours. We use private models and enterprise-grade encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <Sparkles className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight">Lumina</span>
          </div>
          <p className="text-sm text-[#6b7280]">
            © 2026 Lumina AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-[#4b5563]">
            <a href="#" className="hover:text-black">Twitter</a>
            <a href="#" className="hover:text-black">LinkedIn</a>
            <a href="#" className="hover:text-black">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
