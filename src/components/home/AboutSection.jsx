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
  )
}

export default AboutSection

