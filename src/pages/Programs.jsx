import React from 'react'
import { Row, Col, Card, Typography, Tag } from 'antd'
import { BookOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Early Learning Program',
      age: '2-4 years',
      duration: '3 months',
      icon: <BookOutlined style={{ fontSize: '48px', color: '#ff6b9d' }} />,
      description: 'A comprehensive program focusing on early literacy, numeracy, and social skills development.',
      features: ['Reading readiness', 'Basic math concepts', 'Social interaction', 'Creative play'],
      color: '#ff6b9d',
    },
    {
      id: 2,
      title: 'STEM Explorers',
      age: '5-8 years',
      duration: '6 months',
      icon: <TrophyOutlined style={{ fontSize: '48px', color: '#4ecdc4' }} />,
      description: 'Hands-on science, technology, engineering, and math activities to spark curiosity and innovation.',
      features: ['Science experiments', 'Coding basics', 'Engineering projects', 'Math games'],
      color: '#4ecdc4',
    },
    {
      id: 3,
      title: 'Creative Arts',
      age: '3-10 years',
      duration: 'Ongoing',
      icon: <TeamOutlined style={{ fontSize: '48px', color: '#ffe66d' }} />,
      description: 'Express creativity through various art forms including painting, music, dance, and drama.',
      features: ['Visual arts', 'Music & rhythm', 'Dance & movement', 'Drama & storytelling'],
      color: '#ffe66d',
    },
  ]

  return (
    <div style={{ padding: '50px', background: '#fff', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Title level={1} style={{ color: '#2c3e50', marginBottom: '20px' }}>
          Our Learning Programs 📚
        </Title>
        <Paragraph style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
          Structured programs designed to support your child's development at every stage.
          Each program is carefully crafted by child development experts.
        </Paragraph>
      </div>

      <Row gutter={[32, 32]}>
        {programs.map((program) => (
          <Col xs={24} md={8} key={program.id}>
            <Card
              hoverable
              style={{
                borderRadius: '15px',
                height: '100%',
                border: `2px solid ${program.color}`,
                textAlign: 'center',
              }}
            >
              <div style={{ marginBottom: '20px' }}>{program.icon}</div>
              <Title level={3} style={{ marginBottom: '15px' }}>
                {program.title}
              </Title>
              <div style={{ marginBottom: '15px' }}>
                <Tag color={program.color} style={{ marginRight: '10px' }}>
                  Age: {program.age}
                </Tag>
                <Tag color={program.color}>Duration: {program.duration}</Tag>
              </div>
              <Paragraph style={{ marginBottom: '20px', color: '#666' }}>
                {program.description}
              </Paragraph>
              <div style={{ textAlign: 'left', marginTop: '20px' }}>
                <Title level={5}>Key Features:</Title>
                <ul style={{ paddingLeft: '20px', color: '#666' }}>
                  {program.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: '30px' }}>
                <button
                  style={{
                    background: program.color,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px 30px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Learn More
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
          background: 'linear-gradient(135deg, #ff6b9d 0%, #4ecdc4 100%)',
          borderRadius: '15px',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Title level={2} style={{ color: '#fff', marginBottom: '15px' }}>
          Ready to Get Started?
        </Title>
        <Paragraph style={{ color: '#fff', fontSize: '18px', marginBottom: '25px' }}>
          Contact us to learn more about our programs and schedule a free trial session.
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
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Programs

