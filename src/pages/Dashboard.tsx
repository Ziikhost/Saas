import { 
  TrendingUp, 
  FileText, 
  Users, 
  Clock,
  Plus,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Mon', views: 4000, seo: 2400 },
  { name: 'Tue', views: 3000, seo: 1398 },
  { name: 'Wed', views: 2000, seo: 9800 },
  { name: 'Thu', views: 2780, seo: 3908 },
  { name: 'Fri', views: 1890, seo: 4800 },
  { name: 'Sat', views: 2390, seo: 3800 },
  { name: 'Sun', views: 3490, seo: 4300 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-[#6b7280]">Welcome back, Alex. Here's what's happening with your content.</p>
        </div>
        <Button className="bg-black text-white hover:bg-black/90 rounded-full gap-2">
          <Plus className="w-4 h-4" />
          New Campaign
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-[#f3f4f6] rounded-lg">
                <Users className="w-5 h-5 text-black" />
              </div>
              <Badge className="bg-[#ecfdf5] text-[#059669] border-none flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                12%
              </Badge>
            </div>
            <p className="text-sm font-medium text-[#6b7280]">Total Reach</p>
            <h3 className="text-2xl font-bold">124.5k</h3>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-[#f3f4f6] rounded-lg">
                <TrendingUp className="w-5 h-5 text-black" />
              </div>
              <Badge className="bg-[#ecfdf5] text-[#059669] border-none flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                8%
              </Badge>
            </div>
            <p className="text-sm font-medium text-[#6b7280]">Avg. SEO Score</p>
            <h3 className="text-2xl font-bold">92/100</h3>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-[#f3f4f6] rounded-lg">
                <FileText className="w-5 h-5 text-black" />
              </div>
              <Badge className="bg-[#fef2f2] text-[#dc2626] border-none flex items-center gap-1">
                <ArrowDownRight className="w-3 h-3" />
                3%
              </Badge>
            </div>
            <p className="text-sm font-medium text-[#6b7280]">Content Pieces</p>
            <h3 className="text-2xl font-bold">48</h3>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-[#f3f4f6] rounded-lg">
                <Clock className="w-5 h-5 text-black" />
              </div>
              <Badge className="bg-[#f3f4f6] text-[#4b5563] border-none">
                Stable
              </Badge>
            </div>
            <p className="text-sm font-medium text-[#6b7280]">Time Saved</p>
            <h3 className="text-2xl font-bold">12.4h</h3>
          </CardContent>
        </Card>
      </div>

      {/* Charts & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-none shadow-sm bg-white">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Views vs SEO Performance over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#000" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12, fill: '#9ca3af' }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12, fill: '#9ca3af' }}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="views" stroke="#000" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Drafts</CardTitle>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { title: 'The Future of AI in SaaS', date: '2h ago', score: 94 },
              { title: '10 Content Strategy Tips', date: '5h ago', score: 88 },
              { title: 'Scaling Marketing Teams', date: '1d ago', score: 91 },
              { title: 'SEO Trends for 2026', date: '2d ago', score: 85 },
            ].map((draft, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <div className="space-y-1">
                  <p className="text-sm font-semibold group-hover:underline">{draft.title}</p>
                  <p className="text-xs text-[#6b7280]">{draft.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{draft.score}%</p>
                  <p className="text-[10px] uppercase font-bold text-[#9ca3af]">SEO</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full rounded-full text-xs font-bold uppercase tracking-wider">
              View All Content
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
