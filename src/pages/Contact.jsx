import React from 'react'
import { Row, Col, Card, Typography, Form, Input, Button, message } from 'antd'
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined, 
  ClockCircleOutlined, 
  SendOutlined,
  WhatsAppOutlined
} from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { TextArea } = Input

const Contact = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    message.success('Thank you! We will contact you soon.')
    form.resetFields()
  }

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #00a651 0%, #00aeef 100%)',
          padding: '80px 30px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
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
          Contact Us 📞
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.95)', 
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}
        >
          Get in touch with us. We're here to help you and your child.
        </Paragraph>
      </div>

      <div style={{ padding: '80px 30px', maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[40, 40]}>
          <Col xs={24} lg={12}>
            <Card
              className="card-animated"
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                height: '100%',
              }}
            >
              <Title level={3} style={{ marginBottom: '30px', color: '#1e3a5f' }}>
                Send us a Message
              </Title>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Form.Item
                  name="name"
                  label="Your Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input placeholder="Enter your name" style={{ borderRadius: '10px' }} />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter valid email' }
                  ]}
                >
                  <Input prefix={<MailOutlined style={{ color: '#00aeef' }} />} placeholder="Enter your email" style={{ borderRadius: '10px' }} />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[{ required: true, message: 'Please enter phone number' }]}
                >
                  <Input prefix={<PhoneOutlined style={{ color: '#00aeef' }} />} placeholder="Enter phone number" style={{ borderRadius: '10px' }} />
                </Form.Item>
                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: 'Please enter subject' }]}
                >
                  <Input placeholder="Enter subject" style={{ borderRadius: '10px' }} />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea rows={5} placeholder="Enter your message" style={{ borderRadius: '10px' }} />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    icon={<SendOutlined />}
                    className="btn-animated"
                    style={{
                      background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                      border: 'none',
                      borderRadius: '25px',
                      height: '50px',
                      fontWeight: '600',
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  icon: <PhoneOutlined />,
                  title: 'Phone',
                  content: '+91 8977510100',
                  subtitle: 'National Helpline Number',
                  color: '#00aeef',
                  link: 'tel:+918977510100',
                },
                {
                  icon: <WhatsAppOutlined />,
                  title: 'WhatsApp',
                  content: '+91 8977510100',
                  subtitle: 'Chat with us',
                  color: '#25d366',
                  link: 'https://wa.me/918977510100',
                },
                {
                  icon: <MailOutlined />,
                  title: 'Email',
                  content: 'info@livewellrehab.com',
                  subtitle: 'Send us an email',
                  color: '#f7941d',
                  link: 'mailto:info@livewellrehab.com',
                },
                {
                  icon: <ClockCircleOutlined />,
                  title: 'Opening Hours',
                  content: 'Mon - Sat: 8:00 AM - 7:30 PM',
                  subtitle: 'Sunday: Closed',
                  color: '#00a651',
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  hoverable
                  className="card-animated hover-lift"
                  style={{
                    border: `2px solid ${item.color}`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}cc 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        color: '#fff',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <Title level={5} style={{ margin: 0, color: '#1e3a5f' }}>{item.title}</Title>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          style={{ 
                            fontSize: '18px', 
                            color: item.color, 
                            fontWeight: '600',
                            textDecoration: 'none',
                          }}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <div style={{ fontSize: '16px', color: '#333', fontWeight: '500' }}>
                          {item.content}
                        </div>
                      )}
                      <div style={{ fontSize: '13px', color: '#888' }}>{item.subtitle}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Contact
