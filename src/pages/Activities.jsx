import React from 'react'
import { Row, Col, Card, Typography, Tag } from 'antd'
import { PlayCircleOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: 'Story Time Sessions',
      icon: <PlayCircleOutlined style={{ fontSize: '48px', color: '#ff6b9d' }} />,
      description: 'Interactive storytelling sessions that enhance listening skills and imagination.',
      schedule: 'Every Monday & Wednesday, 10:00 AM',
      age: '3-6 years',
      color: '#ff6b9d',
    },
    {
      id: 2,
      title: 'Art & Craft Workshops',
      icon: <HeartOutlined style={{ fontSize: '48px', color: '#4ecdc4' }} />,
      description: 'Creative workshops where children can explore different art techniques and materials.',
      schedule: 'Every Tuesday & Thursday, 2:00 PM',
      age: '4-10 years',
      color: '#4ecdc4',
    },
    {
      id: 3,
      title: 'Music & Movement',
      icon: <StarOutlined style={{ fontSize: '48px', color: '#ffe66d' }} />,
      description: 'Fun-filled sessions combining music, dance, and physical activities for holistic development.',
      schedule: 'Every Friday, 11:00 AM',
      age: '2-8 years',
      color: '#ffe66d',
    },
    {
      id: 4,
      title: 'Outdoor Play',
      icon: <PlayCircleOutlined style={{ fontSize: '48px', color: '#95e1d3' }} />,
      description: 'Structured outdoor activities that promote physical fitness and social interaction.',
      schedule: 'Every Saturday, 9:00 AM',
      age: '3-10 years',
      color: '#95e1d3',
    },
    {
      id: 5,
      title: 'Science Discovery',
      icon: <StarOutlined style={{ fontSize: '48px', color: '#ff6b9d' }} />,
      description: 'Hands-on science experiments that make learning fun and engaging.',
      schedule: 'Every Wednesday, 3:00 PM',
      age: '5-10 years',
      color: '#ff6b9d',
    },
    {
      id: 6,
      title: 'Cooking Classes',
      icon: <HeartOutlined style={{ fontSize: '48px', color: '#4ecdc4' }} />,
      description: 'Safe and fun cooking activities that teach life skills and nutrition.',
      schedule: 'Every Saturday, 2:00 PM',
      age: '6-12 years',
      color: '#4ecdc4',
    },
  ]

  return (
    <div style={{ padding: '50px', background: '#fff', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Title level={1} style={{ color: '#2c3e50', marginBottom: '20px' }}>
          Fun Activities 🎨
        </Title>
        <Paragraph style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
          Engaging activities designed to make learning enjoyable while developing essential skills.
          All activities are supervised by trained professionals.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {activities.map((activity) => (
          <Col xs={24} sm={12} md={8} key={activity.id}>
            <Card
              hoverable
              style={{
                borderRadius: '15px',
                height: '100%',
                border: `2px solid ${activity.color}`,
                textAlign: 'center',
              }}
            >
              <div style={{ marginBottom: '20px' }}>{activity.icon}</div>
              <Title level={4} style={{ marginBottom: '15px' }}>
                {activity.title}
              </Title>
              <Tag color={activity.color} style={{ marginBottom: '15px' }}>
                Age: {activity.age}
              </Tag>
              <Paragraph style={{ marginBottom: '20px', color: '#666', minHeight: '60px' }}>
                {activity.description}
              </Paragraph>
              <div
                style={{
                  padding: '15px',
                  background: '#f8f9fa',
                  borderRadius: '10px',
                  marginTop: '20px',
                }}
              >
                <div style={{ fontSize: '14px', color: '#666', fontWeight: 'bold' }}>
                  📅 {activity.schedule}
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <button
                  style={{
                    background: activity.color,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '10px 25px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Register Now
                </button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div
        style={{
          marginTop: '60px',
          padding: '40px',
          background: 'linear-gradient(135deg, #ffe66d 0%, #ff6b9d 100%)',
          borderRadius: '15px',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Title level={2} style={{ color: '#fff', marginBottom: '15px' }}>
          Join Our Activity Calendar!
        </Title>
        <Paragraph style={{ color: '#fff', fontSize: '18px', marginBottom: '25px' }}>
          Stay updated with our monthly activity schedule and special events.
          Register early to secure your spot!
        </Paragraph>
        <button
          style={{
            background: '#fff',
            color: '#ff6b9d',
            border: 'none',
            borderRadius: '25px',
            padding: '15px 40px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          View Full Calendar
        </button>
      </div>
    </div>
  )
}

export default Activities

