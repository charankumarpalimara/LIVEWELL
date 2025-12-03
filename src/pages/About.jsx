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
      name: 'Dr. Priya Sharma',
      role: 'Chief Therapist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
      specialty: 'Autism Specialist',
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Speech Therapist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop',
      specialty: 'Language Development',
    },
    {
      name: 'Dr. Sunita Patel',
      role: 'Occupational Therapist',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop',
      specialty: 'Motor Skills',
    },
    {
      name: 'Dr. Amit Verma',
      role: 'Behavioral Specialist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop',
      specialty: 'ABA Therapy',
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
          padding: '100px 30px',
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop"
                alt="About Live Well"
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
        style={{ padding: '90px 30px', background: '#f8fbff' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[40, 40]}>
            <Col xs={24} md={12}>
              <Card
                style={{
                  height: '100%',
                  border: '2px solid #00aeef',
                  borderRadius: '20px',
                  textAlign: 'center',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  ...getSlideFromLeft(0, isVisible('mission')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,174,239,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                cover={
                  <div style={{ 
                    height: '140px', 
                    background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <AimOutlined style={{ fontSize: '55px', color: '#fff' }} />
                  </div>
                }
              >
                <Title level={3} style={{ color: '#1e3a5f' }}>Our Mission</Title>
                <Paragraph style={{ fontSize: '15px', lineHeight: '1.8', color: '#555' }}>
                  To provide world-class rehabilitation services that empower children with autism, ADHD, 
                  and other neurological disorders to achieve their maximum potential and lead fulfilling lives.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                style={{
                  height: '100%',
                  border: '2px solid #e31e24',
                  borderRadius: '20px',
                  textAlign: 'center',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  ...getSlideFromRight(0.1, isVisible('mission')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(227,30,36,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                cover={
                  <div style={{ 
                    height: '140px', 
                    background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <HeartFilled style={{ fontSize: '55px', color: '#fff' }} />
                  </div>
                }
              >
                <Title level={3} style={{ color: '#1e3a5f' }}>Our Vision</Title>
                <Paragraph style={{ fontSize: '15px', lineHeight: '1.8', color: '#555' }}>
                  To be India's leading integrated autism network that transforms lives through innovative 
                  therapies, evidence-based practices, and commitment to inclusion and equity.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Our Team */}
      <div 
        data-animate-id="team"
        style={{ padding: '90px 30px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ 
              color: '#f7941d', 
              fontWeight: '700', 
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '13px',
              ...getSlideFromBottom(0, isVisible('team')),
            }}>
              Our Team
            </div>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              marginBottom: '15px', 
              fontSize: 'clamp(26px, 4vw, 38px)',
              ...getSlideFromBottom(0.1, isVisible('team')),
            }}>
              Meet Our Expert Therapists
            </Title>
          </div>
          <Row gutter={[24, 24]}>
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card
                  hoverable
                  style={{ 
                    textAlign: 'center', 
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    ...getSlideFromBottom(0.1 + index * 0.1, isVisible('team')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
                    const img = e.currentTarget.querySelector('img')
                    if (img) img.style.transform = 'scale(1.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    const img = e.currentTarget.querySelector('img')
                    if (img) img.style.transform = 'scale(1)'
                  }}
                  cover={
                    <div style={{ overflow: 'hidden' }}>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        style={{
                          width: '100%',
                          height: '220px',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                    </div>
                  }
                >
                  <Title level={4} style={{ color: '#1e3a5f', marginBottom: '5px' }}>{member.name}</Title>
                  <div style={{ color: '#00aeef', fontWeight: '600', marginBottom: '5px' }}>{member.role}</div>
                  <div style={{ color: '#888', fontSize: '13px' }}>{member.specialty}</div>
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
              marginBottom: '15px', 
              fontSize: 'clamp(26px, 4vw, 38px)',
              ...getSlideFromBottom(0.1, isVisible('why-us')),
            }}>
              What Makes Us Different
            </Title>
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
              marginBottom: '15px', 
              fontSize: 'clamp(26px, 4vw, 38px)',
              opacity: isVisible('approach') ? 1 : 0,
              transform: isVisible('approach') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
            }}>
              Our Integrated Approach
            </Title>
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
