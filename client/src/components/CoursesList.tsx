import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/lib/courseData";

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  duration: string;
  trending?: boolean;
}

const CoursesList = () => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);

  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-300 hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={course.image} 
          alt={`${course.title} Course`} 
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";
            e.currentTarget.onerror = null;
          }}
        />
        {course.trending && (
          <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 m-2 rounded-md text-sm font-medium">
            Trending
          </div>
        )}
        {/* The image already has "GENERATIVE AI" text on it */}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <Badge variant="outline" className={`bg-blue-100 text-primary border-none`}>
            {course.category}
          </Badge>
          <Badge variant="outline" className="bg-gray-100 text-gray-800 border-none ml-2">
            {course.duration}
          </Badge>
        </div>
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <div>
            {course.originalPrice ? (
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <span className="text-sm text-gray-500 line-through mr-2">₹{course.originalPrice.toLocaleString()}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                    {course.discount}% OFF
                  </span>
                </div>
                <span className="text-lg font-bold text-primary">₹{course.price.toLocaleString()}</span>
              </div>
            ) : (
              <>
                <span className="text-lg font-bold text-primary">
                  {course.price > 1000 ? `₹${course.price.toLocaleString()}` : `$${course.price}`}
                </span>
                <span className="text-sm text-gray-500 ml-1">/ course</span>
              </>
            )}
          </div>
          {(course.id === "generative-ai" || course.id === "python-automation") ? (
            <Link 
              href={`/course/${course.id}`}
              className="text-orange-500 hover:text-orange-700 font-medium"
            >
              View Details →
            </Link>
          ) : (
            <span className="text-gray-400 cursor-not-allowed">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
