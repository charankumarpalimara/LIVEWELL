import React from 'react'
import { Row, Col, Card, Typography, Divider } from 'antd'
import { HeartFilled, GlobalOutlined, RocketOutlined, TeamOutlined } from '@ant-design/icons'
import patronImage from '../assets/patron-health-care.jpeg'

const { Title, Paragraph } = Typography

const PatronHealthCare = () => {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #662d91 0%, #92278f 100%)',
          padding: '100px 30px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-30%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          filter: 'blur(60px)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            color: 'rgba(255,255,255,0.9)',
            fontWeight: '700',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '14px',
          }}>
            Our Partner
          </div>
          <Title
            level={1}
            style={{
              color: '#fff',
              marginBottom: '25px',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: '800',
              textShadow: '2px 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            PATRON HEALTH CARE PRIVATE LIMITED
          </Title>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '100px 30px', maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[50, 50]} align="middle">
          <Col xs={24} md={12}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 15px 50px rgba(0,0,0,0.15)',
              position: 'relative',
            }}>
              <img
                src={patronImage}
                alt="Patron Health Care Private Limited"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{
              color: '#662d91',
              fontWeight: '700',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '13px',
            }}>
              Our Vision
            </div>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              marginBottom: '25px', 
              fontSize: 'clamp(26px, 4vw, 36px)',
              fontWeight: '800',
            }}>
              Empowering Human Race Across the World
            </Title>
            <Paragraph style={{ 
              fontSize: '16px', 
              lineHeight: '1.8', 
              color: '#444', 
              marginBottom: '30px',
              fontWeight: '400',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            }}>
              Our vision is to empower human race upto maximum across World to allow chance for every individual live life with respect and dignity. We are in zeal of empowering people from across planet by advanced, innovative, creative healthcare, Pharma, agriculture, social, psychological, Rehabilitative systematic protocols and processes to make world more integrative and inclusive in all forms and means.
            </Paragraph>
          </Col>
        </Row>

        <Divider style={{ margin: '60px 0', borderColor: '#e8e8e8' }} />

        {/* Mission Pillars */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            color: '#662d91',
            fontWeight: '700',
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
          }}>
            Our Commitment
          </div>
          <Title level={2} style={{ 
            color: '#1e3a5f', 
            marginBottom: '40px', 
            fontSize: 'clamp(26px, 4vw, 36px)',
            fontWeight: '800',
          }}>
            Building an <span style={{ color: '#662d91' }}>Inclusive World</span>
          </Title>
        </div>

        <Row gutter={[30, 30]}>
          {[
            {
              icon: <GlobalOutlined />,
              title: 'Global Reach',
              description: 'Empowering people across the planet with innovative healthcare solutions and systematic protocols.',
              color: '#662d91',
            },
            {
              icon: <RocketOutlined />,
              title: 'Innovation & Creativity',
              description: 'Advanced, innovative, and creative approaches in healthcare, pharma, agriculture, and rehabilitation.',
              color: '#92278f',
            },
            {
              icon: <HeartFilled />,
              title: 'Respect & Dignity',
              description: 'Ensuring every individual has the chance to live life with respect and dignity through our services.',
              color: '#e31e24',
            },
            {
              icon: <TeamOutlined />,
              title: 'Integration & Inclusion',
              description: 'Making the world more integrative and inclusive in all forms and means through our comprehensive programs.',
              color: '#00aeef',
            },
          ].map((pillar, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  borderRadius: '20px',
                  border: `2px solid ${pillar.color}20`,
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = `0 15px 40px ${pillar.color}30`
                  e.currentTarget.style.borderColor = pillar.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = `${pillar.color}20`
                }}
              >
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${pillar.color} 0%, ${pillar.color}dd 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '32px',
                  color: '#fff',
                  boxShadow: `0 8px 20px ${pillar.color}40`,
                }}>
                  {pillar.icon}
                </div>
                <Title level={4} style={{ 
                  color: '#1e3a5f', 
                  marginBottom: '12px',
                  fontSize: '18px',
                  fontWeight: '700',
                }}>
                  {pillar.title}
                </Title>
                <Paragraph style={{ 
                  color: '#666', 
                  fontSize: '15px', 
                  lineHeight: '1.7',
                  margin: 0,
                  fontWeight: '400',
                }}>
                  {pillar.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Info Section */}
        <Card
          style={{
            marginTop: '60px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)',
            border: '1px solid #e8e8e8',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
          }}
          bodyStyle={{ padding: '40px' }}
        >
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} lg={16}>
              <Title level={3} style={{ 
                color: '#1e3a5f', 
                marginBottom: '20px',
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: '800',
              }}>
                Our Comprehensive Approach
              </Title>
              <Paragraph style={{ 
                fontSize: '16px', 
                lineHeight: '1.8', 
                color: '#444',
                marginBottom: '20px',
                fontWeight: '400',
              }}>
                Patron Health Care Private Limited is committed to transforming lives through a holistic approach that encompasses:
              </Paragraph>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Advanced Healthcare Solutions',
                  'Innovative Pharmaceutical Services',
                  'Sustainable Agriculture Programs',
                  'Social & Psychological Support',
                  'Comprehensive Rehabilitation Services',
                  'Systematic Protocols & Processes',
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 18px',
                      background: '#fff',
                      borderRadius: '10px',
                      border: '1px solid #e8e8e8',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#662d91'
                      e.currentTarget.style.background = '#f8f9fa'
                      e.currentTarget.style.transform = 'translateX(5px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e8e8e8'
                      e.currentTarget.style.background = '#fff'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#662d91',
                      flexShrink: 0,
                    }} />
                    <span style={{ 
                      fontSize: '15px', 
                      color: '#333',
                      fontWeight: '500',
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <div style={{
                background: 'linear-gradient(135deg, #662d91 0%, #92278f 100%)',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                color: '#fff',
                boxShadow: '0 15px 40px rgba(102,45,145,0.3)',
              }}>
                <GlobalOutlined style={{ fontSize: '48px', marginBottom: '20px' }} />
                <Title level={4} style={{ 
                  color: '#fff', 
                  marginBottom: '15px',
                  fontSize: '20px',
                  fontWeight: '700',
                }}>
                  Worldwide Impact
                </Title>
                <Paragraph style={{ 
                  fontSize: '15px', 
                  color: 'rgba(255,255,255,0.95)',
                  lineHeight: '1.7',
                  margin: 0,
                }}>
                  Empowering individuals across the globe to live with respect, dignity, and maximum potential.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  )
}

export default PatronHealthCare

