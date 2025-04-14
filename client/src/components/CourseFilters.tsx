import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CourseFilters = () => {
  const [technology, setTechnology] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Specialized Training Programs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Designed by industry experts to provide you with hands-on experience and real-world skills that employers are looking for.</p>
        </div>

        <div className="mb-10 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Find the perfect course for you</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="tech-filter" className="block text-gray-700 mb-2">Technology</Label>
              <Select value={technology} onValueChange={setTechnology}>
                <SelectTrigger id="tech-filter" className="w-full p-3 h-auto">
                  <SelectValue placeholder="All Technologies" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-tech">All Technologies</SelectItem>
                  <SelectItem value="ai">Generative AI</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="network">Network</SelectItem>
                  <SelectItem value="database">Database</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="duration-filter" className="block text-gray-700 mb-2">Duration</Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger id="duration-filter" className="w-full p-3 h-auto">
                  <SelectValue placeholder="Any Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-duration">Any Duration</SelectItem>
                  <SelectItem value="short">Short (1-4 weeks)</SelectItem>
                  <SelectItem value="medium">Medium (1-3 months)</SelectItem>
                  <SelectItem value="long">Long (3+ months)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="level-filter" className="block text-gray-700 mb-2">Skill Level</Label>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger id="level-filter" className="w-full p-3 h-auto">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-levels">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFilters;
