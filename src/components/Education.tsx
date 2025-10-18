import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const education = [
    {
      institution: 'Walchand College of Engineering',
      subtitle: '(A Govt. Aided Autonomous Institute), SANGLI-M.S',
      degree: 'Bachelor of Technology - BTech',
      field: 'Information Technology',
      period: 'Sep 2023 - 2026',
      activities: null,
      grade: null,
    },
    {
      institution: 'Government Polytechnic Pune',
      degree: 'Diploma in Computer Engineering',
      field: 'Computer Engineering',
      period: 'Dec 2020 - Jun 2023',
      grade: '94.06',
      activities: [
        'Co-ordinated multiple Quiz Competitions at college level',
        'Nailed it as the lead volunteer for the annual gathering, ensuring its success.',
      ],
      skills: ['SQL with Oracle Database', 'Networking', 'Java', 'Web Development', 'C++', 'Python'],
    },
  ];

  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-white">Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-zinc-400" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg">{edu.institution}</h3>
              {edu.subtitle && (
                <p className="text-zinc-500 text-sm">{edu.subtitle}</p>
              )}
              <p className="text-zinc-400 text-sm mt-1">
                {edu.degree}, {edu.field}
              </p>
              <p className="text-zinc-500 text-sm">{edu.period}</p>
              
              {edu.grade && (
                <p className="text-zinc-400 text-sm mt-2">Grade: {edu.grade}</p>
              )}
              
              {edu.activities && (
                <div className="mt-3">
                  <p className="text-zinc-400 text-sm font-medium mb-2">Activities and societies:</p>
                  <ul className="list-none space-y-1">
                    {edu.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="text-zinc-400 text-sm">
                        • {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {edu.skills && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-zinc-900 text-zinc-300 border-zinc-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}