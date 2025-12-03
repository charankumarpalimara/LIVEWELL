import React from 'react'
import { Layout, Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import { 
  PhoneOutlined, 
  MailOutlined, 
  ClockCircleOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  TwitterOutlined
} from '@ant-design/icons'
import logo from '../live-well-rehabilitation-network-logo.png'

const { Footer: AntFooter } = Layout

const Footer = () => {
  return (
    <AntFooter
      style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #00aeef 100%)',
        color: '#fff',
        padding: '60px 30px 20px',
        marginTop: '0',
      }}
    >
      <Row gutter={[40, 40]}>
        <Col xs={24} sm={12} md={8}>
          <div style={{ marginBottom: '20px' }}>
            <img 
              src={logo} 
              alt="Live Well Rehabilitation Network" 
              style={{ 
                height: '60px', 
                filter: 'brightness(0) invert(1)',
                marginBottom: '15px',
              }} 
            />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', marginBottom: '20px' }}>
            India's No. 1 Integrated autism network to mainstream your kid with inclusion, equality, equity.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { icon: <FacebookFilled />, color: '#1877f2' },
              { icon: <InstagramFilled />, color: '#e4405f' },
              { icon: <YoutubeFilled />, color: '#ff0000' },
              { icon: <TwitterOutlined />, color: '#1da1f2' },
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
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
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>
            Quick Links
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Our Services' },
              { to: '/products', label: 'Shop Products' },
              { to: '/appointment', label: 'Book Appointment' },
              { to: '/about', label: 'About Us' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map((link, index) => (
              <Link 
                key={index}
                to={link.to} 
                style={{ 
                  color: 'rgba(255,255,255,0.85)', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.paddingLeft = '10px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
                  e.currentTarget.style.paddingLeft = '0'
                }}
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>
            Our Services
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Autism Therapy',
              'Speech Therapy',
              'Occupational Therapy',
              'Behavior Therapy',
              'Special Education',
              'ABA Therapy',
              'Physiotherapy',
            ].map((service, index) => (
              <span key={index} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px' }}>
                • {service}
              </span>
            ))}
          </div>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>
            Contact Us
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <PhoneOutlined style={{ fontSize: '18px' }} />
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>National Helpline</div>
                <a href="tel:+918977510100" style={{ color: '#fff', fontWeight: '600', textDecoration: 'none' }}>
                  +91 8977510100
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <MailOutlined style={{ fontSize: '18px' }} />
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>Email Us</div>
                <a href="mailto:info@livewellrehab.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>
                  info@livewellrehab.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <ClockCircleOutlined style={{ fontSize: '18px' }} />
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>Opening Hours</div>
                <div style={{ fontSize: '14px' }}>Mon - Sat: 8:00 AM - 7:30 PM</div>
              </div>
            </div>
          </div>

          <Link to="/appointment" style={{ marginTop: '25px', display: 'inline-block' }}>
            <Button
              type="primary"
              size="large"
              className="btn-animated"
              style={{
                background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                border: 'none',
                borderRadius: '25px',
                height: '45px',
                padding: '0 30px',
                fontWeight: '600',
              }}
            >
              Book Appointment
            </Button>
          </Link>
        </Col>
      </Row>

      <div
        style={{
          textAlign: 'center',
          marginTop: '40px',
          paddingTop: '25px',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          color: 'rgba(255,255,255,0.8)',
          fontSize: '14px',
        }}
      >
        <p style={{ marginBottom: '10px' }}>
          © 2025 Live Well Rehabilitation Network. All rights reserved.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Franchise</a>
          <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Careers</a>
        </div>
      </div>
    </AntFooter>
  )
}

export default Footer
