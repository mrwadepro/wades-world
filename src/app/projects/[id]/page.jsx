"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "../../components/ProjectsSection";

const ProjectPage = ({ params }) => {
  const project = projectsData.find(p => p.id === parseInt(params.id));

  if (!project) {
    return (
      <div className="min-h-screen bg-[#121212] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-white">Project not found.</div>
          <Link 
            href="/#projects" 
            className="text-[#ADB7BE] hover:text-white mt-4 inline-block"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/#projects" 
          className="text-[#ADB7BE] hover:text-white mb-8 inline-block"
        >
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>
        
        <div className="relative h-[400px] mb-8">
          <Image
            src={project.image}
            alt={`${project.title} Project`}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-white mb-4">Project Overview</h2>
          <p className="text-[#ADB7BE] mb-6">
            {project.description}
          </p>

          <h2 className="text-2xl font-semibold text-white mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tag.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-[#1E1E1E] text-[#ADB7BE] rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href={project.previewUrl}
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:bg-slate-200"
            >
              View Demo
            </Link>
            <Link
              href={project.gitUrl}
              className="px-6 py-3 rounded-full bg-[#1E1E1E] text-white hover:bg-[#2E2E2E]"
            >
              View Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 