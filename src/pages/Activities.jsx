import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Button, Calendar, Badge, Tag, Modal } from 'antd'
import { 
  CalendarOutlined, 
  ClockCircleOutlined, 
  EnvironmentOutlined,
  ArrowRightOutlined,
  TeamOutlined,
  PlayCircleOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

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

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null)
  const visibleElements = useScrollAnimation()
  const isVisible = (id) => visibleElements.has(id)

  // Animation styles
  const getSlideFromLeft = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(-40px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromRight = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(40px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromBottom = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(35px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const activities = [
    {
      id: 1,
      title: 'Music & Movement',
      description: 'Interactive music sessions that encourage movement, rhythm, and self-expression.',
      image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=500&h=300&fit=crop',
      time: '10:00 AM - 11:00 AM',
      day: 'Monday & Wednesday',
      location: 'Activity Room A',
      ageGroup: '3-8 years',
      color: '#e31e24',
      spots: 12,
    },
    {
      id: 2,
      title: 'Art & Craft Workshop',
      description: 'Creative sessions focusing on fine motor skills through painting, drawing, and crafting.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=300&fit=crop',
      time: '2:00 PM - 3:30 PM',
      day: 'Tuesday & Thursday',
      location: 'Creative Studio',
      ageGroup: '4-10 years',
      color: '#f7941d',
      spots: 8,
    },
    {
      id: 3,
      title: 'Sensory Play Time',
      description: 'Structured sensory activities designed to improve sensory processing and integration.',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&h=300&fit=crop',
      time: '11:30 AM - 12:30 PM',
      day: 'Monday to Friday',
      location: 'Sensory Room',
      ageGroup: '2-6 years',
      color: '#00a651',
      spots: 6,
    },
    {
      id: 4,
      title: 'Social Skills Group',
      description: 'Group activities focused on developing communication and social interaction skills.',
      image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&h=300&fit=crop',
      time: '3:00 PM - 4:00 PM',
      day: 'Wednesday & Friday',
      location: 'Group Activity Room',
      ageGroup: '5-12 years',
      color: '#00aeef',
      spots: 10,
    },
    {
      id: 5,
      title: 'Outdoor Play & Exercise',
      description: 'Physical activities and games to improve motor skills, coordination, and fitness.',
      image: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=500&h=300&fit=crop',
      time: '9:00 AM - 10:00 AM',
      day: 'Tuesday & Thursday',
      location: 'Outdoor Play Area',
      ageGroup: '4-12 years',
      color: '#662d91',
      spots: 15,
    },
    {
      id: 6,
      title: 'Story Time & Reading',
      description: 'Interactive reading sessions to enhance language development and imagination.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=300&fit=crop',
      time: '4:30 PM - 5:15 PM',
      day: 'Monday to Friday',
      location: 'Library Corner',
      ageGroup: '3-8 years',
      color: '#92278f',
      spots: 10,
    },
  ]

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,166,81,0.9) 0%, rgba(0,174,239,0.9) 100%), url(https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=1920&h=600&fit=crop)',
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
          Fun & Learning
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
          Weekly Activities
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.95)', 
            maxWidth: '800px', 
            margin: '0 auto',
            animation: 'slideDown 0.8s ease-out 0.4s both',
          }}
        >
          Engaging activities designed to support development while making learning fun and enjoyable.
        </Paragraph>
      </div>

      {/* Activities Grid */}
      <div 
        data-animate-id="activities"
        style={{ padding: '80px 30px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <Row gutter={[30, 30]}>
          {activities.map((activity, index) => (
            <Col xs={24} md={12} lg={8} key={activity.id}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: `2px solid transparent`,
                  boxShadow: '0 5px 25px rgba(0,0,0,0.06)',
                  transition: 'all 0.4s ease',
                  ...(index % 2 === 0 
                    ? getSlideFromLeft(0.05 + index * 0.08, isVisible('activities'))
                    : getSlideFromRight(0.05 + index * 0.08, isVisible('activities'))
                  ),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)'
                  e.currentTarget.style.borderColor = activity.color
                  e.currentTarget.style.boxShadow = `0 25px 50px ${activity.color}20`
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.boxShadow = '0 5px 25px rgba(0,0,0,0.06)'
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1)'
                }}
                cover={
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '15px',
                      display: 'flex',
                      gap: '8px',
                    }}>
                      <Tag 
                        style={{ 
                          background: activity.color,
                          color: '#fff',
                          border: 'none',
                          borderRadius: '50px',
                          fontWeight: '600',
                          fontSize: '11px',
                        }}
                      >
                        {activity.ageGroup}
                      </Tag>
                      <Tag 
                        style={{ 
                          background: 'rgba(255,255,255,0.95)',
                          color: activity.color,
                          border: 'none',
                          borderRadius: '50px',
                          fontWeight: '600',
                          fontSize: '11px',
                        }}
                      >
                        {activity.spots} spots
                      </Tag>
                    </div>
                  </div>
                }
                bodyStyle={{ padding: '25px' }}
              >
                <Title level={4} style={{ color: '#1e3a5f', marginBottom: '12px' }}>
                  {activity.title}
                </Title>
                <Paragraph style={{ color: '#666', marginBottom: '20px', minHeight: '45px', fontSize: '14px' }}>
                  {activity.description}
                </Paragraph>

                {/* Activity Details */}
                <div style={{ marginBottom: '20px' }}>
                  {[
                    { icon: <ClockCircleOutlined />, text: activity.time },
                    { icon: <CalendarOutlined />, text: activity.day },
                    { icon: <EnvironmentOutlined />, text: activity.location },
                  ].map((detail, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px',
                        marginBottom: '8px',
                        color: '#666',
                        fontSize: '13px',
                      }}
                    >
                      <span style={{ color: activity.color }}>{detail.icon}</span>
                      {detail.text}
                    </div>
                  ))}
                </div>

                <Button
                  type="primary"
                  block
                  onClick={() => setSelectedActivity(activity)}
                  style={{
                    background: `linear-gradient(135deg, ${activity.color} 0%, ${activity.color}cc 100%)`,
                    border: 'none',
                    borderRadius: '10px',
                    height: '45px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = `0 8px 25px ${activity.color}40`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Learn More <ArrowRightOutlined />
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Weekly Schedule */}
      <div 
        data-animate-id="schedule"
        style={{ 
          padding: '80px 30px', 
          background: 'linear-gradient(135deg, #f8fbff 0%, #fff 100%)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ 
            color: '#00aeef', 
            fontWeight: '700', 
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('schedule')),
          }}>
            Plan Your Visit
          </div>
          <Title level={2} style={{ 
            color: '#1e3a5f', 
            marginBottom: '20px', 
            fontSize: 'clamp(26px, 4vw, 40px)',
            ...getSlideFromBottom(0.1, isVisible('schedule')),
          }}>
            Weekly Activity Schedule
          </Title>
          <Paragraph style={{ 
            fontSize: '16px', 
            color: '#666', 
            marginBottom: '40px',
            ...getSlideFromBottom(0.2, isVisible('schedule')),
          }}>
            All activities are included in our therapy programs. Contact us to learn more about scheduling.
          </Paragraph>
          <div style={getSlideFromBottom(0.3, isVisible('schedule'))}>
            <Link to="/appointment">
              <Button
                type="primary"
                size="large"
                style={{
                  background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  height: '55px',
                  padding: '0 50px',
                  fontWeight: '700',
                  fontSize: '17px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(227,30,36,0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Book a Visit <ArrowRightOutlined />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Activity Detail Modal */}
      <Modal
        open={selectedActivity !== null}
        onCancel={() => setSelectedActivity(null)}
        footer={null}
        width={600}
        centered
      >
        {selectedActivity && (
          <div>
            <img 
              src={selectedActivity.image} 
              alt={selectedActivity.title}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '25px',
              }}
            />
            <Tag 
              color={selectedActivity.color}
              style={{ marginBottom: '15px', borderRadius: '50px' }}
            >
              {selectedActivity.ageGroup}
            </Tag>
            <Title level={3} style={{ color: '#1e3a5f', marginBottom: '15px' }}>
              {selectedActivity.title}
            </Title>
            <Paragraph style={{ color: '#666', marginBottom: '25px', fontSize: '15px' }}>
              {selectedActivity.description}
            </Paragraph>
            <div style={{ 
              padding: '20px', 
              background: '#f8fbff', 
              borderRadius: '12px',
              marginBottom: '25px',
            }}>
              <Row gutter={[20, 15]}>
                <Col span={12}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ClockCircleOutlined style={{ color: selectedActivity.color, fontSize: '18px' }} />
                    <div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Time</div>
                      <div style={{ fontWeight: '600', color: '#1e3a5f' }}>{selectedActivity.time}</div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CalendarOutlined style={{ color: selectedActivity.color, fontSize: '18px' }} />
                    <div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Days</div>
                      <div style={{ fontWeight: '600', color: '#1e3a5f' }}>{selectedActivity.day}</div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <EnvironmentOutlined style={{ color: selectedActivity.color, fontSize: '18px' }} />
                    <div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Location</div>
                      <div style={{ fontWeight: '600', color: '#1e3a5f' }}>{selectedActivity.location}</div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <TeamOutlined style={{ color: selectedActivity.color, fontSize: '18px' }} />
                    <div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Available Spots</div>
                      <div style={{ fontWeight: '600', color: '#1e3a5f' }}>{selectedActivity.spots}</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <Link to="/appointment">
              <Button
                type="primary"
                block
                size="large"
                style={{
                  background: `linear-gradient(135deg, ${selectedActivity.color} 0%, ${selectedActivity.color}cc 100%)`,
                  border: 'none',
                  borderRadius: '10px',
                  height: '50px',
                  fontWeight: '600',
                }}
              >
                Register for This Activity
              </Button>
            </Link>
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

export default Activities
