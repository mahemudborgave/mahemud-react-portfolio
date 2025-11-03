// import { useState } from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Featured } from './components/Featured';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-black/90 text-white">
      <div className="max-w-5xl mx-auto">
        <Header />
        <main className="space-y-6 p-6">
          <About />
          <Featured />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </main>
      </div>
    </div>
  );
}

export default App;