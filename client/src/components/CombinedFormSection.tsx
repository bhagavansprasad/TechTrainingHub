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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  course: z.string().min(1, { message: "Please select a course." }),
  formType: z.enum(["enroll", "demo"])
});

const CombinedFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("enroll");
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      formType: "enroll"
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (values.formType === "enroll") {
        toast({
          title: "Enrollment Request Submitted!",
          description: "We'll contact you shortly to complete your enrollment process.",
        });
      } else {
        toast({
          title: "Demo Request Submitted!",
          description: "We'll contact you shortly to schedule your demo session.",
        });
      }
      
      form.reset({
        ...form.getValues(),
        name: "",
        email: "",
        phone: "",
        course: ""
      });
    }, 1000);
  }

  const setFormType = (type: "enroll" | "demo") => {
    form.setValue("formType", type);
    setActiveTab(type);
  };

  return (
    <section id="contact-form" className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Take Your Next Step with PromptlyAI</h2>
            <p className="text-xl mb-8 opacity-90">Whether you're ready to enroll in a course or want to schedule a demo session first, we're here to help you advance your career in tech.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Expert instructors with industry experience</li>
              <li>Hands-on, practical learning approach</li>
              <li>Flexible batch timings for working professionals</li>
              <li>Personalized attention in small batch sizes</li>
              <li>Job-ready skills for today's tech market</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setFormType("enroll")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 h-auto"
              >
                Enroll Now
              </Button>
              <Button 
                onClick={() => setFormType("demo")}
                variant="outline" 
                className="bg-white hover:bg-gray-100 text-primary border-white px-8 py-6 h-auto font-semibold"
              >
                Request Demo
              </Button>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20">
            <Tabs value={activeTab} onValueChange={(value) => setFormType(value as "enroll" | "demo")}>
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-white bg-opacity-20">
                <TabsTrigger value="enroll" className="text-white data-[state=active]:bg-orange-500">Enroll in a Course</TabsTrigger>
                <TabsTrigger value="demo" className="text-white data-[state=active]:bg-blue-600">Request a Demo</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <h3 className="text-2xl font-bold mb-6">
              {activeTab === "enroll" ? "Enrollment Form" : "Request Demo Session"}
            </h3>
            
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
                      <FormLabel className="text-white">
                        {activeTab === "enroll" ? "Course to Enroll" : "Course of Interest"}
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-transparent border border-white border-opacity-20 placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-white focus:border-white">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="generative-ai">Comprehensive Generative AI</SelectItem>
                          <SelectItem value="python-fullstack">Python Full-Stack</SelectItem>
                          <SelectItem value="network-automation">Python Network Automation</SelectItem>
                          <SelectItem value="database-automation">Python DB Admin Automation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="formType"
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input type="hidden" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className={`w-full ${
                    activeTab === "enroll" 
                      ? "bg-orange-500 hover:bg-orange-600 text-white" 
                      : "bg-white text-primary hover:bg-gray-100"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? "Submitting..." 
                    : activeTab === "enroll" 
                      ? "Submit Enrollment" 
                      : "Request Demo"
                  }
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedFormSection;