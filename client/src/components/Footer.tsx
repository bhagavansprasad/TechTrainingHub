import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6"><span className="text-primary">Promptly</span><span style={{color: 'rgb(144, 200, 73)'}}>AI</span></div>
            <p className="mb-6 text-gray-300">Providing industry-leading IT training and upskilling programs to help professionals advance their careers and organizations build stronger teams.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Courses</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Comprehensive Generative AI</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Python Full-Stack</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Python - Network Automation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Python - DB Admin Automation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">All Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#methodology" className="text-gray-300 hover:text-white transition">
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-300 hover:text-white transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="text-gray-300 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Free Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Career Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} <span className="text-primary">Promptly</span><span style={{color: 'rgb(144, 200, 73)'}}>AI</span>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
