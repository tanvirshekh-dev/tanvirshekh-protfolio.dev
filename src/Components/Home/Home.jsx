import React from "react";
import image from "../../Images/tanvir shekh.png";
import { CodeXml, Rocket } from "lucide-react";

const Home = () => {
  return (
    // justify-center ব্যবহার করা হয়েছে যাতে কন্টেন্ট মাঝখানে থাকে
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        <div>
          <h1 className="text-6xl font-medium">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#00ffa1] to-[#00fff2] bg-clip-text text-transparent">
              Tanvir Shekh
            </span>
            <br />
            <span className="text-3xl text-gray-300">
              Web Developer & UI/UX Designer
            </span>
          </h1>
          <p className="py-6 text-xl font-normal text-gray-400">
            I’m a Front End Web developer passionate about creating clean UI,
            smooth user experiences, and responsive web applications with React,
            JavaScript, and modern CSS frameworks.
          </p>
          <div>
            <button className="btn btn-primary">
              <Rocket size={20} /> Hire Me
            </button>
            <button className="btn btn-primary"><CodeXml size={20} /> View Project</button>
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
