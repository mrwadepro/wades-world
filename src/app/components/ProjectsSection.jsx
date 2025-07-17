"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

export const projectsData = [
  {
    id: 1,
    title: "Platform One",
    description: `Platform One is an intelligent education platform designed to support student learning through ORB, a virtual education assistant. ORB personalizes support for each learner using a dynamic profile generated during onboarding, enabling tailored academic guidance and content delivery.`,
    role:['Project Manager', 'Frontend Engineer', 'Backend Engineer', 'DevOps'],
    technologies: ['ReactJS', 'Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'OpenAI', 'Instructor', 'AWS', 'Railway'],
    image: "/images/projects/platform-one/orb-onboarding.png",
    tag: ["All","Professional"],
    gitUrl: "/",
    previewUrl: "/projects/3",
  },
  {
    id: 2,
    title: "Educational Metaverse",
    description: `Educational Metaverse is a 3D learning platform built in Unity that delivers AI-generated math missions inside an immersive virtual world. We developed a custom AI pipeline in Python to generate learning content, which was stored in AWS S3 and then pulled into the game backend to be converted into playable missions. The game tracks player actions using a custom analytics system, allowing us to make data-driven content recommendations. Math problems are rendered using LaTeX, and we built an internal review dashboard to manage and approve AI-generated LaTeX outputs before they appear in-game.`,
    role: ['Frontend Engineer','Backend Engineer', 'System Architect', 'AI Integration Engineer', 'DevOps'],
    technologies: ['Unity', 'Python', 'AWS S3', 'LaTeX', 'Next.js', 'MongoDB','NestJS','Typescript','REDIS','RabbitMQ', 'Google Cloud Platform'],

    image: "/images/projects/metaverse/avatar_customization.png",
    tag: ["All","Professional"],
    gitUrl: "/",
    previewUrl: "/projects/5",
  },
  {
    id: 3,
    title: "Elevator Safety Code Search Engine",
    description: `Elevator Safety Code Search Tool is a personal project designed to create an "Ask PDF" experience for navigating complex safety documentation. Starting from a fork of an open-source Next.js ChatGPT app, I integrated it with an OpenAI Agent that referenced uploaded PDF documents. The goal was to allow users to query elevator safety codes conversationally. While functional, the tool revealed limitations in current LLMs, as responses were occasionally inaccurate or fabricated even when instructed not to.`,
    role: [],
    technologies: ['Next.js','Typescript', 'OpenAI Agents'],
    image: "/images/projects/elevator-app/main.jpg",
    tag: ["All","Personal"],
    gitUrl: "/",
    previewUrl: "/projects/6",
  },
  {
    id: 4,
    title: "EdOS",
    description:
        "Built a hybrid web and Unity-based LMS that lets teachers create and manage curriculum, import classes from Google Classroom, and deliver interactive lessons through multiplayer Unity games. Teachers could assign quizzes embedded in games like obstacle courses or racing challenges. The Unity platform supported real-time multiplayer via Photon, allowing students to interact with peers and see their teacher in a live video feed inside the game. Teachers controlled the game environment directly from the web app, enabling full classroom management without entering the game.",
    image: "/images/projects/edOS/student_home.png",
    role:['Project Manager', 'Frontend Engineer', 'Backend Engineer', 'DevOps'],
    technologies: ['Next.js', 'MongoDB', 'NodeJS', 'ExpressJS', 'Socket.IO','Unity 3D', 'Azure Cloud'],
    tag: ["All","Professional"],
    gitUrl: "/",
    previewUrl: "/projects/edOS",
  },
  {
    id: 5,
    title: "Stemuli 1.0",
    description: "Developed an online platform to help companies and organizations mentor students remotely, addressing the challenge of limited mentor availability due to full-time jobs. The platform allowed mentors to post videos and engage with students building workforce skills. It later evolved into a full learning management system (LMS) with progress tracking, attendance reporting, and a built-in virtual classroom for schools.",
    role:['Project Manager', 'Frontend Engineer', 'Backend Engineer', 'UI/UX Designer', 'DevOps'],
    technologies: ['ReactJS', 'MongoDB', 'NodeJS', 'ExpressJS', 'Socket.IO', 'Azure Cloud'],
    image: "/images/projects/stemuli_1.0/dashboard_volunteer.png",
    tag: ["All","Professional"],
    gitUrl: "/",
    previewUrl: "/projects/stemuli_1.0",
  },
  {
    id: 6,
    title: "Rocket Lander Game",
    description: "This was a personal project that I built to learn Unity and C#. The game involves controlling a rocket to land safely on a platform while avoiding obstacles. It features physics-based movement, collision detection, and a scoring system based on landing accuracy.",
    image: "/images/projects/rocket-lander/rocket-lander.png",
    technologies: ['Unity3D', 'C#'],
    tag: ["All","Personal"],
    gitUrl: "/",
    previewUrl: "/projects/4",
  },
  {
    id: 16,
    title: "LED Screen Driven by Arduino (College Project)",
    description: `This project was a college build focused on creating a custom LED display using addressable LED strips controlled by an Arduino microcontroller. I soldered the LED strips together into a grid layout and programmed the Arduino to control each LED individually, enabling pixel-by-pixel lighting. The result was a functional LED screen capable of displaying animations and patterns.`,
    technologies: ['Arduino', 'C++', 'Addressable LEDs'],
    image: "/images/projects/arduino_screen/output.mp4",
    tag: ["All","College"],
    gitUrl: "/",
    previewUrl: "/projects/16",
  },
  {
    id: 17,
    title: "Tobi Mask driven by Adafruit MONSTER M4SK",
    description: `This project was a cosplay electronics build where I modified a store-bought Naruto character mask by embedding an Adafruit Monster Mask — a microcontroller board with dual OLED displays designed for animating eyes. Using CircuitPython, I programmed a custom eye animation that included realistic movement and blinking by manipulating a flat image. The result was a dynamic, animated eye that brought the mask to life.`,
    technologies: ['Adafruit Monster Mask', 'CircuitPython', 'OLED Display', 'Eye Animation', 'Cosplay Electronics'],
    image: "/images/projects/tobi_mask/tobi.mp4",
    tag: ["All","Personal"],
    gitUrl: "/",
    previewUrl: "/projects/17",
  },
  {
    id: 18,
    title: "LED Cloud",
    description: `LED Cloud is an arts and crafts project where I built a glowing cloud effect using a plastic container filled with cotton-like stuffing and LED lights. The LEDs could either remain static or pulse in sync with music using a built-in microphone module. This project focused on creative assembly and aesthetic design rather than programming.`,
    image: "/images/projects/cloud/output.mp4",
    tag: ["All","Personal"],
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
          name="Professional"
          isSelected={tag === "Professional"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="College"
            isSelected={tag === "College"}
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
              role={project.role}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
