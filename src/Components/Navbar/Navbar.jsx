import { BriefcaseBusiness, Contact, FolderGit2, House, Info, NotebookPen, TableOfContents } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {

  const links = (
    <>
      <li>
         <NavLink to={'/'} className="text-lg md:text-[16px] font-medium"><House size={20} className="block md:hidden" /> Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'} className="text-lg md:text-[16px] font-medium"><Info size={20} className="block md:hidden" /> About</NavLink>
      </li>
      <li>
        <NavLink to={'/skills'} className="text-lg md:text-[16px] font-medium"><NotebookPen size={20} className="block md:hidden"  /> Skills</NavLink>
      </li>
      <li>
        <NavLink to={'/services'} className="text-lg md:text-[16px] font-medium"><BriefcaseBusiness size={20} className="block md:hidden" /> Services</NavLink>
      </li>
      <li>
        <NavLink to={'/projects'} className="text-lg md:text-[16px] font-medium"><FolderGit2 size={20} className="block md:hidden" /> Projects</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'} className="text-lg md:text-[16px] font-medium"><Contact size={20} className="block md:hidden" /> Contact</NavLink>
      </li>
    </>
  )
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <TableOfContents size={20} />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">Tanvir <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">Shekh</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-success text-black">Hire Me</a>
      </div>
    </div>
  );
};

export default Navbar;
