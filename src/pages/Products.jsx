import React, { useState } from 'react'
import { Row, Col, Card, Input, Select, Button, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined, SearchOutlined, StarFilled } from '@ant-design/icons'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'

const { Meta } = Card
const { Search } = Input

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const { addToCart } = useCart()

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
  }

  const getGradient = (index) => {
    const gradients = [
      'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
      'linear-gradient(135deg, #f7941d 0%, #e31e24 100%)',
      'linear-gradient(135deg, #662d91 0%, #00aeef 100%)',
      'linear-gradient(135deg, #00a651 0%, #f7941d 100%)',
    ]
    return gradients[index % gradients.length]
  }

  return (
    <div style={{ background: '#fff', minHeight: '80vh' }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
          padding: '60px 30px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 5vw, 42px)', marginBottom: '15px' }}>
          Shop Child Development Products 🛍️
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px' }}>
          Quality products for your child's growth and learning
        </p>
      </div>

      <div style={{ padding: '40px 30px' }}>
        {/* Filters */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '40px',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Search
            placeholder="Search products..."
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            style={{ maxWidth: '400px', flex: 1 }}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <Select
            size="large"
            style={{ minWidth: '200px' }}
            placeholder="Select Category"
            value={selectedCategory}
            onChange={setSelectedCategory}
          >
            {categories.map((category) => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <Row gutter={[24, 24]}>
            {filteredProducts.map((product, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <Card
                    hoverable
                    className="card-animated hover-lift"
                    cover={
                      <div
                        style={{
                          height: '220px',
                          background: getGradient(index),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '48px',
                          color: '#fff',
                          position: 'relative',
                        }}
                      >
                        {product.name.split(' ')[0]}
                        {!product.inStock && (
                          <Tag
                            color="red"
                            style={{
                              position: 'absolute',
                              top: '10px',
                              right: '10px',
                            }}
                          >
                            Out of Stock
                          </Tag>
                        )}
                      </div>
                    }
                    style={{ height: '100%' }}
                    actions={[
                      <Button
                        type="primary"
                        icon={<ShoppingCartOutlined />}
                        className="btn-animated"
                        style={{
                          background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                          border: 'none',
                          width: '90%',
                          borderRadius: '20px',
                        }}
                        onClick={(e) => handleAddToCart(e, product)}
                        disabled={!product.inStock}
                      >
                        Add to Cart
                      </Button>,
                    ]}
                  >
                    <Meta
                      title={<span style={{ color: '#1e3a5f' }}>{product.name}</span>}
                      description={
                        <div>
                          <div style={{ color: '#888', marginBottom: '10px', fontSize: '13px' }}>
                            {product.category}
                          </div>
                          <div style={{ 
                            color: '#00aeef', 
                            fontSize: '22px', 
                            fontWeight: '700',
                          }}>
                            ${product.price}
                          </div>
                          <div style={{ color: '#f7941d', marginTop: '5px' }}>
                            {[...Array(Math.floor(product.rating))].map((_, i) => (
                              <StarFilled key={i} style={{ marginRight: '2px' }} />
                            ))}
                            <span style={{ color: '#888', marginLeft: '5px' }}>{product.rating}</span>
                          </div>
                        </div>
                      }
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <p style={{ fontSize: '18px', color: '#888' }}>No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
