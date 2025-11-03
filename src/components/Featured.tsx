import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Image } from 'lucide-react';

export function Featured() {
  const featuredItems = [
    {
      type: 'document',
      title: 'Mahemud_Borgave_CV.pdf',
      description: '"I think it is possible for ordinary people to choose to be extraordinary." - Elon Musk.',
      subtitle: 'Just a glimpse of my 1% — the journey ahead holds the remaining 99%. Learning, building, and evolving every day.',
      icon: FileText,
    },
    {
      type: 'post',
      title: 'ShareKhata.live Launch',
      description: 'भाई तेरे कितने पैसे देणे बाकी है ? 🧐',
      subtitle: '🚀 Presenting ShareKhata.live – a simple, minimal, and to-the-point money manager with friends.',
      engagement: '35 reactions • 5 comments',
      icon: Image,
    },
  ];

  return (
    <Card className="bg-zinc-850 border-zinc-700 gap-4">
      <CardHeader>
        <CardTitle className="text-white">Featured</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="border border-zinc-900 rounded-lg p-4 hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-zinc-400 mt-1" />
                <div className="flex-1">
                  <p className="text-xs text-zinc-500 uppercase mb-1">{item.type}</p>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm mb-1">{item.description}</p>
                  <p className="text-zinc-500 text-xs">{item.subtitle}</p>
                  {item.engagement && (
                    <p className="text-zinc-500 text-xs mt-2">{item.engagement}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}