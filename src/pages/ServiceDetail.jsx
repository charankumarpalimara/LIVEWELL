import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Row, Col, Card, Typography, Button, Tag, Divider, Carousel, Spin } from 'antd'
import {
  HeartFilled,
  AudioOutlined,
  ToolOutlined,
  BulbOutlined,
  ReadOutlined,
  PlayCircleOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  PhoneOutlined,
  CheckOutlined,
  CustomerServiceOutlined,
  ExperimentOutlined,
  RocketOutlined,
  MedicineBoxOutlined,
} from '@ant-design/icons'
import { getTherapyByPath, getAllTherapies, getUrlMappings } from '../services/therapyService'
import serviceData from './therapy' // Demo data (fallback)

const { Title, Paragraph } = Typography

// Service data imported from individual therapy files

// URL path to service key mapping
const urlToServiceKey = {
  '/autism-therapy': 'autism-therapy',
  '/speech-therapy': 'speech-therapy',
  '/occupational-therapy-for-kids': 'occupational-therapy',
  '/behavior-therapy-for-kids': 'behavior-therapy',
  '/special-education-for-kids': 'special-education',
  '/play-therapy': 'play-therapy',
  '/music-therapy': 'music-therapy',
  '/applied-behavior-analysis-aba': 'aba-therapy',
  '/early-intervention': 'early-intervention',
  '/sensory-integration-therapy': 'sensory-integration',
  '/physiotherapy': 'physiotherapy',
}

// Service key to URL path mapping
const serviceKeyToUrl = {
  'autism-therapy': '/autism-therapy',
  'speech-therapy': '/speech-therapy',
  'occupational-therapy': '/occupational-therapy-for-kids',
  'behavior-therapy': '/behavior-therapy-for-kids',
  'special-education': '/special-education-for-kids',
  'play-therapy': '/play-therapy',
  'music-therapy': '/music-therapy',
  'aba-therapy': '/applied-behavior-analysis-aba',
  'early-intervention': '/early-intervention',
  'sensory-integration': '/sensory-integration-therapy',
  'physiotherapy': '/physiotherapy',
}

const ServiceDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [service, setService] = useState(null)
  const [allServices, setAllServices] = useState(null)
  const [loading, setLoading] = useState(true)
  const [slidesToShow, setSlidesToShow] = useState(4)
  const { urlToServiceKey, serviceKeyToUrl } = getUrlMappings()

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 576) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2)
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(4)
      }
    }

    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [])

  useEffect(() => {
    const fetchServiceData = async () => {
      setLoading(true)
      try {
        // Fetch current service
        const therapyData = await getTherapyByPath(location.pathname)
        
        if (therapyData) {
          setService(therapyData)
          // Scroll to top when service changes
          window.scrollTo({ top: 0, behavior: 'smooth' })
          
          // Fetch all services for navigation
          const allTherapies = await getAllTherapies()
          setAllServices(allTherapies)
        } else {
          navigate('/services')
        }
      } catch (error) {
        console.error('Error fetching service data:', error)
        // Fallback to demo data
        const serviceKey = urlToServiceKey[location.pathname]
        if (serviceKey && serviceData[serviceKey]) {
          setService(serviceData[serviceKey])
          setAllServices(serviceData)
        } else {
          navigate('/services')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchServiceData()
  }, [location.pathname, navigate])

  // Scroll to top handler for navigation links
  const handleServiceNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '80vh',
        background: '#fff'
      }}>
        <Spin size="large" />
      </div>
    )
  }

  if (!service) {
    return null
  }

  // Use allServices from state or fallback to serviceData
  const servicesList = allServices ? Object.keys(allServices) : Object.keys(serviceData)
  const currentServiceKey = urlToServiceKey[location.pathname]
  const currentIndex = servicesList.indexOf(currentServiceKey)
  const nextServiceKey = currentIndex < servicesList.length - 1 ? servicesList[currentIndex + 1] : null
  const prevServiceKey = currentIndex > 0 ? servicesList[currentIndex - 1] : null
  const nextServiceUrl = nextServiceKey ? serviceKeyToUrl[nextServiceKey] : null
  const prevServiceUrl = prevServiceKey ? serviceKeyToUrl[prevServiceKey] : null
  
  // Get service data source (backend or demo)
  const servicesData = allServices || serviceData

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(135deg, ${service.color}dd 0%, ${service.color}aa 100%), url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '120px 30px 80px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Link to="/services">
          <Button
            icon={<ArrowLeftOutlined />}
            style={{
              position: 'absolute',
              top: '30px',
              left: '30px',
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              borderRadius: '25px',
              height: '45px',
              padding: '0 25px',
              fontWeight: '600',
            }}
          >
            Back to Services
          </Button>
        </Link>
        <div style={{
          color: 'rgba(255,255,255,0.95)',
          fontWeight: '700',
          marginBottom: '15px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontSize: '14px',
        }}>
          Our Services
        </div>
        <div style={{
          fontSize: '64px',
          color: '#fff',
          marginBottom: '20px',
        }}>
          {React.createElement(service.icon)}
        </div>
        <Title
          level={1}
          style={{
            color: '#fff',
            marginBottom: '20px',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '800',
          }}
        >
          {service.name}
        </Title>
        <Paragraph
          style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '800px',
            margin: '0 auto 30px',
          }}
        >
          {service.description}
        </Paragraph>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Tag
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '8px 20px',
              fontSize: '16px',
              borderRadius: '25px',
            }}
          >
            Success Rate: {service.successRate}%
          </Tag>
          <Tag
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '8px 20px',
              fontSize: '16px',
              borderRadius: '25px',
            }}
          >
            {service.ageGroup}
          </Tag>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '100px 30px', maxWidth: '1200px', margin: '0 auto', background: '#fafbfc' }}>
        {/* Overview */}
        <Card
          style={{
            marginBottom: '40px',
            borderRadius: '20px',
            border: 'none',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            background: '#fff',
          }}
          bodyStyle={{ padding: '35px' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '35px',
            paddingBottom: '20px',
            borderBottom: `3px solid ${service.color}20`,
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              color: '#fff',
              boxShadow: `0 8px 20px ${service.color}40`,
            }}>
              {React.createElement(service.icon)}
            </div>
            <Title level={2} style={{ 
              color: service.color, 
              margin: 0,
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: '800',
            }}>
              Overview
            </Title>
          </div>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} lg={12}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                position: 'relative',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  style={{
                    width: '100%',
                    height: '350px',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(to bottom, transparent 0%, ${service.color}15 100%)`,
                }} />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Paragraph style={{ 
                fontSize: '15px', 
                lineHeight: '1.8', 
                color: '#444', 
                whiteSpace: 'pre-line', 
                margin: 0,
                fontWeight: '400',
              }}>
                {service.overview}
              </Paragraph>
            </Col>
          </Row>
        </Card>

        {/* Benefits */}
        <Card
          style={{
            marginBottom: '40px',
            borderRadius: '20px',
            border: 'none',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            background: `linear-gradient(135deg, ${service.color}08 0%, ${service.color}03 50%, #fff 100%)`,
            overflow: 'hidden',
          }}
          bodyStyle={{ padding: '35px' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '40px',
            paddingBottom: '20px',
            borderBottom: `3px solid ${service.color}20`,
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              color: '#fff',
              boxShadow: `0 8px 20px ${service.color}40`,
            }}>
              {React.createElement(service.icon)}
            </div>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              margin: 0,
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: '800',
            }}>
              Benefits
            </Title>
          </div>
          <Row gutter={[24, 20]}>
            {service.benefits.map((benefit, index) => (
              <Col xs={24} sm={12} key={index}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 20px',
                  background: '#fff',
                  borderRadius: '12px',
                  border: `2px solid ${service.color}10`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${service.color}05`
                  e.currentTarget.style.borderColor = service.color
                  e.currentTarget.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff'
                  e.currentTarget.style.borderColor = `${service.color}10`
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 4px 12px ${service.color}30`,
                  }}>
                    <CheckOutlined style={{ color: '#fff', fontSize: '16px' }} />
                  </div>
                  <span style={{ 
                    fontSize: '14px', 
                    color: '#555',
                    fontWeight: '400',
                    lineHeight: '1.7',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  }}>
                    {benefit}
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Approach & Details */}
        <Row gutter={[30, 30]}>
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                borderRadius: '20px',
                border: 'none',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                overflow: 'hidden',
                background: '#fff',
                transition: 'all 0.3s ease',
              }}
              bodyStyle={{ padding: 0 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{
                position: 'relative',
                height: '250px',
                overflow: 'hidden',
              }}>
                <img
                  src={service.image}
                  alt={`${service.name} approach`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(to bottom, transparent 0%, ${service.color}80 100%)`,
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '30px',
                  right: '30px',
                }}>
                  <Title level={3} style={{ 
                    color: '#fff', 
                    margin: 0,
                    fontSize: '28px',
                    fontWeight: '800',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  }}>
                    Our Approach
                  </Title>
                </div>
              </div>
              <div style={{ padding: '25px' }}>
                <Paragraph style={{ 
                  fontSize: '15px', 
                  lineHeight: '1.8', 
                  color: '#444',
                  margin: 0,
                  fontWeight: '400',
                }}>
                  {service.approach}
                </Paragraph>
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                borderRadius: '20px',
                border: 'none',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${service.color}08 0%, #fff 100%)`,
                transition: 'all 0.3s ease',
              }}
              bodyStyle={{ padding: 0 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{
                position: 'relative',
                height: '250px',
                overflow: 'hidden',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=250&fit=crop"
                  alt="Program details"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(to bottom, transparent 0%, ${service.color}80 100%)`,
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '30px',
                  right: '30px',
                }}>
                  <Title level={3} style={{ 
                    color: '#fff', 
                    margin: 0,
                    fontSize: '28px',
                    fontWeight: '800',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  }}>
                    Program Details
                  </Title>
                </div>
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    padding: '15px',
                    background: '#fff',
                    borderRadius: '10px',
                    marginBottom: '12px',
                    border: `2px solid ${service.color}15`,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = service.color
                    e.currentTarget.style.background = `${service.color}05`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${service.color}15`
                    e.currentTarget.style.background = '#fff'
                  }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 12px ${service.color}30`,
                    }}>
                      <CalendarOutlined style={{ color: '#fff', fontSize: '18px' }} />
                    </div>
                    <div>
                      <div style={{ 
                        fontWeight: '700', 
                        color: '#1e3a5f', 
                        marginBottom: '4px',
                        fontSize: '14px',
                      }}>
                        Duration
                      </div>
                      <div style={{ 
                        color: '#666',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}>
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    padding: '15px',
                    background: '#fff',
                    borderRadius: '10px',
                    border: `2px solid ${service.color}15`,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = service.color
                    e.currentTarget.style.background = `${service.color}05`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${service.color}15`
                    e.currentTarget.style.background = '#fff'
                  }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 12px ${service.color}30`,
                    }}>
                      <CheckCircleOutlined style={{ color: '#fff', fontSize: '18px' }} />
                    </div>
                    <div>
                      <div style={{ 
                        fontWeight: '700', 
                        color: '#1e3a5f', 
                        marginBottom: '4px',
                        fontSize: '14px',
                      }}>
                        Age Group
                      </div>
                      <div style={{ 
                        color: '#666',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}>
                        {service.ageGroup}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* CTA Section */}
        <Card
          style={{
            marginTop: '60px',
            borderRadius: '24px',
            background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 50%, ${service.color}bb 100%)`,
            border: 'none',
            textAlign: 'center',
            padding: '60px 40px',
            boxShadow: `0 15px 50px ${service.color}40`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            filter: 'blur(60px)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-30%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            filter: 'blur(50px)',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Title level={2} style={{ 
              color: '#fff', 
              marginBottom: '20px',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '800',
            }}>
              Ready to Get Started?
            </Title>
            <Paragraph style={{ 
              fontSize: '19px', 
              color: 'rgba(255,255,255,0.95)', 
              marginBottom: '40px', 
              maxWidth: '650px', 
              margin: '0 auto 40px',
              lineHeight: '1.8',
              fontWeight: '400',
            }}>
              Book an appointment today and take the first step towards your child's development journey with our {service.name} program.
            </Paragraph>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/appointment">
                <Button
                  className="service-detail-cta-button"
                  size="large"
                  icon={<CalendarOutlined />}
                  style={{
                    background: '#fff',
                    color: service.color,
                    border: 'none',
                    borderRadius: '50px',
                    height: '60px',
                    padding: '0 50px',
                    fontWeight: '700',
                    fontSize: '17px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)'
                  }}
                >
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="large"
                  icon={<PhoneOutlined />}
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    color: '#fff',
                    border: '2px solid rgba(255,255,255,0.4)',
                    borderRadius: '50px',
                    height: '60px',
                    padding: '0 50px',
                    fontWeight: '700',
                    fontSize: '17px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Other Services Section */}
        <div style={{ marginTop: '80px', paddingTop: '60px', borderTop: '2px solid #e8e8e8' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{
              display: 'inline-block',
              background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '50px',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '25px',
              boxShadow: `0 6px 20px ${service.color}40`,
            }}>
              More Services
            </div>
            <Title level={2} style={{ 
              textAlign: 'center', 
              marginBottom: '15px', 
              color: '#1e3a5f',
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: '800',
            }}>
              Explore Our Other Services
            </Title>
            <Paragraph style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Discover more comprehensive therapy services we offer
            </Paragraph>
          </div>
          <div style={{ position: 'relative', padding: '20px 60px 40px' }}>
            <Carousel
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={slidesToShow}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4000}
            >
              {Object.keys(servicesData)
                .filter(key => {
                  const currentServiceKey = urlToServiceKey[location.pathname]
                  return key !== currentServiceKey
                })
                .map((key) => {
                  const otherService = servicesData[key]
                  const otherServiceUrl = serviceKeyToUrl[key]
                  return (
                    <div key={key} style={{ padding: '0 30px' }}>
                      <Link to={otherServiceUrl} onClick={handleServiceNavigation} style={{ textDecoration: 'none' }}>
                        <Card
                          hoverable
                          style={{
                            height: '100%',
                            borderRadius: '20px',
                            border: `2px solid ${otherService.color}20`,
                            transition: 'all 0.3s ease',
                            overflow: 'hidden',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                          }}
                          bodyStyle={{ padding: '20px' }}
                          cover={
                            <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                              <img
                                src={otherService.image}
                                alt={otherService.name}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  transition: 'transform 0.4s ease',
                                }}
                              />
                              <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: `linear-gradient(to bottom, transparent 0%, ${otherService.color}40 100%)`,
                              }} />
                              <div style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: otherService.color,
                                color: '#fff',
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px',
                                boxShadow: `0 4px 15px ${otherService.color}50`,
                              }}>
                                {React.createElement(otherService.icon)}
                              </div>
                            </div>
                          }
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)'
                            e.currentTarget.style.boxShadow = `0 12px 40px ${otherService.color}40`
                            e.currentTarget.style.borderColor = otherService.color
                            const img = e.currentTarget.querySelector('img')
                            if (img) img.style.transform = 'scale(1.15)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)'
                            e.currentTarget.style.borderColor = `${otherService.color}20`
                            const img = e.currentTarget.querySelector('img')
                            if (img) img.style.transform = 'scale(1)'
                          }}
                        >
                          <Title level={4} style={{ 
                            marginBottom: '12px', 
                            color: '#1e3a5f', 
                            fontSize: '18px',
                            fontWeight: '700',
                            lineHeight: '1.4',
                          }}>
                            {otherService.name}
                          </Title>
                          <Paragraph style={{ 
                            color: '#666', 
                            fontSize: '14px', 
                            marginBottom: 0,
                            lineHeight: '1.6',
                            minHeight: '42px',
                          }}>
                            {otherService.description}
                          </Paragraph>
                        </Card>
                      </Link>
                    </div>
                  )
                })}
            </Carousel>
            <style>{`
              .ant-carousel .slick-list {
                margin: 0 -15px;
              }
              .ant-carousel .slick-slide > div {
                padding: 0 15px;
              }
              .ant-carousel .slick-dots {
                bottom: -50px;
              }
              .ant-carousel .slick-dots li button {
                background: ${service.color};
                opacity: 0.3;
                width: 10px;
                height: 10px;
                border-radius: 50%;
              }
              .ant-carousel .slick-dots li.slick-active button {
                opacity: 1;
                background: ${service.color};
                width: 12px;
                height: 12px;
              }
              .ant-carousel .slick-prev,
              .ant-carousel .slick-next {
                z-index: 1;
                width: 45px;
                height: 45px;
                background: ${service.color};
                border-radius: 50%;
                color: #fff;
                boxShadow: 0 4px 15px ${service.color}40;
              }
              .ant-carousel .slick-prev:hover,
              .ant-carousel .slick-next:hover {
                background: ${service.color}dd;
                boxShadow: 0 6px 20px ${service.color}60;
              }
              .ant-carousel .slick-prev {
                left: -25px;
              }
              .ant-carousel .slick-next {
                right: -25px;
              }
              .ant-carousel .slick-prev:before,
              .ant-carousel .slick-next:before {
                font-size: 18px;
                color: #fff;
                font-weight: bold;
              }
              @media (max-width: 992px) {
                .ant-carousel .slick-prev {
                  left: -15px;
                }
                .ant-carousel .slick-next {
                  right: -15px;
                }
              }
              @media (max-width: 768px) {
                .ant-carousel .slick-prev,
                .ant-carousel .slick-next {
                  width: 35px;
                  height: 35px;
                }
                .ant-carousel .slick-prev {
                  left: -10px;
                }
                .ant-carousel .slick-next {
                  right: -10px;
                }
              }
            `}</style>
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/services">
              <Button
                type="primary"
                size="large"
                style={{
                  background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  height: '50px',
                  padding: '0 40px',
                  fontWeight: '600',
                  fontSize: '16px',
                  boxShadow: '0 6px 20px rgba(0, 174, 239, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 174, 239, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 174, 239, 0.3)'
                }}
              >
                View All Services <ArrowRightOutlined />
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation to Other Services */}
        {(prevServiceUrl || nextServiceUrl) && (
          <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            {prevServiceUrl && (
              <Link 
                to={prevServiceUrl} 
                onClick={handleServiceNavigation}
                style={{ flex: 1, minWidth: '200px', textDecoration: 'none' }}
              >
                <Card
                  hoverable
                  style={{
                    borderRadius: '16px',
                    border: `2px solid ${servicesData[prevServiceKey]?.color}30`,
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <ArrowLeftOutlined style={{ color: servicesData[prevServiceKey]?.color, fontSize: '20px' }} />
                    <div>
                      <div style={{ fontSize: '12px', color: '#999', marginBottom: '5px' }}>Previous Service</div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: '#333' }}>
                        {servicesData[prevServiceKey]?.name}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            )}
            {nextServiceUrl && (
              <Link 
                to={nextServiceUrl} 
                onClick={handleServiceNavigation}
                style={{ flex: 1, minWidth: '200px', textDecoration: 'none', marginLeft: 'auto' }}
              >
                <Card
                  hoverable
                  style={{
                    borderRadius: '16px',
                    border: `2px solid ${servicesData[nextServiceKey]?.color}30`,
                    textAlign: 'right',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '15px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: '#999', marginBottom: '5px' }}>Next Service</div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: '#333' }}>
                        {servicesData[nextServiceKey]?.name}
                      </div>
                    </div>
                    <ArrowRightOutlined style={{ color: servicesData[nextServiceKey]?.color, fontSize: '20px' }} />
                  </div>
                </Card>
              </Link>
            )}
          </div>
        )}
      </div>
      <style>{`
        .service-detail-cta-button {
          background: #fff !important;
          background-image: none !important;
          border: none !important;
        }
        .service-detail-cta-button:hover,
        .service-detail-cta-button:focus {
          background: #fff !important;
          background-image: none !important;
          border: none !important;
        }
      `}</style>
    </div>
  )
}

export default ServiceDetail

