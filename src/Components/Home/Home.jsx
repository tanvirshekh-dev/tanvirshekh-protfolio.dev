import React from "react";
import image from "../../Images/tanvir shekh.png";
import { CodeXml, Linkedin, Mail, Rocket } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

const Home = () => {
  return (
    // justify-center ব্যবহার করা হয়েছে যাতে কন্টেন্ট মাঝখানে থাকে
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        <div>
          {/* title */}
          <h1 className="text-6xl font-medium">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">
              Tanvir Shekh
            </span>
            <br />
            <span className="text-3xl text-gray-300">
              Web Developer & UI/UX Designer
            </span>
          </h1>
          {/* description */}
          <p className="py-6 text-xl font-normal text-gray-400">
            I’m a Front End Web developer passionate about creating clean UI,
            smooth user experiences, and responsive web applications with React,
            JavaScript, and modern CSS frameworks.
          </p>
          {/* buttons */}
          <div>
            <button className="btn btn-success mr-4">
              <Rocket size={20} /> Hire Me
            </button>
            <button className="btn btn-success btn-outline">
              <CodeXml size={20} /> View Project
            </button>
          </div>

          {/* social links */}
          <div className="py-8 flex gap-4">
            <a
              href="https://github.com/tanvirshekh-dev"
              target="_blank"
              className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white border border-gray-500"
            >
              <FiGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/tanvirshekh/"
              target="_blank"
              className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white border border-gray-500"
            >
              <Linkedin size={28} />
            </a>

            <a
              href="mailto:tanvirshekh.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white border border-gray-500 hover:bg-gray-700 transition-colors"
            >
              <Mail size={24} />
            </a>

            <a
              href="https://www.behance.net/tanvirshekh-dev"
              target="_blank"
              className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white border border-gray-500"
            >
              <FaBehance size={28} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src={image} className="max-w-md rounded-2xl" alt="Box Office" />
        </div>
      </div>
    </div>
  );
};

export default Home;
