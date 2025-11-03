import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Eventapply.in',
      period: 'May 2025 - Present',
      association: 'Walchand College of Engineering',
      description:
        'EventApply is a comprehensive platform that bridges the gap between colleges and students by providing a centralized hub for discovering, managing, and participating in college events. Whether you\'re a student looking for exciting opportunities or a college administrator managing events, EventApply has got you covered.',
      skills: ['Google OAuth 2.0', 'jsPDF & XLSX', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      link: 'https://eventapply.in',
    },
    {
      title: 'Sharekhata.live',
      period: 'May 2025 - Present',
      association: 'Walchand College of Engineering',
      description:
        'Sharekhata is a simple expense sharing app that lets you and your friend track transactions in real-time. Features include mobile number registration/login, friend addition, synced entries with color-coded views, and PDF export of transaction history with balance summary. Added - calenderic view of personal expenses.',
      skills: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Socket.io'],
      link: 'https://sharekhata.live',
    },
  ];

  return (
    <Card className="bg-zinc-850 border-zinc-700">
      <CardHeader>
        <CardTitle className="text-white">Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-zinc-800 last:border-0 pb-6 last:pb-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  {project.title}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </h3>
                <p className="text-zinc-400 text-sm">{project.period}</p>
              </div>
            </div>
            
            <p className="text-zinc-500 text-sm mb-3">
              Associated with {project.association}
            </p>
            
            <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className="bg-zinc-900 text-zinc-300 border-zinc-800"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}