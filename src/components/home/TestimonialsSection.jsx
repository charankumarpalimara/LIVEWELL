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
      style={{
        padding: '60px 30px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 50%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(236, 0, 140, 0.05) 0%, rgba(0, 174, 239, 0.05) 100%)',
        filter: 'blur(80px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(247, 148, 29, 0.05) 0%, rgba(102, 45, 145, 0.05) 100%)',
        filter: 'blur(100px)',
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '70px',
        }}>
          <div style={{
            color: '#ec008c',
            fontWeight: '700',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '14px',
            ...getSlideFromLeft(0, isVisible('testimonials')),
          }}>
            Testimonials
          </div>
          <Title level={2} style={{
            color: '#1e3a5f',
            marginBottom: '20px',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '700',
            lineHeight: '1.2',
            ...getSlideFromLeft(0.1, isVisible('testimonials')),
          }}>
            What Parents Say
          </Title>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #ec008c 0%, #00aeef 100%)',
            margin: '0 auto',
            borderRadius: '2px',
            ...getSlideFromLeft(0.2, isVisible('testimonials')),
          }} />
        </div>

        <Row gutter={[32, 40]} justify="center">
          {testimonials.map((testimonial, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card
                style={{
                  height: '100%',
                  border: 'none',
                  borderRadius: '24px',
                  position: 'relative',
                  overflow: 'visible',
                  background: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: '0',
                  ...getSlideFromLeft(0.1 + index * 0.12, isVisible('testimonials')),
                }}
                bodyStyle={{
                  padding: '32px 24px 24px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                  e.currentTarget.style.boxShadow = `0 20px 50px ${testimonial.color}30`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Quote icon */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontSize: '64px',
                  color: `${testimonial.color}15`,
                  lineHeight: 1,
                  fontFamily: 'Georgia, serif',
                  fontWeight: 'bold',
                  transform: 'rotate(180deg)',
                }}>
                  "
                </div>

                {/* Profile image with modern design */}
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}>
                  <div style={{
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `4px solid ${testimonial.color}`,
                    boxShadow: `0 8px 24px ${testimonial.color}30`,
                    background: '#ffffff',
                    padding: '3px',
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      background: `linear-gradient(135deg, ${testimonial.color}20 0%, ${testimonial.color}05 100%)`,
                    }}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  </div>
                  {/* Decorative ring */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '92px',
                    height: '92px',
                    borderRadius: '50%',
                    border: `2px solid ${testimonial.color}20`,
                    pointerEvents: 'none',
                  }} />
                </div>

                {/* Rating stars */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '4px',
                  marginBottom: '16px',
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarFilled
                      key={i}
                      style={{
                        color: '#f7941d',
                        fontSize: '18px',
                        filter: 'drop-shadow(0 2px 4px rgba(247, 148, 29, 0.3))',
                      }}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <Paragraph style={{
                  fontStyle: 'italic',
                  color: '#4a5568',
                  marginBottom: '18px',
                  minHeight: '70px',
                  textAlign: 'center',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  fontWeight: '400',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  "{testimonial.testimonial}"
                </Paragraph>

                {/* Author info */}
                <div style={{
                  textAlign: 'center',
                  paddingTop: '16px',
                  borderTop: `1px solid ${testimonial.color}15`,
                }}>
                  <div style={{
                    fontWeight: '700',
                    color: '#1e3a5f',
                    fontSize: '16px',
                    marginBottom: '6px',
                    letterSpacing: '0.3px',
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    color: '#718096',
                    fontSize: '13px',
                    marginBottom: '10px',
                    fontWeight: '500',
                  }}>
                    Parent of {testimonial.child}
                  </div>
                  <div style={{
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: `linear-gradient(135deg, ${testimonial.color} 0%, ${testimonial.color}dd 100%)`,
                    padding: '8px 20px',
                    borderRadius: '25px',
                    display: 'inline-block',
                    boxShadow: `0 4px 12px ${testimonial.color}40`,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}>
                    {testimonial.service}
                  </div>
                </div>

                {/* Accent border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${testimonial.color} 0%, ${testimonial.color}cc 50%, ${testimonial.color} 100%)`,
                  borderRadius: '24px 24px 0 0',
                }} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default TestimonialsSection

