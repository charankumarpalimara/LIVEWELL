import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Button, Tag, Progress } from 'antd'
import { 
  CalendarOutlined, 
  ClockCircleOutlined, 
  TeamOutlined,
  ArrowRightOutlined,
  StarFilled,
  CheckCircleOutlined
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
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    const elements = document.querySelectorAll('[data-animate-id]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return visibleElements
}

const Programs = () => {
  const visibleElements = useScrollAnimation()
  const isVisible = (id) => visibleElements.has(id)

  // Animation styles
  const getSlideFromLeft = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(-40px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromRight = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(40px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromBottom = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(35px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const programs = [
    {
      id: 1,
      title: 'Early Intervention Program',
      description: 'Designed for children aged 0-3 years to address developmental delays early and maximize outcomes.',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&h=300&fit=crop',
      duration: '6 months',
      sessions: '3 per week',
      ageGroup: '0-3 years',
      color: '#e31e24',
      progress: 95,
    },
    {
      id: 2,
      title: 'Autism Integrated Therapy',
      description: 'Comprehensive program combining multiple therapeutic approaches for children with autism spectrum disorders.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&h=300&fit=crop',
      duration: '12 months',
      sessions: '5 per week',
      ageGroup: '2-12 years',
      color: '#f7941d',
      progress: 98,
    },
    {
      id: 3,
      title: 'Speech & Language Development',
      description: 'Focused program to improve communication skills, articulation, and language comprehension.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=300&fit=crop',
      duration: '6-12 months',
      sessions: '2-3 per week',
      ageGroup: '2-10 years',
      color: '#00a651',
      progress: 96,
    },
    {
      id: 4,
      title: 'Sensory Integration Program',
      description: 'Helps children process sensory information more effectively for improved daily functioning.',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&h=300&fit=crop',
      duration: '6 months',
      sessions: '3 per week',
      ageGroup: '3-10 years',
      color: '#00aeef',
      progress: 94,
    },
    {
      id: 5,
      title: 'Social Skills Training',
      description: 'Building essential social and interaction skills through structured group activities and play.',
      image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&h=300&fit=crop',
      duration: '3-6 months',
      sessions: '2 per week',
      ageGroup: '4-12 years',
      color: '#662d91',
      progress: 92,
    },
    {
      id: 6,
      title: 'School Readiness Program',
      description: 'Preparing children with special needs for mainstream education through skill development.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=300&fit=crop',
      duration: '6 months',
      sessions: '4 per week',
      ageGroup: '4-6 years',
      color: '#92278f',
      progress: 97,
    },
  ]

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(102,45,145,0.9) 0%, rgba(146,39,143,0.9) 100%), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=600&fit=crop)',
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
          Our Programs
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
          Specialized Development Programs
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
          Evidence-based programs designed to support children with developmental needs through 
          structured, personalized interventions.
        </Paragraph>
      </div>

      {/* Programs Grid */}
      <div 
        data-animate-id="programs"
        style={{ padding: '80px 30px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <Row gutter={[30, 30]}>
          {programs.map((program, index) => (
            <Col xs={24} md={12} lg={8} key={program.id}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: 'none',
                  boxShadow: '0 5px 25px rgba(0,0,0,0.06)',
                  transition: 'all 0.4s ease',
                  ...(index % 2 === 0 
                    ? getSlideFromLeft(0.05 + index * 0.08, isVisible('programs'))
                    : getSlideFromRight(0.05 + index * 0.08, isVisible('programs'))
                  ),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)'
                  e.currentTarget.style.boxShadow = `0 25px 50px ${program.color}20`
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 5px 25px rgba(0,0,0,0.06)'
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1)'
                }}
                cover={
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={program.image} 
                      alt={program.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: program.color,
                      color: '#fff',
                      padding: '6px 14px',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}>
                      <StarFilled /> Popular
                    </div>
                  </div>
                }
                bodyStyle={{ padding: '25px' }}
              >
                <Tag 
                  color={program.color} 
                  style={{ 
                    marginBottom: '12px', 
                    borderRadius: '50px',
                    fontSize: '12px',
                    padding: '4px 12px',
                  }}
                >
                  {program.ageGroup}
                </Tag>
                <Title level={4} style={{ color: '#1e3a5f', marginBottom: '12px' }}>
                  {program.title}
                </Title>
                <Paragraph style={{ color: '#666', marginBottom: '20px', minHeight: '66px' }}>
                  {program.description}
                </Paragraph>

                {/* Program Details */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                    padding: '10px 14px',
                    background: '#f8fbff',
                    borderRadius: '10px',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '13px' }}>
                      <CalendarOutlined style={{ color: program.color }} /> {program.duration}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '13px' }}>
                      <ClockCircleOutlined style={{ color: program.color }} /> {program.sessions}
                    </span>
                  </div>
                </div>

                {/* Success Rate */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#888' }}>Success Rate</span>
                    <span style={{ fontWeight: '700', color: program.color }}>{program.progress}%</span>
                  </div>
                  <Progress 
                    percent={isVisible('programs') ? program.progress : 0} 
                    strokeColor={program.color}
                    showInfo={false}
                    strokeWidth={8}
                    style={{ borderRadius: '10px' }}
                  />
                </div>

                <Link to="/appointment">
                  <Button
                    type="primary"
                    block
                    style={{
                      background: `linear-gradient(135deg, ${program.color} 0%, ${program.color}cc 100%)`,
                      border: 'none',
                      borderRadius: '10px',
                      height: '45px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = `0 8px 25px ${program.color}40`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    Enroll Now <ArrowRightOutlined />
                  </Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* CTA Section */}
      <div 
        data-animate-id="cta"
        style={{
          padding: '80px 30px',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #00aeef 100%)',
          textAlign: 'center',
        }}
      >
        <Title level={2} style={{ 
          color: '#fff', 
          marginBottom: '20px', 
          fontSize: 'clamp(26px, 4vw, 40px)',
          ...getSlideFromBottom(0, isVisible('cta')),
        }}>
          Not Sure Which Program is Right?
        </Title>
        <Paragraph style={{ 
          color: 'rgba(255,255,255,0.9)', 
          fontSize: '18px', 
          marginBottom: '35px', 
          maxWidth: '600px', 
          margin: '0 auto 35px',
          ...getSlideFromBottom(0.1, isVisible('cta')),
        }}>
          Our experts will assess your child's needs and recommend the best program.
        </Paragraph>
        <div style={getSlideFromBottom(0.2, isVisible('cta'))}>
          <Link to="/appointment">
            <Button
              type="primary"
              size="large"
              style={{
                background: '#fff',
                color: '#1e3a5f',
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
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Schedule Free Consultation <ArrowRightOutlined />
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

export default Programs
