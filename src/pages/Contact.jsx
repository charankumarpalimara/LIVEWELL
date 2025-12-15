import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Button } from 'antd'
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined, 
  ClockCircleOutlined,
  GlobalOutlined
} from '@ant-design/icons'

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
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('[data-animate-id]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return visibleElements
}

const Contact = () => {
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


  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
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

      {/* Branches Section */}
      <div 
        data-animate-id="branches"
        style={{ padding: '50px 30px', background: '#f8fbff' }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
                    {!branch.isComingSoon && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ClockCircleOutlined style={{ color: branch.color, fontSize: '16px' }} />
                        <span style={{ color: '#666', fontSize: '13px' }}>{branch.timing}</span>
                      </div>
                    )}
                  </div>

                  {!branch.isComingSoon ? (
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
                  ) : (
                    <div style={{ 
                      paddingTop: '15px', 
                      borderTop: '1px solid #f0f0f0',
                    }}>
                      <Button
                        block
                        disabled
                        style={{
                          background: '#f5f5f5',
                          color: '#999',
                          border: '1px solid #e8e8e8',
                          borderRadius: '25px',
                          height: '38px',
                          fontWeight: '600',
                          fontSize: '13px',
                        }}
                      >
                        Coming Soon
                      </Button>
                    </div>
                  )}
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
