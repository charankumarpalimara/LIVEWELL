import React from 'react'
import { Row, Col, Card, Button, Typography, Tag, Rate } from 'antd'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'
import { products } from '../../data/products'
import { getSlideFromBottom } from '../../utils/animations'

const { Title } = Typography

const FeaturedProductsSection = ({ isVisible }) => {
  const featuredProducts = products.slice(0, 4)

  // Category color mapping
  const categoryColors = {
    'Educational': '#00aeef',
    'Sensory': '#00a651',
    'Therapy': '#e31e24',
    'Toys': '#f7941d',
    'Books': '#662d91',
  }

  return (
    <div
      data-animate-id="products"
      style={{ 
        padding: '60px 30px',
        background: '#fff',
        position: 'relative',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{
          color: '#00a651',
          fontWeight: '700',
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: '13px',
          ...getSlideFromBottom(0, isVisible('products')),
        }}>
          Our Shop
        </div>
        <Title level={2} style={{
          color: '#1e3a5f',
          marginBottom: '20px',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: '800',
          lineHeight: '1.2',
          ...getSlideFromBottom(0.1, isVisible('products')),
        }}>
          Child Development Products
        </Title>
        <div style={{
          width: '100px',
          height: '4px',
          background: 'linear-gradient(90deg, #00a651 0%, #00aeef 100%)',
          margin: '0 auto',
          borderRadius: '2px',
          ...getSlideFromBottom(0.2, isVisible('products')),
        }} />
      </div>
      <Row gutter={[32, 32]}>
        {featuredProducts.map((product, index) => {
          const productColor = categoryColors[product.category] || '#00aeef'
          return (
            <Col xs={24} sm={12} md={6} key={product.id}>
              <Card
                hoverable
                style={{
                  borderRadius: '24px',
                  overflow: 'visible',
                  border: 'none',
                  background: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: '0',
                  ...getSlideFromBottom(0.1 + index * 0.1, isVisible('products')),
                }}
                bodyStyle={{ padding: '24px 20px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)'
                  e.currentTarget.style.boxShadow = `0 25px 60px ${productColor}25`
                  const img = e.currentTarget.querySelector('.featured-product-img')
                  if (img) img.style.transform = 'scale(1.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                  const img = e.currentTarget.querySelector('.featured-product-img')
                  if (img) img.style.transform = 'scale(1)'
                }}
                cover={
                  <div style={{ 
                    position: 'relative', 
                    height: '220px', 
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${productColor}15 0%, ${productColor}05 100%)`,
                  }}>
                    {/* Top accent border */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${productColor} 0%, ${productColor}cc 50%, ${productColor} 100%)`,
                      zIndex: 1,
                    }} />
                    <img
                      className="featured-product-img"
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to bottom, transparent 50%, ${productColor}20 100%)`,
                      pointerEvents: 'none',
                    }} />
                    {/* Category Badge */}
                    <Tag
                      style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        background: `linear-gradient(135deg, ${productColor} 0%, ${productColor}dd 100%)`,
                        color: '#fff',
                        border: 'none',
                        borderRadius: '20px',
                        fontWeight: '700',
                        fontSize: '11px',
                        padding: '6px 16px',
                        boxShadow: `0 4px 12px ${productColor}40`,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        zIndex: 2,
                      }}
                    >
                      {product.category}
                    </Tag>
                  </div>
                }
              >
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <Title level={5} style={{ 
                    color: '#1e3a5f', 
                    marginBottom: '3px',
                    fontSize: '16px',
                    fontWeight: '800',
                    lineHeight: '1.4',
                    minHeight: '24px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = productColor
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#1e3a5f'
                  }}
                  >
                    {product.name}
                  </Title>
                  <div style={{ marginBottom: '3px' }}>
                    <Rate 
                      disabled 
                      defaultValue={product.rating} 
                      style={{ fontSize: '15px' }}
                    />
                    <span style={{ 
                      color: '#888', 
                      marginLeft: '8px', 
                      fontSize: '13px',
                      fontWeight: '600',
                    }}>
                      ({product.rating})
                    </span>
                  </div>
                  <div style={{ 
                    fontSize: '24px', 
                    fontWeight: '900', 
                    color: productColor,
                    marginTop: '3px',
                  }}>
                    ₹{Math.floor(product.price)}
                  </div>
                </Link>
              </Card>
            </Col>
          )
        })}
      </Row>
      <div style={{ textAlign: 'center', marginTop: '45px', ...getSlideFromBottom(0.5, isVisible('products')) }}>
        <Link to="/products">
          <Button
            type="primary"
            size="large"
            style={{
              background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
              border: 'none',
              borderRadius: '50px',
              height: '50px',
              padding: '0 45px',
              fontWeight: '600',
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
            View All Products <ArrowRightOutlined />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedProductsSection

