import React from "react";
import { motion } from "motion/react";

const About = () => {
  const easing = [0.42, 0, 0.58, 1]; // ease-out cubic bezier

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easing }}
    >
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-blue-600">
          About Me
        </h2>

        <div className="text-gray-700 text-lg leading-relaxed space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: easing }}
          >
            I'm currently pursuing a{" "}
            <strong>BSc in Computer Science and Engineering</strong> at
            International Islamic University Chittagong (2023–present). My
            journey into programming began with a strong curiosity about how the
            internet and web technologies work, which naturally led me to
            specialize in frontend development.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: easing }}
          >
            I've completed over 5 projects and have contributed to more than 500 commits on GitHub, constantly honing my skills and building real-world applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: easing }}
          >
            I'm passionate about crafting visually engaging, responsive, and
            user-friendly web applications using modern tools like React and
            TailwindCSS. Every project is an opportunity to blend creativity
            with functionality.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: easing }}
          >
            Beyond the screen, I find inspiration in nature and recharge through
            playing football—activities that spark fresh ideas and creativity in
            my development work. I'm always eager to learn, grow, and build
            projects that make a difference.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
