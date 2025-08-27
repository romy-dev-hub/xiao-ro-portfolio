// app/page.js

import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Podcast from '@/components/Podcast/Podcast';
import Contact from '@/components/Contact/Contact';
import Stats from "@/components/Stats/Stats";
import LearningJourney from "@/components/LearningJourney/LearningJourney";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Projects />
      <Podcast />
      <LearningJourney />
      <Contact />
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Romy (Xiao Ro). All rights reserved.
      </footer>
    </main>
  );
}