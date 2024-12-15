import useAuth from "../../../hooks/useAuth";

const Overview = () => {
  const { user } = useAuth();

  return (
    <div>
      <h3 className="text-xl font-bold text-center">{user.email}</h3>
    </div>
  );
};

export default Overview;
