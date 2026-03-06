import React from "react";
import htmlImg from "../../Icons/HTML5.png";
import cssImg from "../../Icons/CSS3.png";
import javaScriptImg from "../../Icons/JavaScript.png";
import tailwindCssImg from "../../Icons/Tailwind css.png";
import bootStrapImg from "../../Icons/Bootstrap.png";
import sassImg from "../../Icons/Sass.png";
import reactImg from "../../Icons/React.js.png";
import firebaseImg from "../../Icons/Firebase.png";
import gitImg from "../../Icons/Git.png";
import gitHubImg from "../../Icons/GitHub.png";
import vercelImg from "../../Icons/Vercel.svg";
import FigmaImg from "../../Icons/Figma.png";

const Skills = () => {
  return (
    <div>
      <h2 className="text-center text-4xl mt-8 ">
        My{" "}
        <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">
          Technical Expertise
        </span>
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 items-center justify-center gap-4 w-11/12 mx-auto mt-16 mb-24">
        {/* html */}
        <div class="skills-border">
          <img src={htmlImg} alt="" />
        </div>
        {/* css */}
        <div class="skills-border">
          <img src={cssImg} alt="" />
        </div>
        {/* javascript */}
        <div class="skills-border">
          <img src={javaScriptImg} alt="" />
        </div>
        {/* tailwindCss */}
        <div class="skills-border">
          <img src={tailwindCssImg} alt="" />
        </div>
        {/* bootStrap */}
        <div class="skills-border">
          <img src={bootStrapImg} alt="" />
        </div>
        {/* sass */}
        <div class="skills-border">
          <img src={sassImg} alt="" />
        </div>
        {/* react */}
        <div class="skills-border">
          <img src={reactImg} alt="" />
        </div>
        {/* firebase */}
        <div class="skills-border">
          <img src={firebaseImg} alt="" />
        </div>
        {/* git */}
        <div class="skills-border">
          <img src={gitImg} alt="" />
        </div>
        {/* gitHub */}
        <div class="skills-border">
          <img src={gitHubImg} alt="" className="fill-white brightness-0 invert"/>
        </div>
        {/* vercel */}
        <div class="skills-border">
          <img src={vercelImg} alt="" className="h-14 w-14 fill-white brightness-0 invert" />
        </div>
        {/* Figma */}
        <div class="skills-border">
          <img src={FigmaImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
