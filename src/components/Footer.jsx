import React, { useState, useEffect } from 'react'
import { Layout, Row, Col, Typography, Divider } from 'antd'
import { Link } from 'react-router-dom'
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined,
  ClockCircleOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeFilled,
  LinkedinFilled,
  HeartFilled,
  ArrowUpOutlined
} from '@ant-design/icons'
import logo from '../live-well-rehabilitation-network-logo.png'

const { Footer: AntFooter } = Layout
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

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const visibleElements = useScrollAnimation()
  const isVisible = (id) => visibleElements.has(id)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Animation styles
  const getSlideFromBottom = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Book Appointment', path: '/appointment' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    'Autism Therapy',
    'Speech Therapy',
    'Occupational Therapy',
    'Behavior Therapy',
    'Special Education',
    'Physiotherapy',
  ]

  const socialLinks = [
    { icon: <FacebookFilled />, color: '#1877f2', name: 'Facebook' },
    { icon: <TwitterOutlined />, color: '#1da1f2', name: 'Twitter' },
    { icon: <InstagramOutlined />, color: '#e4405f', name: 'Instagram' },
    { icon: <YoutubeFilled />, color: '#ff0000', name: 'YouTube' },
    { icon: <LinkedinFilled />, color: '#0a66c2', name: 'LinkedIn' },
  ]

  return (
    <AntFooter
      style={{
        background: 'linear-gradient(180deg, #1e3a5f 0%, #0d1f33 100%)',
        padding: 0,
        position: 'relative',
      }}
    >
      {/* Wave Decoration */}
      <div style={{
        position: 'absolute',
        top: '-1px',
        left: 0,
        right: 0,
        height: '80px',
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }} />

      <div 
        data-animate-id="footer"
        style={{ padding: '100px 30px 40px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <Row gutter={[40, 40]}>
          {/* Company Info */}
          <Col xs={24} md={8}>
            <div style={getSlideFromBottom(0, isVisible('footer'))}>
              <div style={{ marginBottom: '20px' }}>
                <img 
                  src={logo} 
                  alt="Live Well Rehabilitation Network" 
                  style={{ 
                    maxWidth: '200px', 
                    height: 'auto',
                  }} 
                />
              </div>
              <Paragraph style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '25px' }}>
                India's No. 1 Integrated Autism Network dedicated to mainstreaming children with 
                inclusion, equality, and equity.
              </Paragraph>
              
              {/* Social Links */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '18px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = social.color
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4}>
            <div style={getSlideFromBottom(0.1, isVisible('footer'))}>
              <Title level={5} style={{ color: '#fff', marginBottom: '20px', fontSize: '16px' }}>
                Quick Links
              </Title>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.path}
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '12px',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00aeef'
                    e.currentTarget.style.paddingLeft = '10px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                    e.currentTarget.style.paddingLeft = '0'
                  }}
                >
                  → {link.name}
                </Link>
              ))}
            </div>
          </Col>

          {/* Services */}
          <Col xs={12} md={4}>
            <div style={getSlideFromBottom(0.2, isVisible('footer'))}>
              <Title level={5} style={{ color: '#fff', marginBottom: '20px', fontSize: '16px' }}>
                Our Services
              </Title>
              {services.map((service, index) => (
                <div 
                  key={index}
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '12px',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00a651'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  }}
                >
                  • {service}
                </div>
              ))}
            </div>
          </Col>

          {/* Contact Info */}
          <Col xs={24} md={8}>
            <div style={getSlideFromBottom(0.3, isVisible('footer'))}>
              <Title level={5} style={{ color: '#fff', marginBottom: '20px', fontSize: '16px' }}>
                Contact Us
              </Title>
              {[
                { icon: <PhoneOutlined />, text: '+91 7032 157 157', color: '#e31e24' },
                { icon: <MailOutlined />, text: 'info@livewellnetwork.com', color: '#f7941d' },
                { icon: <EnvironmentOutlined />, text: 'Jubilee Hills, Hyderabad', color: '#00a651' },
                { icon: <ClockCircleOutlined />, text: 'Mon-Sat: 9AM - 6PM', color: '#00aeef' },
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '15px',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.transform = 'translateX(8px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <span style={{ 
                    color: item.color, 
                    fontSize: '18px',
                    width: '35px',
                    height: '35px',
                    background: `${item.color}20`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {item.icon}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0 25px' }} />

        {/* Copyright */}
        <div style={{ 
          textAlign: 'center', 
          color: 'rgba(255,255,255,0.6)',
          fontSize: '14px',
        }}>
          <p style={{ margin: '0 0 10px' }}>
            © {new Date().getFullYear()} Live Well Rehabilitation Network. All Rights Reserved.
          </p>
          {/* <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            Made with <HeartFilled style={{ color: '#e31e24', animation: 'pulse 1.5s infinite' }} /> for Special Children
          </p> */}
        </div>
      </div>

      {/* Back to Top Button */}
      <div
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer',
          boxShadow: '0 5px 25px rgba(0,174,239,0.4)',
          transition: 'all 0.4s ease',
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? 'visible' : 'hidden',
          transform: showBackToTop ? 'translateY(0)' : 'translateY(20px)',
          zIndex: 999,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = showBackToTop ? 'translateY(0) scale(1)' : 'translateY(20px)'
        }}
      >
        <ArrowUpOutlined />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </AntFooter>
  )
}

export default Footer
