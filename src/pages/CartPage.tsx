import { Link } from "react-router-dom";
import { ChevronRight, ShoppingBag } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  // For now, cart is empty placeholder
  // In a full implementation, this would use context or state management
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Cart</span>
          </nav>

          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-10">
            Your Cart
          </h1>

          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="font-serif text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven't added any posters yet. Start browsing and find something you love!
            </p>
            <Link to="/">
              <Button size="lg">Browse Posters</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
