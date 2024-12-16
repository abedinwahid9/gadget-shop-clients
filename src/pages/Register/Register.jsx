import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleAuth from "../../components/share/GoogleAuth";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

function Register() {
  const { CreateUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [buyerHandle, setBuyerHandle] = useState(true);
  const useAxios = useAxiosPublic();

  const handleFrom = (data) => {
    const email = data.email;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];

    const userData = { email, role, status, wishlist };

    CreateUser(data.email, data.password).then(async (user) => {
      const res = await useAxios.post("/users", userData);
      if (user.user) {
        navigate("/");
        reset();
      }
      if (res.data.insertedId) {
        console.log(res);
      }
    });
  };

  const handleOption = (e) => {
    if (e.target.value == "seller") {
      setBuyerHandle(false);
    } else {
      setBuyerHandle(true);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(handleFrom)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
                  email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
                  password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
                  minimum password 6 length
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered"
                {...register("confirmpassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "your password is not match";
                    }
                  },
                })}
              />
              {errors.confirmpassword && (
                <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
                  enter your right correct password
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                {...register("role", {
                  required: true,
                })}
                className="select select-bordered w-full max-w-xs"
                onChange={handleOption}
              >
                <option selected value="buyer">
                  Buyer
                </option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
              {buyerHandle && <GoogleAuth />}
            </div>
            <p>
              already have an account!{" "}
              <Link
                className="text-lime-800 font-semibold text-lg uppercase"
                to="/login"
              >
                login
              </Link>
            </p>
          </form>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
