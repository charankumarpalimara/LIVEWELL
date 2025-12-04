import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Form, Input, Select, DatePicker, TimePicker, Button, message, Steps } from 'antd'
import { 
  UserOutlined, 
  PhoneOutlined, 
  MailOutlined, 
  CalendarOutlined,
  CheckCircleFilled,
  ClockCircleOutlined,
  HeartFilled,
  SafetyCertificateFilled,
  EnvironmentOutlined
} from '@ant-design/icons'
import dayjs from 'dayjs'

const { Title, Paragraph } = Typography
const { Option } = Select
const { TextArea } = Input

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
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('[data-animate-id]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return visibleElements
}

const Appointment = () => {
  const [form] = Form.useForm()
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
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

  const getScaleIn = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'scale(1)' : 'scale(0.9)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const services = [
    'Autism Integrated Therapy',
    'Speech Therapy',
    'Occupational Therapy',
    'Behavioral Therapy',
    'Special Education',
    'Play Therapy',
    'Music Therapy',
    'ABA Therapy',
    'Early Intervention',
    'Sensory Integration',
    'Pediatric Physiotherapy',
  ]

  const branches = [
    'Hyderabad - Banjara Hills (Headquarters)',
    'Hyderabad - Kukatpally',
    'Hyderabad - Secunderabad',
    'Bangalore - Koramangala',
    'Chennai - Anna Nagar',
    'Vijayawada',
    'Visakhapatnam',
    'Pune - Kothrud',
  ]

  const onFinish = (values) => {
    setLoading(true)
    setTimeout(() => {
      message.success('Appointment booked successfully! We will contact you soon.')
      form.resetFields()
      setCurrentStep(0)
      setLoading(false)
    }, 1500)
  }

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,166,81,0.9) 0%, rgba(0,174,239,0.9) 100%), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '60px 30px',
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
          Book Now
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
          Book an Appointment
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.95)', 
            maxWidth: '700px', 
            margin: '0 auto',
            animation: 'slideDown 0.8s ease-out 0.4s both',
          }}
        >
          Take the first step towards your child's brighter future. Book a consultation today!
        </Paragraph>
      </div>

      <div 
        data-animate-id="form-section"
        style={{ padding: '50px 30px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <Row gutter={[50, 50]} align="top">
          {/* Left Side - Info */}
          <Col xs={24} lg={10}>
            <div style={getSlideFromLeft(0, isVisible('form-section'))}>
              <div style={{ 
                color: '#00a651', 
                fontWeight: '700', 
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '13px',
              }}>
                Why Book With Us
              </div>
              <Title level={2} style={{ color: '#1e3a5f', marginBottom: '25px', fontSize: 'clamp(26px, 4vw, 36px)' }}>
                Start Your Child's <span style={{ color: '#00aeef' }}>Journey</span> Today
              </Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.9', color: '#666', marginBottom: '35px' }}>
                Our expert team is ready to provide personalized care and support for your child's 
                developmental needs. Schedule a consultation to learn more.
              </Paragraph>

              {/* Benefits */}
              {[
                { icon: <SafetyCertificateFilled />, title: 'Expert Therapists', desc: '50+ certified specialists', color: '#e31e24' },
                { icon: <ClockCircleOutlined />, title: 'Flexible Scheduling', desc: 'Mon-Sat: 8:00 AM - 7:30 PM', color: '#f7941d' },
                { icon: <HeartFilled />, title: 'Personalized Care', desc: 'Tailored to your child', color: '#00a651' },
                { icon: <CheckCircleFilled />, title: 'Free Consultation', desc: 'First session free', color: '#00aeef' },
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
                    marginBottom: '22px',
                    padding: '18px 22px',
                    background: '#f8fbff',
                    borderRadius: '14px',
                    border: `2px solid transparent`,
                    transition: 'all 0.4s ease',
                    ...getSlideFromLeft(0.1 + index * 0.1, isVisible('form-section')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)'
                    e.currentTarget.style.borderColor = item.color
                    e.currentTarget.style.boxShadow = `0 10px 30px ${item.color}18`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.borderColor = 'transparent'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: `${item.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    color: item.color,
                    transition: 'transform 0.3s ease',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '16px', marginBottom: '3px' }}>
                      {item.title}
                    </div>
                    <div style={{ color: '#888', fontSize: '14px' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Right Side - Form */}
          <Col xs={24} lg={14}>
            <Card
              style={{
                border: 'none',
                borderRadius: '24px',
                boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                ...getSlideFromRight(0.15, isVisible('form-section')),
              }}
              bodyStyle={{ padding: '40px' }}
            >
              <div style={{ marginBottom: '30px' }}>
                <Steps
                  current={currentStep}
                  size="small"
                  items={[
                    { title: 'Personal Info' },
                    { title: 'Select Service' },
                    { title: 'Schedule' },
                  ]}
                />
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                {/* Step 1: Personal Info */}
                <div style={{ display: currentStep === 0 ? 'block' : 'none' }}>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="parentName"
                        label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Parent/Guardian Name</span>}
                        rules={[{ required: true, message: 'Please enter your name' }]}
                      >
                        <Input 
                          prefix={<UserOutlined style={{ color: '#00aeef' }} />} 
                          placeholder="Enter your name"
                          style={{ 
                            height: '52px', 
                            borderRadius: '12px',
                            border: '2px solid #e8e8e8',
                            transition: 'all 0.3s ease',
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="childName"
                        label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Child's Name</span>}
                        rules={[{ required: true, message: 'Please enter child name' }]}
                      >
                        <Input 
                          prefix={<UserOutlined style={{ color: '#f7941d' }} />} 
                          placeholder="Enter child's name"
                          style={{ 
                            height: '52px', 
                            borderRadius: '12px',
                            border: '2px solid #e8e8e8',
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="phone"
                        label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Phone Number</span>}
                        rules={[{ required: true, message: 'Please enter phone' }]}
                      >
                        <Input 
                          prefix={<PhoneOutlined style={{ color: '#00a651' }} />} 
                          placeholder="Enter phone number"
                          style={{ 
                            height: '52px', 
                            borderRadius: '12px',
                            border: '2px solid #e8e8e8',
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="email"
                        label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Email Address</span>}
                      >
                        <Input 
                          prefix={<MailOutlined style={{ color: '#662d91' }} />} 
                          placeholder="Enter email (optional)"
                          style={{ 
                            height: '52px', 
                            borderRadius: '12px',
                            border: '2px solid #e8e8e8',
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button
                    type="primary"
                    block
                    onClick={() => {
                      form.validateFields(['parentName', 'childName', 'phone']).then(() => {
                        setCurrentStep(1)
                      })
                    }}
                    style={{
                      height: '52px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                      border: 'none',
                      fontWeight: '700',
                      fontSize: '16px',
                      marginTop: '10px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,174,239,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    Next Step →
                  </Button>
                </div>

                {/* Step 2: Service Selection */}
                <div style={{ display: currentStep === 1 ? 'block' : 'none' }}>
                  <Form.Item
                    name="service"
                    label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Select Service</span>}
                    rules={[{ required: true, message: 'Please select a service' }]}
                  >
                    <Select 
                      placeholder="Choose therapy service"
                      style={{ height: '52px' }}
                      dropdownStyle={{ borderRadius: '12px' }}
                    >
                      {services.map((service, index) => (
                        <Option key={index} value={service}>{service}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="childAge"
                    label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Child's Age</span>}
                    rules={[{ required: true, message: 'Please select age' }]}
                  >
                    <Select 
                      placeholder="Select age group"
                      style={{ height: '52px' }}
                    >
                      <Option value="0-2">0-2 years</Option>
                      <Option value="2-4">2-4 years</Option>
                      <Option value="4-6">4-6 years</Option>
                      <Option value="6-10">6-10 years</Option>
                      <Option value="10+">10+ years</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="concerns"
                    label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Describe Your Concerns</span>}
                  >
                    <TextArea 
                      rows={4} 
                      placeholder="Tell us about your child's needs..."
                      style={{ 
                        borderRadius: '12px',
                        border: '2px solid #e8e8e8',
                        padding: '15px',
                      }}
                    />
                  </Form.Item>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Button
                        block
                        onClick={() => setCurrentStep(0)}
                        style={{
                          height: '52px',
                          borderRadius: '12px',
                          fontWeight: '600',
                        }}
                      >
                        ← Back
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button
                        type="primary"
                        block
                        onClick={() => {
                          form.validateFields(['service', 'childAge']).then(() => {
                            setCurrentStep(2)
                          })
                        }}
                        style={{
                          height: '52px',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                          border: 'none',
                          fontWeight: '700',
                        }}
                      >
                        Next Step →
                      </Button>
                    </Col>
                  </Row>
                </div>

                {/* Step 3: Schedule */}
                <div style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                  <Form.Item
                    name="location"
                    label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Select Branch/Franchise</span>}
                    rules={[{ required: true, message: 'Please select a branch location' }]}
                  >
                    <Select 
                      placeholder="Choose branch location"
                      style={{ height: '52px' }}
                      dropdownStyle={{ borderRadius: '12px' }}
                      suffixIcon={<EnvironmentOutlined style={{ color: '#00a651' }} />}
                    >
                      {branches.map((branch, index) => (
                        <Option key={index} value={branch}>{branch}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="date"
                        label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Preferred Date</span>}
                        rules={[{ required: true, message: 'Please select date' }]}
                      >
                        <DatePicker 
                          style={{ width: '100%', height: '52px', borderRadius: '12px' }}
                          placeholder="Select date"
                          disabledDate={(current) => current && current < dayjs().startOf('day')}
                          suffixIcon={<CalendarOutlined style={{ color: '#00aeef' }} />}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="time"
                        label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Preferred Time</span>}
                        rules={[{ required: true, message: 'Please select time' }]}
                      >
                        <TimePicker 
                          style={{ width: '100%', height: '52px', borderRadius: '12px' }}
                          format="h:mm A"
                          use12Hours
                          placeholder="Select time"
                          suffixIcon={<ClockCircleOutlined style={{ color: '#f7941d' }} />}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16} style={{ marginTop: '20px' }}>
                    <Col span={12}>
                      <Button
                        block
                        onClick={() => setCurrentStep(1)}
                        style={{
                          height: '52px',
                          borderRadius: '12px',
                          fontWeight: '600',
                        }}
                      >
                        ← Back
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        block
                        style={{
                          height: '52px',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                          border: 'none',
                          fontWeight: '700',
                          fontSize: '16px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)'
                          e.currentTarget.style.boxShadow = '0 10px 30px rgba(227,30,36,0.3)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        Book Appointment ✓
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Contact Info */}
      <div 
        data-animate-id="contact-info"
        style={{ 
          padding: '50px 30px', 
          background: 'linear-gradient(135deg, #1e3a5f 0%, #00aeef 100%)',
          textAlign: 'center',
        }}
      >
        <Title level={3} style={{ 
          color: '#fff', 
          marginBottom: '30px', 
          fontSize: 'clamp(22px, 3vw, 30px)',
          ...getSlideFromBottom(0, isVisible('contact-info')),
        }}>
          Need Immediate Assistance?
        </Title>
        <Row gutter={[30, 30]} justify="center">
          {[
            { icon: <PhoneOutlined />, label: 'Call Us', value: '+91 89775 10100', color: '#e31e24' },
            { icon: <MailOutlined />, label: 'Email Us', value: 'info@livewellnetwork.com', color: '#f7941d' },
            { icon: <ClockCircleOutlined />, label: 'Working Hours', value: 'Mon-Sat: 8:00 AM - 7:30 PM', color: '#00a651' },
          ].map((item, index) => (
            <Col xs={24} sm={8} md={6} key={index}>
              <div
                style={{
                  padding: '25px 20px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease',
                  ...getScaleIn(0.1 + index * 0.1, isVisible('contact-info')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                }}
              >
                <div style={{ 
                  fontSize: '32px', 
                  marginBottom: '12px', 
                  color: item.color,
                }}>
                  {item.icon}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginBottom: '5px' }}>
                  {item.label}
                </div>
                <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px' }}>
                  {item.value}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ant-select-selector {
          height: 52px !important;
          border-radius: 12px !important;
          border: 2px solid #e8e8e8 !important;
        }
        .ant-select-selection-placeholder,
        .ant-select-selection-item {
          line-height: 48px !important;
        }
        .ant-picker {
          border: 2px solid #e8e8e8 !important;
        }
        .ant-input:hover, .ant-input:focus,
        .ant-select-selector:hover, .ant-picker:hover {
          border-color: #00aeef !important;
        }
        .ant-input:focus, .ant-picker-focused {
          box-shadow: 0 0 0 3px rgba(0,174,239,0.1) !important;
        }
      `}</style>
    </div>
  )
}

export default Appointment
