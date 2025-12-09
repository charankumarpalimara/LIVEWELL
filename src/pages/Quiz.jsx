import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Form, Input, DatePicker, Button, message, Radio, Space } from 'antd'
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  HeartFilled,
  SafetyCertificateFilled,
  EnvironmentOutlined,
  FileTextOutlined,
  IdcardOutlined,
  QuestionCircleOutlined,
  ContactsOutlined
} from '@ant-design/icons'
import dayjs from 'dayjs'
import useScrollAnimation from '../hooks/useScrollAnimation'

const { Title, Paragraph } = Typography

const Quiz = () => {
  const [form] = Form.useForm()
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [screeningDate] = useState(dayjs())
  const [isMobile, setIsMobile] = useState(false)
  const visibleElements = useScrollAnimation()
  const isVisible = (id) => visibleElements.has(id)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  // Sample screening questions
  const questions = [
    "Does your child respond to their name when called?",
    "Does your child make eye contact during interactions?",
    "Does your child point to show you things they want?",
    "Does your child engage in pretend play?",
    "Does your child show interest in playing with other children?",
    "Does your child have difficulty with changes in routine?",
    "Does your child have repetitive behaviors or movements?",
    "Does your child have difficulty understanding social cues?",
    "Does your child have delayed speech or language development?",
    "Does your child show sensitivity to sounds, lights, or textures?",
    "Does your child have difficulty with fine motor skills?",
    "Does your child have difficulty following instructions?",
    "Does your child show intense interest in specific topics?",
    "Does your child have difficulty with transitions?",
    "Does your child show signs of anxiety in social situations?",
  ]

  const onFinish = (values) => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      message.success('Screening form submitted successfully! Our team will contact you soon.')
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
          backgroundImage: 'linear-gradient(135deg, rgba(0,174,239,0.9) 0%, rgba(102,45,145,0.9) 100%), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '60px 30px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-30%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          filter: 'blur(60px)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            color: 'rgba(255,255,255,0.9)',
            fontWeight: '700',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '14px',
            animation: 'slideDown 0.8s ease-out',
          }}>
            Child Development Screening
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
            Complete the Screening Quiz
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
            Help us understand your child's development better by completing this comprehensive screening questionnaire
          </Paragraph>
        </div>
      </div>

      <div
        data-animate-id="quiz-section"
        style={{ padding: '50px 30px', maxWidth: '1000px', margin: '0 auto' }}
      >
        <Card
          style={{
            border: 'none',
            borderRadius: '24px',
            boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            ...getSlideFromBottom(0.1, isVisible('quiz-section')),
          }}
          bodyStyle={{ padding: '40px' }}
        >
          {/* Progress Steps - Modern Design */}
          <div style={{ marginBottom: '50px' }}>
            <div className="modern-steps-container">
              {[
                {
                  title: 'Child Information',
                  icon: <IdcardOutlined />,
                  step: 0
                },
                {
                  title: 'Screening Questions',
                  icon: <QuestionCircleOutlined />,
                  step: 1
                },
                {
                  title: 'Contact Details',
                  icon: <ContactsOutlined />,
                  step: 2
                },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <div className={`modern-step ${currentStep === item.step ? 'active' : currentStep > item.step ? 'completed' : 'pending'}`}>
                    <div className="modern-step-icon-wrapper">
                      <div className="modern-step-icon">
                        {item.icon}
                      </div>
                      {currentStep > item.step && (
                        <div className="modern-step-check">
                          <CheckCircleFilled />
                        </div>
                      )}
                    </div>
                    <div className="modern-step-title">{item.title}</div>
                    <div className="modern-step-number">{item.step + 1}</div>
                  </div>
                  {index < 2 && (
                    <div className={`modern-step-connector ${currentStep > item.step ? 'completed' : ''}`}>
                      <div className="modern-step-line"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            size="large"
          >
            {/* Step 1: Child Information */}
            <div style={{ display: currentStep === 0 ? 'block' : 'none' }}>
              <div style={{
                marginBottom: '30px',
                paddingBottom: '20px',
                borderBottom: '2px solid #f0f0f0',
              }}>
                <Title level={3} style={{ color: '#1e3a5f', marginBottom: '10px' }}>
                  Step 1: Child Information
                </Title>
                <Paragraph style={{ color: '#666', fontSize: '15px' }}>
                  Please provide basic information about your child
                </Paragraph>
              </div>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="kidName"
                    label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Kid Name</span>}
                    rules={[{ required: true, message: 'Please enter child name' }]}
                  >
                    <Input
                      prefix={<UserOutlined style={{ color: '#00aeef' }} />}
                      placeholder="Enter child's name"
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
                    name="dateOfBirth"
                    label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Date of Birth</span>}
                    rules={[{ required: true, message: 'Please select date of birth' }]}
                  >
                    <DatePicker
                      style={{ width: '100%', height: '52px', borderRadius: '12px' }}
                      placeholder="Select date of birth"
                      disabledDate={(current) => current && current > dayjs().endOf('day')}
                      suffixIcon={<CalendarOutlined style={{ color: '#00aeef' }} />}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="screeningDate"
                    label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Screening Date</span>}
                  >
                    <DatePicker
                      style={{ width: '100%', height: '52px', borderRadius: '12px' }}
                      value={screeningDate}
                      disabled
                      suffixIcon={<CalendarOutlined style={{ color: '#00a651' }} />}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="fatherName"
                    label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Father Name</span>}
                    rules={[{ required: true, message: 'Please enter father name' }]}
                  >
                    <Input
                      prefix={<UserOutlined style={{ color: '#f7941d' }} />}
                      placeholder="Enter father's name"
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
                  form.validateFields(['kidName', 'dateOfBirth', 'fatherName']).then(() => {
                    setCurrentStep(1)
                  }).catch(() => {
                    message.error('Please fill in all required fields')
                  })
                }}
                style={{
                  height: '52px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '16px',
                  marginTop: '20px',
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

            {/* Step 2: Screening Questions */}
            <div style={{ display: currentStep === 1 ? 'block' : 'none' }}>
              <div style={{
                marginBottom: '30px',
                paddingBottom: '20px',
                borderBottom: '2px solid #f0f0f0',
              }}>
                <Title level={3} style={{ color: '#1e3a5f', marginBottom: '10px' }}>
                  Step 2: Screening Questions
                </Title>
                <Paragraph style={{ color: '#666', fontSize: '15px' }}>
                  Please answer the following questions about your child's development
                </Paragraph>
              </div>

              <div style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '10px' }}>
                {questions.map((question, index) => (
                  <Form.Item
                    key={index}
                    name={`question_${index + 1}`}
                    label={
                      <span style={{
                        color: '#1e3a5f',
                        fontWeight: '600',
                        fontSize: '15px',
                      }}>
                        {index + 1}. {question}
                      </span>
                    }
                    rules={[{ required: true, message: 'Please select an answer' }]}
                    style={{
                      marginBottom: '25px',
                      paddingBottom: '25px',
                      borderBottom: index < questions.length - 1 ? '1px solid #f0f0f0' : 'none',
                    }}
                  >
                    <Radio.Group>
                      <Space direction="horizontal" style={{ width: '100%' }}>
                        <Radio.Button
                          value="yes"
                          style={{
                            width: '100%',
                            height: '48px',
                            lineHeight: '48px',
                            textAlign: 'center',
                            borderRadius: '12px',
                            border: '2px solid #e8e8e8',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <span style={{ fontWeight: '600', fontSize: '15px' }}>Yes</span>
                        </Radio.Button>
                        <Radio.Button
                          value="no"
                          style={{
                            width: '100%',
                            height: '48px',
                            lineHeight: '48px',
                            textAlign: 'center',
                            borderRadius: '12px',
                            border: '2px solid #e8e8e8',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <span style={{ fontWeight: '600', fontSize: '15px' }}>No</span>
                        </Radio.Button>
                        <Radio.Button
                          value="sometimes"
                          style={{
                            width: '100%',
                            height: '48px',
                            lineHeight: '48px',
                            textAlign: 'center',
                            borderRadius: '12px',
                            border: '2px solid #e8e8e8',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <span style={{ fontWeight: '600', fontSize: '15px' }}>Sometimes</span>
                        </Radio.Button>
                      </Space>
                    </Radio.Group>
                  </Form.Item>
                ))}
              </div>

              <Row gutter={16} style={{ marginTop: '30px' }}>
                <Col span={12}>
                  <Button
                    block
                    onClick={() => setCurrentStep(0)}
                    style={{
                      height: '52px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      fontSize: '15px',
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
                      const questionFields = questions.map((_, index) => `question_${index + 1}`)
                      form.validateFields(questionFields).then(() => {
                        setCurrentStep(2)
                      }).catch(() => {
                        message.error('Please answer all questions')
                      })
                    }}
                    style={{
                      height: '52px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                      border: 'none',
                      fontWeight: '700',
                      fontSize: '16px',
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
                </Col>
              </Row>
            </div>

            {/* Step 3: Contact Details */}
            <div style={{ display: currentStep === 2 ? 'block' : 'none' }}>
              <div style={{
                marginBottom: '30px',
                paddingBottom: '20px',
                borderBottom: '2px solid #f0f0f0',
              }}>
                <Title level={3} style={{ color: '#1e3a5f', marginBottom: '10px' }}>
                  Step 3: Contact Details
                </Title>
                <Paragraph style={{ color: '#666', fontSize: '15px' }}>
                  Please provide your contact information so we can reach out to you
                </Paragraph>
              </div>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="phone"
                    label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Phone Number</span>}
                    rules={[
                      { required: true, message: 'Please enter phone number' },
                      { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number' }
                    ]}
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
                    rules={[
                      { required: true, message: 'Please enter email address' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined style={{ color: '#662d91' }} />}
                      placeholder="Enter email address"
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
                name="address"
                label={<span style={{ color: '#1e3a5f', fontWeight: '600' }}>Address</span>}
                rules={[{ required: true, message: 'Please enter address' }]}
              >
                <Input
                  prefix={<EnvironmentOutlined style={{ color: '#e31e24' }} />}
                  placeholder="Enter your address"
                  style={{
                    height: '52px',
                    borderRadius: '12px',
                    border: '2px solid #e8e8e8',
                  }}
                />
              </Form.Item>

              <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={12}>
                  <Button
                    block
                    onClick={() => setCurrentStep(1)}
                    style={{
                      height: '52px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      fontSize: '15px',
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
                      if (!loading) {
                        e.currentTarget.style.transform = 'translateY(-3px)'
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(227,30,36,0.3)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    Submit Screening ✓
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        </Card>
      </div>

      {/* Info Section */}
      <div
        data-animate-id="info-section"
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
          ...getSlideFromBottom(0, isVisible('info-section')),
        }}>
          Why Complete This Screening?
        </Title>
        <Row gutter={[30, 30]} justify="center">
          {[
            { icon: <SafetyCertificateFilled />, title: 'Expert Assessment', desc: 'Reviewed by certified specialists', color: '#e31e24' },
            { icon: <HeartFilled />, title: 'Early Detection', desc: 'Identify needs early for better outcomes', color: '#f7941d' },
            { icon: <CheckCircleFilled />, title: 'Personalized Plan', desc: 'Get tailored recommendations', color: '#00a651' },
          ].map((item, index) => (
            <Col xs={24} sm={8} md={6} key={index}>
              <div
                style={{
                  padding: '25px 20px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease',
                  ...getScaleIn(0.1 + index * 0.1, isVisible('info-section')),
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
                <div style={{ color: '#fff', fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>
                  {item.title}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                  {item.desc}
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
        .ant-radio-button-wrapper {
          border-radius: 12px !important;
          margin-bottom: 8px !important;
        }
        .ant-radio-button-wrapper:hover {
          border-color: #00aeef !important;
          color: #00aeef !important;
        }
        .ant-radio-button-wrapper-checked {
          background: linear-gradient(135deg, #00aeef 0%, #00a651 100%) !important;
          border-color: #00aeef !important;
          color: #fff !important;
        }
        .ant-radio-button-wrapper-checked:hover {
          background: linear-gradient(135deg, #00a651 0%, #00aeef 100%) !important;
          border-color: #00a651 !important;
        }
        .ant-picker {
          border: 2px solid #e8e8e8 !important;
        }
        .ant-input:hover, .ant-input:focus,
        .ant-picker:hover {
          border-color: #00aeef !important;
        }
        .ant-input:focus, .ant-picker-focused {
          box-shadow: 0 0 0 3px rgba(0,174,239,0.1) !important;
        }
        /* Modern Steps Design */
        .modern-steps-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          position: relative;
          padding: 20px 0;
        }
        
        .modern-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        
        .modern-step-icon-wrapper {
          position: relative;
          margin-bottom: 12px;
        }
        
        .modern-step-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          background: #f0f0f0;
          border: 3px solid #e0e0e0;
          color: #999;
        }
        
        .modern-step.active .modern-step-icon {
          background: linear-gradient(135deg, #00aeef 0%, #00a651 100%);
          border-color: #00aeef;
          color: #fff;
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.4);
        }
        
        .modern-step.completed .modern-step-icon {
          background: linear-gradient(135deg, #00a651 0%, #00aeef 100%);
          border-color: #00a651;
          color: #fff;
          box-shadow: 0 4px 16px rgba(0, 166, 81, 0.3);
        }
        
        .modern-step-check {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 24px;
          height: 24px;
          background: #00a651;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 14px;
          border: 2px solid #fff;
          box-shadow: 0 2px 8px rgba(0, 166, 81, 0.4);
          animation: checkPop 0.3s ease-out;
        }
        
        @keyframes checkPop {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        
        .modern-step-title {
          font-size: 14px;
          font-weight: 600;
          color: #666;
          text-align: center;
          margin-bottom: 6px;
          transition: all 0.3s ease;
          line-height: 1.4;
        }
        
        .modern-step.active .modern-step-title {
          color: #1e3a5f;
          font-weight: 700;
          font-size: 15px;
        }
        
        .modern-step.completed .modern-step-title {
          color: #00a651;
        }
        
        .modern-step-number {
          font-size: 11px;
          font-weight: 600;
          color: #999;
          background: #f5f5f5;
          padding: 2px 8px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .modern-step.active .modern-step-number {
          background: linear-gradient(135deg, #00aeef 0%, #00a651 100%);
          color: #fff;
        }
        
        .modern-step.completed .modern-step-number {
          background: #00a651;
          color: #fff;
        }
        
        .modern-step-connector {
          flex: 1;
          height: 3px;
          position: relative;
          margin: 0 10px;
          margin-top: -40px;
          z-index: 1;
        }
        
        .modern-step-line {
          width: 100%;
          height: 100%;
          background: #e0e0e0;
          border-radius: 2px;
          transition: all 0.5s ease;
        }
        
        .modern-step-connector.completed .modern-step-line {
          background: linear-gradient(90deg, #00a651 0%, #00aeef 100%);
          box-shadow: 0 2px 8px rgba(0, 166, 81, 0.3);
        }
        
        @media (max-width: 768px) {
          .modern-steps-container {
            flex-direction: column;
            gap: 20px;
          }
          
          .modern-step {
            width: 100%;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 16px;
            border: 2px solid transparent;
            transition: all 0.3s ease;
          }
          
          .modern-step.active {
            background: linear-gradient(135deg, rgba(0, 174, 239, 0.1) 0%, rgba(0, 166, 81, 0.1) 100%);
            border-color: #00aeef;
            box-shadow: 0 4px 16px rgba(0, 174, 239, 0.2);
          }
          
          .modern-step.completed {
            background: rgba(0, 166, 81, 0.05);
            border-color: #00a651;
          }
          
          .modern-step-icon-wrapper {
            margin-bottom: 0;
            margin-right: 15px;
          }
          
          .modern-step-icon {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
          
          .modern-step-title {
            flex: 1;
            text-align: left;
            margin-bottom: 0;
            font-size: 14px;
          }
          
          .modern-step-number {
            margin-left: auto;
          }
          
          .modern-step-connector {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .modern-step-icon {
            width: 44px;
            height: 44px;
            font-size: 18px;
          }
          
          .modern-step-title {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  )
}

export default Quiz

