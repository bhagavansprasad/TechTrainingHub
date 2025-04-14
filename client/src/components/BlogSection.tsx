import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blogData";

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest from Our Blog</h2>
            <p className="text-gray-600">Stay updated with industry trends and learning resources</p>
          </div>
          <Link 
            href="#all-articles" 
            className="hidden md:flex items-center text-primary hover:text-primary-dark transition font-medium"
          >
            View All Articles
            <span className="ml-2">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className={`${post.categoryColor} text-xs border-none`}>
                    {post.category}
                  </Badge>
                  <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`#article-${index + 1}`}
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                >
                  Read More
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="link" className="text-primary hover:text-primary-dark transition">
            View All Articles
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
