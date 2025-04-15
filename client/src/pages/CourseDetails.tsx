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
                    setLocation("/#contact-form");
                    // Set a small delay to ensure the form is loaded before we try to click the tab
                    setTimeout(() => {
                      const enrollTab = document.querySelector('[value="enroll"]');
                      if (enrollTab) {
                        (enrollTab as HTMLElement).click();
                      }
                    }, 100);
                  }}
                >
                  Enroll Now
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary px-6 py-2"
                  onClick={() => {
                    setLocation("/#contact-form");
                    // Set a small delay to ensure the form is loaded before we try to click the tab
                    setTimeout(() => {
                      const demoTab = document.querySelector('[value="demo"]');
                      if (demoTab) {
                        (demoTab as HTMLElement).click();
                      }
                    }, 100);
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
                setLocation("/#contact-form");
                // Set a small delay to ensure the form is loaded before we try to click the tab
                setTimeout(() => {
                  const enrollTab = document.querySelector('[value="enroll"]');
                  if (enrollTab) {
                    (enrollTab as HTMLElement).click();
                  }
                }, 100);
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
