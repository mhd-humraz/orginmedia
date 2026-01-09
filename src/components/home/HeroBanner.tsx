import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="hero-gradient py-12 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Premium Quality Posters
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Transform Your{" "}
              <span className="text-highlight">Space</span> with Art
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Discover stunning wall posters featuring cars, bikes, anime, movies, cricket legends, and more. High-quality prints delivered to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/category/cars">
                <Button size="xl" className="group">
                  Browse Collection
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/custom">
                <Button size="xl" variant="outline">
                  Custom Poster
                </Button>
              </Link>
            </div>
          </div>

          {/* Featured Posters Grid */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="poster-card rounded-2xl overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80"
                    alt="Ferrari"
                    className="poster-image h-full"
                  />
                </div>
                <div className="poster-card rounded-2xl overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80"
                    alt="Anime"
                    className="poster-image h-full"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="poster-card rounded-2xl overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                    alt="Bike"
                    className="poster-image h-full"
                  />
                </div>
                <div className="poster-card rounded-2xl overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80"
                    alt="Movie"
                    className="poster-image h-full"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-highlight/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
