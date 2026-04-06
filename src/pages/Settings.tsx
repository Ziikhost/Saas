import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-[#6b7280]">Manage your account, brand voice, and preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="space-y-1">
          {[
            { icon: User, label: 'Profile' },
            { icon: Globe, label: 'Brand Voice' },
            { icon: Bell, label: 'Notifications' },
            { icon: Shield, label: 'Security' },
            { icon: CreditCard, label: 'Billing' },
          ].map((item, i) => (
            <Button 
              key={i} 
              variant="ghost" 
              className={cn(
                "w-full justify-start gap-3 rounded-xl",
                i === 0 ? "bg-[#f3f4f6] text-black" : "text-[#6b7280]"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
        </aside>

        <div className="md:col-span-3 space-y-6">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle>Public Profile</CardTitle>
              <CardDescription>How others see you on the platform.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-[#f3f4f6] border border-[#e5e7eb]" />
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="rounded-full">Change Avatar</Button>
                  <p className="text-xs text-[#9ca3af]">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">Full Name</label>
                  <Input defaultValue="Alex Rivera" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">Email Address</label>
                  <Input defaultValue="alex@lumina.ai" className="rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">Bio</label>
                <textarea 
                  className="w-full min-h-[100px] p-3 bg-white border border-[#e5e7eb] rounded-xl text-sm focus:ring-2 focus:ring-black outline-none"
                  placeholder="Tell us about yourself..."
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold">Email Notifications</p>
                  <p className="text-xs text-[#6b7280]">Receive weekly content performance reports.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold">AI Auto-Optimization</p>
                  <p className="text-xs text-[#6b7280]">Automatically suggest improvements for drafts.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Button variant="outline" className="rounded-full px-8">Cancel</Button>
            <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
