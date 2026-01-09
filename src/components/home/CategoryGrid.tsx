import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/products";

const CategoryGrid = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
              Browse Categories
            </h2>
            <p className="text-muted-foreground">
              Find the perfect poster for your style
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.slug === "custom" ? "/custom" : `/category/${category.slug}`}
              className={`category-card group ${
                index === 0 || index === 5 ? "md:col-span-1 row-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 md:p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-sm hidden md:block">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-white/90 text-sm font-medium group-hover:gap-3 transition-all">
                    {category.slug === "custom" ? "Create yours" : `${category.count} posters`}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
