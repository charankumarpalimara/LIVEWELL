import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Progress, Button } from 'antd'
import { 
  HeartFilled, 
  ArrowRightOutlined,
  AudioOutlined,
  ToolOutlined,
  BulbOutlined,
  ReadOutlined,
  PlayCircleOutlined,
  CustomerServiceOutlined,
  ExperimentOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  MedicineBoxOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography

// Custom hook for scroll animations
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

const Services = () => {
  const visibleElements = useScrollAnimation()
  const isVisible = (id) => visibleElements.has(id)

  // Animation styles
  const getSlideFromLeft = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(-50px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromRight = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(50px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromBottom = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getScaleIn = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'scale(1)' : 'scale(0.85)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  // Service name to URL mapping
  const getServiceUrl = (serviceName) => {
    const urlMap = {
      'Autism Therapy': '/autism-therapy',
      'Speech Therapy': '/speech-therapy',
      'Occupational Therapy': '/occupational-therapy-for-kids',
      'Behavior Therapy': '/behavior-therapy-for-kids',
      'Special Education': '/special-education-for-kids',
      'Play Therapy': '/play-therapy',
      'Music Therapy': '/music-therapy',
      'ABA Therapy': '/applied-behavior-analysis-aba',
      'Early Intervention': '/early-intervention',
      'Sensory Integration': '/sensory-integration-therapy',
      'Physiotherapy': '/physiotherapy',
    }
    return urlMap[serviceName] || '/services'
  }

  const services = [
    {
      id: 1,
      title: 'Autism Therapy',
      icon: <HeartFilled />,
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=250&fit=crop',
      description: 'Comprehensive autism therapy programs designed to help children with autism spectrum disorders develop essential life skills.',
      successRate: 98,
      color: '#e31e24',
    },
    {
      id: 2,
      title: 'Speech Therapy',
      icon: <AudioOutlined />,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop',
      description: 'Professional speech and language therapy to improve communication skills, articulation, and language development.',
      successRate: 98,
      color: '#f7941d',
    },
    {
      id: 3,
      title: 'Occupational Therapy',
      icon: <ToolOutlined />,
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=250&fit=crop',
      description: 'Helping children develop fine motor skills, sensory processing, and daily living activities.',
      successRate: 98,
      color: '#00a651',
    },
    {
      id: 4,
      title: 'Behavior Therapy',
      icon: <BulbOutlined />,
      image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=250&fit=crop',
      description: 'Evidence-based behavior modification techniques to address challenging behaviors and promote positive interactions.',
      successRate: 98,
      color: '#00aeef',
    },
    {
      id: 5,
      title: 'Special Education',
      icon: <ReadOutlined />,
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
      description: 'Individualized special education programs tailored to each child\'s unique learning needs and abilities.',
      successRate: 99,
      color: '#662d91',
    },
    {
      id: 6,
      title: 'Play Therapy',
      icon: <PlayCircleOutlined />,
      image: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=400&h=250&fit=crop',
      description: 'Therapeutic play activities that help children express emotions, develop social skills, and process experiences.',
      color: '#92278f',
    },
    {
      id: 7,
      title: 'Music Therapy',
      icon: <CustomerServiceOutlined />,
      image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=400&h=250&fit=crop',
      description: 'Using music as a therapeutic tool to improve communication, motor skills, and emotional expression.',
      color: '#ec008c',
    },
    {
      id: 8,
      title: 'ABA Therapy',
      icon: <ExperimentOutlined />,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop',
      description: 'Applied Behavior Analysis therapy using evidence-based techniques to improve behaviors and skills.',
      color: '#e31e24',
    },
    {
      id: 9,
      title: 'Early Intervention',
      icon: <RocketOutlined />,
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=250&fit=crop',
      description: 'Early intervention services for infants and toddlers to address developmental delays and disabilities.',
      color: '#f7941d',
    },
    {
      id: 10,
      title: 'Sensory Integration',
      icon: <ThunderboltOutlined />,
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=250&fit=crop',
      description: 'Specialized therapy to help children process and respond to sensory information more effectively.',
      color: '#00a651',
    },
    {
      id: 11,
      title: 'Physiotherapy',
      icon: <MedicineBoxOutlined />,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
      description: 'Pediatric physiotherapy to improve mobility, strength, and physical development in children.',
      successRate: 99,
      color: '#00aeef',
    },
  ]

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,174,239,0.9) 0%, rgba(0,166,81,0.9) 100%), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '60px 30px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ 
          color: 'rgba(255,255,255,0.9)', 
          fontWeight: '700', 
          marginBottom: '15px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontSize: '14px',
          animation: 'slideDown 0.8s ease-out',
        }}>
          What We Offer
        </div>
        <Title 
          level={1} 
          style={{ 
            color: '#fff', 
            marginBottom: '20px',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '800',
            animation: 'slideDown 0.8s ease-out 0.2s both',
          }}
        >
          Our Therapy Services
        </Title>
        <div style={{
          width: '100px',
          height: '4px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
          margin: '0 auto 25px',
          borderRadius: '2px',
          animation: 'slideDown 0.8s ease-out 0.3s both',
        }} />
        <Paragraph 
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.95)', 
            maxWidth: '800px', 
            margin: '0 auto',
            animation: 'slideDown 0.8s ease-out 0.4s both',
          }}
        >
          Comprehensive therapeutic services designed to support children with autism, ADHD, and other 
          neurological and sensorial disorders.
        </Paragraph>
      </div>

      {/* Services Grid */}
      <div 
        data-animate-id="services-grid"
        style={{ 
          padding: '70px 30px',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 50%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.06) 0%, rgba(0, 166, 81, 0.06) 100%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(247, 148, 29, 0.06) 0%, rgba(227, 30, 36, 0.06) 100%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Row gutter={[32, 40]}>
            {services.map((service, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={service.id} style={{ display: 'flex' }}>
                <Card
                  hoverable
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '24px',
                    overflow: 'visible',
                    border: 'none',
                    background: '#ffffff',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    ...(index % 2 === 0 
                      ? getSlideFromLeft(0.05 + index * 0.05, isVisible('services-grid'))
                      : getSlideFromRight(0.05 + index * 0.05, isVisible('services-grid'))
                    ),
                  }}
                  bodyStyle={{ 
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    height: '100%',
                  }}
                  cover={
                    <div style={{ 
                      height: '180px', 
                      overflow: 'hidden', 
                      position: 'relative',
                      background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
                    }}>
                      {/* Top accent border */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${service.color} 0%, ${service.color}cc 50%, ${service.color} 100%)`,
                        zIndex: 1,
                      }} />
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="service-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                      {/* Gradient overlay */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(to bottom, transparent 40%, ${service.color}40 100%)`,
                        pointerEvents: 'none',
                      }} />
                      {/* Icon Badge */}
                      <div 
                        className="service-icon-badge"
                        style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px',
                          background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                          color: '#fff',
                          width: '56px',
                          height: '56px',
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          boxShadow: `0 8px 24px ${service.color}40`,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          zIndex: 2,
                          border: '3px solid #ffffff',
                        }}
                      >
                        {service.icon}
                      </div>
                    </div>
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)'
                    e.currentTarget.style.boxShadow = `0 25px 60px ${service.color}30`
                    const img = e.currentTarget.querySelector('.service-img')
                    if (img) img.style.transform = 'scale(1.15)'
                    const icon = e.currentTarget.querySelector('.service-icon-badge')
                    if (icon) {
                      icon.style.transform = 'rotate(5deg) scale(1.1)'
                      icon.style.boxShadow = `0 12px 30px ${service.color}50`
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                    const img = e.currentTarget.querySelector('.service-img')
                    if (img) img.style.transform = 'scale(1)'
                    const icon = e.currentTarget.querySelector('.service-icon-badge')
                    if (icon) {
                      icon.style.transform = 'rotate(0) scale(1)'
                      icon.style.boxShadow = `0 8px 24px ${service.color}40`
                    }
                  }}
                >
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Title level={4} style={{ 
                      marginBottom: '12px', 
                      color: '#1e3a5f', 
                      fontSize: '18px',
                      fontWeight: '800',
                      letterSpacing: '0.3px',
                      lineHeight: '1.3',
                    }}>
                      {service.title}
                    </Title>
                    <Paragraph style={{ 
                      color: '#4a5568', 
                      fontSize: '14px', 
                      minHeight: '70px', 
                      marginBottom: '16px', 
                      flex: 1,
                      lineHeight: '1.6',
                    }}>
                      {service.description}
                    </Paragraph>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    gap: '10px', 
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid #f0f0f0',
                  }}>
                    <Link to="/appointment" style={{ flex: 1, textDecoration: 'none' }} onClick={(e) => e.stopPropagation()}>
                      <Button
                        type="primary"
                        block
                        style={{
                          background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                          border: 'none',
                          borderRadius: '12px',
                          height: '42px',
                          fontWeight: '700',
                          fontSize: '14px',
                          boxShadow: `0 4px 12px ${service.color}30`,
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)'
                          e.currentTarget.style.boxShadow = `0 6px 20px ${service.color}40`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = `0 4px 12px ${service.color}30`
                        }}
                      >
                        Book Now
                      </Button>
                    </Link>
                    <Link to={getServiceUrl(service.title)} style={{ flex: 1, textDecoration: 'none' }}>
                      <Button
                        block
                        style={{
                          background: 'transparent',
                          border: `2px solid ${service.color}`,
                          color: service.color,
                          borderRadius: '12px',
                          height: '42px',
                          fontWeight: '700',
                          fontSize: '14px',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = service.color
                          e.currentTarget.style.color = '#fff'
                          e.currentTarget.style.transform = 'translateY(-2px)'
                          e.currentTarget.style.boxShadow = `0 6px 20px ${service.color}30`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = service.color
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        Details
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        data-animate-id="stats"
        style={{
          padding: '90px 30px',
          backgroundImage: 'linear-gradient(135deg, rgba(30,58,95,0.95) 0%, rgba(0,174,239,0.95) 100%), url(https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          textAlign: 'center',
        }}
      >
        <div style={{ 
          color: 'rgba(255,255,255,0.9)', 
          fontWeight: '700', 
          marginBottom: '15px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontSize: '14px',
          ...getSlideFromBottom(0, isVisible('stats')),
        }}>
          Our Achievements
        </div>
        <Title level={2} style={{ 
          color: '#fff', 
          marginBottom: '20px', 
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: '800',
          lineHeight: '1.2',
          ...getSlideFromBottom(0.1, isVisible('stats')),
        }}>
          Proven Success Rates
        </Title>
        <div style={{
          width: '100px',
          height: '4px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
          margin: '0 auto 50px',
          borderRadius: '2px',
          ...getSlideFromBottom(0.2, isVisible('stats')),
        }} />
        <Row gutter={[28, 28]} justify="center">
          {[
            { name: 'Autism Integrated Therapy', rate: 98, color: '#e31e24' },
            { name: 'Speech Therapy', rate: 98, color: '#f7941d' },
            { name: 'Special Education', rate: 99, color: '#00a651' },
            { name: 'Pediatric Physiotherapy', rate: 99, color: '#662d91' },
          ].map((stat, index) => (
            <Col xs={12} sm={8} md={6} key={index}>
              <div
                style={{
                  padding: '30px 20px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease',
                  ...getScaleIn(0.1 + index * 0.1, isVisible('stats')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                }}
              >
                <Progress
                  type="circle"
                  percent={isVisible('stats') ? stat.rate : 0}
                  strokeColor={stat.color}
                  trailColor="rgba(255,255,255,0.2)"
                  strokeWidth={10}
                  size={120}
                  format={(percent) => (
                    <span style={{ color: '#fff', fontSize: '28px', fontWeight: '800' }}>
                      {percent}%
                    </span>
                  )}
                />
                <div style={{ color: '#fff', marginTop: '18px', fontWeight: '600', fontSize: '15px' }}>
                  {stat.name}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* CTA Section */}
      <div 
        data-animate-id="cta"
        style={{ padding: '90px 30px', textAlign: 'center', background: '#f8fbff' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            color: '#00aeef',
            fontWeight: '700',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '14px',
            position: 'relative',
            display: 'inline-block',
            padding: '0 20px',
            ...getSlideFromBottom(0, isVisible('cta')),
          }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent 0%, #00aeef 100%)',
              borderRadius: '2px',
            }} />
            Get Started
            <div style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '3px',
              background: 'linear-gradient(90deg, #00aeef 0%, transparent 100%)',
              borderRadius: '2px',
            }} />
          </div>
          <Title level={2} style={{ 
            marginBottom: '20px', 
            color: '#1e3a5f', 
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '800',
            lineHeight: '1.2',
            ...getSlideFromBottom(0.1, isVisible('cta')),
          }}>
            Ready to Get Started?
          </Title>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #00aeef 0%, #00a651 100%)',
            margin: '0 auto 30px',
            borderRadius: '2px',
            ...getSlideFromBottom(0.2, isVisible('cta')),
          }} />
          <Paragraph style={{ 
            fontSize: '18px', 
            color: '#666', 
            marginBottom: '35px', 
            maxWidth: '600px', 
            margin: '0 auto 35px',
            ...getSlideFromBottom(0.3, isVisible('cta')),
          }}>
            Book an appointment today and take the first step towards your child's development journey.
          </Paragraph>
        </div>
        <div style={getSlideFromBottom(0.2, isVisible('cta'))}>
          <Link to="/appointment">
            <Button
              type="primary"
              size="large"
              className="solid-red-button"
              style={{
                background: '#e31e24',
                backgroundImage: 'none',
                border: 'none',
                borderRadius: '50px',
                height: '55px',
                padding: '0 50px',
                fontWeight: '700',
                fontSize: '17px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.background = '#c41e3a'
                e.currentTarget.style.backgroundImage = 'none'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(227,30,36,0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = '#e31e24'
                e.currentTarget.style.backgroundImage = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Book Appointment Now <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
        <style>{`
          .solid-red-button.ant-btn-primary {
            background: #e31e24 !important;
            background-image: none !important;
            border-color: #e31e24 !important;
          }
          .solid-red-button.ant-btn-primary:hover,
          .solid-red-button.ant-btn-primary:focus {
            background: #c41e3a !important;
            background-image: none !important;
            border-color: #c41e3a !important;
          }
        `}</style>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Services
