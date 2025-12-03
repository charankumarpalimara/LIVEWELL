import React, { useState } from 'react'
import { Form, Input, Button, Select, DatePicker, TimePicker, Card, Typography, message, Row, Col } from 'antd'
import { CalendarOutlined, UserOutlined, PhoneOutlined, MailOutlined, CheckCircleOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

const { Title, Paragraph } = Typography
const { TextArea } = Input
const { Option } = Select

const Appointment = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      message.success('Appointment request submitted successfully! We will contact you soon.')
      form.resetFields()
    }, 1500)
  }

  const services = [
    'Autism Therapy',
    'Speech Therapy',
    'Occupational Therapy',
    'Behavior Therapy',
    'Special Education',
    'Play Therapy',
    'Music Therapy',
    'ABA Therapy',
    'Early Intervention',
    'Sensory Integration Therapy',
    'Physiotherapy',
  ]

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
          padding: '80px 30px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          animation: 'float 4s ease-in-out infinite',
        }} />
        
        <Title 
          level={1} 
          style={{ 
            color: '#fff', 
            marginBottom: '20px',
            fontSize: 'clamp(28px, 5vw, 42px)',
            animation: 'fadeInUp 0.8s ease-out',
          }}
        >
          Book an Appointment 📅
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.95)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}
        >
          Schedule a consultation with our expert therapists
        </Paragraph>
        <div 
          style={{ 
            marginTop: '20px', 
            fontSize: '22px', 
            color: '#fff', 
            fontWeight: '700',
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
          }}
        >
          <PhoneOutlined style={{ marginRight: '10px' }} />
          National Helpline: +91 8977510100
        </div>
      </div>

      <div style={{ padding: '60px 30px', maxWidth: '900px', margin: '0 auto' }}>
        <Card
          className="card-animated"
          style={{
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            size="large"
          >
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="childName"
                  label="Child's Name"
                  rules={[{ required: true, message: "Please enter child's name" }]}
                >
                  <Input 
                    prefix={<UserOutlined style={{ color: '#00aeef' }} />} 
                    placeholder="Enter child's name" 
                    style={{ borderRadius: '10px' }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="age"
                  label="Age"
                  rules={[{ required: true, message: 'Please enter age' }]}
                >
                  <Input 
                    type="number" 
                    placeholder="Enter age" 
                    min={0} 
                    max={18} 
                    style={{ borderRadius: '10px' }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="parentName"
                  label="Parent/Guardian Name"
                  rules={[{ required: true, message: 'Please enter parent name' }]}
                >
                  <Input 
                    prefix={<UserOutlined style={{ color: '#00aeef' }} />} 
                    placeholder="Enter parent name" 
                    style={{ borderRadius: '10px' }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    { required: true, message: 'Please enter phone number' },
                    { pattern: /^[0-9]{10}$/, message: 'Please enter valid 10-digit phone number' }
                  ]}
                >
                  <Input 
                    prefix={<PhoneOutlined style={{ color: '#00aeef' }} />} 
                    placeholder="Enter phone number" 
                    style={{ borderRadius: '10px' }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Please enter valid email' }
              ]}
            >
              <Input 
                prefix={<MailOutlined style={{ color: '#00aeef' }} />} 
                placeholder="Enter email address" 
                style={{ borderRadius: '10px' }}
              />
            </Form.Item>

            <Form.Item
              name="service"
              label="Service Required"
              rules={[{ required: true, message: 'Please select a service' }]}
            >
              <Select placeholder="Select a service" style={{ borderRadius: '10px' }}>
                {services.map((service) => (
                  <Option key={service} value={service}>
                    {service}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="preferredDate"
                  label="Preferred Date"
                  rules={[{ required: true, message: 'Please select a date' }]}
                >
                  <DatePicker
                    style={{ width: '100%', borderRadius: '10px' }}
                    disabledDate={(current) => current && current < dayjs().startOf('day')}
                    placeholder="Select date"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="preferredTime"
                  label="Preferred Time"
                  rules={[{ required: true, message: 'Please select a time' }]}
                >
                  <TimePicker
                    style={{ width: '100%', borderRadius: '10px' }}
                    format="HH:mm"
                    placeholder="Select time"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: 'Please enter address' }]}
            >
              <TextArea rows={3} placeholder="Enter your address" style={{ borderRadius: '10px' }} />
            </Form.Item>

            <Form.Item
              name="message"
              label="Additional Information (Optional)"
            >
              <TextArea 
                rows={4} 
                placeholder="Any additional information about your child's condition or requirements" 
                style={{ borderRadius: '10px' }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                size="large"
                icon={<CalendarOutlined />}
                className="btn-animated"
                style={{
                  background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  height: '55px',
                  fontWeight: '700',
                  fontSize: '18px',
                }}
              >
                Submit Appointment Request
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* What to Expect */}
        <Card
          className="card-animated"
          style={{
            marginTop: '30px',
            background: 'linear-gradient(135deg, #f8fbff 0%, #e8f4ff 100%)',
            border: '2px solid #00aeef',
          }}
        >
          <Title level={4} style={{ marginBottom: '20px', color: '#1e3a5f' }}>
            What to Expect:
          </Title>
          <Row gutter={[16, 16]}>
            {[
              'Initial consultation with our expert therapists',
              'Comprehensive assessment of your child\'s needs',
              'Personalized treatment plan development',
              'Option to watch your child\'s training sessions live',
              'Regular progress updates and parent training',
            ].map((item, index) => (
              <Col xs={24} sm={12} key={index}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircleOutlined style={{ color: '#00a651', fontSize: '18px' }} />
                  <span style={{ color: '#555' }}>{item}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </div>
  )
}

export default Appointment
