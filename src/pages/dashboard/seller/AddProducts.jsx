import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const handleFrom = (data) => {
    console.log(data);
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
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Product Description</span>
        </label>
        <textarea
          type="text"
          placeholder="Product Description"
          className="input input-bordered pt-2"
          {...register("productdescription", {
            required: true,
          })}
        />
        {errors.productdescription && (
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
