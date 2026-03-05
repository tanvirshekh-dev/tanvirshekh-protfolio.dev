import React from "react";
import portfolioImage from "../../Images/Tanvir Portfolio-01.png"
import { MdOutlineWorkOutline } from "react-icons/md";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        {/* Image section */}
        <div>
          <img src={portfolioImage} className="max-w-md rounded-2xl" alt="Box Office" />
        </div>

        {/* content */}
        <div>
          {/* title */}
          <h1 className="text-3xl text-gray-300">
            I'm a Passionate{" "}
            <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent font-medium">
              Web Developer
            </span>
          </h1>
          {/* description */}
          <p className="py-6 text-lg font-normal text-gray-400">
            I'm passionate about creating clean UI, smooth user experiences, and
            responsive web applications with React, JavaScript, and modern CSS
            frameworks.
            <br />
            <br />
            Eager to learn, improve, and work on real-world projects. Most of
            the time I work with react, javascript but some technologies I enjoy
            to learn about software automation.
          </p>
          {/* cards */}
          <div class="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
            {/* card 01 */}
            <div class="p-4">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg flex items-center flex-col">
                <MdOutlineWorkOutline size={52} />
                <h2 class="title-font font-medium text-3xl text-white">
                  5+
                </h2>
                <p class="text-xs text-gray-400">Years Experience</p>
              </div>
            </div>
            {/* card 02 */}
           <div class="p-4">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg flex items-center flex-col">
                <MdOutlineWorkOutline size={52} />
                <h2 class="title-font font-medium text-3xl text-white">
                  5+
                </h2>
                <p class="text-xs text-gray-400">Years Experience</p>
              </div>
            </div>
            {/* card 03 */}
            <div class="p-4">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg flex items-center flex-col">
                <MdOutlineWorkOutline size={52} />
                <h2 class="title-font font-medium text-3xl text-white">
                  5+
                </h2>
                <p class="text-xs text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          {/* social links */}
          <div className="py-8 flex gap-4">
            <a
              href="https://github.com/tanvirshekh-dev"
              target="_blank"
              className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white border border-gray-500"
            >
              {/* <FiGithub size={28} /> */}
            </a>

            <a
              href="https://www.linkedin.com/in/tanvirshekh/"
              target="_blank"
              className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white border border-gray-500"
            >
              {/* <Linkedin size={28} /> */}
            </a>

            <a
              href="mailto:tanvirshekh.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white border border-gray-500 hover:bg-gray-700 transition-colors"
            >
              {/* <Mail size={24} /> */}
            </a>

            <a
              href="https://www.behance.net/tanvirshekh-dev"
              target="_blank"
              className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-white border border-gray-500"
            >
              {/* <FaBehance size={28} /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
