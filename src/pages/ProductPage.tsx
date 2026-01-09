import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Share2, Heart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SizeSelector from "@/components/product/SizeSelector";
import OrderForm from "@/components/order/OrderForm";
import { Button } from "@/components/ui/button";
import { getProductById, getCategoryBySlug } from "@/lib/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type SizeKey = "A4" | "A3" | "6:4";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [selectedSize, setSelectedSize] = useState<SizeKey>("A3");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold mb-4">Product Not Found</h1>
            <Link to="/" className="text-highlight hover:underline">
              Go back home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const category = getCategoryBySlug(product.category);
  const currentPrice = product.prices[selectedSize];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              to={`/category/${product.category}`}
              className="hover:text-foreground transition-colors"
            >
              {category?.name}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.trending && (
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-highlight text-highlight-foreground text-sm font-semibold rounded-full">
                  Trending
                </div>
              )}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                  {category?.name}
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">₹{currentPrice}</span>
                <span className="text-muted-foreground">for {selectedSize}</span>
              </div>

              {/* Size Selector */}
              <SizeSelector
                prices={product.prices}
                selectedSize={selectedSize}
                onSelectSize={setSelectedSize}
              />

              {/* Buy Now Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="whatsapp" size="xl" className="w-full">
                    Buy Now – ₹{currentPrice}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl">
                      Complete Your Order
                    </DialogTitle>
                  </DialogHeader>
                  <OrderForm
                    productName={product.name}
                    productImage={product.image}
                    size={selectedSize}
                    price={currentPrice}
                  />
                </DialogContent>
              </Dialog>

              {/* Features */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    ✓
                  </div>
                  <span>Premium matte finish print</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    ✓
                  </div>
                  <span>Vibrant, long-lasting colors</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    ✓
                  </div>
                  <span>Delivered within 5-7 business days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
