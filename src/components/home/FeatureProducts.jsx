import ProductsCard from "../share/ProductsCard";
import Title from "../share/Title";

function FeatureProducts() {
  return (
    <div className="my-2">
      <Title name="Feature Products" />
      <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-2">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
    </div>
  );
}

export default FeatureProducts;
