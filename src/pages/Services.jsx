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
          padding: '100px 30px',
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
            animation: 'slideDown 0.8s ease-out 0.2s both',
          }}
        >
          Our Therapy Services
        </Title>
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
        style={{ padding: '90px 30px' }}
      >
        <Row gutter={[24, 24]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={service.id}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  border: `2px solid ${service.color}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  ...(index % 2 === 0 
                    ? getSlideFromLeft(0.05 + index * 0.05, isVisible('services-grid'))
                    : getSlideFromRight(0.05 + index * 0.05, isVisible('services-grid'))
                  ),
                }}
                bodyStyle={{ padding: '18px' }}
                cover={
                  <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: service.color,
                      color: '#fff',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      transition: 'transform 0.3s ease',
                    }}>
                      {service.icon}
                    </div>
                  </div>
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = `0 20px 40px ${service.color}30`
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1.1)'
                  const icon = e.currentTarget.querySelector('[style*="border-radius: 50%"]')
                  if (icon) icon.style.transform = 'rotate(360deg) scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1)'
                  const icon = e.currentTarget.querySelector('[style*="border-radius: 50%"]')
                  if (icon) icon.style.transform = 'rotate(0) scale(1)'
                }}
              >
                <Title level={4} style={{ marginBottom: '10px', color: '#1e3a5f', fontSize: '16px' }}>
                  {service.title}
                </Title>
                <Paragraph style={{ color: '#666', fontSize: '13px', minHeight: '60px', marginBottom: '12px' }}>
                  {service.description}
                </Paragraph>
                {service.successRate && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', color: '#888' }}>Success Rate</span>
                      <span style={{ fontWeight: '700', color: service.color }}>{service.successRate}%</span>
                    </div>
                    <Progress 
                      percent={isVisible('services-grid') ? service.successRate : 0} 
                      strokeColor={service.color}
                      showInfo={false}
                      size="small"
                      strokeWidth={6}
                    />
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>
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
          marginBottom: '50px', 
          fontSize: 'clamp(28px, 4vw, 42px)',
          ...getSlideFromBottom(0.1, isVisible('stats')),
        }}>
          Proven Success Rates
        </Title>
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
        <Title level={2} style={{ 
          marginBottom: '20px', 
          color: '#1e3a5f', 
          fontSize: 'clamp(28px, 4vw, 40px)',
          ...getSlideFromBottom(0, isVisible('cta')),
        }}>
          Ready to Get Started?
        </Title>
        <Paragraph style={{ 
          fontSize: '18px', 
          color: '#666', 
          marginBottom: '35px', 
          maxWidth: '600px', 
          margin: '0 auto 35px',
          ...getSlideFromBottom(0.1, isVisible('cta')),
        }}>
          Book an appointment today and take the first step towards your child's development journey.
        </Paragraph>
        <div style={getSlideFromBottom(0.2, isVisible('cta'))}>
          <Link to="/appointment">
            <Button
              type="primary"
              size="large"
              style={{
                background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
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
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(227,30,36,0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Book Appointment Now <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
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
