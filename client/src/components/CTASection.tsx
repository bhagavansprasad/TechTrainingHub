import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  course: z.string().min(1, { message: "Please select a course." }),
});

const CTASection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Demo Request Submitted!",
        description: "We'll contact you shortly to schedule your demo session.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <section id="demo" className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your IT Career?</h2>
            <p className="text-xl mb-8 opacity-90">Schedule a free demo session with our instructors and discover how our training programs can help you achieve your career goals.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => {
                  // Focus on first form input after a small delay
                  setTimeout(() => {
                    const nameInput = document.querySelector('input[name="name"]');
                    if (nameInput) {
                      (nameInput as HTMLInputElement).focus();
                    }
                  }, 100);
                }} 
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                Schedule a Demo
              </Button>
              <Button 
                onClick={() => scrollToSection("courses")}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Enroll Now
              </Button>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-6">Request Demo Session</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="bg-transparent border border-white border-opacity-20 placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-white"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          className="bg-transparent border border-white border-opacity-20 placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-white"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+1 (123) 456-7890" 
                          className="bg-transparent border border-white border-opacity-20 placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-white"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Course of Interest</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-transparent border border-white border-opacity-20 placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-white">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="generative-ai">Comprehensive Generative AI</SelectItem>
                          <SelectItem value="python-automation">Python Automation</SelectItem>
                          <SelectItem value="network-automation">Network Automation</SelectItem>
                          <SelectItem value="database-automation">Database Administration Automation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-white text-primary hover:bg-gray-100" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Demo"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
