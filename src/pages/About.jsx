import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Timeline } from 'antd'
import { 
  TrophyFilled, 
  TeamOutlined, 
  HeartFilled, 
  AimOutlined,
  CheckCircleFilled,
  SafetyCertificateFilled,
  StarFilled,
  SmileOutlined
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Therapist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
      specialty: 'Autism Specialist',
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Speech Therapist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop',
      specialty: 'Language Development',
    },
    {
      name: 'Dr. Sunita Patel',
      role: 'Occupational Therapist',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop',
      specialty: 'Motor Skills',
    },
    {
      name: 'Dr. Amit Verma',
      role: 'Behavioral Specialist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop',
      specialty: 'ABA Therapy',
    },
  ]

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(102,45,145,0.9) 0%, rgba(0,174,239,0.9) 100%), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=600&fit=crop)',
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
          About Us
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
          Live Well Rehabilitation Network
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '20px', 
            color: 'rgba(255,255,255,0.95)', 
            maxWidth: '900px', 
            margin: '0 auto',
          }}
        >
          India's No. 1 Integrated Autism Network dedicated to mainstreaming children with 
          inclusion, equality, and equity through comprehensive therapeutic services.
        </Paragraph>
      </div>

      {/* About Content */}
      <div style={{ padding: '100px 30px', maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[50, 50]} align="middle">
          <Col xs={24} md={12}>
            <div className={isVisible ? 'animate-fade-in-left' : ''} style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop"
                alt="About Live Well"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                }}
              />
              <div
                className="animate-float glass-effect"
                style={{
                  position: 'absolute',
                  bottom: '-25px',
                  right: '-25px',
                  padding: '25px 35px',
                  borderRadius: '15px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#e31e24' }}>10+</div>
                <div style={{ fontSize: '14px', color: '#333', fontWeight: '600' }}>Years of Excellence</div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className={isVisible ? 'animate-fade-in-right' : ''}>
              <div style={{ 
                color: '#00aeef', 
                fontWeight: '700', 
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '14px',
              }}>
                Our Story
              </div>
              <Title level={2} style={{ color: '#1e3a5f', marginBottom: '25px', fontSize: 'clamp(28px, 4vw, 38px)' }}>
                Transforming Lives Through <span style={{ color: '#00aeef' }}>Compassionate Care</span>
              </Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.9', color: '#555', marginBottom: '25px' }}>
                Live Well Rehabilitation Network was founded with a vision to provide world-class 
                rehabilitation services to children with special needs. Our integrated approach 
                combines multiple therapeutic disciplines to deliver comprehensive care that 
                addresses each child's unique needs.
              </Paragraph>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.9', color: '#555' }}>
                With over 10 years of experience and a team of 50+ expert therapists, we have 
                helped more than 1000 families achieve their developmental goals. Our commitment 
                to excellence and innovation has made us India's leading autism network.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>

      {/* Mission & Vision */}
      <div style={{ padding: '100px 30px', background: '#f8fbff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[40, 40]}>
            <Col xs={24} md={12}>
              <Card
                className={`card-animated hover-lift ${isVisible ? 'animate-fade-in-left' : ''}`}
                style={{
                  height: '100%',
                  border: '2px solid #00aeef',
                  textAlign: 'center',
                  overflow: 'hidden',
                }}
                cover={
                  <div style={{ 
                    height: '150px', 
                    background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <AimOutlined style={{ fontSize: '60px', color: '#fff' }} />
                  </div>
                }
              >
                <Title level={3} style={{ color: '#1e3a5f' }}>Our Mission</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                  To provide world-class rehabilitation services and therapeutic interventions that empower 
                  children with autism, ADHD, and other neurological disorders to achieve their maximum potential 
                  and lead fulfilling lives with dignity and independence.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                className={`card-animated hover-lift ${isVisible ? 'animate-fade-in-right' : ''}`}
                style={{
                  height: '100%',
                  border: '2px solid #e31e24',
                  textAlign: 'center',
                  overflow: 'hidden',
                }}
                cover={
                  <div style={{ 
                    height: '150px', 
                    background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <HeartFilled style={{ fontSize: '60px', color: '#fff' }} />
                  </div>
                }
              >
                <Title level={3} style={{ color: '#1e3a5f' }}>Our Vision</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                  To be India's leading integrated autism network that transforms lives through innovative 
                  therapies, evidence-based practices, and a commitment to inclusion, equality, and equity 
                  for all children with special needs.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Our Team */}
      <div style={{ padding: '100px 30px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ 
              color: '#f7941d', 
              fontWeight: '700', 
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '14px',
            }}>
              Our Team
            </div>
            <Title level={2} style={{ color: '#1e3a5f', marginBottom: '15px', fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Meet Our Expert Therapists
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Our team of certified professionals is dedicated to providing the best care for your child
            </Paragraph>
          </div>
          <Row gutter={[24, 24]}>
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card
                  hoverable
                  className="card-animated hover-lift"
                  style={{ textAlign: 'center', overflow: 'hidden' }}
                  cover={
                    <div className="image-zoom" style={{ overflow: 'hidden' }}>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  }
                >
                  <Title level={4} style={{ color: '#1e3a5f', marginBottom: '5px' }}>{member.name}</Title>
                  <div style={{ color: '#00aeef', fontWeight: '600', marginBottom: '5px' }}>{member.role}</div>
                  <div style={{ color: '#888', fontSize: '13px' }}>{member.specialty}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={{ 
        padding: '100px 30px', 
        backgroundImage: 'linear-gradient(135deg, rgba(30,58,95,0.95) 0%, rgba(0,174,239,0.95) 100%), url(https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontWeight: '700', 
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '14px',
            }}>
              Why Choose Us
            </div>
            <Title level={2} style={{ color: '#fff', marginBottom: '15px', fontSize: 'clamp(28px, 4vw, 40px)' }}>
              What Makes Us Different
            </Title>
          </div>
          <Row gutter={[24, 24]}>
            {[
              { icon: <TrophyFilled />, title: "India's No. 1", desc: 'Leading integrated autism network in India', color: '#e31e24' },
              { icon: <TeamOutlined />, title: '50+ Experts', desc: 'Qualified therapists and special educators', color: '#f7941d' },
              { icon: <StarFilled />, title: '98%+ Success', desc: 'Proven results across all therapy services', color: '#00a651' },
              { icon: <SmileOutlined />, title: '1000+ Families', desc: 'Happy families who trust our services', color: '#662d91' },
            ].map((item, index) => (
              <Col xs={12} sm={6} key={index}>
                <Card
                  className="card-animated hover-lift glass-effect"
                  style={{ 
                    textAlign: 'center', 
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                  }}
                >
                  <div style={{ 
                    fontSize: '45px', 
                    marginBottom: '15px', 
                    color: item.color,
                  }}>
                    {item.icon}
                  </div>
                  <Title level={4} style={{ color: '#fff', marginBottom: '10px' }}>{item.title}</Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 0 }}>{item.desc}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Our Approach */}
      <div style={{ padding: '100px 30px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ 
              color: '#00a651', 
              fontWeight: '700', 
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '14px',
            }}>
              Our Process
            </div>
            <Title level={2} style={{ color: '#1e3a5f', marginBottom: '15px', fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Our Integrated Approach
            </Title>
          </div>
          <Timeline
            mode="alternate"
            items={[
              {
                color: '#e31e24',
                children: (
                  <Card className="hover-lift" style={{ border: '2px solid #e31e24' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                      <CheckCircleFilled style={{ fontSize: '24px', color: '#e31e24' }} />
                      <Title level={4} style={{ color: '#e31e24', margin: 0 }}>Comprehensive Assessment</Title>
                    </div>
                    <Paragraph style={{ color: '#666', margin: 0 }}>
                      Detailed evaluation of each child's unique needs, strengths, and challenges.
                    </Paragraph>
                  </Card>
                ),
              },
              {
                color: '#f7941d',
                children: (
                  <Card className="hover-lift" style={{ border: '2px solid #f7941d' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                      <CheckCircleFilled style={{ fontSize: '24px', color: '#f7941d' }} />
                      <Title level={4} style={{ color: '#f7941d', margin: 0 }}>Personalized Treatment Plan</Title>
                    </div>
                    <Paragraph style={{ color: '#666', margin: 0 }}>
                      Customized therapy programs designed specifically for each child's goals.
                    </Paragraph>
                  </Card>
                ),
              },
              {
                color: '#00a651',
                children: (
                  <Card className="hover-lift" style={{ border: '2px solid #00a651' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                      <CheckCircleFilled style={{ fontSize: '24px', color: '#00a651' }} />
                      <Title level={4} style={{ color: '#00a651', margin: 0 }}>Integrated Therapy</Title>
                    </div>
                    <Paragraph style={{ color: '#666', margin: 0 }}>
                      Multiple therapeutic approaches working together for maximum effectiveness.
                    </Paragraph>
                  </Card>
                ),
              },
              {
                color: '#00aeef',
                children: (
                  <Card className="hover-lift" style={{ border: '2px solid #00aeef' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                      <CheckCircleFilled style={{ fontSize: '24px', color: '#00aeef' }} />
                      <Title level={4} style={{ color: '#00aeef', margin: 0 }}>Progress Monitoring</Title>
                    </div>
                    <Paragraph style={{ color: '#666', margin: 0 }}>
                      Continuous assessment and adjustment of treatment plans based on progress.
                    </Paragraph>
                  </Card>
                ),
              },
              {
                color: '#662d91',
                children: (
                  <Card className="hover-lift" style={{ border: '2px solid #662d91' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                      <CheckCircleFilled style={{ fontSize: '24px', color: '#662d91' }} />
                      <Title level={4} style={{ color: '#662d91', margin: 0 }}>Family-Centered Care</Title>
                    </div>
                    <Paragraph style={{ color: '#666', margin: 0 }}>
                      Involving families in the therapy process and providing ongoing support.
                    </Paragraph>
                  </Card>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default About
