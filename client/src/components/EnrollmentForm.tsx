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

const EnrollmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
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
        title: "Enrollment Request Submitted!",
        description: "We'll contact you shortly to complete your enrollment process.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <section id="enroll" className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Enroll in Our Courses</h2>
            <p className="text-xl mb-8 opacity-90">Ready to take the next step in your IT career? Fill out this form to enroll in one of our cutting-edge training programs.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Flexible payment options available</li>
              <li>Weekend and weekday batches</li>
              <li>Limited seats available per batch</li>
              <li>Practical, industry-focused curriculum</li>
              <li>Job placement assistance for top performers</li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-6">Enrollment Form</h3>
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
                      <FormLabel className="text-white">Course to Enroll</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-transparent border border-white border-opacity-20 placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-white">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="generative-ai">Comprehensive Generative AI</SelectItem>
                          <SelectItem value="python-automation">Python Full-Stack</SelectItem>
                          <SelectItem value="network-automation">Python Network Automation</SelectItem>
                          <SelectItem value="database-automation">Python DB Admin Automation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-white text-orange-600 hover:bg-gray-100" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentForm;