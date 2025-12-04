import React from 'react'
import { Row, Col, Progress, Typography } from 'antd'
import { getSlideFromBottom } from '../../utils/animations'

const { Title } = Typography

const SuccessRatesSection = ({ isVisible }) => {
  const stats = [
    { name: 'Autism Therapy', rate: 98, color: '#00aeef' },
    { name: 'Speech Therapy', rate: 98, color: '#f7941d' },
    { name: 'Special Education', rate: 99, color: '#00a651' },
    { name: 'Behavior Therapy', rate: 98, color: '#662d91' },
    { name: 'Occupational Therapy', rate: 98, color: '#e31e24' },
    { name: 'Physiotherapy', rate: 99, color: '#ec008c' },
  ]

  return (
    <div
      data-animate-id="stats"
      style={{
        padding: '60px 30px',
        background: 'linear-gradient(135deg, #1e3a5f 0%, #00aeef 100%)',
        position: 'relative',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{
          color: 'rgba(255,255,255,0.9)',
          fontWeight: '700',
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: '13px',
          ...getSlideFromBottom(0, isVisible('stats')),
        }}>
          Our Achievements
        </div>
        <Title level={2} style={{
          color: '#fff',
          marginBottom: '20px',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: '800',
          lineHeight: '1.2',
          ...getSlideFromBottom(0.1, isVisible('stats')),
        }}>
          Proven Success Rates
        </Title>
        <div style={{
          width: '100px',
          height: '4px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
          margin: '0 auto',
          borderRadius: '2px',
          ...getSlideFromBottom(0.2, isVisible('stats')),
        }} />
      </div>
      <Row gutter={[20, 20]} justify="center">
        {stats.map((stat, index) => (
          <Col xs={12} sm={8} md={6} lg={4} key={index}>
            <div
              style={{
                textAlign: 'center',
                padding: '25px 15px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease',
                ...getSlideFromBottom(0.1 + index * 0.08, isVisible('stats')),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              }}
            >
              <Progress
                type="circle"
                percent={isVisible('stats') ? stat.rate : 0}
                strokeColor={{ '0%': stat.color, '100%': '#fff' }}
                trailColor="rgba(255,255,255,0.2)"
                strokeWidth={8}
                size={100}
                format={(percent) => (
                  <span style={{ color: '#fff', fontSize: '24px', fontWeight: '800' }}>
                    {percent}%
                  </span>
                )}
              />
              <div style={{ color: '#fff', marginTop: '12px', fontWeight: '600', fontSize: '13px' }}>
                {stat.name}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default SuccessRatesSection

