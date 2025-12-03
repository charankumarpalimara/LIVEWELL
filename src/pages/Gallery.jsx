import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Modal, Button } from 'antd'
import { PlayCircleOutlined, ZoomInOutlined } from '@ant-design/icons'

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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const visibleElements = useScrollAnimation()
  const isVisible = (id) => visibleElements.has(id)

  // Animation styles
  const getSlideFromLeft = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0) rotate(0)' : 'translateX(-40px) rotate(-2deg)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromRight = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0) rotate(0)' : 'translateX(40px) rotate(2deg)',
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

  const galleryImages = [
    { id: 1, title: 'Autism Therapy Session', category: 'Therapy', src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop', color: '#e31e24' },
    { id: 2, title: 'Speech Therapy', category: 'Therapy', src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop', color: '#f7941d' },
    { id: 3, title: 'Play Therapy Activities', category: 'Activities', src: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=600&h=400&fit=crop', color: '#00a651' },
    { id: 4, title: 'Occupational Therapy', category: 'Therapy', src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop', color: '#00aeef' },
    { id: 5, title: 'Music Therapy Session', category: 'Activities', src: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=600&h=400&fit=crop', color: '#662d91' },
    { id: 6, title: 'Special Education Class', category: 'Education', src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop', color: '#92278f' },
    { id: 7, title: 'Child Development', category: 'Activities', src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop', color: '#ec008c' },
    { id: 8, title: 'Medical Assessment', category: 'Therapy', src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop', color: '#e31e24' },
    { id: 9, title: 'Learning Activities', category: 'Education', src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop', color: '#f7941d' },
    { id: 10, title: 'Sensory Integration', category: 'Therapy', src: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=400&fit=crop', color: '#00a651' },
    { id: 11, title: 'Physiotherapy Session', category: 'Therapy', src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop', color: '#00aeef' },
    { id: 12, title: 'Creative Arts', category: 'Activities', src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop', color: '#662d91' },
  ]

  const categories = ['All', 'Therapy', 'Activities', 'Education']

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(247,148,29,0.9) 0%, rgba(227,30,36,0.9) 100%), url(https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1920&h=600&fit=crop)',
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
          Our Gallery
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
          See Our Work in Action
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.95)',
            animation: 'slideDown 0.8s ease-out 0.4s both',
          }}
        >
          Explore our facilities, therapy sessions, and success stories
        </Paragraph>
      </div>

      <div 
        data-animate-id="gallery"
        style={{ padding: '70px 30px', maxWidth: '1400px', margin: '0 auto' }}
      >
        {/* Category Filter */}
        <div style={{ marginBottom: '45px', textAlign: 'center', ...getSlideFromBottom(0, isVisible('gallery')) }}>
          {categories.map((category, index) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                margin: '0 8px 12px 0',
                borderRadius: '50px',
                border: selectedCategory === category ? 'none' : '2px solid #00aeef',
                background: selectedCategory === category 
                  ? 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)' 
                  : '#fff',
                color: selectedCategory === category ? '#fff' : '#00aeef',
                fontWeight: '600',
                height: '42px',
                padding: '0 28px',
                fontSize: '14px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,174,239,0.2)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <Row gutter={[20, 20]}>
          {filteredImages.map((item, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <div 
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  ...(index % 2 === 0 
                    ? getSlideFromLeft(0.05 + (index * 0.04), isVisible('gallery'))
                    : getSlideFromRight(0.05 + (index * 0.04), isVisible('gallery'))
                  ),
                }}
                onClick={() => setSelectedImage(item)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                  e.currentTarget.style.boxShadow = `0 20px 40px ${item.color}30`
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1.1)'
                  const overlay = e.currentTarget.querySelector('.zoom-overlay')
                  if (overlay) overlay.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)'
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1)'
                  const overlay = e.currentTarget.querySelector('.zoom-overlay')
                  if (overlay) overlay.style.opacity = '0'
                }}
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                />
                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to top, ${item.color}dd 0%, transparent 60%)`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '18px',
                }}>
                  <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px' }}>{item.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>{item.category}</div>
                </div>
                {/* Zoom Icon */}
                <div 
                  className="zoom-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <div style={{
                    background: '#fff',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <ZoomInOutlined style={{ color: item.color, fontSize: '22px' }} />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Video Section */}
        <div 
          data-animate-id="videos"
          style={{ marginTop: '80px', textAlign: 'center' }}
        >
          <div style={{ 
            color: '#662d91', 
            fontWeight: '700', 
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('videos')),
          }}>
            Success Stories
          </div>
          <Title level={2} style={{ 
            color: '#1e3a5f', 
            marginBottom: '45px', 
            fontSize: 'clamp(26px, 4vw, 38px)',
            ...getSlideFromBottom(0.1, isVisible('videos')),
          }}>
            Watch Our Success Stories
          </Title>
          <Row gutter={[24, 24]} justify="center">
            {[
              { title: "Aarav's Journey", subtitle: 'Autism Therapy Success', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=300&fit=crop', color: '#e31e24' },
              { title: "Ananya's Progress", subtitle: 'Speech Therapy Results', image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&h=300&fit=crop', color: '#f7941d' },
              { title: "Rohan's Story", subtitle: 'Occupational Therapy', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&h=300&fit=crop', color: '#00a651' },
            ].map((video, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  style={{ 
                    border: `2px solid ${video.color}`, 
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    ...getScaleIn(0.1 + index * 0.12, isVisible('videos')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)'
                    e.currentTarget.style.boxShadow = `0 20px 40px ${video.color}25`
                    const playBtn = e.currentTarget.querySelector('.play-btn')
                    if (playBtn) playBtn.style.transform = 'scale(1.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    const playBtn = e.currentTarget.querySelector('.play-btn')
                    if (playBtn) playBtn.style.transform = 'scale(1)'
                  }}
                  cover={
                    <div
                      style={{
                        height: '180px',
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${video.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <div
                        className="play-btn"
                        style={{
                          width: '65px',
                          height: '65px',
                          borderRadius: '50%',
                          background: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 5px 25px rgba(0,0,0,0.3)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <PlayCircleOutlined style={{ fontSize: '32px', color: video.color }} />
                      </div>
                    </div>
                  }
                >
                  <Card.Meta
                    title={<span style={{ color: '#1e3a5f', fontWeight: '700' }}>{video.title}</span>}
                    description={<span style={{ color: '#888' }}>{video.subtitle}</span>}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Image Modal */}
      <Modal
        open={selectedImage !== null}
        onCancel={() => setSelectedImage(null)}
        footer={null}
        width={850}
        centered
        bodyStyle={{ padding: 0 }}
      >
        {selectedImage && (
          <div>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div style={{ padding: '20px', background: '#fff' }}>
              <Title level={4} style={{ color: '#1e3a5f', margin: 0 }}>{selectedImage.title}</Title>
              <Paragraph style={{ color: '#888', margin: '5px 0 0' }}>{selectedImage.category}</Paragraph>
            </div>
          </div>
        )}
      </Modal>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Gallery
