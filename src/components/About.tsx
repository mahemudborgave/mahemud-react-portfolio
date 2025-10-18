import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function About() {
  return (
    <Card className="bg-zinc-950 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-white">About</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-300 leading-relaxed">
          I'm a passionate full-stack developer and technology enthusiast who loves building 
          efficient, user-friendly digital solutions. I enjoy solving real-world problems through 
          clean code, modern frameworks, and creative thinking. Currently pursuing B.Tech in 
          Information Technology at Walchand College of Engineering, I've gained hands-on 
          experience with React, SQL, and app development through projects like ShareKhata.live. 
          Always eager to learn, collaborate, and grow as a developer.
        </p>
      </CardContent>
    </Card>
  );
}