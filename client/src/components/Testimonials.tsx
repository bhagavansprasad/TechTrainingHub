import { Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/testimonialsData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-900 to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="max-w-3xl mx-auto opacity-80">Hear from professionals who have transformed their careers through our training programs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="opacity-80 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="mb-4">{testimonial.quote}</p>
              <div className="flex text-yellow-400">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <Star key={i} className="fill-current h-4 w-4" />
                ))}
                {testimonial.rating % 1 === 0.5 && (
                  <StarHalf className="fill-current h-4 w-4" />
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="inline-flex items-center text-white border border-white border-opacity-30 px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
            View All Testimonials
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
