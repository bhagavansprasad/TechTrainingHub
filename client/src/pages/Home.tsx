import HeroSection from "@/components/HeroSection";
import CourseFilters from "@/components/CourseFilters";
import CoursesList from "@/components/CoursesList";
import AboutUs from "@/components/AboutUs";
import TrainingMethodology from "@/components/TrainingMethodology";

import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Newsletter from "@/components/Newsletter";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CourseFilters />
      <CoursesList />
      <AboutUs />
      <TrainingMethodology />
      <Testimonials />
      <FAQSection />
      <BlogSection />
      <CTASection />
      <Newsletter />
      <ContactSection />
    </div>
  );
}
