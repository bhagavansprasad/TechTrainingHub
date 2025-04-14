import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600">Get the latest insights, tutorials, and course updates delivered to your inbox</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow p-3 border border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-gray-500 text-sm mt-4 text-center">We respect your privacy. Unsubscribe at any time.</p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary bg-opacity-10 rounded-full"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-500 bg-opacity-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
