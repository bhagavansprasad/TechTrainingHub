import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
                <span className="text-primary text-2xl font-bold">Tech<span className="text-orange-500">Train</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#courses" className="text-gray-700 hover:text-primary font-medium transition">
              Courses
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-primary font-medium transition">
              About Us
            </Link>
            <Link href="/#methodology" className="text-gray-700 hover:text-primary font-medium transition">
              Methodology
            </Link>
            <Link href="/#testimonials" className="text-gray-700 hover:text-primary font-medium transition">
              Testimonials
            </Link>
            <Link href="/#blog" className="text-gray-700 hover:text-primary font-medium transition">
              Blog
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-primary font-medium transition">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#demo" className="text-primary font-medium hover:text-primary-dark transition">
              Request Demo
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600">Enroll Now</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              href="/#courses" 
              className="block text-gray-700 hover:text-primary font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              href="/#about" 
              className="block text-gray-700 hover:text-primary font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/#methodology" 
              className="block text-gray-700 hover:text-primary font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Methodology
            </Link>
            <Link 
              href="/#testimonials" 
              className="block text-gray-700 hover:text-primary font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="/#blog" 
              className="block text-gray-700 hover:text-primary font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/#contact" 
              className="block text-gray-700 hover:text-primary font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link 
                href="/#demo" 
                className="text-primary font-medium hover:text-primary-dark" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 w-full" onClick={() => setMobileMenuOpen(false)}>
                Enroll Now
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
