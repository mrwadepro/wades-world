"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

export const projectsData = [
  {
    id: 1,
    title: "Stemuli 1.0",
    description: "Developed an online platform to help companies and organizations mentor students remotely, addressing the challenge of limited mentor availability due to full-time jobs. The platform allowed mentors to post videos and engage with students building workforce skills. It later evolved into a full learning management system (LMS) with progress tracking, attendance reporting, and a built-in virtual classroom for schools.",
    image: "/images/projects/stemuli_1.0/dashboard_volunteer.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/stemuli_1.0",
  },
  {
    id: 2,
    title: "EdOS ",
    description:
      "Built a hybrid web and Unity-based LMS that lets teachers create and manage curriculum, import classes from Google Classroom, and deliver interactive lessons through multiplayer Unity games. Teachers could assign quizzes embedded in games like obstacle courses or racing challenges. The Unity platform supported real-time multiplayer via Photon, allowing students to interact with peers and see their teacher in a live video feed inside the game. Teachers controlled the game environment directly from the web app, enabling full classroom management without entering the game.",
    image: "/images/projects/edOS/student_home.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/edOS",
  },
  {
    id: 3,
    title: "Platform One",
    description: "Project metaverse description",
    image: "/images/projects/platform-one/orb-onboarding.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/3",
  },
  {
    id: 4,
    title: "Rocket Lander Game",
    description: "Project 4 description",
    image: "/images/projects/rocket-lander/rocket-lander.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/projects/4",
  },
  {
    id: 5,
    title: "Educational Metaverse",
    description:
      "Metaverse for education built with Unity, Playfab, MySQL, and NodeJs.",
    image: "/images/projects/metaverse/avatar_customization.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/5",
  },
  {
    id: 6,
    title: "Elevator Safety Code Search Engine",
    description: "Project 5 description",
    image: "/images/projects/elevator-app/main.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/6",
  },
  {
    id: 7,
    title: "Project Manager Roadmaps in Jira",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/7",
  },
  {
    id: 8,
    title: "Project Manager Roadmaps in Asana",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/8",
  },
  {
    id: 9,
    title: "Elevator Code Search Engine",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/9",
  },
  {
    id: 10,
    title: "It Came From...",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/10",
  },
  {
    id: 11,
    title: "Notion CRM Automations",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/11",
  },
  {
    id: 12,
    title: "GameMaker Farmer Simulator",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/12",
  },
  {
    id: 13,
    title: "Job Board API",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/13",
  },
  {
    id: 14,
    title: "Stemuli Navigator Flutter Demo",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/14",
  },
  {
    id: 15,
    title: "Mapbox Flutter Integration",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/15",
  },
  {
    id: 16,
    title: "LED Screen Driven by Arduino",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/16",
  },
  {
    id: 17,
    title: "Tobi Mask driven by Adafruit MONSTER M4SK",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/17",
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
