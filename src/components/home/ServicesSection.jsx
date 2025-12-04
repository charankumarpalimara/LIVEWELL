import React from 'react'
import { Row, Col, Card, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined, HeartFilled, AudioOutlined, ToolOutlined, BulbOutlined, ReadOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { getSlideFromLeft, getSlideFromBottom } from '../../utils/animations'


const { Title } = Typography

const ServicesSection = ({ isVisible }) => {
  const getServiceUrl = (serviceName) => {
    const urlMap = {
      'Autism Therapy': '/autism-therapy',
      'Speech Therapy': '/speech-therapy',
      'Occupational Therapy': '/occupational-therapy-for-kids',
      'Behavior Therapy': '/behavior-therapy-for-kids',
      'Special Education': '/special-education-for-kids',
      'Play Therapy': '/play-therapy',
    }
    return urlMap[serviceName] || '/services'
  }

  const services = [
    { name: 'Autism Therapy', icon: <HeartFilled />, color: '#e31e24', image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=300&h=200&fit=crop' },
    { name: 'Speech Therapy', icon: <AudioOutlined />, color: '#f7941d', image: 'https://img.freepik.com/free-photo/woman-doing-speech-therapy-with-little-blonde-boy_23-2149110233.jpg?semt=ais_hybrid&w=740&q=80' },
    { name: 'Occupational Therapy', icon: <ToolOutlined />, color: '#00a651', image: 'https://media.istockphoto.com/id/1402700273/photo/schoolboy-playing-with-building-blocks-in-the-classroom.jpg?s=612x612&w=0&k=20&c=ytMz74BvWY31nu6FAsFChKN7vS7UygwUSj5MKyOY3Hg=' },
    { name: 'Behavior Therapy', icon: <BulbOutlined />, color: '#00aeef', image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=300&h=200&fit=crop' },
    { name: 'Special Education', icon: <ReadOutlined />, color: '#662d91', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop' },
    { name: 'Play Therapy', icon: <PlayCircleOutlined />, color: '#92278f', image: 'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?w=300&h=200&fit=crop' },
  ]

  return (
    <div
      data-animate-id="services"
      style={{ 
        padding: '70px 30px',
        background: 'linear-gradient(180deg, #f8fbff 0%, #ffffff 50%, #f8fbff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '50px',
        left: '-200px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 174, 239, 0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '50px',
        right: '-200px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 166, 81, 0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            ...getSlideFromBottom(0, isVisible('services')),
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
            Our Services
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
          <Title
            level={2}
            style={{
              color: '#1e3a5f',
              marginBottom: '20px',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '800',
              lineHeight: '1.2',
              ...getSlideFromBottom(0.1, isVisible('services')),
            }}
          >
            Comprehensive Therapy Services
          </Title>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #00aeef 0%, #00a651 100%)',
            margin: '0 auto',
            borderRadius: '2px',
            ...getSlideFromBottom(0.2, isVisible('services')),
          }} />
        </div>
      <Row gutter={[20, 20]} justify="center">
        {services.map((service, index) => (
          <Col xs={12} sm={8} md={6} lg={4} key={index}>
            <Link to={getServiceUrl(service.name)} style={{ textDecoration: 'none' }}>
              <Card
                hoverable
                style={{
                  border: 'none',
                  // borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#ffffff',  
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  ...getSlideFromLeft(0.1 + index * 0.08, isVisible('services')),
                }}
                bodyStyle={{ padding: '20px' }}
                cover={
                  <div style={{ 
                    height: '160px', 
                    overflow: 'hidden', 
                    position: 'relative',
                    background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
                  }}>
                    <img
                      src={service.image}
                      alt={service.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${service.color} 0%, ${service.color}cc 100%)`,
                    }} />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to bottom, transparent 40%, ${service.color}40 100%)`,
                    }} />
                  </div>
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                  e.currentTarget.style.boxShadow = `0 20px 50px ${service.color}35`
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <div style={{
                    fontSize: '28px',
                    color: service.color,
                    width: '50px',
                    height: '50px',
                    borderRadius: '5px',
                    background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 4px 12px ${service.color}20`,
                    border: `2px solid ${service.color}15`,
                  }}>
                    {service.icon}
                  </div>
                  <div style={{ 
                    fontWeight: '800', 
                    color: '#1e3a5f', 
                    fontSize: '15px', 
                    lineHeight: '1.4',
                    letterSpacing: '0.3px',
                  }}>
                    {service.name}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      </div>
      <div style={{ textAlign: 'center', marginTop: '60px', position: 'relative', zIndex: 1, ...getSlideFromBottom(0.5, isVisible('services')) }}>
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
  )
}

export default ServicesSection

