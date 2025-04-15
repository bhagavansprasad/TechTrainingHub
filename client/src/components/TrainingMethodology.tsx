import { Check, Video, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrainingMethodology = () => {
  return (
    <section id="methodology" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Training Methodology</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">We've developed a comprehensive approach to ensure you gain practical skills that are immediately applicable in your workplace.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Video className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Live Interactive Sessions</h3>
            <p className="text-gray-600 text-center">Engage with our instructors in real-time through live sessions designed to provide immediate feedback and clarification.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                <span className="text-gray-700">Real-time problem solving</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                <span className="text-gray-700">Interactive Q&A sessions</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                <span className="text-gray-700">Collaborative learning environment</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Hands-on Projects</h3>
            <p className="text-gray-600 text-center">Apply your learning to real-world scenarios through carefully designed projects that mimic industry challenges.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                <span className="text-gray-700">Portfolio-ready projects</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                <span className="text-gray-700">Industry-relevant case studies</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                <span className="text-gray-700">Code reviews and feedback</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Mentor Support</h3>
            <p className="text-gray-600 text-center">Get personalized guidance from industry experts who are dedicated to your success and professional growth.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                <span className="text-gray-700">1-on-1 mentoring sessions</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                <span className="text-gray-700">Career guidance and advice</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                <span className="text-gray-700">Technical problem-solving help</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingMethodology;
