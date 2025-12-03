import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Card, Button, Typography, Carousel, Progress } from 'antd'
import { Link } from 'react-router-dom'
import { 
  CalendarOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  CheckCircleOutlined,
  StarFilled,
  HeartFilled,
  SafetyCertificateFilled,
  TrophyFilled,
  TeamOutlined,
  MedicineBoxOutlined,
  SoundOutlined,
  ToolOutlined,
  BulbOutlined,
  BookOutlined,
  PlayCircleOutlined,
  ExperimentOutlined,
  RocketOutlined,
  SmileOutlined,
  ThunderboltOutlined,
  CustomerServiceOutlined,
  ReadOutlined,
  AudioOutlined
} from '@ant-design/icons'
import { products } from '../data/products'

const { Title, Paragraph } = Typography

// Custom hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState(new Set())
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.dataset.animateId]))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('[data-animate-id]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return visibleElements
}

const Home = () => {
  const visibleElements = useScrollAnimation()
  const featuredProducts = products.slice(0, 4)

  const isVisible = (id) => visibleElements.has(id)

  // Animation styles
  const getSlideFromLeft = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(-60px)',
    transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromRight = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(60px)',
    transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromBottom = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getScaleIn = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'scale(1)' : 'scale(0.9)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const heroSlides = [
    {
      title: "LIVE WELL REHABILITATION NETWORK",
      subtitle: "INDIA'S NO 1 Integrated Autism Network",
      description: "Mainstream your kid with inclusion, equality, equity",
      gradient: "linear-gradient(135deg, rgba(0,174,239,0.88) 0%, rgba(0,166,81,0.88) 100%)",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1920&h=1080&fit=crop",
    },
    {
      title: "Watch Your Kids Training Live",
      subtitle: "Get Trained by All Necessary Skills",
      description: "Make your kid normalize best way plausible",
      gradient: "linear-gradient(135deg, rgba(247,148,29,0.88) 0%, rgba(227,30,36,0.88) 100%)",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=1080&fit=crop",
    },
    {
      title: "Taking Pediatric Therapy to the Next Level",
      subtitle: "Expert Therapists & Special Educators",
      description: "Comprehensive care for autism, ADHD, and developmental disorders",
      gradient: "linear-gradient(135deg, rgba(102,45,145,0.88) 0%, rgba(0,174,239,0.88) 100%)",
      image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1920&h=1080&fit=crop",
    },
  ]

  const services = [
    { name: 'Autism Therapy', icon: <HeartFilled />, color: '#e31e24', image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=300&h=200&fit=crop' },
    { name: 'Speech Therapy', icon: <AudioOutlined />, color: '#f7941d', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=200&fit=crop' },
    { name: 'Occupational Therapy', icon: <ToolOutlined />, color: '#00a651', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=200&fit=crop' },
    { name: 'Behavior Therapy', icon: <BulbOutlined />, color: '#00aeef', image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=300&h=200&fit=crop' },
    { name: 'Special Education', icon: <ReadOutlined />, color: '#662d91', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop' },
    { name: 'Play Therapy', icon: <PlayCircleOutlined />, color: '#92278f', image: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=300&h=200&fit=crop' },
  ]

  const stats = [
    { name: 'Autism Therapy', rate: 98, color: '#00aeef' },
    { name: 'Speech Therapy', rate: 98, color: '#f7941d' },
    { name: 'Special Education', rate: 99, color: '#00a651' },
    { name: 'Behavior Therapy', rate: 98, color: '#662d91' },
    { name: 'Occupational Therapy', rate: 98, color: '#e31e24' },
    { name: 'Physiotherapy', rate: 99, color: '#ec008c' },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      child: 'Aarav, 6 years',
      service: 'Autism Therapy',
      testimonial: 'Live Well has transformed our lives. Aarav has made incredible progress in just 6 months!',
      rating: 5,
      color: '#00aeef',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Rajesh Kumar',
      child: 'Ananya, 5 years',
      service: 'Speech Therapy',
      testimonial: "Ananya's speech has improved dramatically. The personalized approach is amazing!",
      rating: 5,
      color: '#f7941d',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Sunita Patel',
      child: 'Rohan, 7 years',
      service: 'Occupational Therapy',
      testimonial: 'The team is professional and caring. Rohan has developed so many skills!',
      rating: 5,
      color: '#00a651',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      name: 'Amit Verma',
      child: 'Isha, 4 years',
      service: 'Special Education',
      testimonial: "Isha loves going to therapy! The activities are engaging and she's learning so much.",
      rating: 5,
      color: '#662d91',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
  ]

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop', title: 'Therapy Session' },
    { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop', title: 'Learning Activities' },
    { src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop', title: 'Child Development' },
    { src: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=400&h=300&fit=crop', title: 'Play Therapy' },
    { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop', title: 'Medical Care' },
    { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=300&fit=crop', title: 'Special Education' },
  ]

  return (
    <div style={{ background: '#fff', overflow: 'hidden' }}>
      {/* Hero Carousel Section */}
      <Carousel
        autoplay
        autoplaySpeed={5000}
        effect="fade"
        dotPosition="bottom"
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

      {/* About Section */}
      <div
        data-animate-id="about"
        style={{ padding: '90px 30px', background: '#fff' }}
      >
        <Row gutter={[50, 50]} align="middle" justify="center">
          <Col xs={24} md={12}>
            <div style={{ position: 'relative', ...getSlideFromLeft(0, isVisible('about')) }}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop"
                alt="Child Therapy Session"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                  color: '#fff',
                  padding: '18px 28px',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,174,239,0.3)',
                  ...getSlideFromRight(0.3, isVisible('about')),
                }}
              >
                <div style={{ fontSize: '30px', fontWeight: '800' }}>10+</div>
                <div style={{ fontSize: '13px' }}>Years Experience</div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={getSlideFromRight(0.1, isVisible('about'))}>
              <div style={{ 
                color: '#00aeef', 
                fontWeight: '700', 
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '13px',
              }}>
                Welcome to Live Well
              </div>
              <Title level={2} style={{ color: '#1e3a5f', marginBottom: '20px', fontSize: 'clamp(26px, 4vw, 38px)' }}>
                India's No. 1 Integrated <span style={{ color: '#00aeef' }}>Autism Network</span>
              </Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '25px' }}>
                Our vision and purpose is to impart life skills to kids with Autism, ADHD and other 
                neurological and sensorial disorders to live maximum independent lives.
              </Paragraph>
              <Row gutter={[15, 15]}>
                {[
                  { icon: <SafetyCertificateFilled />, title: 'Certified Therapists' },
                  { icon: <TeamOutlined />, title: 'Family Support' },
                  { icon: <TrophyFilled />, title: '98% Success Rate' },
                  { icon: <HeartFilled />, title: 'Personalized Care' },
                ].map((item, index) => (
                  <Col xs={12} key={index}>
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px',
                        padding: '12px 15px',
                        background: '#f8fbff',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        ...getSlideFromLeft(0.2 + index * 0.1, isVisible('about')),
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(5px)'
                        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,174,239,0.15)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <span style={{ color: '#00aeef', fontSize: '22px' }}>{item.icon}</span>
                      <span style={{ fontWeight: '600', color: '#1e3a5f', fontSize: '14px' }}>{item.title}</span>
                    </div>
                  </Col>
                ))}
              </Row>
              <Link to="/about" style={{ marginTop: '25px', display: 'inline-block' }}>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                    border: 'none',
                    borderRadius: '50px',
                    height: '48px',
                    padding: '0 35px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,174,239,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Learn More <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* Services Section */}
      <div 
        data-animate-id="services"
        style={{ padding: '90px 30px', background: '#f8fbff' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: '#00aeef', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('services')),
          }}>
            Our Services
          </div>
          <Title 
            level={2} 
            style={{ 
              color: '#1e3a5f', 
              marginBottom: '15px',
              fontSize: 'clamp(26px, 4vw, 40px)',
              ...getSlideFromBottom(0.1, isVisible('services')),
            }}
          >
            Comprehensive Therapy Services
          </Title>
        </div>
        <Row gutter={[20, 20]} justify="center">
          {services.map((service, index) => (
            <Col xs={12} sm={8} md={6} lg={4} key={index}>
              <Card
                hoverable
                style={{
                  textAlign: 'center',
                  border: `2px solid ${service.color}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  ...getSlideFromLeft(0.1 + index * 0.08, isVisible('services')),
                }}
                bodyStyle={{ padding: '18px 12px' }}
                cover={
                  <div style={{ height: '90px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={service.image} 
                      alt={service.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to bottom, transparent 0%, ${service.color}50 100%)`,
                    }} />
                  </div>
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = `0 15px 35px ${service.color}30`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '8px', color: service.color }}>
                  {service.icon}
                </div>
                <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '13px' }}>
                  {service.name}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center', marginTop: '40px', ...getSlideFromBottom(0.5, isVisible('services')) }}>
          <Link to="/services">
            <Button
              type="primary"
              size="large"
              style={{
                background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                border: 'none',
                borderRadius: '50px',
                height: '50px',
                padding: '0 45px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,174,239,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View All Services <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        data-animate-id="why"
        style={{ padding: '90px 30px', background: '#fff' }}
      >
        <Row gutter={[50, 50]} align="middle" justify="center">
          <Col xs={24} md={12} style={{ order: window.innerWidth < 768 ? 2 : 1 }}>
            <div style={getSlideFromLeft(0, isVisible('why'))}>
              <div style={{ 
                color: '#f7941d', 
                fontWeight: '700', 
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '13px',
              }}>
                Why Choose Us
              </div>
              <Title level={2} style={{ color: '#1e3a5f', marginBottom: '25px', fontSize: 'clamp(26px, 4vw, 38px)' }}>
                Taking Pediatric Therapy to the <span style={{ color: '#f7941d' }}>Next Level</span>
              </Title>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  { icon: <CheckCircleOutlined />, text: 'Watch your kids training live', color: '#00a651' },
                  { icon: <SafetyCertificateFilled />, text: 'Certified therapists & educators', color: '#00aeef' },
                  { icon: <TeamOutlined />, text: 'Integrated family approach', color: '#f7941d' },
                  { icon: <TrophyFilled />, text: '98%+ success rate', color: '#e31e24' },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '15px',
                      padding: '14px 18px',
                      background: '#f8fbff',
                      borderRadius: '12px',
                      borderLeft: `4px solid ${item.color}`,
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      ...getSlideFromLeft(0.15 + index * 0.1, isVisible('why')),
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)'
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <span style={{ color: item.color, fontSize: '22px' }}>{item.icon}</span>
                    <span style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} style={{ order: window.innerWidth < 768 ? 1 : 2 }}>
            <div style={{ position: 'relative', ...getSlideFromRight(0.1, isVisible('why')) }}>
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=450&fit=crop"
                alt="Child Learning"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '-25px',
                  background: '#fff',
                  padding: '15px 22px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  ...getSlideFromLeft(0.4, isVisible('why')),
                }}
              >
                <div style={{ fontSize: '26px', fontWeight: '800', color: '#e31e24' }}>1000+</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Happy Families</div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '-20px',
                  background: '#fff',
                  padding: '15px 22px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  ...getSlideFromRight(0.5, isVisible('why')),
                }}
              >
                <div style={{ fontSize: '26px', fontWeight: '800', color: '#00a651' }}>50+</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Expert Therapists</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Success Rates Section */}
      <div 
        data-animate-id="stats"
        style={{ 
          padding: '90px 30px', 
          background: 'linear-gradient(135deg, #1e3a5f 0%, #00aeef 100%)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('stats')),
          }}>
            Our Achievements
          </div>
          <Title level={2} style={{ 
            color: '#fff', 
            marginBottom: '15px', 
            fontSize: 'clamp(26px, 4vw, 40px)',
            ...getSlideFromBottom(0.1, isVisible('stats')),
          }}>
            Proven Success Rates
          </Title>
        </div>
        <Row gutter={[20, 20]} justify="center">
          {stats.map((stat, index) => (
            <Col xs={12} sm={8} md={6} lg={4} key={index}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '25px 15px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease',
                  ...getSlideFromBottom(0.1 + index * 0.08, isVisible('stats')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                }}
              >
                <Progress
                  type="circle"
                  percent={isVisible('stats') ? stat.rate : 0}
                  strokeColor={{ '0%': stat.color, '100%': '#fff' }}
                  trailColor="rgba(255,255,255,0.2)"
                  strokeWidth={8}
                  size={100}
                  format={(percent) => (
                    <span style={{ color: '#fff', fontSize: '24px', fontWeight: '800' }}>
                      {percent}%
                    </span>
                  )}
                />
                <div style={{ color: '#fff', marginTop: '12px', fontWeight: '600', fontSize: '13px' }}>
                  {stat.name}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Gallery Section */}
      <div
        data-animate-id="gallery"
        style={{ padding: '90px 30px', background: '#fff' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: '#662d91', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('gallery')),
          }}>
            Our Gallery
          </div>
          <Title level={2} style={{ 
            color: '#1e3a5f', 
            marginBottom: '15px', 
            fontSize: 'clamp(26px, 4vw, 40px)',
            ...getSlideFromBottom(0.1, isVisible('gallery')),
          }}>
            See Our Therapy Sessions
          </Title>
        </div>
        <Row gutter={[20, 20]}>
          {galleryImages.map((img, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <div 
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.4s ease',
                  ...getSlideFromRight(0.1 + index * 0.1, isVisible('gallery')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)'
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)'
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '35px 18px 18px',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '15px',
                }}>
                  {img.title}
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center', marginTop: '40px', ...getSlideFromBottom(0.5, isVisible('gallery')) }}>
          <Link to="/gallery">
            <Button
              type="primary"
              size="large"
              style={{
                background: 'linear-gradient(135deg, #662d91 0%, #00aeef 100%)',
                border: 'none',
                borderRadius: '50px',
                height: '48px',
                padding: '0 40px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(102,45,145,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View Full Gallery <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        data-animate-id="testimonials"
        style={{ padding: '90px 30px', background: '#f8fbff' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: '#ec008c', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('testimonials')),
          }}>
            Testimonials
          </div>
          <Title level={2} style={{ 
            color: '#1e3a5f', 
            marginBottom: '15px', 
            fontSize: 'clamp(26px, 4vw, 40px)',
            ...getSlideFromBottom(0.1, isVisible('testimonials')),
          }}>
            What Parents Say
          </Title>
        </div>
        <Row gutter={[24, 40]} justify="center">
          {testimonials.map((testimonial, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                style={{
                  height: '100%',
                  border: `2px solid ${testimonial.color}`,
                  borderRadius: '16px',
                  position: 'relative',
                  overflow: 'visible',
                  marginTop: '30px',
                  transition: 'all 0.4s ease',
                  ...getSlideFromLeft(0.1 + index * 0.12, isVisible('testimonials')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = `0 15px 35px ${testimonial.color}25`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-28px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `3px solid ${testimonial.color}`,
                  boxShadow: '0 5px 15px rgba(0,0,0,0.12)',
                }}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                
                <div style={{ marginTop: '30px', marginBottom: '12px', textAlign: 'center' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarFilled key={i} style={{ color: '#f7941d', marginRight: '2px', fontSize: '16px' }} />
                  ))}
                </div>
                <Paragraph style={{ fontStyle: 'italic', color: '#555', marginBottom: '18px', minHeight: '65px', textAlign: 'center', fontSize: '14px' }}>
                  "{testimonial.testimonial}"
                </Paragraph>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '15px' }}>{testimonial.name}</div>
                  <div style={{ color: '#888', fontSize: '12px' }}>Parent of {testimonial.child}</div>
                  <div style={{ 
                    color: testimonial.color, 
                    fontSize: '11px', 
                    marginTop: '8px', 
                    fontWeight: '600',
                    background: `${testimonial.color}12`,
                    padding: '5px 14px',
                    borderRadius: '20px',
                    display: 'inline-block',
                  }}>
                    {testimonial.service}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Featured Products Section */}
      <div 
        data-animate-id="products"
        style={{ padding: '90px 30px', background: '#fff' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: '#00a651', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('products')),
          }}>
            Our Shop
          </div>
          <Title level={2} style={{ 
            color: '#1e3a5f', 
            margin: 0, 
            fontSize: 'clamp(26px, 4vw, 40px)',
            ...getSlideFromBottom(0.1, isVisible('products')),
          }}>
            Child Development Products
          </Title>
        </div>
        <Row gutter={[24, 24]}>
          {featuredProducts.map((product, index) => (
            <Col xs={24} sm={12} md={6} key={product.id}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card
                  hoverable
                  cover={
                    <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                        color: '#fff',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                      }}>
                        {product.category}
                      </div>
                    </div>
                  }
                  style={{ 
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    ...getSlideFromBottom(0.1 + index * 0.1, isVisible('products')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
                    e.currentTarget.querySelector('img').style.transform = 'scale(1.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.querySelector('img').style.transform = 'scale(1)'
                  }}
                >
                  <Card.Meta
                    title={<span style={{ color: '#1e3a5f', fontWeight: '700', fontSize: '15px' }}>{product.name}</span>}
                    description={
                      <div>
                        <div style={{ color: '#00aeef', fontSize: '22px', fontWeight: '800', marginTop: '8px' }}>
                          ${product.price}
                        </div>
                        <div style={{ color: '#f7941d', marginTop: '6px' }}>
                          {[...Array(Math.floor(product.rating))].map((_, i) => (
                            <StarFilled key={i} style={{ marginRight: '2px', fontSize: '14px' }} />
                          ))}
                          <span style={{ color: '#888', marginLeft: '6px', fontSize: '13px' }}>{product.rating}</span>
                        </div>
                      </div>
                    }
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center', marginTop: '45px', ...getSlideFromBottom(0.5, isVisible('products')) }}>
          <Link to="/products">
            <Button
              type="primary"
              size="large"
              style={{
                background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                border: 'none',
                borderRadius: '50px',
                height: '50px',
                padding: '0 45px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,174,239,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View All Products <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(227,30,36,0.92) 0%, rgba(247,148,29,0.92) 50%, rgba(255,242,0,0.92) 100%), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '90px 30px',
          textAlign: 'center',
        }}
      >
        <Title level={2} style={{ color: '#fff', marginBottom: '18px', textShadow: '2px 4px 8px rgba(0,0,0,0.2)', fontSize: 'clamp(26px, 4vw, 40px)' }}>
          Start Your Child's Journey Today!
        </Title>
        <Paragraph style={{ color: '#fff', fontSize: '18px', marginBottom: '35px', maxWidth: '650px', margin: '0 auto 35px' }}>
          Join India's No. 1 Integrated Autism Network. Book your appointment now!
        </Paragraph>
        <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/appointment">
            <Button
              size="large"
              style={{
                background: '#fff',
                color: '#e31e24',
                border: 'none',
                borderRadius: '50px',
                height: '55px',
                padding: '0 45px',
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
            >
              <CalendarOutlined /> Book Appointment
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
                padding: '0 45px',
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
            >
              <PhoneOutlined /> +91 8977510100
            </Button>
          </a>
        </div>
      </div>

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
