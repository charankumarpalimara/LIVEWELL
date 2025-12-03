import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Row, Col, Card, Button, InputNumber, Typography, Tag, Divider, Rate, message } from 'antd'
import { 
  ShoppingCartOutlined, 
  ArrowLeftOutlined, 
  HeartOutlined, 
  HeartFilled,
  CheckCircleOutlined,
  TruckOutlined,
  SafetyCertificateOutlined,
  ShareAltOutlined
} from '@ant-design/icons'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const { Title, Paragraph } = Typography

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = products.find((p) => p.id === parseInt(id))
  
  // Related products
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4)

  if (!product) {
    return (
      <div style={{ 
        padding: '100px 30px', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f8fbff 0%, #fff 100%)',
        minHeight: '60vh',
      }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #e31e2420 0%, #f7941d20 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 30px',
          fontSize: '40px',
        }}>
          🔍
        </div>
        <Title level={2} style={{ color: '#1e3a5f' }}>Product not found</Title>
        <Paragraph style={{ color: '#888', marginBottom: '30px' }}>
          The product you're looking for doesn't exist or has been removed.
        </Paragraph>
        <Button 
          type="primary" 
          size="large"
          onClick={() => navigate('/products')}
          style={{
            background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
            border: 'none',
            borderRadius: '50px',
            height: '50px',
            padding: '0 40px',
            fontWeight: '600',
          }}
        >
          Back to Products
        </Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    message.success(`${product.name} added to cart!`)
  }

  const categoryColors = {
    'Educational': '#00aeef',
    'Sensory': '#00a651',
    'Therapy': '#e31e24',
    'Toys': '#f7941d',
    'Books': '#662d91',
  }

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Breadcrumb Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #00aeef 100%)',
          padding: '40px 30px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/products')}
            style={{ 
              marginBottom: '10px',
              border: 'none',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
            }}
          >
            Back to Products
          </Button>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            {' / '}
            <Link to="/products" style={{ color: 'rgba(255,255,255,0.7)' }}>Products</Link>
            {' / '}
            <span style={{ color: '#fff' }}>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div style={{ padding: '60px 30px', maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[50, 40]}>
          {/* Product Image */}
          <Col xs={24} md={12}>
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                animation: 'fadeInLeft 0.8s ease-out',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '450px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Wishlist Button */}
              <div
                onClick={() => setIsWishlisted(!isWishlisted)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease',
                }}
              >
                {isWishlisted ? (
                  <HeartFilled style={{ color: '#e31e24', fontSize: '24px' }} />
                ) : (
                  <HeartOutlined style={{ color: '#888', fontSize: '24px' }} />
                )}
              </div>
              {/* Category Badge */}
              <Tag
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: categoryColors[product.category] || '#00aeef',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '8px 20px',
                  fontWeight: '600',
                  fontSize: '13px',
                }}
              >
                {product.category}
              </Tag>
            </div>
          </Col>

          {/* Product Info */}
          <Col xs={24} md={12}>
            <div style={{ animation: 'fadeInRight 0.8s ease-out' }}>
              <Title level={1} style={{ 
                marginBottom: '15px', 
                color: '#1e3a5f',
                fontSize: 'clamp(28px, 4vw, 40px)',
              }}>
                {product.name}
              </Title>
              
              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                <Rate disabled defaultValue={product.rating} allowHalf style={{ fontSize: '18px' }} />
                <span style={{ color: '#888', fontSize: '15px' }}>({product.rating} rating)</span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: '30px' }}>
                <span style={{ 
                  fontSize: '40px', 
                  fontWeight: '800', 
                  color: '#e31e24',
                }}>
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span style={{ 
                    marginLeft: '15px', 
                    fontSize: '22px', 
                    color: '#999',
                    textDecoration: 'line-through',
                  }}>
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              <Divider style={{ margin: '25px 0' }} />

              {/* Description */}
              <Paragraph style={{ 
                fontSize: '16px', 
                lineHeight: '1.9', 
                color: '#555', 
                marginBottom: '30px' 
              }}>
                {product.description}
              </Paragraph>

              {/* Features */}
              <div style={{ marginBottom: '30px' }}>
                {[
                  { icon: <TruckOutlined />, text: 'Free shipping on orders over ₹500', color: '#00a651' },
                  { icon: <SafetyCertificateOutlined />, text: 'Safe and non-toxic materials', color: '#00aeef' },
                  { icon: <CheckCircleOutlined />, text: 'Quality guaranteed', color: '#f7941d' },
                ].map((feature, index) => (
                  <div 
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px',
                      padding: '10px 16px',
                      background: `${feature.color}10`,
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <span style={{ color: feature.color, fontSize: '18px' }}>{feature.icon}</span>
                    <span style={{ color: '#555', fontSize: '14px' }}>{feature.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Quantity */}
              <div style={{ marginBottom: '30px' }}>
                <Title level={5} style={{ color: '#1e3a5f', marginBottom: '12px' }}>Quantity:</Title>
                <InputNumber
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={setQuantity}
                  style={{ 
                    width: '130px',
                    height: '48px',
                    borderRadius: '10px',
                  }}
                  size="large"
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Button
                  type="primary"
                  size="large"
                  icon={<ShoppingCartOutlined />}
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  style={{
                    background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                    border: 'none',
                    borderRadius: '50px',
                    height: '55px',
                    padding: '0 45px',
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
                  Add to Cart
                </Button>
                <Button
                  size="large"
                  icon={<ShareAltOutlined />}
                  style={{
                    borderRadius: '50px',
                    height: '55px',
                    padding: '0 30px',
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
                  Share
                </Button>
              </div>

              {!product.inStock && (
                <Tag color="red" style={{ 
                  fontSize: '14px', 
                  padding: '10px 20px',
                  marginTop: '20px',
                  borderRadius: '50px',
                }}>
                  Out of Stock
                </Tag>
              )}
            </div>
          </Col>
        </Row>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: '80px' }}>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              marginBottom: '35px',
              textAlign: 'center',
            }}>
              Related Products
            </Title>
            <Row gutter={[24, 24]}>
              {relatedProducts.map((item, index) => (
                <Col xs={24} sm={12} md={6} key={item.id}>
                  <Card
                    hoverable
                    onClick={() => navigate(`/products/${item.id}`)}
                    style={{
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: 'none',
                      boxShadow: '0 5px 20px rgba(0,0,0,0.06)',
                      transition: 'all 0.4s ease',
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)'
                      e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,174,239,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.06)'
                    }}
                    cover={
                      <div style={{ height: '180px', overflow: 'hidden' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                          }}
                        />
                      </div>
                    }
                    bodyStyle={{ padding: '18px' }}
                  >
                    <Title level={5} style={{ 
                      color: '#1e3a5f', 
                      marginBottom: '8px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {item.name}
                    </Title>
                    <div style={{ 
                      fontSize: '18px', 
                      fontWeight: '700', 
                      color: '#e31e24' 
                    }}>
                      ₹{item.price}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default ProductDetail
