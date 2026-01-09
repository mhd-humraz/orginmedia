import { Link } from "react-router-dom";
import { MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsAppChat } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-xl flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-xl">O</span>
              </div>
              <span className="font-serif font-semibold text-xl">Origin Media</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Premium wall posters for every taste. Transform your space with stunning artwork from cars to anime and everything in between.
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={openWhatsAppChat}
              className="gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with us
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/cars" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/category/bikes" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Bikes
                </Link>
              </li>
              <li>
                <Link to="/category/anime" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Anime
                </Link>
              </li>
              <li>
                <Link to="/category/movies" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/category/cricket" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Cricket
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <Link to="/custom" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Create Custom Poster →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Origin Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
