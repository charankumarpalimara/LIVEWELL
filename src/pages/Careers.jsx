import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Button, Tag, Input, Select, Modal, Form, message, Upload } from 'antd'
import { 
  SearchOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  TeamOutlined,
  HeartFilled,
  RocketOutlined,
  TrophyFilled,
  SafetyCertificateFilled,
  UploadOutlined,
  SendOutlined,
  BookOutlined,
  MedicineBoxOutlined,
  SoundOutlined,
  BulbOutlined
} from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { Search } = Input
const { Option } = Select

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

const Careers = () => {
  const visibleElements = useScrollAnimation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [form] = Form.useForm()
  
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

  const jobs = [
    {
      id: 1,
      title: 'Speech Language Pathologist',
      department: 'Clinical',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹4,00,000 - ₹6,00,000',
      posted: '2 days ago',
      description: 'We are looking for an experienced Speech Language Pathologist to join our team and provide high-quality speech therapy services to children with autism and other developmental disorders.',
      requirements: [
        'Master\'s degree in Speech Language Pathology',
        'RCI Registration mandatory',
        '2+ years experience in pediatric speech therapy',
        'Experience with autism spectrum disorders preferred',
        'Excellent communication and interpersonal skills',
      ],
      responsibilities: [
        'Conduct comprehensive speech and language assessments',
        'Develop individualized treatment plans',
        'Provide evidence-based therapy sessions',
        'Document progress and maintain records',
        'Collaborate with multidisciplinary team',
      ],
      icon: <SoundOutlined />,
      color: '#f7941d',
      urgent: true,
    },
    {
      id: 2,
      title: 'Occupational Therapist',
      department: 'Clinical',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹3,50,000 - ₹5,50,000',
      posted: '5 days ago',
      description: 'Join our growing team as an Occupational Therapist and help children develop essential life skills through therapeutic interventions.',
      requirements: [
        'Bachelor\'s/Master\'s degree in Occupational Therapy',
        'RCI Registration',
        'Experience in pediatric OT',
        'Knowledge of sensory integration therapy',
        'Strong assessment skills',
      ],
      responsibilities: [
        'Assess children\'s fine motor and sensory needs',
        'Design and implement OT treatment plans',
        'Work on daily living skills',
        'Provide sensory integration therapy',
        'Parent counseling and training',
      ],
      icon: <MedicineBoxOutlined />,
      color: '#00a651',
      urgent: false,
    },
    {
      id: 3,
      title: 'Behavior Therapist (ABA)',
      department: 'Clinical',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹3,50,000 - ₹5,00,000',
      posted: '1 week ago',
      description: 'We are seeking a certified Behavior Therapist to provide Applied Behavior Analysis (ABA) therapy to children with autism.',
      requirements: [
        'BCBA or BCaBA certification preferred',
        'Master\'s degree in Psychology or related field',
        'Experience with ABA therapy',
        'Knowledge of behavioral assessment tools',
        'Strong data collection skills',
      ],
      responsibilities: [
        'Conduct functional behavior assessments',
        'Develop behavior intervention plans',
        'Implement ABA therapy sessions',
        'Train parents and caregivers',
        'Track and analyze behavior data',
      ],
      icon: <BulbOutlined />,
      color: '#00aeef',
      urgent: true,
    },
    {
      id: 4,
      title: 'Special Educator',
      department: 'Education',
      location: 'Chennai',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹3,00,000 - ₹4,50,000',
      posted: '3 days ago',
      description: 'Looking for a passionate Special Educator to work with children with learning disabilities and developmental delays.',
      requirements: [
        'B.Ed/M.Ed in Special Education',
        'RCI Registration',
        'Experience teaching children with special needs',
        'Knowledge of IEP development',
        'Creative teaching approach',
      ],
      responsibilities: [
        'Develop Individualized Education Programs (IEPs)',
        'Teach academic and functional skills',
        'Adapt curriculum to meet individual needs',
        'Monitor and document student progress',
        'Collaborate with parents and therapists',
      ],
      icon: <BookOutlined />,
      color: '#662d91',
      urgent: false,
    },
    {
      id: 5,
      title: 'Center Manager',
      department: 'Operations',
      location: 'Pune',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹6,00,000 - ₹9,00,000',
      posted: '1 week ago',
      description: 'We are looking for an experienced Center Manager to oversee daily operations and ensure excellent service delivery.',
      requirements: [
        'MBA or equivalent degree',
        'Experience in healthcare/therapy center management',
        'Strong leadership and team management skills',
        'Excellent communication abilities',
        'Knowledge of regulatory compliance',
      ],
      responsibilities: [
        'Manage day-to-day center operations',
        'Lead and motivate the therapy team',
        'Ensure quality standards are maintained',
        'Handle parent relationships',
        'Achieve business targets',
      ],
      icon: <TeamOutlined />,
      color: '#e31e24',
      urgent: false,
    },
    {
      id: 6,
      title: 'Receptionist / Front Office Executive',
      department: 'Administration',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '₹2,00,000 - ₹3,00,000',
      posted: '4 days ago',
      description: 'Join our front office team and be the first point of contact for families visiting our center.',
      requirements: [
        'Graduate in any discipline',
        'Good communication skills in English and Telugu',
        'Computer proficiency',
        'Pleasant personality',
        'Experience in healthcare preferred',
      ],
      responsibilities: [
        'Manage front desk operations',
        'Schedule appointments',
        'Handle phone inquiries',
        'Maintain records and files',
        'Coordinate with therapy team',
      ],
      icon: <TeamOutlined />,
      color: '#ec008c',
      urgent: false,
    },
    {
      id: 7,
      title: 'Physiotherapist',
      department: 'Clinical',
      location: 'Vijayawada',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹3,00,000 - ₹4,50,000',
      posted: '6 days ago',
      description: 'Looking for a Physiotherapist to provide motor therapy services to children with developmental delays.',
      requirements: [
        'BPT/MPT degree',
        'Experience in pediatric physiotherapy',
        'Knowledge of NDT and other pediatric techniques',
        'Good assessment skills',
        'Patient and empathetic',
      ],
      responsibilities: [
        'Assess motor development',
        'Provide gross motor therapy',
        'Work on mobility and balance',
        'Design home exercise programs',
        'Document progress',
      ],
      icon: <MedicineBoxOutlined />,
      color: '#00aeef',
      urgent: false,
    },
    {
      id: 8,
      title: 'Clinical Psychologist',
      department: 'Clinical',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹5,00,000 - ₹7,00,000',
      posted: '1 week ago',
      description: 'We need a Clinical Psychologist to conduct assessments and provide counseling services.',
      requirements: [
        'M.Phil in Clinical Psychology',
        'RCI Registration mandatory',
        'Experience with developmental assessments',
        'Counseling experience',
        'Report writing skills',
      ],
      responsibilities: [
        'Conduct psychological assessments',
        'Diagnose developmental disorders',
        'Provide parent counseling',
        'Develop treatment recommendations',
        'Write detailed assessment reports',
      ],
      icon: <BulbOutlined />,
      color: '#f7941d',
      urgent: true,
    },
  ]

  const departments = ['All', ...new Set(jobs.map(j => j.department))]
  const locations = ['All', ...new Set(jobs.map(j => j.location))]
  const types = ['All', 'Full-time', 'Part-time', 'Contract']

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDept = selectedDepartment === 'All' || job.department === selectedDepartment
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation
    const matchesType = selectedType === 'All' || job.type === selectedType
    return matchesSearch && matchesDept && matchesLocation && matchesType
  })

  const handleApply = (job) => {
    setSelectedJob(job)
    setModalVisible(true)
  }

  const onFinish = (values) => {
    console.log('Application submitted:', { ...values, jobId: selectedJob?.id })
    message.success('Application submitted successfully! We will contact you soon.')
    setModalVisible(false)
    form.resetFields()
  }

  const benefits = [
    { icon: <DollarOutlined />, title: 'Competitive Salary', desc: 'Industry-leading compensation packages', color: '#00a651' },
    { icon: <HeartFilled />, title: 'Health Insurance', desc: 'Comprehensive medical coverage', color: '#e31e24' },
    { icon: <RocketOutlined />, title: 'Career Growth', desc: 'Clear progression paths and training', color: '#00aeef' },
    { icon: <TrophyFilled />, title: 'Recognition', desc: 'Awards and incentive programs', color: '#f7941d' },
    { icon: <TeamOutlined />, title: 'Great Team', desc: 'Collaborative work environment', color: '#662d91' },
    { icon: <SafetyCertificateFilled />, title: 'Job Security', desc: 'Stable and growing organization', color: '#ec008c' },
  ]

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,166,81,0.9) 0%, rgba(0,174,239,0.9) 100%), url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=600&fit=crop)',
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
          <RocketOutlined style={{ marginRight: '10px' }} />
          Join Our Team
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
          Build a Career That Matters
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
          Join India's No. 1 Autism Network and make a difference in children's lives every day
        </Paragraph>
        
        {/* Search */}
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto',
          animation: 'slideDown 0.8s ease-out 0.6s both',
        }}>
          <Search
            placeholder="Search jobs by title or keyword..."
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Why Join Us Section */}
      <div 
        data-animate-id="benefits"
        style={{ padding: '70px 30px', background: '#f8fbff' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              marginBottom: '10px',
              ...getSlideFromBottom(0, isVisible('benefits')),
            }}>
              Why Join <span style={{ color: '#00aeef' }}>Live Well?</span>
            </Title>
          </div>
          <Row gutter={[20, 20]}>
            {benefits.map((benefit, index) => (
              <Col xs={12} sm={8} md={4} key={index}>
                <div
                  style={{ 
                    textAlign: 'center', 
                    padding: '25px 15px',
                    background: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    ...getScaleIn(0.05 * index, isVisible('benefits')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.06)'
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '10px', color: benefit.color }}>
                    {benefit.icon}
                  </div>
                  <Title level={5} style={{ color: '#1e3a5f', marginBottom: '5px', fontSize: '14px' }}>
                    {benefit.title}
                  </Title>
                  <Paragraph style={{ color: '#666', margin: 0, fontSize: '12px' }}>
                    {benefit.desc}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Filters */}
      <div style={{ padding: '30px', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[15, 15]} align="middle">
            <Col xs={24} sm={8} md={6}>
              <Select
                value={selectedDepartment}
                onChange={setSelectedDepartment}
                style={{ width: '100%' }}
                size="large"
              >
                {departments.map(dept => (
                  <Option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</Option>
                ))}
              </Select>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Select
                value={selectedLocation}
                onChange={setSelectedLocation}
                style={{ width: '100%' }}
                size="large"
              >
                {locations.map(loc => (
                  <Option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</Option>
                ))}
              </Select>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Select
                value={selectedType}
                onChange={setSelectedType}
                style={{ width: '100%' }}
                size="large"
              >
                {types.map(type => (
                  <Option key={type} value={type}>{type === 'All' ? 'All Types' : type}</Option>
                ))}
              </Select>
            </Col>
            <Col xs={24} md={6}>
              <div style={{ textAlign: 'right', color: '#666' }}>
                <strong>{filteredJobs.length}</strong> job{filteredJobs.length !== 1 ? 's' : ''} found
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Job Listings */}
      <div 
        data-animate-id="jobs"
        style={{ padding: '60px 30px', background: '#fff' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[24, 24]}>
            {filteredJobs.map((job, index) => (
              <Col xs={24} md={12} key={job.id}>
                <Card
                  hoverable
                  style={{ 
                    borderRadius: '16px',
                    border: job.urgent ? '2px solid #e31e24' : '1px solid #e8e8e8',
                    transition: 'all 0.4s ease',
                    height: '100%',
                    ...getScaleIn(0.05 * index, isVisible('jobs')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: `${job.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        color: job.color,
                      }}>
                        {job.icon}
                      </div>
                      <div>
                        <Title level={4} style={{ margin: 0, color: '#1e3a5f' }}>{job.title}</Title>
                        <Tag color={job.color} style={{ marginTop: '5px' }}>{job.department}</Tag>
                      </div>
                    </div>
                    {job.urgent && (
                      <Tag color="red" style={{ fontWeight: '600' }}>Urgent</Tag>
                    )}
                  </div>

                  <Paragraph style={{ color: '#666', marginBottom: '15px', minHeight: '44px' }} ellipsis={{ rows: 2 }}>
                    {job.description}
                  </Paragraph>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '13px' }}>
                      <EnvironmentOutlined style={{ color: '#00aeef' }} />
                      {job.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '13px' }}>
                      <ClockCircleOutlined style={{ color: '#f7941d' }} />
                      {job.type}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '13px' }}>
                      <TeamOutlined style={{ color: '#00a651' }} />
                      {job.experience}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #f0f0f0' }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#00a651' }}>{job.salary}</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Posted {job.posted}</div>
                    </div>
                    <Button
                      type="primary"
                      onClick={() => handleApply(job)}
                      style={{
                        background: `linear-gradient(135deg, ${job.color} 0%, #1e3a5f 100%)`,
                        border: 'none',
                        borderRadius: '25px',
                        height: '40px',
                        padding: '0 25px',
                        fontWeight: '600',
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredJobs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <SearchOutlined style={{ fontSize: '60px', color: '#d9d9d9', marginBottom: '20px' }} />
              <Title level={3} style={{ color: '#666' }}>No jobs found</Title>
              <Paragraph style={{ color: '#888' }}>
                Try adjusting your filters or search term
              </Paragraph>
            </div>
          )}
        </div>
      </div>

      {/* Application Modal */}
      <Modal
        title={
          <div>
            <Title level={4} style={{ margin: 0 }}>Apply for {selectedJob?.title}</Title>
            <div style={{ fontSize: '14px', color: '#666', fontWeight: 'normal' }}>
              {selectedJob?.location} • {selectedJob?.type}
            </div>
          </div>
        }
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: '20px' }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input size="large" placeholder="Enter your full name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input size="large" placeholder="Enter your email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: 'Please enter your phone' }]}
              >
                <Input size="large" placeholder="Enter your phone number" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="experience"
                label="Total Experience"
                rules={[{ required: true, message: 'Please enter your experience' }]}
              >
                <Input size="large" placeholder="e.g., 3 years" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="currentLocation"
            label="Current Location"
          >
            <Input size="large" placeholder="Enter your current city" />
          </Form.Item>
          <Form.Item
            name="resume"
            label="Resume"
          >
            <Upload maxCount={1} beforeUpload={() => false}>
              <Button icon={<UploadOutlined />} size="large" style={{ width: '100%' }}>
                Upload Resume (PDF/DOC)
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="coverLetter"
            label="Why do you want to join Live Well?"
          >
            <Input.TextArea 
              rows={4} 
              placeholder="Tell us about yourself and why you're interested in this role..."
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              icon={<SendOutlined />}
              style={{
                background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                border: 'none',
                borderRadius: '25px',
                height: '50px',
                fontWeight: '600',
              }}
            >
              Submit Application
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* CTA Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(30,58,95,0.95) 0%, rgba(102,45,145,0.95) 100%), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=400&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '70px 30px',
          textAlign: 'center',
        }}
      >
        <Title level={2} style={{ color: '#fff', marginBottom: '15px' }}>
          Don't See a Suitable Opening?
        </Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.95)', fontSize: '18px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          Send us your resume and we'll keep you in mind for future opportunities
        </Paragraph>
        <a href="mailto:careers@livewellrehabilitationnetwork.com">
          <Button
            size="large"
            style={{
              background: '#fff',
              color: '#662d91',
              border: 'none',
              borderRadius: '50px',
              height: '55px',
              padding: '0 45px',
              fontWeight: '700',
              fontSize: '16px',
            }}
            icon={<SendOutlined />}
          >
            Send Your Resume
          </Button>
        </a>
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

export default Careers

