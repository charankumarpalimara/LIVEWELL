import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'
import { getSlideFromRight, getSlideFromBottom } from '../../utils/animations'

const { Title } = Typography

const GallerySection = ({ isVisible }) => {
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop', title: 'Autism Therapy Session' },
    { src: 'https://img.freepik.com/free-photo/woman-doing-speech-therapy-with-little-blonde-boy_23-2149110233.jpg?semt=ais_hybrid&w=740&q=80', title: 'Speech & Language Therapy' },
    { src: 'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?w=400&h=300&fit=crop', title: 'Play-Based Learning' },
    { src: 'https://media.istockphoto.com/id/1402700273/photo/schoolboy-playing-with-building-blocks-in-the-classroom.jpg?s=612x612&w=0&k=20&c=ytMz74BvWY31nu6FAsFChKN7vS7UygwUSj5MKyOY3Hg=', title: 'Occupational Therapy' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop', title: 'Special Education Class' },
    { src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop', title: 'Child Development' },
  ]

  return (
    <div
      data-animate-id="gallery"
      style={{ 
        padding: '60px 30px',
        background: '#f8fbff',
        position: 'relative',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{
          color: '#662d91',
          fontWeight: '700',
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: '13px',
          ...getSlideFromBottom(0, isVisible('gallery')),
        }}>
          Our Gallery
        </div>
        <Title level={2} style={{
          color: '#1e3a5f',
          marginBottom: '20px',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: '800',
          lineHeight: '1.2',
          ...getSlideFromBottom(0.1, isVisible('gallery')),
        }}>
          See Our Therapy Sessions
        </Title>
        <div style={{
          width: '100px',
          height: '4px',
          background: 'linear-gradient(90deg, #662d91 0%, #00aeef 100%)',
          margin: '0 auto',
          borderRadius: '2px',
          ...getSlideFromBottom(0.2, isVisible('gallery')),
        }} />
      </div>
      <Row gutter={[20, 20]}>
        {galleryImages.map((img, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.4s ease',
                ...getSlideFromRight(0.1 + index * 0.1, isVisible('gallery')),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)'
                e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.querySelector('img').style.transform = 'scale(1)'
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                padding: '35px 18px 18px',
                color: '#fff',
                fontWeight: '600',
                fontSize: '15px',
              }}>
                {img.title}
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: 'center', marginTop: '40px', ...getSlideFromBottom(0.5, isVisible('gallery')) }}>
        <Link to="/gallery">
          <Button
            type="primary"
            size="large"
            style={{
              background: 'linear-gradient(135deg, #662d91 0%, #00aeef 100%)',
              border: 'none',
              borderRadius: '50px',
              height: '48px',
              padding: '0 40px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(102,45,145,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View Full Gallery <ArrowRightOutlined />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default GallerySection

