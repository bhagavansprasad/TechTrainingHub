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
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 h-auto">Explore Courses</Button>
              </Link>
              <Link href="#demo">
                <Button variant="outline" className="bg-blue-100 hover:bg-blue-200 text-blue-800 border-blue-300 px-8 py-6 h-auto font-semibold">Request Demo</Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Students learning together" 
              className="rounded-lg shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
