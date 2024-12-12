import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, LogOut } = useAuth();

  const handleLogout = () => {
    LogOut();
  };

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
        {!user && (
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
        )}
        {user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content flex gap-2 menu bg-base-100 rounded-box z-[1] w-56 py-2 shadow"
            >
              <Link className="p-2 hover:bg-emerald-400 rounded-md ">
                {user.email}
              </Link>
              <Link className="p-2 hover:bg-emerald-400 rounded-md ">
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="btn-sm bg-emerald-900 text-lg text-white rounded-md hover:bg-emerald-400"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
