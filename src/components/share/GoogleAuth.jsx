import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const { GoogleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogle = () => {
    GoogleLogin().then((user) => {
      if (user.user) {
        navigate("/");
      }
    });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div onClick={handleGoogle} className="btn w-full">
        <FcGoogle className="text-3xl" />
        <span className="text-lg font-bold text-lime-900 uppercase">
          google
        </span>
      </div>
    </div>
  );
};

export default GoogleAuth;
