
import { GoHome } from "react-icons/go";
import { MdQueryStats } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-lg mr-2 text-[#64748B] font-semibold ${isActive ? "bg-green-900 text-white" : ""}`
          }
          to="/"
        >
          <span><GoHome /></span>Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-lg mr-2 text-[#64748B] font-semibold ${isActive ? "bg-green-900 text-white" : ""}`
          }
          to="/timeline"
        >
          <span><RiTimeLine />
</span>Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-lg text-[#64748B] font-semibold ${isActive ? "bg-green-900 text-white" : ""}`
          }
          to="/stats"
        >
          <span><MdQueryStats /></span>Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-10 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="">
          <h2>
            <span className="text-[#1F2937] text-3xl font-bold">Keen</span><span className="text-[#244D3F] text-3xl font-semibold">Keeper</span>
          </h2>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
