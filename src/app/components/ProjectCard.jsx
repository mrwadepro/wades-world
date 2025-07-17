import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Utility function to determine if the file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

// Component to render media (image or video)
const MediaDisplay = ({ mediaUrl, title }) => {
  if (isVideoFile(mediaUrl)) {
    return (
      <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          style={{ pointerEvents: 'none' }}
        >
          <source src={mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  } else {
    return (
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${mediaUrl})`, backgroundSize: "cover" }}
      >
        {/* Fallback img element for better accessibility */}
        <img
          src={mediaUrl}
          alt={title}
          className="w-full h-full object-cover opacity-0"
          onLoad={(e) => e.target.style.opacity = 0}
        />
      </div>
    );
  }
};

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, role, technologies }) => {
  return (
    <div>
      <MediaDisplay mediaUrl={imgUrl} title={title} />
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        
        <div className="text-[#ADB7BE] prose prose-sm prose-invert max-w-none mb-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
              h2: ({ children }) => <h2 className="text-base font-semibold mb-2">{children}</h2>,
              h3: ({ children }) => <h3 className="text-sm font-medium mb-1">{children}</h3>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
              li: ({ children }) => <li className="mb-1">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              em: ({ children }) => <em className="italic">{children}</em>,
            }}
          >
            {description}
          </ReactMarkdown>
        </div>

        {/* Display roles if available */}
        {role && role.length > 0 && (
          <div className="mb-3">
            <h6 className="text-sm font-medium text-[#ADB7BE] mb-1">Role:</h6>
            <div className="flex flex-wrap gap-1">
              {role.map((r, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#2A2A2A] text-[#ADB7BE] px-2 py-1 rounded-md text-xs"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        )}
        {/* Display technologies if available */}
        {technologies && technologies.length > 0 && (
          <div className="mb-3">
            <h6 className="text-sm font-medium text-[#ADB7BE] mb-1">Technologies:</h6>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#2A2A2A] text-[#ADB7BE] px-2 py-1 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
