import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
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

const { Title, Paragraph } = Typography
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

        {/* Quiz CTA Section */}
        <section style={{ position: 'relative', zIndex: 1, padding: '50px 24px 20px' }}>
          <div
            data-animate-id="quiz-cta"
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              background: 'linear-gradient(135deg, #00aeef 0%, #1e3a5f 50%, #00a651 100%)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '20px',
              padding: '38px 32px',
              color: '#ffffff',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              position: 'relative',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '18px',
              overflow: 'hidden',
            }}
          >
            <div style={{ flex: '1 1 420px' }}>
              <div style={{ 
                fontWeight: 800, 
                letterSpacing: '1.2px', 
                textTransform: 'uppercase', 
                fontSize: '12px',
                opacity: 0.9,
              }}>
                Quick Screening
              </div>
              <Title level={3} style={{ color: '#fff', margin: '6px 0 8px', fontWeight: 800 }}>
                Take our child development quiz in 3 simple steps
              </Title>
              <Paragraph style={{ color: 'rgba(226,232,240,0.9)', marginBottom: 0 }}>
                Capture child details, answer a few screening questions, and share contact info. We’ll guide you with next steps instantly.
              </Paragraph>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/quiz">
                <button
                  style={{
                    background: 'linear-gradient(135deg, #00aeef 0%, #1e3a5f 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 20px',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    boxShadow: '0 12px 30px rgba(0, 174, 239, 0.35)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(30,58,95,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,174,239,0.35)'
                  }}
                >
                  Start Test Now
                </button>
              </Link>
              <Link to="/appointment">
                <button
                  style={{
                    background: 'transparent',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.4)',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  Talk to us
                </button>
              </Link>
            </div>
          </div>
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
