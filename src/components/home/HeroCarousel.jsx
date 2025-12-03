import React from 'react'
import { Carousel, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { CalendarOutlined, PhoneOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const HeroCarousel = () => {
  const heroSlides = [
    {
      title: "LIVE WELL REHABILITATION NETWORK",
      subtitle: "INDIA'S NO 1 Integrated Autism Network",
      description: "Mainstream your kid with inclusion, equality, equity",
      gradient: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,174,239,0.5) 50%, rgba(0,166,81,0.6) 100%)",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&h=1080&fit=crop&q=90",
    },
    {
      title: "Watch Your Kids Training Live",
      subtitle: "Get Trained by All Necessary Skills",
      description: "Make your kid normalize best way plausible",
      gradient: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(247,148,29,0.5) 50%, rgba(227,30,36,0.6) 100%)",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=1080&fit=crop",
    },
    {
      title: "Taking Pediatric Therapy to the Next Level",
      subtitle: "Expert Therapists & Special Educators",
      description: "Comprehensive care for autism, ADHD, and developmental disorders",
      gradient: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(102,45,145,0.5) 50%, rgba(0,174,239,0.6) 100%)",
      image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1920&h=1080&fit=crop",
    },
  ]

  return (
    <Carousel
      autoplay
      autoplaySpeed={2000}
      effect="fade"
      dotPosition="bottom"
      speed={250}
    >
      {heroSlides.map((slide, index) => (
        <div key={index}>
          <div
            style={{
              backgroundImage: `${slide.gradient}, url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '120px 50px',
              minHeight: '620px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <Title
              level={1}
              style={{
                color: '#fff',
                fontSize: 'clamp(30px, 5vw, 52px)',
                marginBottom: '20px',
                fontWeight: '800',
                textShadow: '2px 4px 8px rgba(0,0,0,0.3)',
                animation: 'slideDown 0.8s ease-out',
              }}
            >
              {slide.title}
            </Title>
            <Title
              level={2}
              style={{
                color: '#fff',
                fontSize: 'clamp(18px, 3vw, 30px)',
                marginBottom: '15px',
                fontWeight: '600',
                animation: 'slideDown 0.8s ease-out 0.2s both',
              }}
            >
              {slide.subtitle}
            </Title>
            <Paragraph
              style={{
                color: '#fff',
                fontSize: 'clamp(15px, 2vw, 20px)',
                maxWidth: '700px',
                margin: '0 auto 35px',
                animation: 'slideDown 0.8s ease-out 0.4s both',
              }}
            >
              {slide.description}
            </Paragraph>
            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              animation: 'slideUp 0.8s ease-out 0.6s both',
            }}>
              <Link to="/appointment">
                <Button
                  size="large"
                  style={{
                    background: '#fff',
                    color: '#00aeef',
                    border: 'none',
                    borderRadius: '50px',
                    height: '55px',
                    padding: '0 40px',
                    fontWeight: '700',
                    fontSize: '16px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)'
                  }}
                  icon={<CalendarOutlined />}
                >
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+918977510100">
                <Button
                  size="large"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    color: '#fff',
                    border: '2px solid #fff',
                    borderRadius: '50px',
                    height: '55px',
                    padding: '0 40px',
                    fontWeight: '600',
                    fontSize: '16px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  icon={<PhoneOutlined />}
                >
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default HeroCarousel

