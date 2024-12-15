import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { GrOverview } from "react-icons/gr";
import { MdAddBusiness } from "react-icons/md";
import { FaHome, FaStore } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import useUserData from "../../hooks/useUserData";

const sellerRoutes = [
  {
    id: 1,
    title: "My products",
    link: "/dashboard/myproducts",
    icon: <FaStore />,
  },
  {
    id: 2,
    title: "Add products",
    link: "/dashboard/addproducts",
    icon: <MdAddBusiness />,
  },
];

const Sidebar = () => {
  const userData = useUserData();

  return (
    <div className="bg-gray-200 border-r-2 border-black h-screen px-3 py-8">
      <h2 className="text-2xl font-bold mb-4 capitalize">gadget shop</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink
            data-tip="overview"
            className="text-lg tooltip flex items-center gap-2 capitalize font-semibold"
            to="/dashboard/overview"
          >
            overview <GrOverview />
          </NavLink>
        </li>

        {userData?.role === "seller" &&
          sellerRoutes.map((data) => {
            return (
              <li key={data.id}>
                <NavLink
                  data-tip={data.title}
                  className="text-lg tooltip flex items-center gap-2 capitalize font-semibold"
                  to={data.link}
                >
                  {data.title}
                </NavLink>
              </li>
            );
          })}
        <li>
          <NavLink
            data-tip="Home"
            className="text-lg tooltip flex items-center gap-2 capitalize font-semibold"
            to="/"
          >
            Home <FaHome />
          </NavLink>
        </li>
        <li>
          <button
            data-tip="logout"
            className="btn-sm w-full flex items-center gap-2 justify-center tooltip bg-emerald-900 text-lg text-white rounded-md hover:bg-emerald-400"
          >
            Logout <TbLogout2 />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
