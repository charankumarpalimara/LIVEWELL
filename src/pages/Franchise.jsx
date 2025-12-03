import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Button, Form, Input, message } from 'antd'
import { 
  ShopOutlined,
  TrophyFilled,
  TeamOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  RocketOutlined,
  SafetyCertificateFilled
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

const Franchise = () => {
  const visibleElements = useScrollAnimation()
  const [form] = Form.useForm()
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

  const onFinish = (values) => {
    console.log('Franchise form submitted:', values)
    message.success('Thank you for your interest! We will contact you soon.')
    form.resetFields()
  }

  const benefits = [
    { icon: <TrophyFilled />, title: 'Proven Business Model', desc: 'Established brand with 10+ years of success', color: '#e31e24' },
    { icon: <TeamOutlined />, title: 'Comprehensive Training', desc: 'Complete training and ongoing support', color: '#f7941d' },
    { icon: <DollarOutlined />, title: 'Low Investment', desc: 'Affordable franchise opportunities', color: '#00a651' },
    { icon: <GlobalOutlined />, title: 'Growing Market', desc: 'High demand for therapy services', color: '#00aeef' },
    { icon: <RocketOutlined />, title: 'Quick Setup', desc: 'Fast track to opening your center', color: '#662d91' },
    { icon: <SafetyCertificateFilled />, title: 'Brand Recognition', desc: 'India\'s No. 1 Autism Network', color: '#ec008c' },
  ]

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,174,239,0.9) 0%, rgba(0,166,81,0.9) 100%), url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=600&fit=crop)',
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
          Franchise Opportunity
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
          Join India's No. 1 Autism Network
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
          Own a franchise and make a difference in children's lives while building a successful business
        </Paragraph>
      </div>

      {/* Why Franchise Section */}
      <div 
        data-animate-id="why-franchise"
        style={{ padding: '90px 30px', background: '#fff' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ 
              color: '#00aeef', 
              fontWeight: '700', 
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '13px',
              ...getSlideFromBottom(0, isVisible('why-franchise')),
            }}>
              Why Choose Us
            </div>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              marginBottom: '15px', 
              fontSize: 'clamp(26px, 4vw, 38px)',
              ...getSlideFromBottom(0.1, isVisible('why-franchise')),
            }}>
              Benefits of <span style={{ color: '#00aeef' }}>Franchising with Us</span>
            </Title>
          </div>
          <Row gutter={[24, 24]}>
            {benefits.map((benefit, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  style={{ 
                    textAlign: 'center', 
                    borderRadius: '16px',
                    border: `2px solid ${benefit.color}`,
                    transition: 'all 0.4s ease',
                    ...getScaleIn(0.1 + index * 0.1, isVisible('why-franchise')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)'
                    e.currentTarget.style.boxShadow = `0 20px 40px ${benefit.color}30`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ fontSize: '45px', marginBottom: '15px', color: benefit.color }}>
                    {benefit.icon}
                  </div>
                  <Title level={4} style={{ color: '#1e3a5f', marginBottom: '10px' }}>{benefit.title}</Title>
                  <Paragraph style={{ color: '#666', marginBottom: 0 }}>{benefit.desc}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Investment & Requirements */}
      <div 
        data-animate-id="investment"
        style={{ padding: '90px 30px', background: '#f8fbff' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[50, 50]} align="middle">
            <Col xs={24} md={12}>
              <div style={getSlideFromLeft(0, isVisible('investment'))}>
                <div style={{ 
                  color: '#f7941d', 
                  fontWeight: '700', 
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontSize: '13px',
                }}>
                  Investment Details
                </div>
                <Title level={2} style={{ color: '#1e3a5f', marginBottom: '25px', fontSize: 'clamp(26px, 4vw, 36px)' }}>
                  What You Need to <span style={{ color: '#f7941d' }}>Get Started</span>
                </Title>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { title: 'Initial Investment', desc: 'Competitive franchise fee with flexible payment options', icon: <DollarOutlined /> },
                    { title: 'Space Requirements', desc: 'Minimum 1000-1500 sq ft for therapy center', icon: <ShopOutlined /> },
                    { title: 'Training Program', desc: 'Comprehensive 2-week training for you and your team', icon: <TeamOutlined /> },
                    { title: 'Ongoing Support', desc: 'Marketing, operations, and clinical support included', icon: <SafetyCertificateFilled /> },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '15px',
                        padding: '20px',
                        background: '#fff',
                        borderRadius: '12px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        transition: 'all 0.3s ease',
                        ...getSlideFromLeft(0.15 + index * 0.1, isVisible('investment')),
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(8px)'
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)'
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div style={{ 
                        fontSize: '28px', 
                        color: '#00aeef',
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <Title level={4} style={{ color: '#1e3a5f', marginBottom: '5px', fontSize: '18px' }}>
                          {item.title}
                        </Title>
                        <Paragraph style={{ color: '#666', margin: 0, fontSize: '15px' }}>
                          {item.desc}
                        </Paragraph>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={getSlideFromRight(0.1, isVisible('investment'))}>
                <Card
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                    border: '2px solid #00aeef',
                  }}
                >
                  <Title level={3} style={{ color: '#1e3a5f', marginBottom: '25px', textAlign: 'center' }}>
                    Request Franchise Information
                  </Title>
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="name"
                      label="Full Name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input size="large" placeholder="Enter your name" />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label="Email Address"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input size="large" placeholder="Enter your email" />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      label="Phone Number"
                      rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                      <Input size="large" placeholder="Enter your phone number" />
                    </Form.Item>
                    <Form.Item
                      name="city"
                      label="City"
                      rules={[{ required: true, message: 'Please enter your city' }]}
                    >
                      <Input size="large" placeholder="Enter your city" />
                    </Form.Item>
                    <Form.Item
                      name="message"
                      label="Message (Optional)"
                    >
                      <Input.TextArea 
                        rows={4} 
                        placeholder="Tell us about your interest in franchising"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        block
                        size="large"
                        style={{
                          background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                          border: 'none',
                          borderRadius: '25px',
                          height: '50px',
                          fontWeight: '600',
                          fontSize: '16px',
                        }}
                      >
                        Submit Request
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Support Section */}
      <div 
        data-animate-id="support"
        style={{ 
          padding: '90px 30px', 
          background: 'linear-gradient(135deg, rgba(30,58,95,0.95) 0%, rgba(0,174,239,0.95) 100%), url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('support')),
          }}>
            We're Here to Help
          </div>
          <Title level={2} style={{ 
            color: '#fff', 
            marginBottom: '30px', 
            fontSize: 'clamp(26px, 4vw, 38px)',
            ...getSlideFromBottom(0.1, isVisible('support')),
          }}>
            Comprehensive Franchise Support
          </Title>
          <Row gutter={[30, 30]} justify="center">
            {[
              { icon: <TeamOutlined />, title: 'Training & Development', desc: 'Complete training program for you and your staff' },
              { icon: <GlobalOutlined />, title: 'Marketing Support', desc: 'National marketing campaigns and local support' },
              { icon: <SafetyCertificateFilled />, title: 'Operations Manual', desc: 'Detailed SOPs and best practices' },
              { icon: <PhoneOutlined />, title: '24/7 Support', desc: 'Dedicated support team always available' },
            ].map((item, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card
                  style={{ 
                    textAlign: 'center', 
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s ease',
                    ...getScaleIn(0.1 + index * 0.1, isVisible('support')),
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
                  <div style={{ fontSize: '40px', marginBottom: '15px', color: '#fff' }}>
                    {item.icon}
                  </div>
                  <Title level={4} style={{ color: '#fff', marginBottom: '8px' }}>{item.title}</Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 0 }}>{item.desc}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
          <div style={{ marginTop: '50px', ...getSlideFromBottom(0.5, isVisible('support')) }}>
            <a href="tel:+918977510100">
              <Button
                size="large"
                style={{
                  background: '#fff',
                  color: '#00aeef',
                  border: 'none',
                  borderRadius: '50px',
                  height: '55px',
                  padding: '0 45px',
                  fontWeight: '700',
                  fontSize: '16px',
                  marginRight: '15px',
                }}
                icon={<PhoneOutlined />}
              >
                Call Us: +91 8977510100
              </Button>
            </a>
            <a href="mailto:info@livewellrehabilitationnetwork.com">
              <Button
                size="large"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  border: '2px solid #fff',
                  borderRadius: '50px',
                  height: '55px',
                  padding: '0 45px',
                  fontWeight: '600',
                  fontSize: '16px',
                }}
                icon={<MailOutlined />}
              >
                Email Us
              </Button>
            </a>
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

export default Franchise

