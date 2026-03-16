import React from "react";

const Contact = () => {
  return (
    <div>
      <h2 className="text-center text-4xl mt-8 ">
        Contact{" "}
        <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">
          Us
        </span>
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-12 pt-16 mb-40">
        {/* contact info */}
        <div className="flex flex-col gap-y-5 col-span-5">
          {/* Email */}
          <div>
            <h2 className="font-semibold text-gray-400 text-2xl">Email</h2>
            <h5>tanvirshekh.dev@gmail.com</h5>
          </div>
          {/* Location */}
          <div>
            <h2 className="font-semibold text-gray-400 text-2xl">Location</h2>
            <h5>Narayanganj, Dhaka, Bangladesh</h5>
          </div>
          {/* Phone */}
          <div>
            <h2 className="font-semibold text-gray-400 text-2xl">Phone</h2>
            <h5>+880 1595272589</h5>
          </div>
        </div>

        {/* contact form */}
        <div className="col-span-7">
          <form>
            <div>
              <h2 className="text-3xl font-semibold text-gray-300 mb-2">
                Get In Touch
              </h2>
              {/* name */}
              <legend className="fieldset-legend">Your Name</legend>
              <fieldset className="fieldset">
                <input
                  type="text"
                  className="input w-full mb-4"
                  placeholder="Your Name"
                  required
                />
              </fieldset>
              {/* email */}
              <legend className="fieldset-legend">Your Email</legend>
              <label className="input validator w-full mb-4">
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

              {/* your subject */}
              <legend className="fieldset-legend">Your Massage</legend>
              <fieldset className="fieldset">
                <textarea
                  className="textarea h-40 mb-2 w-full"
                  placeholder="Tell Me About Your Project"
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
