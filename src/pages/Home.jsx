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
    <div style={{ 
      background: '#fff', 
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Scrolling Tags Section */}
      <ScrollingTags />

      {/* Main Content Container with smooth transitions */}
      <div style={{
        position: 'relative',
        background: '#fff',
      }}>
        {/* About Section */}
        <section style={{ position: 'relative', zIndex: 1 }}>
          <AboutSection isVisible={isVisible} />
          {/* Section Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 174, 239, 0.2) 50%, transparent 100%)',
            margin: '0 30px',
          }} />
        </section>

        {/* Services Section */}
        <section style={{ position: 'relative', zIndex: 1 }}>
          <ServicesSection isVisible={isVisible} />
          {/* Section Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 166, 81, 0.2) 50%, transparent 100%)',
            margin: '0 30px',
          }} />
        </section>

        {/* Why Choose Us Section */}
        <section style={{ position: 'relative', zIndex: 1 }}>
          <WhyChooseUsSection isVisible={isVisible} />
        </section>

        {/* Success Rates Section */}
        <section style={{ position: 'relative', zIndex: 1 }}>
          <SuccessRatesSection isVisible={isVisible} />
        </section>

        {/* Gallery Section */}
        <section style={{ position: 'relative', zIndex: 1 }}>
          <GallerySection isVisible={isVisible} />
        </section>

        {/* Featured Products Section */}
        <section style={{ position: 'relative', zIndex: 1 }}>
          <FeaturedProductsSection isVisible={isVisible} />
        </section>

        {/* Testimonials Section */}
        <section style={{ position: 'relative', zIndex: 1 }}>
          <TestimonialsSection isVisible={isVisible} />
        </section>

        {/* Blog Posts Section */}
        <section style={{ position: 'relative', zIndex: 1 }}>
          <BlogPostsSection isVisible={isVisible} />
        </section>
      </div>

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

        /* Smooth section transitions */
        section {
          scroll-margin-top: 80px;
        }

        /* Improved scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced visual effects */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Better card hover effects */
        .ant-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>
    </div>
  )
}

export default Home
