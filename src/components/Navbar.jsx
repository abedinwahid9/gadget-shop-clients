import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navList = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/products",
      name: "Products",
    },
    {
      link: "/about",
      name: "about",
    },
    {
      link: "/contact",
      name: "contact",
    },
  ];

  return (
    <header className="navbar bg-base-300">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navList?.map((nav, i) => {
              return (
                <li key={i}>
                  <NavLink>Item 1</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Gadget Shop
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navList?.map((nav, i) => {
            return (
              <li key={i}>
                <NavLink to={nav.link}>{nav.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2 items-center">
          <Link
            to="/login"
            className="btn bg-slate-400  text-black border-slate-800 uppercase font-bold"
          >
            Login
          </Link>
          <Link
            to="signup"
            className="btn border-slate-800 bg-slate-800 text-white uppercase font-bold"
          >
            Sing up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
