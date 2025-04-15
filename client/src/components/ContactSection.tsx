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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Have questions about our courses or need more information? Reach out to us and we'll get back to you as soon as possible.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="w-full p-3 border border-gray-300"
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
                        <FormLabel className="text-gray-700">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            className="w-full p-3 border border-gray-300"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-700">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="How can we help you?" 
                          className="w-full p-3 border border-gray-300"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-700">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message..." 
                          className="w-full p-3 border border-gray-300"
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600">PromptlyAI,<br />77/1, Marathahalli,<br />Bengaluru - 560103</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">support@<span className="text-primary">promptly</span><span style={{color: 'rgb(144, 200, 73)'}}>ai</span>.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">96633 12872<br />99020 96750</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                  <Facebook className="h-5 w-5" />
                </span>
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                  <Twitter className="h-5 w-5" />
                </span>
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </span>
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                  <Youtube className="h-5 w-5" />
                </span>
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                  <Instagram className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
