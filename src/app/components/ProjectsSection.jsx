"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "I am happy to share that I have a created and deployed a React Portfolio website where you can see the details about me, my projects,Download my CV and Contact me.",
    image: "/portfoliopic.png",
    tag: ["All"],
    gitUrl: "https://github.com/poojadileep/portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Profile Card UI",
    description: "Developed a Profile card UI similar to social media handle UI's using Flutter",
    image: "/pcui.png",
    tag: ["All"],
    gitUrl: "https://github.com/poojadileep/profile_ui",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Pizza Ordering Form site",
    description: "Developed a pizza odering forms site using HTML,CSS and JS",
    image: "/pzord.jpg",
    tag: ["All"], 
    gitUrl: "https://github.com/poojadileep/amFOSS-tasks/tree/main/task-08",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Virtual Mouse",
    description: "Developed a virtual mouse where we can use hand as mouse using OpenCV-python",
    image: "/vmpic.png",
    tag: ["All"],
    gitUrl: "https://github.com/poojadileep/Virtual_mouse",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-yellow-600 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6" style={{ display: 'none' }}>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;