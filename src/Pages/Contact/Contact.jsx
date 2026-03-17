import { Linkedin, Mail } from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <h2 className="text-center text-4xl mt-8 ">
        Contact{" "}
        <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">
          Us
        </span>
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-12 pt-16 mb-40 gap-x-10">
        {/* contact info */}
        <div className="flex flex-col gap-y-10 col-span-4 bg-gray-800 px-10 py-10 rounded-xl cursor-pointer">
          {/* Email */}
          <div>
            <h2 className="font-semibold text-gray-400 text-2xl border-l-2 h-5 flex items-center border-green-400 pl-2 mb-2">
              Email
            </h2>
            <h5 className="text-gray-200">tanvirshekh.dev@gmail.com</h5>
          </div>
          {/* Location */}
          <div>
            <h2 className="font-semibold text-gray-400 text-2xl border-l-2 h-5 flex items-center border-green-400 pl-2 mb-2">
              Location
            </h2>
            <h5 className="text-gray-200">Narayanganj, Dhaka, Bangladesh</h5>
          </div>
          {/* Phone */}
          <div>
            <h2 className="font-semibold text-gray-400 text-2xl border-l-2 h-5 flex items-center border-green-400 pl-2 mb-2">
              Phone
            </h2>
            <h5 className="text-gray-200">+880 1595272589</h5>
            <h5 className="text-gray-200">+880 1618787709</h5>
          </div>
          {/* Social Media */}
          <div>
            <h2 className="font-semibold text-gray-400 text-2xl border-l-2 h-5 flex items-center border-green-400 pl-2 mb-2">
              Socila Media
            </h2>
            {/* social links */}
            <div className="py-4 flex gap-4">
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
        </div>

        {/* contact form */}
        <div className="col-span-8">
          <form>
            <div className="bg-gray-800 px-8 py-10 rounded-xl cursor-pointer">
              <h2 className="text-3xl font-semibold text-gray-300 mb-2">
                Get In Touch
              </h2>
              {/* name */}
              <legend className="fieldset-legend">Your Name</legend>
              <fieldset className="fieldset">
                <input
                  type="text"
                  className="input w-full mb-2"
                  placeholder="Your Name"
                  required
                />
              </fieldset>
              {/* email */}
              <legend className="fieldset-legend">Your Email</legend>
              <label className="input validator w-full mb-2">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="Your Email" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>

              {/* your massage */}
              <legend className="fieldset-legend">Your Massage</legend>
              <fieldset className="fieldset">
                <textarea
                  className="textarea h-30 mb-2 w-full"
                  placeholder="Tell Me About Your Project"
                  required
                ></textarea>
              </fieldset>

              {/* button */}
              <div className="navbar-start">
                <a className="btn btn-success text-black text-lg">
                  Send Massage
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
