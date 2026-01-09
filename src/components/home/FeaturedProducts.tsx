import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts, getTrendingProducts } from "@/lib/products";

interface FeaturedProductsProps {
  type?: "featured" | "trending";
}

const FeaturedProducts = ({ type = "featured" }: FeaturedProductsProps) => {
  const products = type === "featured" ? getFeaturedProducts() : getTrendingProducts();
  const title = type === "featured" ? "Featured Posters" : "Trending Now";
  const subtitle = type === "featured" 
    ? "Handpicked favorites from our collection"
    : "What everyone's loving right now";

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="flex items-center gap-3">
            {type === "trending" && (
              <div className="w-10 h-10 rounded-full bg-highlight/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-highlight" />
              </div>
            )}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-1">
                {title}
              </h2>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>
          </div>
          <Link to="/category/cars">
            <Button variant="ghost" className="hidden md:flex gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/category/cars">
            <Button variant="outline" className="gap-2">
              View All Posters
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
