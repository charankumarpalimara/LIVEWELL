import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Card, Button, InputNumber, Typography, Tag, Divider } from 'antd'
import { ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const { Title, Paragraph } = Typography

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <Title level={2}>Product not found</Title>
        <Button onClick={() => navigate('/products')}>Back to Products</Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div style={{ padding: '50px', background: '#fff', minHeight: '80vh' }}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/products')}
        style={{ marginBottom: '30px' }}
      >
        Back to Products
      </Button>

      <Row gutter={[40, 40]}>
        <Col xs={24} md={12}>
          <div
            style={{
              height: '500px',
              background: `linear-gradient(135deg, ${product.image.includes('ff6b9d') ? '#ff6b9d' : product.image.includes('4ecdc4') ? '#4ecdc4' : product.image.includes('ffe66d') ? '#ffe66d' : '#95e1d3'} 0%, ${product.image.includes('ff6b9d') ? '#ff9dc4' : product.image.includes('4ecdc4') ? '#7ee8e0' : product.image.includes('ffe66d') ? '#fff28f' : '#b8ede5'} 100%)`,
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '72px',
            }}
          >
            {product.name.split(' ')[0]}
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div>
            <Tag color="#4ecdc4" style={{ marginBottom: '15px', fontSize: '14px', padding: '5px 15px' }}>
              {product.category}
            </Tag>
            <Title level={1} style={{ marginBottom: '20px', color: '#2c3e50' }}>
              {product.name}
            </Title>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '36px', color: '#ff6b9d', fontWeight: 'bold' }}>
                ${product.price}
              </span>
              <span style={{ marginLeft: '15px', fontSize: '18px', color: '#999' }}>
                ⭐ {product.rating} Rating
              </span>
            </div>
            <Divider />
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '30px' }}>
              {product.description}
            </Paragraph>
            
            <div style={{ marginBottom: '30px' }}>
              <Title level={4}>Quantity:</Title>
              <InputNumber
                min={1}
                max={10}
                value={quantity}
                onChange={setQuantity}
                style={{ width: '120px' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Button
                type="primary"
                size="large"
                icon={<ShoppingCartOutlined />}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                style={{
                  background: '#ff6b9d',
                  borderColor: '#ff6b9d',
                  borderRadius: '25px',
                  height: '50px',
                  padding: '0 40px',
                  fontWeight: 'bold',
                }}
              >
                Add to Cart
              </Button>
              {!product.inStock && (
                <Tag color="red" style={{ fontSize: '14px', padding: '10px 20px' }}>
                  Out of Stock
                </Tag>
              )}
            </div>

            <Divider />

            <div>
              <Title level={4}>Product Details:</Title>
              <ul style={{ paddingLeft: '20px', color: '#666' }}>
                <li>Age-appropriate design</li>
                <li>Safe and non-toxic materials</li>
                <li>Educational value</li>
                <li>Durable construction</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetail

