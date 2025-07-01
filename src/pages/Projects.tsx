import { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';
import { FaFigma } from 'react-icons/fa';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = [
    
    {
      title: 'Tecnoesis 2024',
      subtitle: 'College Tech Fest Website',
      description:
        'Designed the official Tecnoesis website as part of a 5-member team, focusing on collaborative UI/UX, responsive layout, and seamless user navigation.',
      category: 'Website',
      technologies: ['Figma', 'Framer', 'Notion', 'Spline'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1742311405/landing2_qb1d1p.png',
      liveUrl: 'https://tecnoesis-2024.pages.dev/',
      figmaUrl: 'https://www.figma.com/design/hr56x5nueM5JkAlsJiwAFy/Tecno?node-id=0-1&t=sn1ELQFAUqfpWZQT-1',
    },
    {
      title: 'NITS HACKS 6.0',
      subtitle: 'College Tech Fest Website',
      description:
        'Designed the NITS Hacks 6.0 website UI/UX as part of a 3-member team, focusing on clarity, branding, and user flow.',
      category: 'Website',
      technologies: ['Figma', 'Framer', 'Notion', 'Spline'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1742130737/nitshacks_dyuxsp.png',
      liveUrl: 'https://nits-hacks-6-0.pages.dev/',
      figmaUrl: 'https://www.figma.com/design/QAl0Z0ceohCRVVJxGqV3ug/NITS-HACKS-6.0?node-id=0-1&t=cVXAwDlNBB3yBZzm-1',
    },
    {
      title: 'Oikyotaan 2024',
      subtitle: 'Bengali Festival Website',
      description:
        'A vibrant Bengali cultural website showcasing events, traditions, and community spirit through an engaging and intuitive user experience.',
      category: 'Website',
      technologies: ['Figma', 'Notion', 'Pinterest', 'Dribble'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1742119700/oikyotaan_wfunl9.png',
      liveUrl: 'https://oikyotaan24.netlify.app/',
      figmaUrl: 'https://www.figma.com/design/OJmuMNzHVIHhoyOhOIV53k/Oikyotaan-24?node-id=742-25066&t=gFLpHWdk6sCSv0hC-1',
    },
    {
      title: 'Ecommerce App',
      subtitle: 'App Design',
      description:
        'Designed the UI/UX for a modern e-commerce app, emphasizing intuitive navigation and a seamless shopping experience.',
      category: 'App',
      technologies: ['Figma', 'Notion', 'Pinterest', 'Dribble'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751355905/ecom_bdc7o5.png',
      liveUrl: 'https://www.figma.com/design/pGNdMTEHgVn6K2ZvLnZcFF/assignment?node-id=0-1&p=f&t=RGKpeiSc1qyjWafP-0',
      figmaUrl: 'https://www.figma.com/design/pGNdMTEHgVn6K2ZvLnZcFF/assignment?node-id=0-1&p=f&t=RGKpeiSc1qyjWafP-0',
    },
    
    {
      title: 'NITS MUN 2024',
      subtitle: 'NITS MUN website',
      description:
        'A fully designed and structured website for NITSMUN, focused on clear navigation, cohesive visuals, and an intuitive user experience.',
      category: 'Website',
      technologies: ['Figma', 'Notion', 'Pinterest', 'Dribble'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1742119687/nitsmun_r3seof.png',
      liveUrl: 'https://nitsmun2023-24.vercel.app/',
      figmaUrl: 'https://www.figma.com/design/gp71E5JuGkPxJEznQkWgRr/NITS-MUN-2023-24?node-id=0-1&t=HbgYw7hYdIHL8a5O-1',
    },
    {
      title: 'InstaTube',
      subtitle: 'Website',
      description:'Designed the dashboard and profile page UI/UX for InstaTube, focusing on clean layout, user clarity, and streamlined interaction.',
      category: 'Website',
      technologies: ['Figma', 'Notion', 'Pinterest', 'Dribble'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751358705/Screenshot_2025-07-01_140123_eyubjg.png',
      liveUrl: 'https://www.figma.com/design/OzricUg3aJdFvSnn7bIWDd/assignment?node-id=24-185&t=S0WkBELxfFyKBaZn-0',
      figmaUrl: 'https://www.figma.com/design/OzricUg3aJdFvSnn7bIWDd/assignment?node-id=24-185&t=S0WkBELxfFyKBaZn-0',
    },
    {
      title: 'NITS HACKS 7.0',
      subtitle: 'College Tech Fest Website',
      description:
        'Designed and mentored the NITS Hacks 7.0 website UI/UX as part of a 7-member team, focusing on clarity, branding, and user flow.',
      category: 'Website',
      technologies: ['Figma', 'Framer', 'Notion', 'Spline'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751358286/Screenshot_2025-07-01_135428_j3f325.png',
      liveUrl: 'https://nitshacks.tecnoesis.co.in/',
      figmaUrl: 'http://www.figma.com/design/1HkpxZxr2ygBedXy5Rf0wy/NITS-HACKS-7.0?node-id=0-1&t=OlxHeJ3KE5Ehw76b-1',
    },
    {
      title: 'Oikyotaan 2025',
      subtitle: 'Bengali Festival Website',
      description:
        'A vibrant Bengali cultural website showcasing events, traditions, and community spirit through an engaging and intuitive user experience.',
      category: 'Website',
      technologies: ['Figma', 'Notion', 'Pinterest', 'Dribble'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751357611/Screenshot_2025-07-01_133254_qwvqjz.png',
      liveUrl: 'https://oikyotaan.in/',
      figmaUrl: 'https://www.figma.com/design/NboIZp7Kns5T1COTLASOU9/Oikyotan--UI-UX?t=ZiTVboM5NAmTxIhv-0',
    },
    {
      title: 'SummarIQ',
      subtitle: 'SaaS Landing Page',
      description:
        'SaaS Landing page for a tool that integrates with Zoom and Google Meet to generate meeting summaries and extract actionable tasks automatically',
      category: 'Website',
      technologies: ['Figma', 'Framer', 'Notion'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751256552/Screenshot_2025-06-30_093804_iphfnb.png',
      liveUrl: 'https://summariq-landing.vercel.app/',
      figmaUrl: 'https://github.com/Samarjit25/SummarIQ-landing',
    },
  ];

 return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-24 pb-20 bg-black text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
  <Link 
    to="/"
    className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
  >
    ← Back to Home
  </Link>

  <h1 className="inline-block text-4xl sm:text-6xl font-medium tracking-tight leading-tight pb-[4px] mb-4 bg-gradient-to-b from-white to-gray-700 bg-clip-text text-transparent">
    All Projects
  </h1>

  <p className="text-white-400 text-lg">Complete collection of my work</p>
</div>

          {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs text-gray-500 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-1">{project.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">{project.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-gray-800/50 border border-gray-700 text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 hover:text-black hover:border-gray-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Site
                    </Button>
                  </a>
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-gray-800/50 border border-gray-700 text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 hover:text-black hover:border-gray-300"
                    >
                      <FaFigma className="w-4 h-4 mr-2" />
                        Figma Design
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;