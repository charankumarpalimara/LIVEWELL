import React from 'react'
import { Row, Col, Card, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined, StarFilled } from '@ant-design/icons'
import { products } from '../../data/products'
import { getSlideFromBottom } from '../../utils/animations'

const { Title } = Typography

const FeaturedProductsSection = ({ isVisible }) => {
  const featuredProducts = products.slice(0, 4)

  return (
    <div
      data-animate-id="products"
      style={{ padding: '90px 30px', background: '#fff' }}
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
          margin: 0,
          fontSize: 'clamp(26px, 4vw, 40px)',
          ...getSlideFromBottom(0.1, isVisible('products')),
        }}>
          Child Development Products
        </Title>
      </div>
      <Row gutter={[24, 24]}>
        {featuredProducts.map((product, index) => (
          <Col xs={24} sm={12} md={6} key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <Card
                hoverable
                cover={
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}>
                      {product.category}
                    </div>
                  </div>
                }
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  ...getSlideFromBottom(0.1 + index * 0.1, isVisible('products')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)'
                }}
              >
                <Card.Meta
                  title={<span style={{ color: '#1e3a5f', fontWeight: '700', fontSize: '15px' }}>{product.name}</span>}
                  description={
                    <div>
                      <div style={{ color: '#00aeef', fontSize: '22px', fontWeight: '800', marginTop: '8px' }}>
                        ${product.price}
                      </div>
                      <div style={{ color: '#f7941d', marginTop: '6px' }}>
                        {[...Array(Math.floor(product.rating))].map((_, i) => (
                          <StarFilled key={i} style={{ marginRight: '2px', fontSize: '14px' }} />
                        ))}
                        <span style={{ color: '#888', marginLeft: '6px', fontSize: '13px' }}>{product.rating}</span>
                      </div>
                    </div>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
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

