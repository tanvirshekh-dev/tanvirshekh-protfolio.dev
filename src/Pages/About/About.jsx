import React from "react";
import portfolioImage from "../../Images/Tanvir Portfolio-01.png";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Award, Download, Users } from "lucide-react";

const About = () => {
  return (
    <div>
      <h2 className="text-center text-4xl my-8 ">
        Know More{" "}
        <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">
          About Me
        </span>
      </h2>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full mt-12 mb-20">
          {/* Image section */}
          <div>
            <img
              src={portfolioImage}
              className="max-w-md rounded-2xl"
              alt="Box Office"
            />
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
              I'm passionate about creating clean UI, smooth user experiences,
              and responsive web applications with React, JavaScript, and modern
              CSS frameworks.
              <br />
              <br />
              Eager to learn, improve, and work on real-world projects. Most of
              the time I work with react, javascript but some technologies I
              enjoy to learn about software automation.
            </p>
            {/* cards */}
            <div class="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
              {/* card 01 */}
              <div>
                <div class="border-2 border-gray-200 px-2 py-6 rounded-lg flex items-center flex-col">
                  <MdOutlineWorkOutline size={44} className="text-[#00d390]" />
                  <h2 class="title-font font-medium text-3xl text-white py-2">
                    1.5+
                  </h2>
                  <p class="text-md text-gray-400">Years Experience</p>
                </div>
              </div>
              {/* card 02 */}
              <div>
                <div class="border-2 border-gray-200 px-2 py-6 rounded-lg flex items-center flex-col">
                  <Award size={44} className="text-[#00d390]" />
                  <h2 class="title-font font-medium text-3xl text-white py-2">
                    10+
                  </h2>
                  <p class="text-md text-gray-400">Projects Completed</p>
                </div>
              </div>
              {/* card 03 */}
              <div>
                <div class="border-2 border-gray-200 px-2 py-6 rounded-lg flex items-center flex-col">
                  <Users size={44} className="text-[#00d390]" />
                  <h2 class="title-font font-medium text-3xl text-white py-2">
                    5+
                  </h2>
                  <p class="text-md text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* download cv button */}
            <div className="mt-6">
              <a className="btn btn-success text-black">
                <Download size={24} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
