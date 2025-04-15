import { Facebook, Twitter, Linkedin, Github, Youtube } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About <span className="text-primary">Promptly</span><span style={{color: 'rgb(144, 200, 73)'}}>AI</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">We're on a mission to provide cutting-edge IT training that bridges the gap between academic learning and industry requirements.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission & Vision</h3>
            <p className="text-gray-600 mb-6">At <span className="text-primary">Promptly</span><span style={{color: 'rgb(144, 200, 73)'}}>AI</span>, we believe that everyone should have access to high-quality IT education that prepares them for real-world challenges and opportunities. Our vision is to become the premier destination for IT professionals seeking to upskill and stay relevant in a rapidly evolving industry.</p>
            
            <h3 className="text-2xl font-bold mb-4">Our Training Philosophy</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-primary text-xl">👐</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Hands-on Learning</h4>
                  <p className="text-gray-600">We focus on practical, project-based learning that mimics real-world scenarios.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-primary text-xl">👥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Industry-Expert Instructors</h4>
                  <p className="text-gray-600">Learn from professionals who bring years of real-world experience to the classroom.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-primary text-xl">🔄</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Up-to-date Curriculum</h4>
                  <p className="text-gray-600">Our courses are constantly updated to reflect the latest technologies and industry practices.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Meet Our Founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="David Chen" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-center">David Chen</h4>
                <p className="text-gray-600 text-center mb-3">CEO & Technical Director</p>
                <p className="text-gray-600 text-sm">Former Lead Engineer at Google with 15+ years of experience in software development and AI systems.</p>
                <div className="flex justify-center mt-4 space-x-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Sarah Johnson" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-center">Sarah Johnson</h4>
                <p className="text-gray-600 text-center mb-3">COO & Education Director</p>
                <p className="text-gray-600 text-sm">EdTech expert with 10+ years in curriculum development and 5 years as Director of Learning at Microsoft.</p>
                <div className="flex justify-center mt-4 space-x-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-red-500 hover:text-red-700">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
