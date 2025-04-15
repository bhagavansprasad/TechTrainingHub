import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Accelerate Your IT Career With Industry-Ready Skills</h1>
            <p className="text-xl mb-8 text-gray-200">Expert-led training programs designed to help you master in-demand technologies and advance your career in tech.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#courses">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 h-auto">Enroll Now</Button>
              </Link>
              <Link href="#demo">
                <Button variant="outline" className="bg-blue-100 hover:bg-blue-200 text-blue-800 border-blue-300 px-8 py-6 h-auto font-semibold">Request Demo</Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10 relative">
            <div className="absolute inset-0 bg-black/20 rounded-lg z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Indian students learning together" 
              className="rounded-lg shadow-2xl w-full object-cover h-[400px] opacity-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
