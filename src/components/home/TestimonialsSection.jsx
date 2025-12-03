import React from 'react'
import { Row, Col, Card, Typography } from 'antd'
import { StarFilled } from '@ant-design/icons'
import { getSlideFromLeft } from '../../utils/animations'

const { Title, Paragraph } = Typography

const TestimonialsSection = ({ isVisible }) => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      child: 'Aarav, 6 years',
      service: 'Autism Therapy',
      testimonial: 'Live Well has transformed our lives. Aarav has made incredible progress in just 6 months!',
      rating: 5,
      color: '#00aeef',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Rajesh Kumar',
      child: 'Ananya, 5 years',
      service: 'Speech Therapy',
      testimonial: "Ananya's speech has improved dramatically. The personalized approach is amazing!",
      rating: 5,
      color: '#f7941d',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Sunita Patel',
      child: 'Rohan, 7 years',
      service: 'Occupational Therapy',
      testimonial: 'The team is professional and caring. Rohan has developed so many skills!',
      rating: 5,
      color: '#00a651',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      name: 'Amit Verma',
      child: 'Isha, 4 years',
      service: 'Special Education',
      testimonial: "Isha loves going to therapy! The activities are engaging and she's learning so much.",
      rating: 5,
      color: '#662d91',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
  ]

  return (
    <div
      data-animate-id="testimonials"
      style={{ padding: '90px 30px', background: '#f8fbff' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{
          color: '#ec008c',
          fontWeight: '700',
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: '13px',
          ...getSlideFromLeft(0, isVisible('testimonials')),
        }}>
          Testimonials
        </div>
        <Title level={2} style={{
          color: '#1e3a5f',
          marginBottom: '15px',
          fontSize: 'clamp(26px, 4vw, 40px)',
          ...getSlideFromLeft(0.1, isVisible('testimonials')),
        }}>
          What Parents Say
        </Title>
      </div>
      <Row gutter={[24, 40]} justify="center">
        {testimonials.map((testimonial, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              style={{
                height: '100%',
                border: `2px solid ${testimonial.color}`,
                borderRadius: '16px',
                position: 'relative',
                overflow: 'visible',
                marginTop: '30px',
                transition: 'all 0.4s ease',
                ...getSlideFromLeft(0.1 + index * 0.12, isVisible('testimonials')),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = `0 15px 35px ${testimonial.color}25`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-28px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '58px',
                height: '58px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: `3px solid ${testimonial.color}`,
                boxShadow: '0 5px 15px rgba(0,0,0,0.12)',
              }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ marginTop: '30px', marginBottom: '12px', textAlign: 'center' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarFilled key={i} style={{ color: '#f7941d', marginRight: '2px', fontSize: '16px' }} />
                ))}
              </div>
              <Paragraph style={{ fontStyle: 'italic', color: '#555', marginBottom: '18px', minHeight: '65px', textAlign: 'center', fontSize: '14px' }}>
                "{testimonial.testimonial}"
              </Paragraph>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '15px' }}>{testimonial.name}</div>
                <div style={{ color: '#888', fontSize: '12px' }}>Parent of {testimonial.child}</div>
                <div style={{
                  color: testimonial.color,
                  fontSize: '11px',
                  marginTop: '8px',
                  fontWeight: '600',
                  background: `${testimonial.color}12`,
                  padding: '5px 14px',
                  borderRadius: '20px',
                  display: 'inline-block',
                }}>
                  {testimonial.service}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default TestimonialsSection

