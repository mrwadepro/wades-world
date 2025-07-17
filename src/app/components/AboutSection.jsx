"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
        <div className="mb-3 space-y-4">
          <div>
            <span className="block font-semibold text-[#ADB7BE] mb-1">Client</span>
            <div className="flex flex-wrap gap-2">
              {["React", "Vite", "Next.js","React Native","Cordova","Flutter", "axios"].map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#2A2A2A] text-[#ADB7BE] px-2 py-1 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="block font-semibold text-[#ADB7BE] mb-1">Databases</span>
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "PostgreSQL", "MySQL", "Cloud Firestore"].map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#2A2A2A] text-[#ADB7BE] px-2 py-1 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="block font-semibold text-[#ADB7BE] mb-1">Backend</span>
            <div className="flex flex-wrap gap-2">
              {["Python", "FastAPI", "Nest.js", "Node.js", "Express", "RabbitMQ", "BullMQ", "Redis", "Socket.io"].map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#2A2A2A] text-[#ADB7BE] px-2 py-1 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="block font-semibold text-[#ADB7BE] mb-1">DevOps</span>
            <div className="flex flex-wrap gap-2">
              {["Docker", "Kubernetes", "AWS", "Azure", "GCP"].map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#2A2A2A] text-[#ADB7BE] px-2 py-1 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div>
          <h5 className="text-lg font-semibold text-white mb-1">University of Texas at Dallas</h5>
          <p className="text-[#ADB7BE] text-sm mb-2">Bachelor of Science in Computer Science</p>
          <p className="text-[#ADB7BE] text-xs">Graduated: 2017</p>
        </div>
        <div>
          <h6 className="text-sm font-medium text-[#ADB7BE] mb-1">Relevant Coursework:</h6>
          <div className="flex flex-wrap gap-1">
            {["Programming Fundamentals", "Probability & Statistics", "Data Structures & Algorithms", "Software Engineering", "C/C++ Programming", "Database Systems", "Operating Systems"].map((course, index) => (
              <span
                key={index}
                className="inline-block bg-[#2A2A2A] text-[#ADB7BE] px-2 py-1 rounded-md text-xs"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Rewards",
    id: "rewards",
    content: (
      <ul className="list-disc pl-2">
        <li>United Nations AI for Good Summit's Innovation Factory</li>
        <li>Dallas ISD Industry Partner of the Year</li>
        <li>Most Transformational App for Kids by Forbes + Yass Prize</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m a dedicated and versatile Software Engineer with a passion for building full-stack applications, scalable cloud systems, and engaging educational experiences. I enjoy solving complex problems, leading development efforts, and integrating cutting-edge AI into practical tools for learners. I approach every challenge with the mindset that “anything is possible and can be built”—a belief that fuels my drive to create impactful solutions. Outside of work, I spend time tinkering with side projects, exploring Linux Mint as my daily OS, and diving into epic fantasy—The Way of Kings by Brandon Sanderson is a current favorite. I bring curiosity, creativity, and a commitment to empowering others through technology.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("rewards")}
              active={tab === "rewards"}
            >
              {" "}
              Rewards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
