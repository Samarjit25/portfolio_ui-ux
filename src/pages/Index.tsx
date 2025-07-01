import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 🔮 Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-400px] left-1/2 transform -translate-x-1/2 w-[1400px] h-[1400px] bg-gradient-radial from-pink-500/20 via-purple-600/10 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-300px] right-[-200px] w-[1000px] h-[1000px] bg-gradient-to-tr from-purple-700/30 to-pink-500/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* 🌐 Page Content */}
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
