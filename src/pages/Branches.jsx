import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Button, Input, Tag } from 'antd'
import { 
  EnvironmentOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  SearchOutlined,
  GlobalOutlined,
  StarFilled,
  ArrowRightOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import vizagImage from '../assets/vizag.jpg'
import secunderabadImage from '../assets/secendrabad.jpg'
import chennaiImage from '../assets/chennai.jpg'
import bengaluruImage from '../assets/benguluru.jpg'
import puneImage from '../assets/pune.jpg'

const { Title, Paragraph } = Typography
const { Search } = Input

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

const Branches = () => {
  const visibleElements = useScrollAnimation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('All')
  
  const isVisible = (id) => visibleElements.has(id)

  const getSlideFromBottom = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getScaleIn = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'scale(1)' : 'scale(0.9)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const branches = [
    // {
    //   id: 1,
    //   name: 'Live Well - Hyderabad (Banjara Hills)',
    //   address: 'Plot No. 8-2-293/82/A/431, Road No. 22, Banjara Hills, Hyderabad - 500034',
    //   phone: '+91 8977510100',
    //   email: 'banjarahills@livewellrehab.com',
    //   timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
    //   state: 'Telangana',
    //   city: 'Hyderabad',
    //   isHeadquarters: true,
    //   services: ['Autism Therapy', 'Speech Therapy', 'Occupational Therapy', 'Special Education'],
    //   image: secunderabadImage,
    //   mapUrl: 'https://maps.google.com/?q=Banjara+Hills+Hyderabad',
    // },
    // {
    //   id: 2,
    //   name: 'Live Well - Bangalore (Koramangala)',
    //   address: '4th Block, Koramangala, Bangalore - 560034',
    //   phone: '+91 8977510103',
    //   email: 'bangalore@livewellrehab.com',
    //   timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
    //   state: 'Karnataka',
    //   city: 'Bangalore',
    //   isHeadquarters: false,
    //   services: ['Autism Therapy', 'Speech Therapy', 'Special Education', 'Behavior Therapy'],
    //   image: bengaluruImage,
    //   mapUrl: 'https://maps.google.com/?q=Koramangala+Bangalore',
    // },
    // {
    //   id: 3,
    //   name: 'Live Well - Chennai (Anna Nagar)',
    //   address: 'Plot No. 2234, 2nd Avenue, Anna Nagar, Chennai - 600040',
    //   phone: '+91 8977510104',
    //   email: 'chennai@livewellrehab.com',
    //   timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
    //   state: 'Tamil Nadu',
    //   city: 'Chennai',
    //   isHeadquarters: false,
    //   services: ['Autism Therapy', 'Speech Therapy', 'Occupational Therapy'],
    //   image: chennaiImage,
    //   mapUrl: 'https://maps.google.com/?q=Anna+Nagar+Chennai',
    // },
    // {
    //   id: 4,
    //   name: 'Live Well - Vijayawada',
    //   address: 'Door No. 29-5-35, Prakasam Road, Governorpet, Vijayawada - 520002',
    //   phone: '+91 8977510105',
    //   email: 'vijayawada@livewellrehab.com',
    //   timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
    //   state: 'Andhra Pradesh',
    //   city: 'Vijayawada',
    //   isHeadquarters: false,
    //   services: ['Autism Therapy', 'Speech Therapy', 'Special Education'],
    //   image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop&q=80',
    //   mapUrl: 'https://maps.google.com/?q=Vijayawada',
    // },
    // {
    //   id: 5,
    //   name: 'Live Well - Visakhapatnam',
    //   address: 'Door No. 47-11-16, Dwaraka Nagar, Visakhapatnam - 530016',
    //   phone: '+91 8977510106',
    //   email: 'vizag@livewellrehab.com',
    //   timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
    //   state: 'Andhra Pradesh',
    //   city: 'Visakhapatnam',
    //   isHeadquarters: false,
    //   services: ['Speech Therapy', 'Occupational Therapy', 'Behavior Therapy'],
    //   image: vizagImage,
    //   mapUrl: 'https://maps.google.com/?q=Visakhapatnam',
    // },
    // {
    //   id: 6,
    //   name: 'Live Well - Pune (Kothrud)',
    //   address: 'Office No. 12, 3rd Floor, Karve Road, Kothrud, Pune - 411038',
    //   phone: '+91 8977510107',
    //   email: 'pune@livewellrehab.com',
    //   timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
    //   state: 'Maharashtra',
    //   city: 'Pune',
    //   isHeadquarters: false,
    //   services: ['Autism Therapy', 'Speech Therapy', 'Special Education', 'Play Therapy'],
    //   image: puneImage,
    //   mapUrl: 'https://maps.google.com/?q=Kothrud+Pune',
    // },
    {
      id: 7,
      name: 'Live Well - KPHB Colony',
      address: 'HiG 208 Dharma Reddy Colony Phase 1, above HDB Financials, beside Post Office, Kukatpally Housing Board Colony, Telangana 500085',
      phone: '+91 8977510108',
      email: 'kphb@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      state: 'Telangana',
      city: 'Hyderabad',
      isHeadquarters: false,
      services: ['Autism Therapy', 'Speech Therapy', 'Occupational Therapy', 'Special Education'],
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop&q=80',
      mapUrl: 'https://maps.app.goo.gl/UYTLC4QBiXhxuprs8',
    },
    {
      id: 8,
      name: 'Live Well - Pragati Nagar',
      address: 'Plot 1035, Flat no 201, Pragathi Nagar, Medchal Malkajgiri, Nizampet, Dt, Telangana 500090.',
      phone: '+91 8977510109',
      email: 'pragatinagar@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      state: 'Telangana',
      city: 'Hyderabad',
      isHeadquarters: false,
      services: ['Autism Therapy', 'Speech Therapy', 'Occupational Therapy', 'Special Education'],
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop&q=80',
      mapUrl: 'https://maps.app.goo.gl/oeEDahPb5ZHLHJUo6',
    },
    {
      id: 9,
      name: 'Live Well - Jammu & Kashmir (Bemina)',
      address: 'H-No. 33, near Post Office, Alamdar Housing Colony, Colony, Bemina, Srinagar, Jammu and Kashmir 190018, India',
      phone: '+91 8977510110',
      email: 'jammu@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      state: 'Jammu & Kashmir',
      city: 'Srinagar',
      isHeadquarters: false,
      services: ['Autism Therapy', 'Speech Therapy', 'Occupational Therapy', 'Special Education'],
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop&q=80',
      mapUrl: 'https://maps.app.goo.gl/quQXxt37PMTdckTj9',
    },
    {
      id: 10,
      name: 'Live Well - Chanda Nagar',
      address: 'Plot no 5 first floor, Survey number 361, Dno 4, 127/1,  Chandanagar Road, Busstop, Chanda Nagar, Hyderabad, Telangana 500050',
      phone: '+91 8977510111',
      email: 'chandanagar@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      state: 'Telangana',
      city: 'Hyderabad',
      isHeadquarters: false,
      services: ['Autism Therapy', 'Speech Therapy', 'Occupational Therapy', 'Special Education'],
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop&q=80',
      mapUrl: 'https://maps.app.goo.gl/kALEDqgjhYmFcC748',
    },
    {
      id: 11,
      name: 'Live Well - Jammu & Kashmir (Bemina Main Road)',
      address: 'H-No. 33, near Post Office, Alamdar Housing Colony, Colony, Bemina, Srinagar, Jammu and Kashmir 190018',
      phone: '+91 8977510112',
      email: 'jammu2@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      state: 'Jammu & Kashmir',
      city: 'Srinagar',
      isHeadquarters: false,
      services: ['Autism Therapy', 'Speech Therapy', 'Occupational Therapy', 'Special Education'],
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop&q=80',
      mapUrl: 'https://maps.app.goo.gl/egSPynfcgRXp2YJn9',
    },
    {
      id: 12,
      name: 'Live Well - Suchitra',
      address: 'H.No. 06-28, Plot no 1, 2nd floor, Suchitra Rd, Suchitra, Vennala Gadda, Jeedimetla, Hyderabad, Telangana 500055',
      phone: '+91 8977510113',
      email: 'suchitra@livewellrehab.com',
      timing: 'Mon - Sat: 8:00 AM - 7:30 PM',
      state: 'Telangana',
      city: 'Hyderabad',
      isHeadquarters: false,
      services: ['Autism Therapy', 'Speech Therapy', 'Occupational Therapy', 'Special Education'],
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop&q=80',
      mapUrl: 'https://maps.app.goo.gl/ddt9VMvfSsNfqk6Q7',
    },
    {
      id: 13,
      name: 'Live Well - Visakhapatnam',
      address: 'Coming Soon',
      phone: 'TBA',
      email: 'vizag@livewellrehab.com',
      timing: 'Coming Soon',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam',
      isHeadquarters: false,
      isComingSoon: true,
      services: ['Autism Therapy', 'Speech Therapy', 'Occupational Therapy', 'Special Education'],
      image: vizagImage,
      mapUrl: 'https://maps.google.com/?q=Visakhapatnam',
    },
    {
      id: 14,
      name: 'Live Well - Bengaluru',
      address: 'Coming Soon',
      phone: 'TBA',
      email: 'bengaluru@livewellrehab.com',
      timing: 'Coming Soon',
      state: 'Karnataka',
      city: 'Bengaluru',
      isHeadquarters: false,
      isComingSoon: true,
      services: ['Autism Therapy', 'Speech Therapy', 'Occupational Therapy', 'Special Education'],
      image: bengaluruImage,
      mapUrl: 'https://maps.google.com/?q=Bengaluru',
    },
  ]

  const states = ['All', ...new Set(branches.map(b => b.state))]

  const filteredBranches = branches.filter(branch => {
    const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === 'All' || branch.state === selectedState
    return matchesSearch && matchesState
  })

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(102,45,145,0.9) 0%, rgba(0,174,239,0.9) 100%), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop)',
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
          <GlobalOutlined style={{ marginRight: '10px' }} />
          Our Network
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
          Find a Branch Near You
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '20px', 
            color: 'rgba(255,255,255,0.95)', 
            maxWidth: '800px', 
            margin: '0 auto 30px',
            animation: 'slideDown 0.8s ease-out 0.4s both',
          }}
        >
          With {branches.length}+ centers across India, quality therapy is always within reach
        </Paragraph>
        
        {/* Search Box */}
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto',
          animation: 'slideDown 0.8s ease-out 0.6s both',
        }}>
          <Search
            placeholder="Search by city, area or branch name..."
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              borderRadius: '50px',
            }}
          />
        </div>
      </div>

      {/* Filter Tags */}
      <div 
        data-animate-id="filters"
        style={{ 
          padding: '30px', 
          background: '#f8fbff',
          textAlign: 'center',
        }}
      >
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          ...getSlideFromBottom(0, isVisible('filters')),
        }}>
          {states.map((state, index) => (
            <Tag
              key={state}
              onClick={() => setSelectedState(state)}
              style={{
                padding: '8px 20px',
                fontSize: '14px',
                borderRadius: '25px',
                cursor: 'pointer',
                border: selectedState === state ? 'none' : '2px solid #d9d9d9',
                background: selectedState === state 
                  ? 'linear-gradient(135deg, #00aeef 0%, #662d91 100%)' 
                  : '#fff',
                color: selectedState === state ? '#fff' : '#666',
                transition: 'all 0.3s ease',
                fontWeight: selectedState === state ? '600' : '400',
              }}
            >
              {state}
            </Tag>
          ))}
        </div>
        <div style={{ 
          marginTop: '15px', 
          color: '#666',
          fontSize: '14px',
        }}>
          Showing {filteredBranches.length} branch{filteredBranches.length !== 1 ? 'es' : ''}
        </div>
      </div>

      {/* Branches Grid */}
      <div 
        data-animate-id="branches"
        style={{ padding: '60px 30px', background: '#fff' }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Row gutter={[30, 30]}>
            {filteredBranches.map((branch, index) => (
              <Col xs={24} sm={12} lg={8} key={branch.id}>
                <Card
                  hoverable
                  style={{ 
                    borderRadius: '20px',
                    overflow: 'hidden',
                    height: '100%',
                    border: branch.isHeadquarters ? '3px solid #f7941d' : '1px solid #e8e8e8',
                    transition: 'all 0.4s ease',
                    ...getScaleIn(0.05 * index, isVisible('branches')),
                  }}
                  bodyStyle={{ padding: '0' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)'
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                    <img 
                      src={branch.image} 
                      alt={branch.name}
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
                      background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)',
                    }} />
                    {branch.isHeadquarters && (
                      <Tag 
                        color="orange" 
                        style={{ 
                          position: 'absolute', 
                          top: '15px', 
                          right: '15px',
                          padding: '5px 12px',
                          fontSize: '12px',
                          fontWeight: '600',
                          borderRadius: '20px',
                        }}
                      >
                        <StarFilled /> Headquarters
                      </Tag>
                    )}
                    {branch.isComingSoon && (
                      <Tag 
                        color="red" 
                        style={{ 
                          position: 'absolute', 
                          top: '15px', 
                          right: '15px',
                          padding: '5px 12px',
                          fontSize: '12px',
                          fontWeight: '600',
                          borderRadius: '20px',
                        }}
                      >
                        Coming Soon
                      </Tag>
                    )}
                    <div style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '15px',
                      right: '15px',
                    }}>
                      <Tag color="blue" style={{ marginBottom: '5px' }}>{branch.state}</Tag>
                      <Tag color="green">{branch.city}</Tag>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div style={{ padding: '20px' }}>
                    <Title level={4} style={{ 
                      color: '#1e3a5f', 
                      marginBottom: '12px',
                      fontSize: '18px',
                    }}>
                      {branch.name}
                    </Title>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <EnvironmentOutlined style={{ color: branch.isComingSoon ? '#999' : '#00aeef', fontSize: '16px', marginTop: '3px' }} />
                        <span style={{ color: branch.isComingSoon ? '#999' : '#666', fontSize: '13px', lineHeight: '1.5', fontStyle: branch.isComingSoon ? 'italic' : 'normal' }}>{branch.address}</span>
                      </div>
                      {!branch.isComingSoon && (
                        <>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <PhoneOutlined style={{ color: '#00a651', fontSize: '16px' }} />
                            <a href={`tel:${branch.phone}`} style={{ color: '#1e3a5f', fontWeight: '600' }}>{branch.phone}</a>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <ClockCircleOutlined style={{ color: '#f7941d', fontSize: '16px' }} />
                            <span style={{ color: '#666', fontSize: '13px' }}>{branch.timing}</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Services */}
                    <div style={{ marginBottom: '15px' }}>
                      <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>Services Available:</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {branch.services.slice(0, 3).map((service, i) => (
                          <Tag key={i} style={{ fontSize: '11px', borderRadius: '10px' }}>{service}</Tag>
                        ))}
                        {branch.services.length > 3 && (
                          <Tag style={{ fontSize: '11px', borderRadius: '10px' }}>+{branch.services.length - 3} more</Tag>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    {!branch.isComingSoon ? (
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                          <Button
                            block
                            style={{
                              borderRadius: '25px',
                              height: '40px',
                              fontWeight: '600',
                              border: '2px solid #00aeef',
                              color: '#00aeef',
                            }}
                          >
                            <EnvironmentOutlined /> Directions
                          </Button>
                        </a>
                        <a href={`tel:${branch.phone}`} style={{ flex: 1 }}>
                          <Button
                            type="primary"
                            block
                            style={{
                              borderRadius: '25px',
                              height: '40px',
                              fontWeight: '600',
                              background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                              border: 'none',
                            }}
                          >
                            <PhoneOutlined /> Call Now
                          </Button>
                        </a>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <Button
                          block
                          disabled
                          style={{
                            borderRadius: '25px',
                            height: '40px',
                            fontWeight: '600',
                            background: '#f5f5f5',
                            color: '#999',
                            border: '1px solid #e8e8e8',
                          }}
                        >
                          Coming Soon
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredBranches.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <EnvironmentOutlined style={{ fontSize: '60px', color: '#d9d9d9', marginBottom: '20px' }} />
              <Title level={3} style={{ color: '#666' }}>No branches found</Title>
              <Paragraph style={{ color: '#888' }}>
                Try adjusting your search or filter to find nearby branches
              </Paragraph>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(227,30,36,0.92) 0%, rgba(247,148,29,0.92) 100%), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=400&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px 30px',
          textAlign: 'center',
        }}
      >
        <Title level={2} style={{ color: '#fff', marginBottom: '15px' }}>
          Can't Find a Branch Near You?
        </Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.95)', fontSize: '18px', marginBottom: '30px' }}>
          Contact us for online therapy sessions or explore franchise opportunities
        </Paragraph>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact">
            <Button
              size="large"
              style={{
                background: '#fff',
                color: '#e31e24',
                border: 'none',
                borderRadius: '50px',
                height: '50px',
                padding: '0 35px',
                fontWeight: '700',
              }}
            >
              Contact Us <ArrowRightOutlined />
            </Button>
          </Link>
          <Link to="/franchise">
            <Button
              size="large"
              style={{
                background: 'transparent',
                color: '#fff',
                border: '2px solid #fff',
                borderRadius: '50px',
                height: '50px',
                padding: '0 35px',
                fontWeight: '600',
              }}
            >
              Franchise Opportunities <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Branches

