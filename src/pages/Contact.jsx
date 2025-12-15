import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Form, Input, Button, message, Tag } from 'antd'
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined, 
  ClockCircleOutlined,
  WhatsAppOutlined,
  SendOutlined,
  GlobalOutlined
} from '@ant-design/icons'

const { Title, Paragraph } = Typography
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

const Contact = () => {
  const [form] = Form.useForm()
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

  const onFinish = (values) => {
    setLoading(true)
    setTimeout(() => {
      message.success('Message sent successfully! We will get back to you soon.')
      form.resetFields()
      setLoading(false)
    }, 1500)
  }

  const branches = [
    {
      id: 7,
      name: 'Live Well - KPHB Colony',
      address: 'HiG 208 Dharma Reddy Colony Phase 1, above HDB Financials, beside Post Office, Kukatpally Housing Board Colony, Telangana 500085',
      phone: '+91 8977510100',
      email: 'kphb@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      city: 'Hyderabad',
      state: 'Telangana',
      isHeadquarters: false,
      isComingSoon: false,
      color: '#00aeef',
    },
    {
      id: 8,
      name: 'Live Well - Pragati Nagar',
      address: 'Plot 1035, Flat no 201, Pragathi Nagar, Medchal Malkajgiri, Nizampet, Dt, Telangana 500090.',
      phone: '+91 8977510100',
      email: 'pragatinagar@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      city: 'Hyderabad',
      state: 'Telangana',
      isHeadquarters: false,
      isComingSoon: false,
      color: '#f7941d',
    },
    {
      id: 9,
      name: 'Live Well - Jammu & Kashmir (Bemina)',
      address: 'H-No. 33, near Post Office, Alamdar Housing Colony, Colony, Bemina, Srinagar, Jammu and Kashmir 190018, India',
      phone: '+91 8977510100',
      email: 'jammu@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      city: 'Srinagar',
      state: 'Jammu & Kashmir',
      isHeadquarters: false,
      isComingSoon: false,
      color: '#00a651',
    },
    {
      id: 10,
      name: 'Live Well - Chanda Nagar',
      address: 'Plot no 5 first floor, Survey number 361, Dno 4, 127/1,  Chandanagar Road, Busstop, Chanda Nagar, Hyderabad, Telangana 500050',
      phone: '+91 8977510100',
      email: 'chandanagar@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      city: 'Hyderabad',
      state: 'Telangana',
      isHeadquarters: false,
      isComingSoon: false,
      color: '#662d91',
    },
    {
      id: 11,
      name: 'Live Well - Jammu & Kashmir (Bemina Main Road)',
      address: 'H-No. 33, near Post Office, Alamdar Housing Colony, Colony, Bemina, Srinagar, Jammu and Kashmir 190018',
      phone: '+91 8977510100',
      email: 'jammu2@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      city: 'Srinagar',
      state: 'Jammu & Kashmir',
      isHeadquarters: false,
      isComingSoon: false,
      color: '#e31e24',
    },
    {
      id: 12,
      name: 'Live Well - Suchitra',
      address: 'H.No. 06-28, Plot no 1, 2nd floor, Suchitra Rd, Suchitra, Vennala Gadda, Jeedimetla, Hyderabad, Telangana 500055',
      phone: '+91 8977510100',
      email: 'suchitra@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      city: 'Hyderabad',
      state: 'Telangana',
      isHeadquarters: false,
      isComingSoon: false,
      color: '#92278f',
    },
    {
      id: 13,
      name: 'Live Well - Visakhapatnam',
      address: 'Coming Soon',
      phone: '+91 8977510100',
      email: 'vizag@livewellrehab.com',
      timing: 'Coming Soon',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      isHeadquarters: false,
      isComingSoon: true,
      color: '#ec008c',
    },
    {
      id: 14,
      name: 'Live Well - Bengaluru',
      address: 'Coming Soon',
      phone: '+91 8977510100',
      email: 'bengaluru@livewellrehab.com',
      timing: 'Coming Soon',
      city: 'Bengaluru',
      state: 'Karnataka',
      isHeadquarters: false,
      isComingSoon: true,
      color: '#00aeef',
    },
  ]


  const contactInfo = [
    {
      icon: <PhoneOutlined />,
      title: 'Phone',
      details: ['+91 8977510100', 'Helpline: 24/7 Support'],
      color: '#e31e24',
    },
    {
      icon: <MailOutlined />,
      title: 'Email',
      details: ['info@livewellrehabilitationnetwork.com', 'support@livewellrehab.com'],
      color: '#f7941d',
    },
    {
      icon: <ClockCircleOutlined />,
      title: 'Working Hours',
      details: ['Monday - Saturday', '8:00 AM - 7:30 PM'],
      color: '#00a651',
    },
  ]

  return (
    <div style={{ background: '#fff', minHeight: '80vh', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(227,30,36,0.9) 0%, rgba(247,148,29,0.9) 100%), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=600&fit=crop)',
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
          Get In Touch
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
          Contact Us
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
          We're here to help. Reach out to us for any questions or support.
        </Paragraph>
      </div>

      {/* Contact Info Cards */}
      <div 
        data-animate-id="contact-cards"
        style={{ 
          padding: '0 30px', 
          marginTop: '-50px',
          maxWidth: '1200px',
          margin: '-50px auto 0',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Row gutter={[20, 20]} justify="center">
          {contactInfo.map((info, index) => (
            <Col xs={24} sm={12} md={8} lg={7} xl={6} key={index}>
              <Card
                style={{
                  textAlign: 'center',
                  borderRadius: '16px',
                  border: 'none',
                  boxShadow: '0 10px 35px rgba(0,0,0,0.08)',
                  height: '100%',
                  transition: 'all 0.4s ease',
                  ...(index % 2 === 0 
                    ? getSlideFromLeft(0.05 + index * 0.1, isVisible('contact-cards'))
                    : getSlideFromRight(0.05 + index * 0.1, isVisible('contact-cards'))
                  ),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = `0 20px 45px ${info.color}25`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 35px rgba(0,0,0,0.08)'
                }}
                bodyStyle={{ padding: '30px 20px' }}
              >
                <div
                  style={{
                    width: '65px',
                    height: '65px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${info.color}20 0%, ${info.color}10 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px',
                    fontSize: '28px',
                    color: info.color,
                    transition: 'transform 0.4s ease',
                  }}
                >
                  {info.icon}
                </div>
                <Title level={4} style={{ color: '#1e3a5f', marginBottom: '10px', fontSize: '18px' }}>
                  {info.title}
                </Title>
                {info.details.map((detail, idx) => (
                  <Paragraph 
                    key={idx} 
                    style={{ 
                      color: '#666', 
                      margin: 0, 
                      fontSize: info.title === 'Email' ? '12px' : '14px', 
                      lineHeight: '1.7',
                      wordBreak: 'break-all',
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {detail}
                  </Paragraph>
                ))}
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Branches Section */}
      <div 
        data-animate-id="branches"
        style={{ padding: '50px 30px', maxWidth: '1200px', background: '#f8fbff' }}
      >
        <div style={{ margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ 
              color: '#00aeef', 
              fontWeight: '700', 
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '13px',
              ...getSlideFromBottom(0, isVisible('branches')),
            }}>
              <GlobalOutlined style={{ marginRight: '8px' }} />
              Our Branches
            </div>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              marginBottom: '15px', 
              fontSize: 'clamp(26px, 4vw, 38px)',
              ...getSlideFromBottom(0.1, isVisible('branches')),
            }}>
              Find Us Near You
            </Title>
            <Paragraph style={{
              color: '#666',
              fontSize: '16px',
              maxWidth: '700px',
              margin: '0 auto',
              ...getSlideFromBottom(0.2, isVisible('branches')),
            }}>
              Visit any of our branches across India for in-person consultations and therapy sessions
            </Paragraph>
          </div>
          <Row gutter={[24, 24]}>
            {branches.map((branch, index) => (
              <Col xs={24} sm={12} lg={8} key={branch.id}>
                <Card
                  hoverable
                  style={{
                    borderRadius: '20px',
                    border: branch.isHeadquarters ? `3px solid ${branch.color}` : '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.4s ease',
                    ...getScaleIn(0.05 * index, isVisible('branches')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = `0 20px 40px ${branch.color}25`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  bodyStyle={{ padding: '25px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <div style={{ flex: 1 }}>
                      <Title level={4} style={{ 
                        color: '#1e3a5f', 
                        marginBottom: '8px',
                        fontSize: '18px',
                        lineHeight: '1.3',
                      }}>
                        {branch.name}
                      </Title>
                      {branch.isHeadquarters && (
                        <span style={{
                          display: 'inline-block',
                          background: branch.color,
                          color: '#fff',
                          padding: '3px 10px',
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: '600',
                          marginBottom: '10px',
                        }}>
                          Headquarters
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <EnvironmentOutlined style={{ color: branch.color, fontSize: '16px', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>{branch.address}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <PhoneOutlined style={{ color: branch.color, fontSize: '16px' }} />
                      <a href={`tel:${branch.phone}`} style={{ color: '#1e3a5f', fontWeight: '600', fontSize: '14px' }}>
                        {branch.phone}
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <MailOutlined style={{ color: branch.color, fontSize: '16px' }} />
                      <a href={`mailto:${branch.email}`} style={{ color: '#666', fontSize: '13px' }}>
                        {branch.email}
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <ClockCircleOutlined style={{ color: branch.color, fontSize: '16px' }} />
                      <span style={{ color: '#666', fontSize: '13px' }}>{branch.timing}</span>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    paddingTop: '15px', 
                    borderTop: '1px solid #f0f0f0',
                  }}>
                    <a href={`tel:${branch.phone}`} style={{ flex: 1 }}>
                      <Button
                        type="primary"
                        block
                        style={{
                          background: branch.color,
                          border: 'none',
                          borderRadius: '25px',
                          height: '38px',
                          fontWeight: '600',
                          fontSize: '13px',
                        }}
                        icon={<PhoneOutlined />}
                      >
                        Call
                      </Button>
                    </a>
                    <a href={`mailto:${branch.email}`} style={{ flex: 1 }}>
                      <Button
                        block
                        style={{
                          border: `2px solid ${branch.color}`,
                          color: branch.color,
                          borderRadius: '25px',
                          height: '38px',
                          fontWeight: '600',
                          fontSize: '13px',
                        }}
                        icon={<MailOutlined />}
                      >
                        Email
                      </Button>
                    </a>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div 
        data-animate-id="form-map"
        style={{ padding: '50px 30px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <Row gutter={[50, 50]}>
          {/* Contact Form */}
          <Col xs={24} lg={12}>
            <div style={getSlideFromLeft(0, isVisible('form-map'))}>
              <div style={{ 
                color: '#00aeef', 
                fontWeight: '700', 
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '13px',
              }}>
                Send Message
              </div>
              <Title level={2} style={{ color: '#1e3a5f', marginBottom: '30px', fontSize: 'clamp(26px, 4vw, 36px)' }}>
                We'd Love to <span style={{ color: '#e31e24' }}>Hear From You</span>
              </Title>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Your Name</span>}
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input 
                        placeholder="Enter your name"
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
                      name="phone"
                      label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Phone Number</span>}
                      rules={[{ required: true, message: 'Please enter phone' }]}
                    >
                      <Input 
                        placeholder="Enter phone number"
                        style={{ 
                          height: '52px', 
                          borderRadius: '12px',
                          border: '2px solid #e8e8e8',
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="email"
                  label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Email Address</span>}
                  rules={[
                    { required: true, message: 'Please enter email' },
                    { type: 'email', message: 'Please enter valid email' }
                  ]}
                >
                  <Input 
                    placeholder="Enter your email"
                    style={{ 
                      height: '52px', 
                      borderRadius: '12px',
                      border: '2px solid #e8e8e8',
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="subject"
                  label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Subject</span>}
                  rules={[{ required: true, message: 'Please enter subject' }]}
                >
                  <Input 
                    placeholder="Enter subject"
                    style={{ 
                      height: '52px', 
                      borderRadius: '12px',
                      border: '2px solid #e8e8e8',
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Your Message</span>}
                  rules={[{ required: true, message: 'Please enter message' }]}
                >
                  <TextArea 
                    rows={5} 
                    placeholder="Write your message here..."
                    style={{ 
                      borderRadius: '12px',
                      border: '2px solid #e8e8e8',
                      padding: '15px',
                    }}
                  />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<SendOutlined />}
                  size="large"
                  style={{
                    height: '55px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                    border: 'none',
                    fontWeight: '700',
                    fontSize: '16px',
                    padding: '0 40px',
                    transition: 'all 0.3s ease',
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
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Map & Quick Contact */}
          <Col xs={24} lg={12}>
            <div style={getSlideFromRight(0.15, isVisible('form-map'))}>
              {/* Map */}
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  marginBottom: '30px',
                  height: '300px',
                  background: '#f0f0f0',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2694067367147!2d78.40752!3d17.43264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzU3LjUiTiA3OMKwMjQnMjcuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Live Well Location"
                />
              </div>

              {/* Quick Contact */}
              <Card
                style={{
                  borderRadius: '20px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #1e3a5f 0%, #00aeef 100%)',
                }}
                bodyStyle={{ padding: '30px' }}
              >
                <Title level={4} style={{ color: '#fff', marginBottom: '25px' }}>
                  Quick Contact Options
                </Title>
                <Row gutter={[16, 16]}>
                  {[
                    { icon: <PhoneOutlined />, label: 'Call Now', value: '+91 89775 10100', color: '#e31e24' },
                    { icon: <WhatsAppOutlined />, label: 'WhatsApp', value: '+91 89775 10100', color: '#25d366' },
                    { icon: <GlobalOutlined />, label: 'Website', value: 'https://livewellrehabilitationnetwork.com', color: '#f7941d' },
                  ].map((item, index) => (
                    <Col xs={24} key={index}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          padding: '15px 20px',
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: '12px',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                          e.currentTarget.style.transform = 'translateX(8px)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                          e.currentTarget.style.transform = 'translateX(0)'
                        }}
                      >
                        <div style={{
                          width: '45px',
                          height: '45px',
                          borderRadius: '50%',
                          background: item.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: '20px',
                        }}>
                          {item.icon}
                        </div>
                        <div>
                          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>{item.label}</div>
                          <div style={{ color: '#fff', fontWeight: '600', fontSize: '15px' }}>{item.value}</div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ant-input:hover, .ant-input:focus {
          border-color: #00aeef !important;
        }
        .ant-input:focus {
          box-shadow: 0 0 0 3px rgba(0,174,239,0.1) !important;
        }
      `}</style>

      {/* FAQ Section */}
      <div 
        data-animate-id="faq"
        style={{ 
          padding: '50px 30px', 
          background: '#f8fbff',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ 
            color: '#00a651', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('faq')),
          }}>
            FAQ
          </div>
          <Title level={2} style={{ 
            color: '#1e3a5f', 
            marginBottom: '45px', 
            fontSize: 'clamp(26px, 4vw, 38px)',
            ...getSlideFromBottom(0.1, isVisible('faq')),
          }}>
            Frequently Asked Questions
          </Title>
          
          <Row gutter={[20, 20]}>
            {[
              { q: 'What is the first step?', a: 'Schedule a free consultation with our team to discuss your child\'s needs.' },
              { q: 'Do you offer home visits?', a: 'Yes, we provide home-based therapy sessions for families who need it.' },
              { q: 'What ages do you serve?', a: 'We work with children from infancy to age 18, with early intervention programs.' },
              { q: 'Is the first consultation free?', a: 'Yes, the initial assessment and consultation are completely free.' },
            ].map((item, index) => (
              <Col xs={24} md={12} key={index}>
                <Card
                  style={{
                    textAlign: 'left',
                    borderRadius: '16px',
                    border: '2px solid #e8e8e8',
                    transition: 'all 0.4s ease',
                    height: '100%',
                    ...getScaleIn(0.1 + index * 0.08, isVisible('faq')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00aeef'
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,174,239,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e8e8e8'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  bodyStyle={{ padding: '25px' }}
                >
                  <Title level={5} style={{ color: '#1e3a5f', marginBottom: '10px' }}>
                    {item.q}
                  </Title>
                  <Paragraph style={{ color: '#666', margin: 0, fontSize: '14px' }}>
                    {item.a}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ant-input:hover, .ant-input:focus {
          border-color: #00aeef !important;
        }
        .ant-input:focus {
          box-shadow: 0 0 0 3px rgba(0,174,239,0.1) !important;
        }
      `}</style>
    </div>
  )
}

export default Contact
