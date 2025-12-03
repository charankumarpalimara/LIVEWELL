import React from 'react'
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { CalendarOutlined, PhoneOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const CTASection = () => {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(227,30,36,0.92) 0%, rgba(247,148,29,0.92) 50%, rgba(255,242,0,0.92) 100%), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '90px 30px',
        textAlign: 'center',
      }}
    >
      <Title level={2} style={{ color: '#fff', marginBottom: '18px', textShadow: '2px 4px 8px rgba(0,0,0,0.2)', fontSize: 'clamp(26px, 4vw, 40px)' }}>
        Start Your Child's Journey Today!
      </Title>
      <Paragraph style={{ color: '#fff', fontSize: '18px', marginBottom: '35px', maxWidth: '650px', margin: '0 auto 35px' }}>
        Join India's No. 1 Integrated Autism Network. Book your appointment now!
      </Paragraph>
      <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/appointment">
          <Button
            size="large"
            style={{
              background: '#fff',
              color: '#e31e24',
              border: 'none',
              borderRadius: '50px',
              height: '55px',
              padding: '0 45px',
              fontWeight: '700',
              fontSize: '16px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.25)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)'
            }}
          >
            <CalendarOutlined /> Book Appointment
          </Button>
        </Link>
        <a href="tel:+918977510100">
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
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <PhoneOutlined /> +91 8977510100
          </Button>
        </a>
      </div>
    </div>
  )
}

export default CTASection

