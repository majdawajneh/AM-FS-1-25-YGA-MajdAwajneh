import NavBar from '@/components/NavBar';
import Landing from '@/components/sections/Landing';
import Features from '@/components/sections/Features';
import Courses from '@/components/sections/Courses';
import LearningPaths from '@/components/sections/LearningPaths';
import Instructors from '@/components/sections/Instructors';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <Landing />
      <Features />
      <Courses />
      <LearningPaths />
      <Instructors />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
