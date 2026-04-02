import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="about-grid">
        <motion.div 
          className="about-image-column"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="main-about-image">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" 
              alt="Digital Art by Tye Frankel" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="about-text-column"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="label">About Me</span>
          <h2 className="section-title">Bringing imagination <br /> to life.</h2>
          <div className="about-bio-container">
            <p className="about-bio">
              Hi, I'm Tye 👋
            </p>
            <p className="about-bio">
              I'm a digital artist with a passion for bringing imagination to life whether that's through expressive character illustrations, immersive fantasy concept art, sculpted 3D worlds, or fluid motion graphics. Design lives in everything I do, from the way I build a character's personality into every line to the way I think about how a viewer moves through a piece.
            </p>
            <p className="about-bio">
              For me, art has never just been a skill it's the way I make sense of the world. I'm endlessly inspired by storytelling, mythology, and the magic that happens when technology meets creativity. Every project is a new opportunity to explore, experiment, and push what's visually possible. 
            </p>
            <p className="about-bio">
              Whether I'm crafting a character from scratch, animating a scene that breathes with life, or designing an experience that feels intuitive and beautiful, I bring the same energy to all of it: genuine curiosity and a whole lot of heart.
            </p>
            <p className="about-bio">
              I'm so glad you're here. Take a look around, and feel free to reach out—I'd love to connect. ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
