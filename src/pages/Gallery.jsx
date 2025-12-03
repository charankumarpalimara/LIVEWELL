import React, { useState } from 'react'
import { Row, Col, Card, Typography, Modal, Button } from 'antd'
import { PlayCircleOutlined, EyeOutlined, ZoomInOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const galleryImages = [
    { 
      id: 1, 
      title: 'Autism Therapy Session', 
      category: 'Therapy', 
      src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop',
      color: '#e31e24' 
    },
    { 
      id: 2, 
      title: 'Speech Therapy', 
      category: 'Therapy', 
      src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
      color: '#f7941d' 
    },
    { 
      id: 3, 
      title: 'Play Therapy Activities', 
      category: 'Activities', 
      src: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=600&h=400&fit=crop',
      color: '#00a651' 
    },
    { 
      id: 4, 
      title: 'Occupational Therapy', 
      category: 'Therapy', 
      src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop',
      color: '#00aeef' 
    },
    { 
      id: 5, 
      title: 'Music Therapy Session', 
      category: 'Activities', 
      src: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=600&h=400&fit=crop',
      color: '#662d91' 
    },
    { 
      id: 6, 
      title: 'Special Education Class', 
      category: 'Education', 
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
      color: '#92278f' 
    },
    { 
      id: 7, 
      title: 'Child Development', 
      category: 'Activities', 
      src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop',
      color: '#ec008c' 
    },
    { 
      id: 8, 
      title: 'Medical Assessment', 
      category: 'Therapy', 
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      color: '#e31e24' 
    },
    { 
      id: 9, 
      title: 'Learning Activities', 
      category: 'Education', 
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
      color: '#f7941d' 
    },
    { 
      id: 10, 
      title: 'Sensory Integration', 
      category: 'Therapy', 
      src: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=400&fit=crop',
      color: '#00a651' 
    },
    { 
      id: 11, 
      title: 'Physiotherapy Session', 
      category: 'Therapy', 
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      color: '#00aeef' 
    },
    { 
      id: 12, 
      title: 'Creative Arts', 
      category: 'Activities', 
      src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop',
      color: '#662d91' 
    },
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
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="hero-shape hero-shape-1 animate-float" />
        <div className="hero-shape hero-shape-2 animate-float" style={{ animationDelay: '2s' }} />
        
        <div style={{ 
          color: 'rgba(255,255,255,0.9)', 
          fontWeight: '700', 
          marginBottom: '15px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontSize: '14px',
        }}>
          Our Gallery
        </div>
        <Title 
          level={1} 
          className="hero-title"
          style={{ 
            color: '#fff', 
            marginBottom: '20px',
            fontSize: 'clamp(32px, 5vw, 48px)',
          }}
        >
          See Our Work in Action
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.95)',
          }}
        >
          Explore our facilities, therapy sessions, and success stories
        </Paragraph>
      </div>

      <div style={{ padding: '80px 30px', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Category Filter */}
        <div style={{ marginBottom: '50px', textAlign: 'center' }}>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="btn-animated"
              style={{
                margin: '0 10px 15px 0',
                borderRadius: '50px',
                border: selectedCategory === category ? 'none' : '2px solid #00aeef',
                background: selectedCategory === category 
                  ? 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)' 
                  : '#fff',
                color: selectedCategory === category ? '#fff' : '#00aeef',
                fontWeight: '600',
                height: '45px',
                padding: '0 30px',
                fontSize: '15px',
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
                className="card-animated hover-lift image-zoom"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                }}
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    display: 'block',
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
                  padding: '20px',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{ color: '#fff', fontWeight: '700', fontSize: '16px' }}>{item.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>{item.category}</div>
                </div>
                {/* Zoom Icon */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(255,255,255,0.9)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                className="zoom-icon"
                >
                  <ZoomInOutlined style={{ color: item.color, fontSize: '18px' }} />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Video Section */}
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <div style={{ 
            color: '#662d91', 
            fontWeight: '700', 
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '14px',
          }}>
            Success Stories
          </div>
          <Title level={2} style={{ color: '#1e3a5f', marginBottom: '50px', fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Watch Our Success Stories
          </Title>
          <Row gutter={[24, 24]} justify="center">
            {[
              { title: 'Aarav\'s Journey', subtitle: 'Autism Therapy Success', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=300&fit=crop' },
              { title: 'Ananya\'s Progress', subtitle: 'Speech Therapy Results', image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&h=300&fit=crop' },
              { title: 'Rohan\'s Story', subtitle: 'Occupational Therapy', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&h=300&fit=crop' },
            ].map((video, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  className="card-animated hover-lift"
                  style={{ border: '2px solid #00aeef', overflow: 'hidden' }}
                  cover={
                    <div
                      style={{
                        height: '200px',
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
                        className="animate-pulse"
                        style={{
                          width: '70px',
                          height: '70px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 5px 25px rgba(0,0,0,0.3)',
                        }}
                      >
                        <PlayCircleOutlined style={{ fontSize: '35px', color: '#00aeef' }} />
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
        width={900}
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
        .image-zoom:hover .zoom-icon {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  )
}

export default Gallery
