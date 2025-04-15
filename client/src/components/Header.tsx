import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
                <span className="text-primary text-2xl font-bold">Promptly<span style={{color: 'rgb(144, 200, 73)'}}>AI</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("courses")} className="text-gray-700 hover:text-primary font-medium transition">
              Courses
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary font-medium transition">
              About Us
            </button>
            <button onClick={() => scrollToSection("methodology")} className="text-gray-700 hover:text-primary font-medium transition">
              Methodology
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-gray-700 hover:text-primary font-medium transition">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("blog")} className="text-gray-700 hover:text-primary font-medium transition">
              Blog
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary font-medium transition">
              Contact
            </button>
          </nav>
          
          {/* Buttons removed as requested */}
          
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
            <button 
              className="block text-gray-700 hover:text-primary font-medium w-full text-left" 
              onClick={() => scrollToSection("courses")}
            >
              Courses
            </button>
            <button 
              className="block text-gray-700 hover:text-primary font-medium w-full text-left" 
              onClick={() => scrollToSection("about")}
            >
              About Us
            </button>
            <button 
              className="block text-gray-700 hover:text-primary font-medium w-full text-left" 
              onClick={() => scrollToSection("methodology")}
            >
              Methodology
            </button>
            <button 
              className="block text-gray-700 hover:text-primary font-medium w-full text-left" 
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </button>
            <button 
              className="block text-gray-700 hover:text-primary font-medium w-full text-left" 
              onClick={() => scrollToSection("blog")}
            >
              Blog
            </button>
            <button 
              className="block text-gray-700 hover:text-primary font-medium w-full text-left" 
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
            {/* Mobile buttons removed as requested */}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
