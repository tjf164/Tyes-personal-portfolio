import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'The Creator',
    category: 'Adobe Illustrator',
    description: 'A high-contrast, stylized portrait exploring pop culture aesthetics and bold color palettes.',
    image: '/showcase/tyler-portrait.png'
  },
  {
    id: 2,
    title: 'Empire Strikes Back',
    category: 'Adobe Illustrator',
    description: 'A minimalist tribute to the classic Star Wars film, focusing on iconic silhouettes and narrative composition.',
    image: '/showcase/empire-strikes-back.jpg'
  },
  {
    id: 3,
    title: 'Bear Adventure (Part I)',
    category: 'Visual Storytelling',
    description: 'The Dream Begins: Bear wakes up and prepares for a journey through the snowy peaks.',
    image: '/showcase/bear-comic-1.png'
  },
  {
    id: 4,
    title: 'Bear Adventure (Part II)',
    category: 'Visual Storytelling',
    description: 'The Descent: High-stakes action on the slopes as the bear tests its limits and masters the terrain.',
    image: '/showcase/bear-comic-2.png'
  },
  {
    id: 5,
    title: 'Bear Adventure (Part III)',
    category: 'Visual Storytelling',
    description: 'The Haven: A peek into the bear\'s personalized sanctuary, filled with trophies and gear from its adventures.',
    image: '/showcase/bear-comic-3.png'
  },
  {
    id: 6,
    title: 'Apple AirPod Maxes',
    category: '3D Blender',
    description: 'A meticulously detailed 3D render of Apple AirPod Maxes, focusing on complex material shaders and ergonomic form.',
    image: '/showcase/headphones-3d.png'
  },
  {
    id: 7,
    title: 'Grandmaster Strategy',
    category: '3D Blender',
    description: 'A futuristic, high-contrast chess set render exploring non-traditional materials and lighting.',
    image: '/showcase/chess-board-3d.png'
  },
  {
    id: 8,
    title: 'Urban Tycoon',
    category: 'Adobe Illustrator',
    description: 'A custom skateboard deck design featuring iconic pop-culture imagery and street-art influences.',
    image: '/showcase/monopoly-skateboard.png'
  },
  {
    id: 9,
    title: 'Bear Haven',
    category: '3D Blender',
    description: 'A 4-panel 3D blockout in Blender, establishing the layout and spatial foundations for the Bear\'s sanctuary.',
    image: '/showcase/room-blockout.png'
  },
  {
    id: 10,
    title: 'The Haven',
    category: 'Concept Art / Sketching',
    description: 'A detailed line-art study of a personalized indoor environment, focusing on density and perspective.',
    image: '/showcase/bedroom-sketch.png'
  },
  {
    id: 11,
    title: 'Polar Bear Animation',
    category: '3D Animation / Motion',
    description: 'A charming 3D character animation featuring a polar bear, exploring fluid movement and personality-driven motion.',
    image: '/showcase/polar-bear.mp4'
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const isVideo = (path) => path?.endsWith('.mp4');

  return (
    <section id="work" className="section container">
      <span className="label">Selected Work</span>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Crafting digital <br /> excellence.
      </motion.h2>

      <div className="projects-grid">
        {projectData.map((project, i) => (
          <motion.div
            key={project.id}
            layoutId={`card-container-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="project-image-wrapper">
              {isVideo(project.image) ? (
                <video 
                  src={project.image} 
                  className="project-img" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                />
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img" 
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              )}
              <div className="project-image-fallback"></div>
            </div>
            
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </div>
            <div className="project-action">
              <ArrowUpRight size={20} />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="project-overlay-backdrop"
            onClick={() => setSelectedId(null)}
          >
            <button 
              className="close-button"
              onClick={() => setSelectedId(null)}
            >
              <X size={24} />
            </button>

            <motion.div 
              className="project-overlay-content"
              layoutId={`card-container-${selectedId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overlay-image-wrapper">
                 {isVideo(projectData.find(p => p.id === selectedId).image) ? (
                    <video 
                      src={projectData.find(p => p.id === selectedId).image} 
                      className="overlay-img" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      controls
                    />
                 ) : (
                    <img 
                      src={projectData.find(p => p.id === selectedId).image} 
                      alt="Project detail" 
                      className="overlay-img" 
                      onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                 )}
                 <div className="overlay-image-fallback"></div>
              </div>
              
              <div className="overlay-text">
                <div className="overlay-header">
                  <span className="label" style={{ color: 'var(--text-muted)' }}>
                    {projectData.find(p => p.id === selectedId).category}
                  </span>
                  <h3 className="overlay-title">
                    {projectData.find(p => p.id === selectedId).title}
                  </h3>
                </div>
                <p className="overlay-description">
                  {projectData.find(p => p.id === selectedId).description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
