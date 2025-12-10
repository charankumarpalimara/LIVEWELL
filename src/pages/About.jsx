import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Timeline } from 'antd'
import { 
  TrophyFilled, 
  TeamOutlined, 
  HeartFilled, 
  AimOutlined,
  CheckCircleFilled,
  SafetyCertificateFilled,
  StarFilled,
  SmileOutlined
} from '@ant-design/icons'

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

const About = () => {
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

  const teamMembers = [
    {
      name: 'Dr. Ananya Rao',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop',
      specialty: 'Strategic Leadership',
    },
    {
      name: 'Mr. Arjun Mehta',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=300&h=300&fit=crop',
      specialty: 'Operations & Growth',
    },
  ]

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(102,45,145,0.9) 0%, rgba(0,174,239,0.9) 100%), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '60px 30px',
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
          animation: 'slideDown 0.8s ease-out',
        }}>
          About Us
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
          Live Well Rehabilitation Network
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '20px', 
            color: 'rgba(255,255,255,0.95)', 
            maxWidth: '900px', 
            margin: '0 auto',
            animation: 'slideDown 0.8s ease-out 0.4s both',
          }}
        >
          India's No. 1 Integrated Autism Network dedicated to mainstreaming children with 
          inclusion, equality, and equity.
        </Paragraph>
      </div>

      {/* About Content */}
      <div 
        data-animate-id="about-content"
        style={{ padding: '90px 30px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <Row gutter={[50, 50]} align="middle">
          <Col xs={24} md={12}>
            <div style={{ position: 'relative', ...getSlideFromLeft(0, isVisible('about-content')) }}>
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=450&fit=crop"
                alt="Child Development and Therapy"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                  color: '#fff',
                  padding: '20px 30px',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,174,239,0.3)',
                  ...getSlideFromRight(0.3, isVisible('about-content')),
                }}
              >
                <div style={{ fontSize: '32px', fontWeight: '800' }}>10+</div>
                <div style={{ fontSize: '13px' }}>Years of Excellence</div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={getSlideFromRight(0.1, isVisible('about-content'))}>
              <div style={{ 
                color: '#00aeef', 
                fontWeight: '700', 
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '13px',
              }}>
                Our Story
              </div>
              <Title level={2} style={{ color: '#1e3a5f', marginBottom: '20px', fontSize: 'clamp(26px, 4vw, 36px)' }}>
                Transforming Lives Through <span style={{ color: '#00aeef' }}>Compassionate Care</span>
              </Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.9', color: '#555', marginBottom: '20px' }}>
                Live Well Rehabilitation Network was founded with a vision to provide world-class 
                rehabilitation services to children with special needs. Our integrated approach 
                combines multiple therapeutic disciplines.
              </Paragraph>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.9', color: '#555' }}>
                With over 10 years of experience and a team of 50+ expert therapists, we have 
                helped more than 1000 families achieve their developmental goals.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>

      {/* Mission & Vision */}
      <div 
        data-animate-id="mission"
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
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.06) 0%, rgba(0, 166, 81, 0.06) 100%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(227, 30, 36, 0.06) 0%, rgba(247, 148, 29, 0.06) 100%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
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
              ...getSlideFromBottom(0, isVisible('mission')),
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
              Our Foundation
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
              color: '#1e3a5f', 
              marginBottom: '20px', 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '800',
              lineHeight: '1.2',
              ...getSlideFromBottom(0.1, isVisible('mission')),
            }}>
              Mission & Vision
            </Title>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #00aeef 0%, #e31e24 100%)',
              margin: '0 auto',
              borderRadius: '2px',
              ...getSlideFromBottom(0.2, isVisible('mission')),
            }} />
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card
                className="mission-card"
                style={{
                  height: '100%',
                  borderRadius: '20px',
                  border: 'none',
                  textAlign: 'center',
                  overflow: 'visible',
                  background: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  ...getSlideFromLeft(0, isVisible('mission')),
                }}
                bodyStyle={{ padding: '28px 24px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 174, 239, 0.25)'
                  const icon = e.currentTarget.querySelector('.mission-icon')
                  if (icon) {
                    icon.style.transform = 'scale(1.12) rotate(5deg)'
                    icon.style.boxShadow = '0 12px 30px rgba(0, 174, 239, 0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                  const icon = e.currentTarget.querySelector('.mission-icon')
                  if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)'
                    icon.style.boxShadow = '0 6px 20px rgba(0, 174, 239, 0.3)'
                  }
                }}
                cover={
                  <div style={{ 
                    height: '140px', 
                    background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Decorative circles */}
                    <div style={{
                      position: 'absolute',
                      top: '-40px',
                      right: '-40px',
                      width: '160px',
                      height: '160px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '-25px',
                      left: '-25px',
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                    }} />
                    <div 
                      className="mission-icon"
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '3px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 6px 20px rgba(0, 174, 239, 0.3)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <AimOutlined style={{ fontSize: '40px', color: '#fff' }} />
                    </div>
                  </div>
                }
              >
                <Title level={3} style={{ 
                  color: '#1e3a5f',
                  marginBottom: '16px',
                  fontSize: '24px',
                  fontWeight: '800',
                  letterSpacing: '0.3px',
                }}>
                  Our Mission
                </Title>
                <Paragraph style={{ 
                  fontSize: '15px', 
                  lineHeight: '1.8', 
                  color: '#555',
                  marginBottom: 0,
                }}>
                  To provide world-class rehabilitation services that empower children with autism, ADHD, 
                  and other neurological disorders to achieve their maximum potential and lead fulfilling lives.
                </Paragraph>
                {/* Accent line */}
                <div style={{
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #00aeef 0%, #00a651 100%)',
                  margin: '20px auto 0',
                  borderRadius: '2px',
                }} />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                className="vision-card"
                style={{
                  height: '100%',
                  borderRadius: '20px',
                  border: 'none',
                  textAlign: 'center',
                  overflow: 'visible',
                  background: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  ...getSlideFromRight(0.1, isVisible('mission')),
                }}
                bodyStyle={{ padding: '28px 24px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(227, 30, 36, 0.25)'
                  const icon = e.currentTarget.querySelector('.vision-icon')
                  if (icon) {
                    icon.style.transform = 'scale(1.12) rotate(-5deg)'
                    icon.style.boxShadow = '0 12px 30px rgba(227, 30, 36, 0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                  const icon = e.currentTarget.querySelector('.vision-icon')
                  if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)'
                    icon.style.boxShadow = '0 6px 20px rgba(227, 30, 36, 0.3)'
                  }
                }}
                cover={
                  <div style={{ 
                    height: '140px', 
                    background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Decorative circles */}
                    <div style={{
                      position: 'absolute',
                      top: '-40px',
                      left: '-40px',
                      width: '160px',
                      height: '160px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '-25px',
                      right: '-25px',
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                    }} />
                    <div 
                      className="vision-icon"
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '3px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 6px 20px rgba(227, 30, 36, 0.3)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <HeartFilled style={{ fontSize: '40px', color: '#fff' }} />
                    </div>
                  </div>
                }
              >
                <Title level={3} style={{ 
                  color: '#1e3a5f',
                  marginBottom: '16px',
                  fontSize: '24px',
                  fontWeight: '800',
                  letterSpacing: '0.3px',
                }}>
                  Our Vision
                </Title>
                <Paragraph style={{ 
                  fontSize: '15px', 
                  lineHeight: '1.8', 
                  color: '#555',
                  marginBottom: 0,
                }}>
                  To be India's leading integrated autism network that transforms lives through innovative 
                  therapies, evidence-based practices, and commitment to inclusion and equity.
                </Paragraph>
                {/* Accent line */}
                <div style={{
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #e31e24 0%, #f7941d 100%)',
                  margin: '20px auto 0',
                  borderRadius: '2px',
                }} />
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Our Team */}
      <div 
        data-animate-id="team"
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
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(247, 148, 29, 0.08) 0%, rgba(0, 174, 239, 0.08) 100%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(0, 166, 81, 0.06) 0%, rgba(102, 45, 145, 0.06) 100%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <div style={{ 
              color: '#f7941d', 
              fontWeight: '700', 
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontSize: '14px',
              position: 'relative',
              display: 'inline-block',
              padding: '0 20px',
              ...getSlideFromBottom(0, isVisible('team')),
            }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '3px',
                background: 'linear-gradient(90deg, transparent 0%, #f7941d 100%)',
                borderRadius: '2px',
              }} />
              Our Team
              <div style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '3px',
                background: 'linear-gradient(90deg, #f7941d 0%, transparent 100%)',
                borderRadius: '2px',
              }} />
            </div>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              marginBottom: '20px', 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '800',
              lineHeight: '1.2',
              ...getSlideFromBottom(0.1, isVisible('team')),
            }}>
              Meet Our Expert Therapists
            </Title>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #f7941d 0%, #00aeef 100%)',
              margin: '0 auto',
              borderRadius: '2px',
              ...getSlideFromBottom(0.2, isVisible('team')),
            }} />
          </div>
          <Row gutter={[24, 24]} justify="center">
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={24} md={22} lg={20} key={index}>
                <Card
                  hoverable
                  style={{ 
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: 'none',
                    background: '#ffffff',
                    boxShadow: '0 8px 32px rgba(15,23,42,0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '100%',
                    padding: 0,
                    position: 'relative',
                    ...getSlideFromBottom(0.1 + index * 0.12, isVisible('team')),
                  }}
                  bodyStyle={{ padding: 0 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)'
                    e.currentTarget.style.boxShadow = '0 24px 60px rgba(30,58,95,0.2)'
                    const gradient = e.currentTarget.querySelector('.card-gradient')
                    if (gradient) gradient.style.opacity = '0.7'
                    const img = e.currentTarget.querySelector('.profile-image')
                    if (img) img.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(15,23,42,0.1)'
                    const gradient = e.currentTarget.querySelector('.card-gradient')
                    if (gradient) gradient.style.opacity = '0.3'
                    const img = e.currentTarget.querySelector('.profile-image')
                    if (img) img.style.transform = 'scale(1)'
                  }}
                >
                  {/* Gradient overlay */}
                  <div 
                    className="card-gradient"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '140px',
                      background: index === 0 
                        ? 'linear-gradient(135deg, rgba(0,174,239,0.08) 0%, rgba(0,166,81,0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(247,148,29,0.08) 0%, rgba(227,30,36,0.08) 100%)',
                      opacity: 0.3,
                      transition: 'opacity 0.4s ease',
                      zIndex: 1,
                      pointerEvents: 'none',
                    }}
                  />
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '32px', 
                    padding: '40px',
                    position: 'relative',
                    zIndex: 2,
                    flexWrap: 'wrap',
                  }}>
                    {/* Profile Image */}
                    <div 
                      style={{
                        position: 'relative',
                        flexShrink: 0,
                      }}
                    >
                      <div 
                        style={{
                          position: 'relative',
                          width: '180px',
                          height: '180px',
                          borderRadius: '24px',
                          overflow: 'hidden',
                          border: '6px solid #ffffff',
                          boxShadow: '0 16px 40px rgba(30,58,95,0.2)',
                          background: index === 0
                            ? 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)'
                            : 'linear-gradient(135deg, #f7941d 0%, #e31e24 100%)',
                          padding: '4px',
                        }}
                      >
                        <img 
                          className="profile-image"
                          src={member.image} 
                          alt={member.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '18px',
                            display: 'block',
                            transition: 'transform 0.5s ease',
                          }}
                        />
                        {/* Decorative ring */}
                        <div style={{
                          position: 'absolute',
                          top: '-8px',
                          left: '-8px',
                          right: '-8px',
                          bottom: '-8px',
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor: index === 0 ? 'rgba(0,174,239,0.2)' : 'rgba(247,148,29,0.2)',
                          pointerEvents: 'none',
                        }} />
                      </div>
                      {/* Role badge */}
                      <div style={{
                        position: 'absolute',
                        bottom: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: index === 0
                          ? 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)'
                          : 'linear-gradient(135deg, #f7941d 0%, #e31e24 100%)',
                        color: '#ffffff',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '700',
                        letterSpacing: '0.5px',
                        boxShadow: '0 8px 24px rgba(30,58,95,0.25)',
                        whiteSpace: 'nowrap',
                      }}>
                        {member.role}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: '280px' }}>
                      <Title level={2} style={{ 
                        color: '#0f172a', 
                        marginBottom: '12px',
                        fontSize: 'clamp(24px, 3vw, 32px)',
                        fontWeight: '800',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                      }}>
                        {member.name}
                      </Title>
                      
                      <div style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '20px',
                        padding: '10px 18px',
                        background: index === 0
                          ? 'linear-gradient(135deg, rgba(0,174,239,0.08) 0%, rgba(0,166,81,0.08) 100%)'
                          : 'linear-gradient(135deg, rgba(247,148,29,0.08) 0%, rgba(227,30,36,0.08) 100%)',
                        borderRadius: '14px',
                        border: `1px solid ${index === 0 ? 'rgba(0,174,239,0.2)' : 'rgba(247,148,29,0.2)'}`,
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: index === 0 ? '#00aeef' : '#f7941d',
                        }} />
                        <span style={{ 
                          color: '#1e3a5f', 
                          fontSize: '15px',
                          fontWeight: '700',
                          letterSpacing: '0.3px',
                        }}>
                          {member.specialty}
                        </span>
                      </div>

                      <Paragraph style={{ 
                        marginTop: '16px',
                        marginBottom: 0,
                        color: '#475569',
                        fontSize: '15px',
                        lineHeight: 1.8,
                        maxWidth: '600px',
                      }}>
                        Leading our vision and operations with a relentless focus on quality, growth, and care. 
                        {index === 0 
                          ? ' Driving strategic initiatives that transform lives and create lasting impact in the autism care community.'
                          : ' Overseeing day-to-day operations and ensuring excellence in service delivery across all our centers.'}
                      </Paragraph>

                      {/* Accent line */}
                      <div style={{
                        width: '60px',
                        height: '4px',
                        background: index === 0
                          ? 'linear-gradient(90deg, #00aeef 0%, #00a651 100%)'
                          : 'linear-gradient(90deg, #f7941d 0%, #e31e24 100%)',
                        marginTop: '24px',
                        borderRadius: '2px',
                      }} />
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Why Choose Us */}
      <div 
        data-animate-id="why-us"
        style={{ 
          padding: '90px 30px', 
          backgroundImage: 'linear-gradient(135deg, rgba(30,58,95,0.95) 0%, rgba(0,174,239,0.95) 100%), url(https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontWeight: '700', 
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '13px',
              ...getSlideFromBottom(0, isVisible('why-us')),
            }}>
              Why Choose Us
            </div>
            <Title level={2} style={{ 
              color: '#fff', 
              marginBottom: '20px', 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '800',
              lineHeight: '1.2',
              ...getSlideFromBottom(0.1, isVisible('why-us')),
            }}>
              What Makes Us Different
            </Title>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
              margin: '0 auto',
              borderRadius: '2px',
              ...getSlideFromBottom(0.2, isVisible('why-us')),
            }} />
          </div>
          <Row gutter={[24, 24]}>
            {[
              { icon: <TrophyFilled />, title: "India's No. 1", desc: 'Leading integrated autism network', color: '#e31e24' },
              { icon: <TeamOutlined />, title: '50+ Experts', desc: 'Qualified therapists and educators', color: '#f7941d' },
              { icon: <StarFilled />, title: '98%+ Success', desc: 'Proven results across services', color: '#00a651' },
              { icon: <SmileOutlined />, title: '1000+ Families', desc: 'Happy families trust us', color: '#662d91' },
            ].map((item, index) => (
              <Col xs={12} sm={6} key={index}>
                <Card
                  style={{ 
                    textAlign: 'center', 
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s ease',
                    ...getScaleIn(0.1 + index * 0.1, isVisible('why-us')),
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
                  <div style={{ fontSize: '40px', marginBottom: '15px', color: item.color }}>
                    {item.icon}
                  </div>
                  <Title level={4} style={{ color: '#fff', marginBottom: '8px' }}>{item.title}</Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 0 }}>{item.desc}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Our Approach */}
      <div 
        data-animate-id="approach"
        style={{ padding: '90px 30px' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ 
              color: '#00a651', 
              fontWeight: '700', 
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '13px',
              opacity: isVisible('approach') ? 1 : 0,
              transform: isVisible('approach') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              Our Process
            </div>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              marginBottom: '20px', 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '800',
              lineHeight: '1.2',
              opacity: isVisible('approach') ? 1 : 0,
              transform: isVisible('approach') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
            }}>
              Our Integrated Approach
            </Title>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #00a651 0%, #00aeef 100%)',
              margin: '0 auto',
              borderRadius: '2px',
              opacity: isVisible('approach') ? 1 : 0,
              transform: isVisible('approach') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            }} />
          </div>
          
          {/* Custom Timeline with Smooth Animations */}
          <div style={{ position: 'relative' }}>
            {/* Vertical Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '3px',
              background: isVisible('approach') 
                ? 'linear-gradient(180deg, #e31e24 0%, #f7941d 25%, #00a651 50%, #00aeef 75%, #662d91 100%)' 
                : '#e8e8e8',
              transform: 'translateX(-50%)',
              transition: 'background 1.5s ease',
              borderRadius: '3px',
            }} />
            
            {[
              { color: '#e31e24', title: 'Comprehensive Assessment', desc: "Detailed evaluation of each child's unique needs and challenges.", step: 1 },
              { color: '#f7941d', title: 'Personalized Plan', desc: "Customized therapy programs for each child's goals.", step: 2 },
              { color: '#00a651', title: 'Integrated Therapy', desc: 'Multiple approaches working together effectively.', step: 3 },
              { color: '#00aeef', title: 'Progress Monitoring', desc: 'Continuous assessment and plan adjustment.', step: 4 },
              { color: '#662d91', title: 'Family-Centered Care', desc: 'Involving families and providing ongoing support.', step: 5 },
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: index < 4 ? '40px' : 0,
                  position: 'relative',
                }}
              >
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: isVisible('approach') ? item.color : '#e8e8e8',
                  border: '4px solid #fff',
                  boxShadow: isVisible('approach') ? `0 0 0 4px ${item.color}30, 0 4px 15px ${item.color}40` : 'none',
                  zIndex: 2,
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.15}s`,
                }} />
                
                {/* Card */}
                <Card 
                  style={{ 
                    width: 'calc(50% - 50px)',
                    border: 'none',
                    borderRadius: '16px',
                    background: '#fff',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                    opacity: isVisible('approach') ? 1 : 0,
                    transform: isVisible('approach') 
                      ? 'translateX(0) scale(1)' 
                      : index % 2 === 0 
                        ? 'translateX(-30px) scale(0.95)' 
                        : 'translateX(30px) scale(0.95)',
                    transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.15}s`,
                    marginLeft: index % 2 === 0 ? 0 : 'auto',
                    marginRight: index % 2 === 0 ? 'auto' : 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `translateY(-8px) scale(1.02)`
                    e.currentTarget.style.boxShadow = `0 20px 40px ${item.color}25`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                  }}
                  bodyStyle={{ padding: 0 }}
                >
                  {/* Color Bar */}
                  <div style={{
                    height: '5px',
                    background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}80 100%)`,
                    transition: 'all 0.5s ease',
                  }} />
                  <div style={{ padding: '20px' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      marginBottom: '10px' 
                    }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: `${item.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.4s ease',
                      }}>
                        <CheckCircleFilled style={{ fontSize: '18px', color: item.color }} />
                      </div>
                      <Title level={4} style={{ color: '#1e3a5f', margin: 0, fontSize: '16px' }}>
                        {item.title}
                      </Title>
                    </div>
                    <Paragraph style={{ color: '#666', margin: 0, fontSize: '14px', lineHeight: '1.7' }}>
                      {item.desc}
                    </Paragraph>
                  </div>
                </Card>
                
                {/* Step Number (opposite side) */}
                <div style={{
                  position: 'absolute',
                  left: index % 2 === 0 ? 'calc(50% + 30px)' : 'auto',
                  right: index % 2 === 0 ? 'auto' : 'calc(50% + 30px)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isVisible('approach') ? `${item.color}15` : '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '14px',
                  color: isVisible('approach') ? item.color : '#ccc',
                  opacity: isVisible('approach') ? 1 : 0,
                  transform: isVisible('approach') ? 'scale(1)' : 'scale(0.5)',
                  transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.15}s`,
                }}>
                  {item.step}
                </div>
              </div>
            ))}
          </div>
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

export default About
