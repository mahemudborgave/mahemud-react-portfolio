import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2 } from 'lucide-react';

interface Role {
  title: string;
  type: string;
  period: string;
  description: string;
  workMode?: string;
  skills?: string[];
}

interface Experience {
  company: string;
  location: string;
  duration: string;
  roles: Role[];
}

export function Experience() {
  const experiences: Experience[] = [
    {
      company: 'SAIT',
      location: 'Sangli, Maharashtra, India',
      duration: '1 yr 11 mos',
      roles: [
        {
          title: 'Mentor',
          type: 'Self-employed',
          period: 'Jul 2025 - Present · 4 mos',
          description: 'Mentoring New Hires',
        },
        {
          title: 'Program Director',
          type: 'Part-time',
          period: 'May 2024 - Present · 1 yr 6 mos',
          description: 'Program Monitoring and Management',
          workMode: 'On-site',
        },
        {
          title: 'Assistant Aptitude Developer',
          type: 'Part-time',
          period: 'Dec 2023 - Present · 1 yr 11 mos',
          description: 'Management, Aptitude',
          workMode: 'On-site',
        },
      ],
    },
    {
      company: 'InternPe',
      location: 'Pune, Maharashtra, India · Remote',
      duration: '8 mos',
      roles: [
        {
          title: 'Intern',
          type: 'Internship',
          period: 'Jul 2023 - Feb 2024 · 8 mos',
          description: 'Trying to enhance and implement my learning of Java Programming in Real Time Projects under the Internship at InternPe',
          skills: ['Java', 'Project Management'],
        },
      ],
    },
    {
      company: 'Vidyarthi Sahayyak Samiti (VSS) Pune',
      location: 'Pune, Maharashtra, India · Hybrid',
      duration: '1 yr 3 mos',
      roles: [
        {
          title: 'Earn and Learn Head at VSS',
          type: 'Part-time',
          period: 'Feb 2022 - Apr 2023 · 1 yr 3 mos',
          description: 'Was the Head of Earn and Learn scheme at Vidyarthi Sahayyak Samiti, Pune, where my role was to manage, co-ordinate and distribute work among students.',
          skills: ['Management', 'Leadership'],
        },
      ],
    },
  ];

  return (
    <Card className="bg-zinc-850 border-zinc-700">
      <CardHeader>
        <CardTitle className="text-white">Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp, expIndex) => (
          <div key={expIndex} className="relative">
            {expIndex !== 0 && <div className="absolute left-5 -top-3 w-px h-3 bg-zinc-800" />}
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-zinc-400" />
              </div>
              
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-white font-semibold text-lg">{exp.company}</h3>
                  <p className="text-zinc-400 text-sm">{exp.duration}</p>
                  <p className="text-zinc-500 text-sm">{exp.location}</p>
                </div>
                
                <div className="space-y-4">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative pl-6 border-l-2 border-zinc-800">
                      <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-zinc-600" />
                      
                      <h4 className="text-white font-medium">{role.title}</h4>
                      <p className="text-zinc-400 text-sm mb-1">
                        {role.type} · {role.period}
                      </p>
                      {role.workMode && (
                        <p className="text-zinc-500 text-sm mb-2">{role.workMode}</p>
                      )}
                      <p className="text-zinc-400 text-sm mb-2">{role.description}</p>
                      
                      {role.skills && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {role.skills.map((skill, skillIndex) => (
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}