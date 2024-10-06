import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
