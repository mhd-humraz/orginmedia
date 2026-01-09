import { Link } from "react-router-dom";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const startingPrice = Math.min(
    product.prices.A4,
    product.prices.A3,
    product.prices["6:4"]
  );

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="poster-card">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="poster-image h-full"
          />
          {product.trending && (
            <div className="absolute top-3 left-3 px-2 py-1 bg-highlight text-highlight-foreground text-xs font-semibold rounded-full">
              Trending
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-foreground group-hover:text-highlight transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
            {product.description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-foreground">
              ₹{startingPrice}
            </span>
            <span className="text-xs text-muted-foreground">Starting price</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
