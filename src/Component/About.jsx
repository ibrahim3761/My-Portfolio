import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-blue-600">About Me</h2>

        <div className="text-gray-700 text-lg leading-relaxed space-y-6">
          <p>
            I'm currently pursuing a{" "}
            <strong>BSc in Computer Science and Engineering</strong> at
            International Islamic University Chittagong (2023–present). My
            journey into programming began with a strong curiosity about how the
            internet and web technologies work, which naturally led me to
            specialize in frontend development.
          </p>

          <p>
            I'm passionate about crafting visually engaging, responsive, and
            user-friendly web applications using modern tools like React and
            TailwindCSS. Every project is an opportunity to blend creativity
            with functionality.
          </p>

          <p>
            Beyond the screen, I find inspiration in nature and recharge through
            playing football—activities that spark fresh ideas and creativity in
            my development work. I'm always eager to learn, grow, and build
            projects that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
