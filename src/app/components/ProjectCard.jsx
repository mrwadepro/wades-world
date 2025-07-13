import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, role, technologies }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/*<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">*/}
        {/*  <Link*/}
        {/*    href={gitUrl}*/}
        {/*    className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"*/}
        {/*  >*/}
        {/*    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    href={previewUrl}*/}
        {/*    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"*/}
        {/*  >*/}
        {/*    <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
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
