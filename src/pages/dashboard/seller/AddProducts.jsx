import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const useAxios = useAxiosPublic();

  const handleFrom = async (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const category = data.category;
    const productDescription = data.productDescription;

    const product = {
      title,
      brand,
      price,
      stock,
      category,
      productDescription,
      userEmail: user.email,
    };

    const token = localStorage.getItem("access-token");

    const res = await useAxios.post("/add-products", product, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(handleFrom)} className="card-body">
      <div className="flex gap-2 ">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="title"
            className="input input-bordered"
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && (
            <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
              title is required
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            placeholder="brand"
            className="input input-bordered"
            {...register("brand", {
              required: true,
            })}
          />
          {errors.brand && (
            <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
              brand is required
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="price"
            className="input input-bordered"
            {...register("price", {
              required: true,
            })}
          />
          {errors.price && (
            <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
              price is required
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Stock</span>
          </label>
          <input
            type="number"
            placeholder="stock"
            className="input input-bordered"
            {...register("stock", {
              required: true,
            })}
          />
          {errors.stock && (
            <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
              stock is required
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            placeholder="category"
            className="input input-bordered"
            {...register("category", {
              required: true,
            })}
          />
          {errors.category && (
            <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
              category is required
            </p>
          )}
        </div>
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Img Url</span>
        </label>
        <input
          type="text"
          placeholder="Img Url"
          className="input input-bordered"
          {...register("imgUrl", {
            required: true,
          })}
        />
        {errors.imgUrl && (
          <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
            Img Url is required
          </p>
        )}
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Product Description</span>
        </label>
        <textarea
          type="text"
          placeholder="Product Description"
          className="input input-bordered pt-2"
          {...register("productDescription", {
            required: true,
          })}
        />
        {errors.productDescription && (
          <p className="text-sm text-red-600 pt-1 capitalize font-semibold">
            Product Description is required
          </p>
        )}
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">
          Add product
        </button>
      </div>
    </form>
  );
};

export default AddProducts;
