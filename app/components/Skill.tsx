import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Skill = () => {
  return (
    <div className="flex flex-wrap gap-4 h-80 overflow-y-auto">
      <div className="relative card bg-gray-800 p-10 w-36">
        <div className="relative group">
          <FaHtml5 size={60} className="hover:text-green-600" />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-white text-black text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
            HTML5
          </div>
        </div>
      </div>

      <div className="relative card bg-gray-800 p-10 w-36">
        <div className="relative group">
          <FaCss3Alt size={60} className="hover:text-green-600" />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-white text-black text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
            CSS3
          </div>
        </div>
      </div>

      <div className="relative card bg-gray-800 p-10 w-36">
        <div className="relative group">
          <FaJs size={60} className="hover:text-green-600" />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-white text-black text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
            JavaScript
          </div>
        </div>
      </div>

      <div className="relative card bg-gray-800 p-10 w-36">
        <div className="relative group">
          <FaReact size={60} className="hover:text-green-600" />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-white text-black text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
            React
          </div>
        </div>
      </div>

      <div className="relative card bg-gray-800 p-10 w-36">
        <div className="relative group">
          <FaGithub size={60} className="hover:text-green-600" />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-white text-black text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
            Github
          </div>
        </div>
      </div>

      <div className="relative card bg-gray-800 p-10 w-36">
        <div className="relative group">
          <SiNextdotjs size={60} className="hover:text-green-600" />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-white text-black text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
            Next.js
          </div>
        </div>
      </div>

      <div className="relative card bg-gray-800 p-10 w-36">
        <div className="relative group">
          <SiTailwindcss size={60} className="hover:text-green-600" />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-white text-black text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
            Tailwind
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
