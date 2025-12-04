import React from 'react'
import { Row, Col, Typography } from 'antd'
import { CheckCircleOutlined, SafetyCertificateFilled, TeamOutlined, TrophyFilled } from '@ant-design/icons'
import { getSlideFromLeft, getSlideFromRight } from '../../utils/animations'

const { Title } = Typography

const WhyChooseUsSection = ({ isVisible }) => {
  return (
    <div
      data-animate-id="why"
      style={{ 
        padding: '60px 30px',
        background: '#fff',
        position: 'relative',
      }}
    >
      <Row gutter={[50, 50]} align="middle" justify="center">
        <Col xs={24} md={12} style={{ order: window.innerWidth < 768 ? 2 : 1 }}>
          <div style={getSlideFromLeft(0, isVisible('why'))}>
            <div style={{
              color: '#f7941d',
              fontWeight: '700',
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '13px',
            }}>
              Why Choose Us
            </div>
            <Title level={2} style={{ color: '#1e3a5f', marginBottom: '25px', fontSize: 'clamp(26px, 4vw, 38px)' }}>
              Taking Pediatric Therapy to the <span style={{ color: '#f7941d' }}>Next Level</span>
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { icon: <CheckCircleOutlined />, text: 'Watch your kids training live', color: '#00a651' },
                { icon: <SafetyCertificateFilled />, text: 'Certified therapists & educators', color: '#00aeef' },
                { icon: <TeamOutlined />, text: 'Integrated family approach', color: '#f7941d' },
                { icon: <TrophyFilled />, text: '98%+ success rate', color: '#e31e24' },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '14px 18px',
                    background: '#f8fbff',
                    borderRadius: '12px',
                    borderLeft: `4px solid ${item.color}`,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    ...getSlideFromLeft(0.15 + index * 0.1, isVisible('why')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)'
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <span style={{ color: item.color, fontSize: '22px' }}>{item.icon}</span>
                  <span style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col xs={24} md={12} style={{ order: window.innerWidth < 768 ? 1 : 2 }}>
          <div style={{ position: 'relative', ...getSlideFromRight(0.1, isVisible('why')) }}>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=450&fit=crop"
              alt="Child Learning"
              style={{
                width: '100%',
                borderRadius: '20px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '15px',
                left: '-25px',
                background: '#fff',
                padding: '15px 22px',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center',
                ...getSlideFromLeft(0.4, isVisible('why')),
              }}
            >
              <div style={{ fontSize: '26px', fontWeight: '800', color: '#e31e24' }}>1000+</div>
              <div style={{ fontSize: '12px', color: '#666' }}>Happy Families</div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '-20px',
                background: '#fff',
                padding: '15px 22px',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center',
                ...getSlideFromRight(0.5, isVisible('why')),
              }}
            >
              <div style={{ fontSize: '26px', fontWeight: '800', color: '#00a651' }}>50+</div>
              <div style={{ fontSize: '12px', color: '#666' }}>Expert Therapists</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default WhyChooseUsSection

