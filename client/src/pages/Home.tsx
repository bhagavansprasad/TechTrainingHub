import HeroSection from "@/components/HeroSection";
import CourseFilters from "@/components/CourseFilters";
import CoursesList from "@/components/CoursesList";
import AboutUs from "@/components/AboutUs";
import TrainingMethodology from "@/components/TrainingMethodology";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CourseFilters />
      <CoursesList />
      <AboutUs />
      <TrainingMethodology />
      <Testimonials />
      <BlogSection />
      <EnrollmentForm />
      <CTASection />
      <ContactSection />
    </div>
  );
}
