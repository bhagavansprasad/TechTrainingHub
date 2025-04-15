import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-secondary text-white py-20">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover" 
          src="/images/hero-bg.png"
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
              <Button 
                onClick={() => {
                  scrollToSection("contact-form");
                  // Set a small delay to ensure the form is loaded before we try to click the tab
                  setTimeout(() => {
                    const enrollTab = document.querySelector('[value="enroll"]');
                    if (enrollTab) {
                      (enrollTab as HTMLElement).click();
                    }
                  }, 100);
                }} 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2"
              >
                Enroll Now
              </Button>
              <Button 
                onClick={() => {
                  scrollToSection("contact-form");
                  // Set a small delay to ensure the form is loaded before we try to click the tab
                  setTimeout(() => {
                    const demoTab = document.querySelector('[value="demo"]');
                    if (demoTab) {
                      (demoTab as HTMLElement).click();
                    }
                  }, 100);
                }} 
                variant="outline" 
                className="bg-white hover:bg-gray-100 text-primary border-white px-6 py-2 font-semibold"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
