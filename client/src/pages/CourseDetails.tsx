import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { Check, Star, StarHalf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/lib/courseData";

export default function CourseDetails() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we would fetch course data from an API
    // For now, we'll simulate loading and use our local data
    setLoading(true);
    
    setTimeout(() => {
      const foundCourse = courses.find(c => c.id === id);
      if (foundCourse) {
        setCourse(foundCourse);
      }
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
            <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => setLocation("/")} className="w-full">
              Back to Courses
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Different course content display based on course ID
  if (course.id === "python-automation") {
    return (
      <div className="bg-gray-50">
        {/* Course Hero Banner */}
        <section className="relative py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-blue-500 text-white border-none">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="bg-indigo-500 text-white border-none">
                    {course.duration}
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-gray-100 mb-6">An immersive, hands-on training program</p>
                
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2"
                    onClick={() => {
                      setLocation("/");
                      // Set a small delay to ensure the page is loaded before scrolling and clicking the tab
                      setTimeout(() => {
                        const contactFormSection = document.getElementById("contact-form");
                        if (contactFormSection) {
                          contactFormSection.scrollIntoView({ behavior: "smooth" });
                          // Wait a bit more for the scroll to finish before clicking the tab
                          setTimeout(() => {
                            const enrollTab = document.querySelector('[value="enroll"]');
                            if (enrollTab) {
                              (enrollTab as HTMLElement).click();
                            }
                          }, 300);
                        }
                      }, 300);
                    }}
                  >
                    Enroll Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary px-6 py-2"
                    onClick={() => {
                      setLocation("/");
                      // Set a small delay to ensure the page is loaded before scrolling and clicking the tab
                      setTimeout(() => {
                        const contactFormSection = document.getElementById("contact-form");
                        if (contactFormSection) {
                          contactFormSection.scrollIntoView({ behavior: "smooth" });
                          // Wait a bit more for the scroll to finish before clicking the tab
                          setTimeout(() => {
                            const demoTab = document.querySelector('[value="demo"]');
                            if (demoTab) {
                              (demoTab as HTMLElement).click();
                            }
                          }, 300);
                        }
                      }, 300);
                    }}
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Overview Section */}
        <section id="course-overview" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-3xl text-blue-600">
                  <i className="fa-solid fa-clipboard-list"></i>
                </div>
                <h2 className="text-3xl font-bold">Course Overview</h2>
              </div>
              
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-8">
                <li>Master Python from fundamentals to advanced programming with real-world applications.</li>
                <li>Gain hands-on expertise in data processing, automation, and system scripting.</li>
                <li>Build and secure RESTful APIs using FastAPI and integrate with databases like MongoDB.</li>
                <li>Learn testing, logging, concurrency, and deployment essentials for robust backend systems.</li>
                <li>By the end, confidently develop, test, and deploy fullstack backend solutions using Python.</li>
              </ul>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Welcome to the <b>Python Full-Stack Development Program</b> — an immersive, hands-on training designed to make you confident in building real-world full-stack applications using Python, FastAPI, MongoDB, and testing frameworks.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're new to programming or looking to elevate your development skills, this course offers you a comprehensive experience across backend development, data processing, and API design.
              </p>
            </div>
          </div>
        </section>
        
        {/* Course Content Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-3xl text-blue-600">
                  <i className="fa-solid fa-list-check"></i>
                </div>
                <h2 className="text-3xl font-bold">Course Content</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">1. Operators</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Arithmetic Operators</li>
                    <li>Relational Operators</li>
                    <li>Logical Operators</li>
                    <li>Membership Operators</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">2. Data Types</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Strings slicing</li>
                    <li>Strings Find vs Index</li>
                    <li>Strings Split and Join</li>
                    <li>Strings Different ways to strip</li>
                    <li>Strings Replace</li>
                    <li>Tuples Basics</li>
                    <li>Tuples Immutable</li>
                    <li>Lists - Sorting</li>
                    <li>Matching with elements</li>
                    <li>Dictionaries - Key-Value pair</li>
                    <li>Dictionaries with 'in'</li>
                    <li>Dictionaries - Update</li>
                    <li>Dictionary - Tuple as a Key</li>
                    <li>Yield Basics - Generator</li>
                    <li>Usage of Yield</li>
                    <li>Different Generators</li>
                    <li>Sets - Basic operations</li>
                    <li>Set Operations</li>
                    <li>Set and Use-cases</li>
                    <li>Enumerations - Basics</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">3. Control Flow</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Loops - For</li>
                    <li>Loops - While</li>
                    <li>Loops - Be careful with for</li>
                    <li>if-else - Different forms</li>
                    <li>Understanding 'if' in-depth</li>
                    <li>Operators - 'Any', 'not', 'in'</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">4. Functions</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Purpose of functions</li>
                    <li>Function basics</li>
                    <li>Advanced functions</li>
                    <li>Lambda - Unnamed functions</li>
                    <li>Map function</li>
                    <li>Reduce function</li>
                    <li>Filter function</li>
                    <li>Default Arguments</li>
                    <li>Higher ordered functions</li>
                    <li>Recursion</li>
                    <li>Decorators</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">5. Utilities & Built-ins</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Print system module paths</li>
                    <li>Help of modules</li>
                    <li>Help of Functions</li>
                    <li>Soft space</li>
                    <li>Formatted printing</li>
                    <li>Different Iterators - Next</li>
                    <li>Python keywords</li>
                    <li>Python default functions</li>
                    <li>Python built-in modules</li>
                    <li>Colored print</li>
                    <li>Dynamic imports</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">6. Namespace</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>What is namespace</li>
                    <li>Different namespace scope</li>
                    <li>Variable resolution rules</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">7. OOP</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Purpose of OOP</li>
                    <li>Basics of classes and objects</li>
                    <li>Inheritance</li>
                    <li>Polymorphism</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">8. Exceptions</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>What is exception</li>
                    <li>Exception Handling</li>
                    <li>Exceptions as group</li>
                    <li>Exceptions with arguments</li>
                    <li>Raising exceptions</li>
                    <li>User defined exceptions</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">9. File Handling</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Basic File Operations</li>
                    <li>Read few bytes</li>
                    <li>Read line</li>
                    <li>Read lines</li>
                    <li>Different Modes of opening</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">10. Folder Handling</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Working with directories</li>
                    <li>Create test folders/files</li>
                    <li>Use of `os` and `pathlib`</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">11. Modules</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Create new module</li>
                    <li>Purpose module</li>
                    <li>Different ways to import</li>
                    <li>Debugging with modules</li>
                    <li>Modules in different folders</li>
                    <li>Compilers vs Modules</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">12. Deep & Shallow Copy</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Deep and Shallow copy Basics</li>
                    <li>Behind Deep & Shallow copy</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">13. JSON Parser</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>JSON Basics</li>
                    <li>Parsing complex JSON objects</li>
                    <li>Building JSON objects</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">14. CSV Data</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Reading CSV file</li>
                    <li>Parsing CSV file</li>
                    <li>CSV to Database</li>
                    <li>Text to CSV</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">15. Excel Parser</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Reading Excel files</li>
                    <li>Writing Excel files</li>
                    <li>Creating charts</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">16. Date & Time</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Date and time modules</li>
                    <li>Different ways to use modules</li>
                    <li>DateTime formatting</li>
                    <li>Activity - Diff two dates in string format</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">17. Regular Expressions</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Purpose of Regex</li>
                    <li>Different anchor points</li>
                    <li>Regex Grouping</li>
                    <li>Regex Search</li>
                    <li>Regex Findall</li>
                    <li>Regex Finditer</li>
                    <li>Activity - Regex Validate email ID</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">18. Command-Line Arguments</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Basics command line arguments</li>
                    <li>Processing arguments</li>
                    <li>argparse module</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">19. Log Framework</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Log setup</li>
                    <li>File logging</li>
                    <li>Log rotation</li>
                    <li>Log levels</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">20. Unit Testing</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Writing test cases</li>
                    <li>Structuring unit tests</li>
                    <li>Assert statements</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">21. PyTest</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>PyTest setup</li>
                    <li>Using fixtures</li>
                    <li>Parametrization</li>
                    <li>Mocking</li>
                    <li>Test discovery</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">22. Monkey-Patching</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Replacing functions for testing</li>
                    <li>Patching external libraries</li>
                    <li>Use in unit tests</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">23. REST (FastAPI)</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>API creation with FastAPI</li>
                    <li>CRUD endpoints</li>
                    <li>Request and Response Models</li>
                    <li>JWT Authentication</li>
                    <li>Error Handling in APIs</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">24. MongoDB Integration</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Introduction to NoSQL</li>
                    <li>CRUD operations using PyMongo</li>
                    <li>Integration with FastAPI</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">25. SSH Automation</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>SSH automation</li>
                    <li>Starting the service</li>
                    <li>Interactive SSH</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">26. Server & Parallel Tasks</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Starting a service in server</li>
                    <li>Connecting to multiple servers</li>
                    <li>Parallel processing</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">27. Multi-processing</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Creating a process</li>
                    <li>Creating multiple processes</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">28. Threads</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Creating a Thread</li>
                    <li>Entry function of Thread</li>
                    <li>Different ways to create threads</li>
                    <li>Process vs Threads</li>
                    <li>Creating multiple Threads</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">29. Process vs Threads</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Sequential vs Parallel programming</li>
                    <li>Parallel Processes</li>
                    <li>Parallel Threads</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">30. Sockets</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Purpose of sockets</li>
                    <li>Building client-server programs</li>
                    <li>Understanding server calls</li>
                    <li>Understanding client calls</li>
                    <li>TCP Server</li>
                    <li>UDP Server</li>
                    <li>Concurrent server</li>
                    <li>Iterative server</li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-4">31. Miscellaneous</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Assert</li>
                    <li>Pitfalls</li>
                    <li>Debugging - pydb</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Become a Python Full-Stack Developer?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our comprehensive course and learn the skills needed to build powerful web applications
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2"
                onClick={() => {
                  setLocation("/");
                  // Set a small delay to ensure the page is loaded before scrolling and clicking the tab
                  setTimeout(() => {
                    const contactFormSection = document.getElementById("contact-form");
                    if (contactFormSection) {
                      contactFormSection.scrollIntoView({ behavior: "smooth" });
                      // Wait a bit more for the scroll to finish before clicking the tab
                      setTimeout(() => {
                        const enrollTab = document.querySelector('[value="enroll"]');
                        if (enrollTab) {
                          (enrollTab as HTMLElement).click();
                        }
                      }, 300);
                    }
                  }, 300);
                }}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Course Hero Banner */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-blue-500 text-white border-none">
                  {course.category}
                </Badge>
                <Badge variant="outline" className="bg-indigo-500 text-white border-none">
                  {course.duration}
                </Badge>
                {course.trending && (
                  <Badge variant="outline" className="bg-orange-500 text-white border-none">
                    Trending
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-100 mb-6">Fundamentals to Real-World Applications</p>
              
              <div className="flex items-center mb-6">
                {course.originalPrice ? (
                  <div className="flex items-center">
                    <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
                    <span className="ml-3 text-xl text-gray-300 line-through">₹{course.originalPrice.toLocaleString()}</span>
                    <span className="ml-3 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                      {course.discount}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2"
                  onClick={() => {
                    setLocation("/");
                    // Set a small delay to ensure the page is loaded before scrolling and clicking the tab
                    setTimeout(() => {
                      const contactFormSection = document.getElementById("contact-form");
                      if (contactFormSection) {
                        contactFormSection.scrollIntoView({ behavior: "smooth" });
                        // Wait a bit more for the scroll to finish before clicking the tab
                        setTimeout(() => {
                          const enrollTab = document.querySelector('[value="enroll"]');
                          if (enrollTab) {
                            (enrollTab as HTMLElement).click();
                          }
                        }, 300);
                      }
                    }, 300);
                  }}
                >
                  Enroll Now
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary px-6 py-2"
                  onClick={() => {
                    setLocation("/");
                    // Set a small delay to ensure the page is loaded before scrolling and clicking the tab
                    setTimeout(() => {
                      const contactFormSection = document.getElementById("contact-form");
                      if (contactFormSection) {
                        contactFormSection.scrollIntoView({ behavior: "smooth" });
                        // Wait a bit more for the scroll to finish before clicking the tab
                        setTimeout(() => {
                          const demoTab = document.querySelector('[value="demo"]');
                          if (demoTab) {
                            (demoTab as HTMLElement).click();
                          }
                        }, 300);
                      }
                    }, 300);
                  }}
                >
                  Request Demo
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <img 
                src={course.image} 
                alt={course.title} 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Overview Section */}
      <section id="course-overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-3xl text-blue-600">
                <i className="fa-solid fa-clipboard-list"></i>
              </div>
              <h2 className="text-3xl font-bold">Course Overview</h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
              This comprehensive <b>Generative AI</b> course provides professionals with practical skills to
              leverage <b>Large Language Models (LLMs)</b> for real-world applications. Covering key
              concepts like <b>Prompt Engineering, Retrieval-Augmented Generation (RAG), Embeddings, Vector
              Databases, and AI-driven automation</b>, the course emphasizes <b>multimodal learning
              (text, image, audio, video) and API-based integrations</b>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Participants will gain hands-on experience with <b>LangChain, OpenAI, Vertex AI, FastAPI, and
              Streamlit</b>, enabling them to develop <b>chatbots, AI-powered search, intelligent document
              processing, and other cutting-edge solutions</b>.
            </p>
          </div>
        </div>
      </section>
      
      {/* Course Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-3xl text-blue-600">
                <i className="fa-solid fa-list-check"></i>
              </div>
              <h2 className="text-3xl font-bold">Course Content</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">1. Introduction to LLMs</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>What are Large Language Models (LLMs)?</li>
                  <li>Pre-trained LLMs</li>
                  <li>Types of Popular Models</li>
                  <li>Output Modalities</li>
                  <li>Cost & Performance Overview</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">2. Basic Interactions with LLMs</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Communicating via APIs (OpenAI, VertexAI)</li>
                  <li>Authentication & Secure Access</li>
                  <li>Frameworks to Simplify Usage</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">3. Model Selection</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Criteria</li>
                  <li>Gemini Model Variants</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">4. Text Use Cases</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Creative and Structured Text Generation</li>
                  <li>Factual Q&A and Context-Based Interactions</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">5. Image Use Cases</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Caption Generation & Visual Interpretation</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">6. Audio Use Cases</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Speech-to-Text (ASR)</li>
                  <li>Voice Command Processing</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">7. Video Use Cases</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Frame-by-Frame Analysis & Audio Transcription</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">8. Multimodal Use Cases</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Combining Text, Image, Audio, Video Inputs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">9. Understanding Prompts</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Prompt Types</li>
                  <li>Prompt Engineering Techniques</li>
                  <li>Prompt Versioning & Management</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">10. Limitations of LLMs</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Hallucinations</li>
                  <li>Token Cost and Latency</li>
                  <li>Limited Context Window</li>
                  <li>Need for Grounding External Data</li>
                  <li>Input Validation & Prompt Injection Defense</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">11. Prompt Tuning Parameters</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Temperature</li>
                  <li>Top_p</li>
                  <li>Max_tokens</li>
                  <li>Frequency & Presence Penalty</li>
                  <li>Tuning Examples for Creative & Factual Responses</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">12. Embeddings</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>What are Embeddings?</li>
                  <li>Generating & Using Text/Image Embeddings</li>
                  <li>Storing in Vector Databases</li>
                  <li>Similarity Metrics</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">13. Vector DBs</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Intro to VectorDBs: ChromaDB, Pinecone, FAISS</li>
                  <li>Use in Retrieval-Augmented Generation (RAG)</li>
                  <li>RAG Strategies</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">14. Agentic AI</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Agentic AI & Tool Use</li>
                  <li>VertexAI-Specific Tools & Function Calling</li>
                  <li>Pipelines to Build & Deploy Scalable LLM Apps</li>
                  <li>External System Integration</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">15. LangChain & LangGraph</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>LangChain Deep Dive</li>
                  <li>LCEL (LangChain Expression Language)</li>
                  <li>Integration with Google Cloud Services</li>
                  <li>LangGraph for Workflow Orchestration</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">16. Monitoring & Logging</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>LLM App Observability</li>
                  <li>Logging Requests & Responses</li>
                  <li>Performance Monitoring</li>
                  <li>Debugging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Master Generative AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our comprehensive course and learn the skills needed to build cutting-edge AI applications
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2"
              onClick={() => {
                setLocation("/");
                // Set a small delay to ensure the page is loaded before scrolling and clicking the tab
                setTimeout(() => {
                  const contactFormSection = document.getElementById("contact-form");
                  if (contactFormSection) {
                    contactFormSection.scrollIntoView({ behavior: "smooth" });
                    // Wait a bit more for the scroll to finish before clicking the tab
                    setTimeout(() => {
                      const enrollTab = document.querySelector('[value="enroll"]');
                      if (enrollTab) {
                        (enrollTab as HTMLElement).click();
                      }
                    }, 300);
                  }
                }, 300);
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
