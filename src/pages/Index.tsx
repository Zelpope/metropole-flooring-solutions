import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProductSection from "@/components/ProductSection";
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Index = () => {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    // small delay so the page/sections are mounted
    setTimeout(() => {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  }
}, [location]);


  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ProductSection />
        {/* <BlogSection /> Temporary hidden */}    
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
