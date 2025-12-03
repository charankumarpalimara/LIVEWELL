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

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
        <div className="hero-shape hero-shape-1 animate-float" />
        <div className="hero-shape hero-shape-2 animate-float" style={{ animationDelay: '2s' }} />
        
        <div style={{ 
          color: 'rgba(255,255,255,0.9)', 
          fontWeight: '700', 
          marginBottom: '15px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontSize: '14px',
        }}>
          What We Offer
        </div>
        <Title 
          level={1} 
          className="hero-title"
          style={{ 
            color: '#fff', 
            marginBottom: '20px',
            fontSize: 'clamp(32px, 5vw, 48px)',
          }}
        >
          Our Therapy Services
        </Title>
        <Paragraph 
          className="hero-subtitle"
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.95)', 
            maxWidth: '800px', 
            margin: '0 auto',
          }}
        >
          Comprehensive therapeutic services designed to support children with autism, ADHD, and other 
          neurological and sensorial disorders. Our integrated approach ensures maximum progress.
        </Paragraph>
      </div>

      {/* Services Grid */}
      <div style={{ padding: '100px 30px' }}>
        <Row gutter={[24, 24]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={service.id}>
              <Card
                hoverable
                className={`card-animated hover-lift ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{
                  height: '100%',
                  border: `2px solid ${service.color}`,
                  overflow: 'hidden',
                  animationDelay: `${index * 0.1}s`,
                }}
                bodyStyle={{ padding: '20px' }}
                cover={
                  <div className="image-zoom" style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: service.color,
                      color: '#fff',
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    }}>
                      {service.icon}
                    </div>
                  </div>
                }
              >
                <Title level={4} style={{ marginBottom: '10px', color: '#1e3a5f', fontSize: '18px' }}>
                  {service.title}
                </Title>
                <Paragraph style={{ color: '#666', fontSize: '14px', minHeight: '70px', marginBottom: '15px' }}>
                  {service.description}
                </Paragraph>
                {service.successRate && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '12px', color: '#888' }}>Success Rate</span>
                      <span style={{ fontWeight: '700', color: service.color }}>{service.successRate}%</span>
                    </div>
                    <Progress 
                      percent={service.successRate} 
                      strokeColor={service.color}
                      showInfo={false}
                      size="small"
                      strokeWidth={8}
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
        style={{
          padding: '100px 30px',
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
        }}>
          Our Achievements
        </div>
        <Title level={2} style={{ color: '#fff', marginBottom: '60px', fontSize: 'clamp(28px, 4vw, 42px)' }}>
          Proven Success Rates
        </Title>
        <Row gutter={[32, 32]} justify="center">
          {[
            { name: 'Autism Integrated Therapy', rate: 98, color: '#e31e24' },
            { name: 'Speech Therapy', rate: 98, color: '#f7941d' },
            { name: 'Special Education', rate: 99, color: '#00a651' },
            { name: 'Pediatric Physiotherapy', rate: 99, color: '#662d91' },
          ].map((stat, index) => (
            <Col xs={12} sm={8} md={6} key={index}>
              <div
                className={`glass-effect ${isVisible ? 'animate-scale-in' : ''}`}
                style={{
                  padding: '35px 20px',
                  borderRadius: '20px',
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <Progress
                  type="circle"
                  percent={stat.rate}
                  strokeColor={stat.color}
                  trailColor="rgba(255,255,255,0.2)"
                  strokeWidth={10}
                  size={130}
                  format={(percent) => (
                    <span style={{ color: '#fff', fontSize: '32px', fontWeight: '800' }}>
                      {percent}%
                    </span>
                  )}
                />
                <div style={{ color: '#fff', marginTop: '20px', fontWeight: '600', fontSize: '16px' }}>
                  {stat.name}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* CTA Section */}
      <div style={{ padding: '100px 30px', textAlign: 'center', background: '#f8fbff' }}>
        <Title level={2} style={{ marginBottom: '20px', color: '#1e3a5f', fontSize: 'clamp(28px, 4vw, 40px)' }}>
          Ready to Get Started?
        </Title>
        <Paragraph style={{ fontSize: '18px', color: '#666', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Book an appointment today and take the first step towards your child's development journey.
        </Paragraph>
        <Link to="/appointment">
          <Button
            type="primary"
            size="large"
            className="btn-animated hover-glow"
            style={{
              background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
              border: 'none',
              borderRadius: '50px',
              height: '60px',
              padding: '0 60px',
              fontWeight: '700',
              fontSize: '18px',
            }}
          >
            Book Appointment Now <ArrowRightOutlined />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Services
