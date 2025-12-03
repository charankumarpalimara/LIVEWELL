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
    { name: 'Speech Therapy', icon: <AudioOutlined />, color: '#f7941d', image: 'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?w=300&h=200&fit=crop' },
    { name: 'Occupational Therapy', icon: <ToolOutlined />, color: '#00a651', image: 'https://media.istockphoto.com/id/1402700273/photo/schoolboy-playing-with-building-blocks-in-the-classroom.jpg?s=612x612&w=0&k=20&c=ytMz74BvWY31nu6FAsFChKN7vS7UygwUSj5MKyOY3Hg=' },
    { name: 'Behavior Therapy', icon: <BulbOutlined />, color: '#00aeef', image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=300&h=200&fit=crop' },
    { name: 'Special Education', icon: <ReadOutlined />, color: '#662d91', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop' },
    { name: 'Play Therapy', icon: <PlayCircleOutlined />, color: '#92278f', image: 'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?w=300&h=200&fit=crop' },
  ]

  return (
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
            <Link to={getServiceUrl(service.name)} style={{ textDecoration: 'none' }}>
              <Card
                hoverable
                style={{
                  border: `2px solid ${service.color}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  ...getSlideFromLeft(0.1 + index * 0.08, isVisible('services')),
                }}
                bodyStyle={{ padding: '15px' }}
                cover={
                  <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={service.image}
                      alt={service.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to bottom, transparent 30%, ${service.color}60 100%)`,
                    }} />
                  </div>
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = `0 15px 35px ${service.color}30`
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
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
                    fontSize: '24px',
                    color: service.color,
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: `${service.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {service.icon}
                  </div>
                  <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '13px', lineHeight: '1.3' }}>
                    {service.name}
                  </div>
                </div>
              </Card>
            </Link>
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
  )
}

export default ServicesSection

