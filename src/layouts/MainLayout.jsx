import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2>nav</h2>
      <Outlet />
      <h2>footer</h2>
    </div>
  );
};

export default MainLayout;
