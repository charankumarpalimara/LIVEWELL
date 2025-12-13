import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined, SafetyCertificateFilled, TeamOutlined, TrophyFilled, HeartFilled } from '@ant-design/icons'
import { getSlideFromLeft, getSlideFromRight } from '../../utils/animations'

const { Title, Paragraph } = Typography

const AboutSection = ({ isVisible }) => {
  return (
    <div
      data-animate-id="about"
      style={{ 
        padding: '70px 30px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
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
        background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 166, 81, 0.08) 100%)',
        filter: 'blur(100px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(236, 0, 140, 0.06) 0%, rgba(247, 148, 29, 0.06) 100%)',
        filter: 'blur(80px)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Row gutter={[60, 60]} align="middle" justify="center">
        <Col xs={24} md={12}>
          <div style={{ position: 'relative', ...getSlideFromLeft(0, isVisible('about')) }}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 174, 239, 0.15)',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
              padding: '8px',
            }}>
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=450&fit=crop"
                alt="Child Therapy Session"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-25px',
                background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                color: '#fff',
                padding: '24px 32px',
                borderRadius: '20px',
                boxShadow: '0 15px 40px rgba(0,174,239,0.4)',
                border: '4px solid #ffffff',
                zIndex: 2,
                ...getSlideFromRight(0.3, isVisible('about')),
              }}
            >
              <div style={{ 
                fontSize: '36px', 
                fontWeight: '900',
                lineHeight: '1',
                marginBottom: '4px',
              }}>10+</div>
              <div style={{ 
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.5px',
                opacity: 0.95,
              }}>Years Experience</div>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div style={getSlideFromRight(0.1, isVisible('about'))}>
            <div style={{
              color: '#00aeef',
              fontWeight: '700',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontSize: '14px',
              position: 'relative',
              display: 'inline-block',
              paddingLeft: '20px',
            }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '12px',
                height: '3px',
                background: 'linear-gradient(90deg, #00aeef 0%, #00a651 100%)',
                borderRadius: '2px',
              }} />
              Welcome to Live Well
            </div>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              marginBottom: '25px', 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '800',
              lineHeight: '1.2',
            }}>
              India's No. 1 Integrated <span style={{ 
                color: '#00aeef',
                background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Autism Network</span>
            </Title>
            <Paragraph style={{ 
              fontSize: '17px', 
              lineHeight: '1.9', 
              color: '#4a5568', 
              marginBottom: '35px',
              fontWeight: '400',
            }}>
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
                      gap: '12px',
                      padding: '16px 20px',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
                      borderRadius: '14px',
                      border: '1px solid rgba(0, 174, 239, 0.1)',
                      boxShadow: '0 4px 15px rgba(0, 174, 239, 0.08)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'default',
                      ...getSlideFromLeft(0.2 + index * 0.1, isVisible('about')),
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px) translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,174,239,0.2)'
                      e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #e6f7ff 100%)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0) translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 174, 239, 0.08)'
                      e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)'
                    }}
                  >
                    <span style={{ 
                      color: '#00aeef', 
                      fontSize: '24px',
                      filter: 'drop-shadow(0 2px 4px rgba(0, 174, 239, 0.2))',
                    }}>{item.icon}</span>
                    <span style={{ 
                      fontWeight: '700', 
                      color: '#1e3a5f', 
                      fontSize: '15px',
                      letterSpacing: '0.3px',
                    }}>{item.title}</span>
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
    </div>
  )
}

export default AboutSection

