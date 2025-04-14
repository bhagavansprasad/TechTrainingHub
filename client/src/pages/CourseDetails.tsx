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
    <section id="course-details" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img 
                src={course.image} 
                alt={`${course.title} Course`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-blue-100 text-primary border-none">
                  {course.category}
                </Badge>
                <Badge variant="outline" className="bg-gray-100 text-gray-800 border-none">
                  {course.duration}
                </Badge>
                <Badge variant="outline" className="bg-green-100 text-green-800 border-none">
                  {course.level}
                </Badge>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <div className="flex items-center mb-6">
                <div className="mr-6">
                  <span className="text-3xl font-bold text-primary">${course.price}</span>
                  <span className="text-gray-500">/ course</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <StarHalf className="fill-current" />
                  </div>
                  <span className="ml-2 text-gray-600">4.8 (120 reviews)</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-3">What you'll learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {course.learningPoints?.map((point: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600">Enroll Now</Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Request Syllabus
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-8 border-t">
            <div className="flex flex-wrap mb-8">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="font-semibold text-lg mb-3">Course Curriculum</h3>
                <div className="space-y-3">
                  {course.curriculum?.map((module: any, index: number) => (
                    <div key={index} className="flex justify-between">
                      <span>{module.title}</span>
                      <span className="text-gray-500">{module.duration}</span>
                    </div>
                  ))}
                  <Button variant="link" className="text-primary hover:underline font-medium p-0">
                    View Full Curriculum
                  </Button>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 mb-6 md:mb-0 md:px-8">
                <h3 className="font-semibold text-lg mb-3">Prerequisites</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {course.prerequisites?.map((prereq: string, index: number) => (
                    <li key={index}>{prereq}</li>
                  ))}
                </ul>
                
                <h3 className="font-semibold text-lg mt-6 mb-3">This course includes</h3>
                <div className="space-y-2">
                  {course.includes?.map((item: any, index: number) => (
                    <div key={index} className="flex items-center">
                      <item.icon className="text-primary mr-2 h-4 w-4" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-1/3">
                <h3 className="font-semibold text-lg mb-3">Instructor</h3>
                <div className="flex items-start">
                  <img 
                    src={course.instructor?.image} 
                    alt={course.instructor?.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{course.instructor?.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{course.instructor?.title}</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        <Star className="fill-current h-4 w-4" />
                        <Star className="fill-current h-4 w-4" />
                        <Star className="fill-current h-4 w-4" />
                        <Star className="fill-current h-4 w-4" />
                        <Star className="fill-current h-4 w-4" />
                      </div>
                      <span className="ml-2 text-gray-600 text-sm">5.0 Instructor Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
