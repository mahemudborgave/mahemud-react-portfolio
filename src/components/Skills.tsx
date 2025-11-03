import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  const topSkills = ['Problem Solving', 'Java', 'SQL', 'JavaScript'];
  
  const allSkills = [
    'Google OAuth 2.0',
    'jsPDF & XLSX',
    'React',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Tailwind CSS',
    'Socket.io',
    'TypeScript',
    'Git',
    'REST APIs',
    'Python',
    'C++',
    'Data Structures',
    'Algorithms',
    'Web Development',
    'App Development',
    'Database Management',
    'Networking',
    'Project Management',
    'Leadership',
    'Management',
  ];

  return (
    <Card className="bg-zinc-850 border-zinc-700">
      <CardHeader>
        <CardTitle className="text-white">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-white font-medium mb-3">Top Skills</h3>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-white text-black hover:bg-zinc-200 text-sm px-4 py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-3">All Skills</h3>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800 text-sm px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}