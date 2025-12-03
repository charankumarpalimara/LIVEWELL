import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, Button, InputNumber, Empty, Divider, Tag } from 'antd'
import { DeleteOutlined, ShoppingOutlined, ArrowRightOutlined, GiftOutlined, SafetyCertificateOutlined, TruckOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

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

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart()
  const visibleElements = useScrollAnimation()
  const isVisible = (id) => visibleElements.has(id)

  // Animation styles
  const getSlideFromLeft = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(-40px)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromRight = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(40px)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromBottom = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(35px)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div style={{ 
        minHeight: '70vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fbff 0%, #fff 100%)',
        padding: '50px 30px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00aeef20 0%, #00a65120 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px',
            animation: 'float 3s ease-in-out infinite',
          }}>
            <ShoppingOutlined style={{ fontSize: '50px', color: '#00aeef' }} />
          </div>
          <Title level={2} style={{ color: '#1e3a5f', marginBottom: '15px' }}>Your Cart is Empty</Title>
          <Paragraph style={{ color: '#666', marginBottom: '30px', fontSize: '16px' }}>
            Looks like you haven't added any products yet!
          </Paragraph>
          <Link to="/products">
            <Button 
              type="primary" 
              size="large"
              icon={<ShoppingOutlined />}
              style={{
                background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                border: 'none',
                borderRadius: '50px',
                height: '52px',
                padding: '0 40px',
                fontWeight: '700',
                fontSize: '16px',
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
              Start Shopping
            </Button>
          </Link>
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div style={{ background: '#f8fbff', minHeight: '80vh' }}>
      {/* Header */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,166,81,0.9) 0%, rgba(0,174,239,0.9) 100%)',
          padding: '60px 30px',
          textAlign: 'center',
        }}
      >
        <Title 
          level={1} 
          style={{ 
            color: '#fff', 
            marginBottom: '10px',
            fontSize: 'clamp(28px, 4vw, 42px)',
            animation: 'slideDown 0.8s ease-out',
          }}
        >
          Shopping Cart
        </Title>
        <Paragraph 
          style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '16px',
            animation: 'slideDown 0.8s ease-out 0.2s both',
          }}
        >
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
        </Paragraph>
      </div>

      <div 
        data-animate-id="cart-content"
        style={{ padding: '50px 30px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <Row gutter={[40, 40]}>
          {/* Cart Items */}
          <Col xs={24} lg={16}>
            <div style={getSlideFromLeft(0, isVisible('cart-content'))}>
              {cartItems.map((item, index) => (
                <Card
                  key={item.id}
                  style={{
                    marginBottom: '20px',
                    borderRadius: '16px',
                    border: 'none',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    ...getSlideFromLeft(0.05 + index * 0.1, isVisible('cart-content')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)'
                    e.currentTarget.style.boxShadow = '0 10px 35px rgba(0,174,239,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)'
                  }}
                  bodyStyle={{ padding: '20px' }}
                >
                  <Row gutter={20} align="middle">
                    <Col xs={8} sm={6} md={4}>
                      <div style={{ 
                        borderRadius: '12px', 
                        overflow: 'hidden',
                        boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                      }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '100%', height: '80px', objectFit: 'cover' }}
                        />
                      </div>
                    </Col>
                    <Col xs={16} sm={18} md={20}>
                      <Row align="middle" justify="space-between">
                        <Col xs={24} md={10}>
                          <Link to={`/products/${item.id}`} style={{ textDecoration: 'none' }}>
                            <Title level={5} style={{ color: '#1e3a5f', marginBottom: '5px' }}>
                              {item.name}
                            </Title>
                          </Link>
                          <Tag color="#00aeef" style={{ borderRadius: '50px', fontSize: '11px' }}>
                            {item.category}
                          </Tag>
                        </Col>
                        <Col xs={12} md={6} style={{ marginTop: '10px' }}>
                          <InputNumber
                            min={1}
                            max={10}
                            value={item.quantity}
                            onChange={(value) => updateQuantity(item.id, value)}
                            style={{ 
                              width: '100px',
                              borderRadius: '8px',
                            }}
                          />
                        </Col>
                        <Col xs={8} md={4} style={{ textAlign: 'right', marginTop: '10px' }}>
                          <div style={{ fontSize: '18px', fontWeight: '800', color: '#e31e24' }}>
                            ₹{item.price * item.quantity}
                          </div>
                        </Col>
                        <Col xs={4} md={4} style={{ textAlign: 'right', marginTop: '10px' }}>
                          <Button
                            type="text"
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => removeFromCart(item.id)}
                            style={{
                              borderRadius: '8px',
                              transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#fff1f0'
                              e.currentTarget.style.transform = 'scale(1.1)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent'
                              e.currentTarget.style.transform = 'scale(1)'
                            }}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </Col>

          {/* Order Summary */}
          <Col xs={24} lg={8}>
            <div style={getSlideFromRight(0.2, isVisible('cart-content'))}>
              <Card
                style={{
                  borderRadius: '20px',
                  border: 'none',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  position: 'sticky',
                  top: '100px',
                }}
                bodyStyle={{ padding: '30px' }}
              >
                <Title level={4} style={{ color: '#1e3a5f', marginBottom: '25px' }}>
                  Order Summary
                </Title>

                {/* Features */}
                <div style={{ marginBottom: '25px' }}>
                  {[
                    { icon: <TruckOutlined />, text: 'Free shipping on orders over ₹500', color: '#00a651' },
                    { icon: <SafetyCertificateOutlined />, text: 'Secure checkout', color: '#00aeef' },
                    { icon: <GiftOutlined />, text: 'Gift wrapping available', color: '#f7941d' },
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '12px',
                        padding: '10px 14px',
                        background: `${feature.color}10`,
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <span style={{ color: feature.color, fontSize: '18px' }}>{feature.icon}</span>
                      <span style={{ color: '#666', fontSize: '13px' }}>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Divider style={{ margin: '20px 0' }} />

                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ color: '#666' }}>Subtotal</span>
                    <span style={{ fontWeight: '600', color: '#1e3a5f' }}>₹{subtotal}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ color: '#666' }}>Shipping</span>
                    <span style={{ fontWeight: '600', color: shipping === 0 ? '#00a651' : '#1e3a5f' }}>
                      {shipping === 0 ? 'FREE' : `₹${shipping}`}
                    </span>
                  </div>
                </div>

                <Divider style={{ margin: '20px 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700', color: '#1e3a5f' }}>Total</span>
                  <span style={{ fontSize: '24px', fontWeight: '800', color: '#e31e24' }}>₹{total}</span>
                </div>

                <Button
                  type="primary"
                  block
                  size="large"
                  icon={<ArrowRightOutlined />}
                  style={{
                    height: '55px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                    border: 'none',
                    fontWeight: '700',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(227,30,36,0.35)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Proceed to Checkout
                </Button>

                <Link to="/products">
                  <Button
                    block
                    size="large"
                    style={{
                      height: '50px',
                      borderRadius: '12px',
                      marginTop: '15px',
                      border: '2px solid #00aeef',
                      color: '#00aeef',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#00aeef'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#00aeef'
                    }}
                  >
                    Continue Shopping
                  </Button>
                </Link>
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
      `}</style>
    </div>
  )
}

export default Cart
