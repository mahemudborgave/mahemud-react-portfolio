import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Linkedin, Github, AudioWaveform} from 'lucide-react';
// import bgImage from "profile-bg.png";

export function Header() {
  return (
    <Card className="bg-zinc-950 border-zinc-800 rounded-none border-t-0 border-x-0 p-0 gap-0">
      {/* <div className="relative h-48 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900"> */}
      <div className="relative h-48 lg:h-65 bg-cover bg-no-repeat bg-left lg:bg-center" style={{ backgroundImage: "url('/profile-bg.png')" }}>
        <div className="absolute -bottom-16 left-6">
          <div className="w-32 h-32 rounded-full border-4 border-black bg-zinc-900 overflow-hidden">
            <img
              src="mahemud-profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="pt-20 px-6 pb-6 bg-zinc-800">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              Mahemud Borgave
            </h1>
            <p className="text-base lg:text-lg text-zinc-400 mb-3">
              Full-Stack Developer | App Development | SQL | WCE '26 | GPP '23
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-sm text-zinc-400 mb-4">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Sangli, Maharashtra, India
              </span>
              <span className="flex items-center gap-2">
                <AudioWaveform  className="w-4 h-4"/>
                500+ connections
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-white text-black hover:bg-zinc-300">
                Open to work
              </Button>
              <Button variant="outline" className="border-zinc-700 bg-transparent text-white bg-none hover:bg-zinc-800 hover:text-white">
                Contact info
              </Button>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
              <a href="https://www.linkedin.com/in/mahemud-borgave-b01762231/"  target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800">  
            <a href="https://www.github.com/mahemudborgave/" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <Badge
  variant="secondary"
  className="bg-zinc-900 text-zinc-300 border-zinc-800 mt-4 whitespace-normal break-words"
>
  Open to: Intern, Full Stack Engineer, Android Engineer, SQL Developer and AI Engineer roles
</Badge>

      </div>
    </Card>
  );
}