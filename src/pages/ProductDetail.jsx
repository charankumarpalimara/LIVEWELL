import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Row, Col, Card, Button, InputNumber, Typography, Tag, Divider, Rate, message, Tabs, List, Badge } from 'antd'
import { 
  ShoppingCartOutlined, 
  ArrowLeftOutlined, 
  HeartOutlined, 
  HeartFilled,
  CheckCircleOutlined,
  TruckOutlined,
  SafetyCertificateOutlined,
  ShareAltOutlined,
  StarFilled,
  InfoCircleOutlined,
  GiftOutlined,
  ThunderboltOutlined
} from '@ant-design/icons'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const { Title, Paragraph, Text } = Typography

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
        padding: '60px 30px', 
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
            background: 'linear-gradient(135deg, #00aeef 0%, #1e3a5f 100%)',
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

  const productImages = product?.images && product.images.length > 0 ? product.images : [product.image]

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
                src={productImages[selectedImage]}
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
                fontSize: '17px', 
                lineHeight: '1.9', 
                color: '#4a5568', 
                marginBottom: '30px',
                fontWeight: '400',
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
                    background: 'linear-gradient(135deg, #00aeef 0%, #1e3a5f 100%)',
                    border: 'none',
                    borderRadius: '50px',
                    height: '55px',
                    padding: '0 45px',
                    fontWeight: '700',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 12px 35px rgba(0,174,239,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 14px 38px rgba(30,58,95,0.42)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,174,239,0.35)'
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

        {/* Image thumbnails */}
        {productImages.length > 1 && (
          <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {productImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(idx)}
                style={{
                  width: '90px',
                  height: '70px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: selectedImage === idx ? '2px solid #00aeef' : '1px solid #e5e7eb',
                  cursor: 'pointer',
                  boxShadow: selectedImage === idx ? '0 6px 18px rgba(0,174,239,0.25)' : 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                <img 
                  src={img} 
                  alt={`${product.name} ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Detailed Information Tabs */}
        <div style={{ marginTop: '80px' }}>
          <Tabs
            defaultActiveKey="1"
            style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
            items={[
              {
                key: '1',
                label: (
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>
                    <InfoCircleOutlined style={{ marginRight: '8px' }} />
                    Product Details
                  </span>
                ),
                children: (
                  <div>
                    <Title level={4} style={{ color: '#1e3a5f', marginBottom: '20px' }}>
                      About This Product
                    </Title>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.9', color: '#4a5568', marginBottom: '25px' }}>
                      {product.description}
                    </Paragraph>
                    
                    <Title level={4} style={{ color: '#1e3a5f', marginBottom: '20px', marginTop: '30px' }}>
                      Key Features
                    </Title>
                    <List
                      dataSource={[
                        'Safe and non-toxic materials certified for children',
                        'Designed by child development experts',
                        'Promotes cognitive and motor skill development',
                        'Durable construction for long-lasting use',
                        'Easy to clean and maintain',
                        'Suitable for home and therapy center use',
                      ]}
                      renderItem={(item) => (
                        <List.Item style={{ border: 'none', padding: '10px 0' }}>
                          <CheckCircleOutlined style={{ color: '#00a651', marginRight: '12px', fontSize: '18px' }} />
                          <span style={{ fontSize: '15px', color: '#4a5568' }}>{item}</span>
                        </List.Item>
                      )}
                    />
                  </div>
                ),
              },
              {
                key: '2',
                label: (
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>
                    <GiftOutlined style={{ marginRight: '8px' }} />
                    Benefits
                  </span>
                ),
                children: (
                  <div>
                    <Title level={4} style={{ color: '#1e3a5f', marginBottom: '20px' }}>
                      How This Product Helps
                    </Title>
                    <Row gutter={[20, 20]}>
                      {[
                        { 
                          title: 'Cognitive Development', 
                          desc: 'Enhances problem-solving skills and logical thinking',
                          color: '#00aeef',
                          icon: <ThunderboltOutlined />
                        },
                        { 
                          title: 'Motor Skills', 
                          desc: 'Improves fine and gross motor coordination',
                          color: '#00a651',
                          icon: <CheckCircleOutlined />
                        },
                        { 
                          title: 'Sensory Integration', 
                          desc: 'Stimulates multiple senses for better learning',
                          color: '#f7941d',
                          icon: <StarFilled />
                        },
                        { 
                          title: 'Social Skills', 
                          desc: 'Encourages interaction and communication',
                          color: '#662d91',
                          icon: <GiftOutlined />
                        },
                      ].map((benefit, index) => (
                        <Col xs={24} sm={12} key={index}>
                          <Card
                            style={{
                              border: `2px solid ${benefit.color}20`,
                              borderRadius: '16px',
                              background: `${benefit.color}08`,
                              transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-5px)'
                              e.currentTarget.style.boxShadow = `0 10px 30px ${benefit.color}20`
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)'
                              e.currentTarget.style.boxShadow = 'none'
                            }}
                          >
                            <div style={{ 
                              color: benefit.color, 
                              fontSize: '32px', 
                              marginBottom: '12px' 
                            }}>
                              {benefit.icon}
                            </div>
                            <Title level={5} style={{ color: '#1e3a5f', marginBottom: '8px' }}>
                              {benefit.title}
                            </Title>
                            <Paragraph style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                              {benefit.desc}
                            </Paragraph>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                ),
              },
              {
                key: '3',
                label: (
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>
                    <TruckOutlined style={{ marginRight: '8px' }} />
                    Specifications
                  </span>
                ),
                children: (
                  <div>
                    <Title level={4} style={{ color: '#1e3a5f', marginBottom: '20px' }}>
                      Product Specifications
                    </Title>
                    <Row gutter={[0, 15]}>
                      {[
                        { label: 'Category', value: product.category },
                        { label: 'Age Range', value: '2-12 years' },
                        { label: 'Material', value: 'Non-toxic, BPA-free materials' },
                        { label: 'Dimensions', value: 'Varies by product' },
                        { label: 'Weight', value: 'Lightweight and portable' },
                        { label: 'Warranty', value: '1 year manufacturer warranty' },
                        { label: 'Certification', value: 'CE Certified, ASTM Compliant' },
                        { label: 'Country of Origin', value: 'India' },
                      ].map((spec, index) => (
                        <Col span={24} key={index}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '15px 20px',
                            background: index % 2 === 0 ? '#f8fbff' : '#fff',
                            borderRadius: '10px',
                            border: '1px solid #f0f0f0',
                          }}>
                            <Text strong style={{ color: '#1e3a5f', fontSize: '15px' }}>
                              {spec.label}:
                            </Text>
                            <Text style={{ color: '#666', fontSize: '15px' }}>
                              {spec.value}
                            </Text>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                ),
              },
              {
                key: '4',
                label: (
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>
                    <StarFilled style={{ marginRight: '8px' }} />
                    Reviews ({Math.floor(Math.random() * 50) + 10})
                  </span>
                ),
                children: (
                  <div>
                    <div style={{ marginBottom: '30px', textAlign: 'center', padding: '30px', background: '#f8fbff', borderRadius: '16px' }}>
                      <div style={{ fontSize: '48px', fontWeight: '800', color: '#1e3a5f', marginBottom: '10px' }}>
                        {product.rating}
                      </div>
                      <Rate disabled defaultValue={product.rating} allowHalf style={{ fontSize: '24px', marginBottom: '10px' }} />
                      <Paragraph style={{ color: '#666', margin: 0 }}>
                        Based on {Math.floor(Math.random() * 50) + 10} customer reviews
                      </Paragraph>
                    </div>
                    <List
                      dataSource={[
                        { 
                          name: 'Priya Sharma', 
                          rating: 5, 
                          comment: 'Excellent product! My child loves it and it has really helped with their development.',
                          date: '2 days ago'
                        },
                        { 
                          name: 'Rajesh Kumar', 
                          rating: 5, 
                          comment: 'Great quality and very durable. Highly recommend for therapy sessions.',
                          date: '1 week ago'
                        },
                        { 
                          name: 'Sunita Patel', 
                          rating: 4, 
                          comment: 'Good product, my child enjoys using it. Could be improved with more features.',
                          date: '2 weeks ago'
                        },
                      ]}
                      renderItem={(item) => (
                        <List.Item style={{ border: 'none', padding: '20px 0', borderBottom: '1px solid #f0f0f0' }}>
                          <div style={{ width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                              <div>
                                <Text strong style={{ fontSize: '16px', color: '#1e3a5f' }}>
                                  {item.name}
                                </Text>
                                <Rate disabled defaultValue={item.rating} allowHalf style={{ fontSize: '14px', marginLeft: '10px' }} />
                              </div>
                              <Text style={{ color: '#999', fontSize: '13px' }}>{item.date}</Text>
                            </div>
                            <Paragraph style={{ color: '#666', fontSize: '15px', margin: 0 }}>
                              {item.comment}
                            </Paragraph>
                          </div>
                        </List.Item>
                      )}
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <div style={{
                color: '#00aeef',
                fontWeight: '700',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontSize: '14px',
              }}>
                More Products
              </div>
              <Title level={2} style={{ 
                color: '#1e3a5f', 
                marginBottom: '20px',
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '800',
                lineHeight: '1.2',
              }}>
                Related Products
              </Title>
              <div style={{
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #00aeef 0%, #00a651 100%)',
                margin: '0 auto',
                borderRadius: '2px',
              }} />
            </div>
            <Row gutter={[32, 32]}>
              {relatedProducts.map((item, index) => (
                <Col xs={24} sm={12} md={6} key={item.id}>
                  <Card
                    hoverable
                    onClick={() => navigate(`/product/${item.id}`, { replace: true })}
                    style={{
                      borderRadius: '24px',
                      overflow: 'visible',
                      border: 'none',
                      background: '#ffffff',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      padding: '0',
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                    bodyStyle={{ padding: '24px 20px' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                      e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,174,239,0.25)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                    }}
                    cover={
                      <div style={{ 
                        height: '200px', 
                        overflow: 'hidden',
                        position: 'relative',
                        background: `linear-gradient(135deg, ${categoryColors[item.category] || '#00aeef'}15 0%, ${categoryColors[item.category] || '#00aeef'}05 100%)`,
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: `linear-gradient(90deg, ${categoryColors[item.category] || '#00aeef'} 0%, ${categoryColors[item.category] || '#00aeef'}cc 100%)`,
                          zIndex: 1,
                        }} />
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
                        <Tag
                          style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            background: `linear-gradient(135deg, ${categoryColors[item.category] || '#00aeef'} 0%, ${categoryColors[item.category] || '#00aeef'}dd 100%)`,
                            color: '#fff',
                            border: 'none',
                            borderRadius: '20px',
                            fontWeight: '700',
                            fontSize: '11px',
                            padding: '4px 12px',
                            zIndex: 2,
                          }}
                        >
                          {item.category}
                        </Tag>
                      </div>
                    }
                  >
                    <Title level={5} style={{ 
                      color: '#1e3a5f', 
                      marginBottom: '10px',
                      fontSize: '16px',
                      fontWeight: '800',
                      lineHeight: '1.4',
                      minHeight: '44px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {item.name}
                    </Title>
                    <div style={{ 
                      fontSize: '22px', 
                      fontWeight: '900', 
                      color: '#e31e24',
                      letterSpacing: '0.3px',
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
