import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import HeroCarousel from '../components/home/HeroCarousel'
import ScrollingTags from '../components/home/ScrollingTags'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import WhyChooseUsSection from '../components/home/WhyChooseUsSection'
import SuccessRatesSection from '../components/home/SuccessRatesSection'
import GallerySection from '../components/home/GallerySection'
import FeaturedProductsSection from '../components/home/FeaturedProductsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import BlogPostsSection from '../components/home/BlogPostsSection'
import CTASection from '../components/home/CTASection'

const Home = () => {
  const visibleElements = useScrollAnimation()

  const isVisible = (id) => visibleElements.has(id)

  return (
    <div style={{ background: '#fff', overflow: 'hidden' }}>
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Scrolling Tags Section */}
      <ScrollingTags />

      {/* About Section */}
      <AboutSection isVisible={isVisible} />

      {/* Services Section */}
      <ServicesSection isVisible={isVisible} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection isVisible={isVisible} />

      {/* Success Rates Section */}
      <SuccessRatesSection isVisible={isVisible} />

      {/* Gallery Section */}
      <GallerySection isVisible={isVisible} />

      {/* Featured Products Section */}
      <FeaturedProductsSection isVisible={isVisible} />

      {/* Testimonials Section */}
      <TestimonialsSection isVisible={isVisible} />

      {/* Blog Posts Section */}
      <BlogPostsSection isVisible={isVisible} />

      {/* CTA Section */}
      <CTASection />

      {/* CSS Animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Home
