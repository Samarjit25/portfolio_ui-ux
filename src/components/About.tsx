import { ExternalLink } from 'lucide-react';

const About = () => {
  const links = [
    { name: 'GitHub', url: 'https://github.com/Samarjit25' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samarjit-roy-368071257/' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/samarjitroy/' }
  ];

  return (
    <section id="about" className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h3 className="inline-block text-3xl font-medium tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
  About Me
</h3>


        <div className="space-y-6 text-white/90 text-base leading-normal">
          <p>
            Passionate about crafting intuitive, user-centered designs and bringing them to life through seamless digital experiences. I thrive on turning complex ideas into interfaces that feel effortless and engaging.
          </p>

          <p>
            I love transforming abstract concepts into intuitive, user-centered experiences—whether it's crafting seamless interfaces or mapping out smooth user flows. Driven by curiosity, I constantly explore design trends, test new tools, and iterate with purpose to create solutions that are not only visually compelling but also deeply usable.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue hover:text-blue-300 transition-colors duration-200"
              >
                {link.name}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
