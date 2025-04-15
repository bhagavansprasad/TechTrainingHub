import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-secondary text-white py-20">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e8b98fba33-156e28c03d3d6cdcaa35.png"
          alt="modern tech classroom with students working on computers, soft lighting, professional atmosphere" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
