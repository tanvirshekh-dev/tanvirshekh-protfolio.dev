import {
    Atom,
  BriefcaseBusiness,
  FileBraces,
  LayoutDashboard,
  MonitorSmartphone,
} from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div>
      <h2 className="text-center text-4xl mt-8 ">
        My{" "}
        <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">
          Services
        </span>
      </h2>
      {/* cards */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* card 01 */}
        <div className="mt-40">
          <div className="card shadow-sm flex items-center bg-gray-800 pt-6 relative top-0 left-0">
            {/* icon */}
            <div className="">
              <span className="absolute -top-[25%] left-[35%]">
                <BriefcaseBusiness
                  size={130}
                  className="bg-[#00ae77] services-image-clip-path px-4 py-6"
                />
              </span>
            </div>
            {/* content */}
            <div className="card-body items-center text-center py-16">
              <h2 className="text-3xl mb-2 font-semibold">
                Unique{" "}
                <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">
                  Design
                </span>
              </h2>
              <p className="text-md">
                I create clean, beautiful designs that are simple to use and
                easy to love. Every detail is carefully made to give users the
                best experience.
              </p>
            </div>
          </div>
        </div>
        {/* card 02 */}
        <div className="mt-40 ">
          <div className="card shadow-sm flex items-center bg-gray-800 pt-6 relative top-0 left-0">
            {/* icon */}
            <div className="">
              <span className="absolute -top-[25%] left-[35%]">
                <LayoutDashboard
                  size={130}
                  className="bg-[#00ae77] services-image-clip-path px-4 py-6"
                />
              </span>
            </div>
            {/* content */}
            <div className="card-body items-center text-center py-16">
              <h2 className="text-3xl mb-2 font-semibold">
                Different{" "}
                <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">
                  Layout
                </span>
              </h2>
              <p className="text-md">
                I offer services with fresh, unique layouts tailored for every
                need. Each design is structured clearly so clients can easily
                find, and enjoy what I provide.
              </p>
            </div>
          </div>
        </div>
        {/* card 03 */}
        <div className="mt-40">
          <div className="card shadow-sm flex items-center bg-gray-800 pt-6 relative top-0 left-0">
            {/* icon */}
            <div className="">
              <span className="absolute -top-[25%] left-[35%]">
                <MonitorSmartphone
                  size={130}
                  className="bg-[#00ae77] services-image-clip-path px-4 py-6"
                />
              </span>
            </div>
            {/* content */}
            <div className="card-body items-center text-center py-16">
              <h2 className="text-3xl mb-2 font-semibold">Responsiveness</h2>
              <p className="text-md">
                I build fully responsive websites for every client. Your site
                will look perfect and work smoothly on mobile, tablet and
                desktop — anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
        {/* card 04 */}
        <div className="mt-28 mb-40">
          <div className="card shadow-sm flex items-center bg-gray-800 pt-6 relative top-0 left-0">
            {/* icon */}
            <div className="">
              <span className="absolute -top-[25%] left-[35%]">
                <FileBraces
                  size={130}
                  className="bg-[#00ae77] services-image-clip-path px-4 py-6"
                />
              </span>
            </div>
            {/* content */}
            <div className="card-body items-center text-center py-16">
              <h2 className="text-3xl mb-2 font-semibold">
                Make it{" "}
                <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">
                  Simple
                </span>
              </h2>
              <p className="text-md">
                I build clean, simple websites that are easy to use and understand. No confusion, just clear design that helps your clients find exactly what they need fast.
              </p>
            </div>
          </div>
              </div>
              {/* card 05 */}
        <div className="mt-28 mb-40">
          <div className="card shadow-sm flex items-center bg-gray-800 pt-6 relative top-0 left-0">
            {/* icon */}
            <div className="">
              <span className="absolute -top-[25%] left-[35%]">
                <Atom
                  size={130}
                  className="bg-[#00ae77] services-image-clip-path px-4 py-6"
                />
              </span>
            </div>
            {/* content */}
            <div className="card-body items-center text-center py-16">
              <h2 className="text-3xl mb-2 font-semibold">
                Dynamic
              </h2>
              <p className="text-md">
                I build dynamic websites that feel alive and interactive. Real-time updates, smart features, website fast, modern that engaging for every visitor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
