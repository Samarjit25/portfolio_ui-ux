import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FaFigma } from 'react-icons/fa';

const Projects = () => {
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
    
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="inline-block text-4xl sm:text-6xl font-medium tracking-tighter leading-tight pb-[6px] mb-4 bg-gradient-to-b from-white to-gray-700 bg-clip-text text-transparent">
  Projects Catalogue
</h3>



          <p className="text-white-400 text-lg">A few things I've worked on.</p>
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

        {/* View All Projects Button */}
        <div className="mt-16 flex justify-center">
          <Link to="/projects">
            <Button
              variant="outline"
             className="bg-gray-900/40 border border-gray-700 text-white rounded-full px-6 py-2 transition-all duration-300 ease-in-out hover:border-white hover:bg-gray-800 hover:text-white hover:shadow-md hover:scale-105"

            >
              View All Projects →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
