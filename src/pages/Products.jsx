import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Input, Select, Typography, Badge, Rate, Button, Tag } from 'antd'
import { ShoppingCartOutlined, SearchOutlined, FilterOutlined, HeartOutlined, HeartFilled, EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

const { Title, Paragraph } = Typography
const { Option } = Select

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
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    const elements = document.querySelectorAll('[data-animate-id]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return visibleElements
}

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [wishlist, setWishlist] = useState([])
  const { addToCart } = useCart()
  const visibleElements = useScrollAnimation()
  const isVisible = (id) => visibleElements.has(id)

  // Animation styles
  const getSlideFromLeft = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(-35px)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromRight = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(35px)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromBottom = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const categories = ['All', ...new Set(products.map(p => p.category))]
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
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
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,174,239,0.9) 0%, rgba(102,45,145,0.9) 100%), url(https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=1920&h=500&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '90px 30px',
          textAlign: 'center',
        }}
      >
        <div style={{ 
          color: 'rgba(255,255,255,0.9)', 
          fontWeight: '700', 
          marginBottom: '12px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontSize: '13px',
          animation: 'slideDown 0.8s ease-out',
        }}>
          Our Products
        </div>
        <Title 
          level={1} 
          style={{ 
            color: '#fff', 
            marginBottom: '18px',
            fontSize: 'clamp(30px, 5vw, 46px)',
            animation: 'slideDown 0.8s ease-out 0.2s both',
          }}
        >
          Shop Child Development Products
        </Title>
        <Paragraph 
          style={{ 
            fontSize: '17px', 
            color: 'rgba(255,255,255,0.95)', 
            maxWidth: '700px', 
            margin: '0 auto',
            animation: 'slideDown 0.8s ease-out 0.4s both',
          }}
        >
          Discover our curated collection of educational toys, therapy tools, and sensory products
        </Paragraph>
      </div>

      {/* Filters Section */}
      <div 
        data-animate-id="filters"
        style={{ 
          padding: '40px 30px 30px', 
          background: '#f8fbff',
          borderBottom: '1px solid #eee',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[20, 20]} align="middle">
            <Col xs={24} md={12}>
              <div style={getSlideFromLeft(0, isVisible('filters'))}>
                <Input
                  placeholder="Search products..."
                  prefix={<SearchOutlined style={{ color: '#00aeef' }} />}
                  size="large"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ 
                    borderRadius: '12px',
                    border: '2px solid #e8e8e8',
                    height: '50px',
                  }}
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ 
                display: 'flex', 
                gap: '10px', 
                flexWrap: 'wrap',
                ...getSlideFromRight(0.1, isVisible('filters')),
              }}>
                <FilterOutlined style={{ color: '#1e3a5f', fontSize: '18px', marginTop: '10px' }} />
                {categories.map((category, index) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      borderRadius: '50px',
                      border: selectedCategory === category ? 'none' : '2px solid #00aeef',
                      background: selectedCategory === category 
                        ? 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)' 
                        : '#fff',
                      color: selectedCategory === category ? '#fff' : '#00aeef',
                      fontWeight: '600',
                      height: '40px',
                      padding: '0 22px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedCategory !== category) {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Products Grid */}
      <div 
        data-animate-id="products"
        style={{ padding: '60px 30px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{ 
          marginBottom: '30px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          ...getSlideFromBottom(0, isVisible('products')),
        }}>
          <Title level={4} style={{ color: '#1e3a5f', margin: 0 }}>
            Showing {filteredProducts.length} Products
          </Title>
        </div>

        <Row gutter={[32, 32]}>
          {filteredProducts.map((product, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
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
                  ...(index % 2 === 0 
                    ? getSlideFromLeft(0.05 + (index * 0.03), isVisible('products'))
                    : getSlideFromRight(0.05 + (index * 0.03), isVisible('products'))
                  ),
                }}
                bodyStyle={{ padding: '24px 20px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)'
                  e.currentTarget.style.boxShadow = `0 25px 60px ${categoryColors[product.category] || '#00aeef'}25`
                  const img = e.currentTarget.querySelector('.product-img')
                  if (img) img.style.transform = 'scale(1.12)'
                  const actions = e.currentTarget.querySelector('.product-actions')
                  if (actions) actions.style.opacity = '1'
                  const wishlistBtn = e.currentTarget.querySelector('.wishlist-btn')
                  if (wishlistBtn) wishlistBtn.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                  const img = e.currentTarget.querySelector('.product-img')
                  if (img) img.style.transform = 'scale(1)'
                  const actions = e.currentTarget.querySelector('.product-actions')
                  if (actions) actions.style.opacity = '0'
                  const wishlistBtn = e.currentTarget.querySelector('.wishlist-btn')
                  if (wishlistBtn) wishlistBtn.style.transform = 'scale(1)'
                }}
                cover={
                  <div style={{ 
                    position: 'relative', 
                    height: '220px', 
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${categoryColors[product.category] || '#00aeef'}15 0%, ${categoryColors[product.category] || '#00aeef'}05 100%)`,
                  }}>
                    {/* Top accent border */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${categoryColors[product.category] || '#00aeef'} 0%, ${categoryColors[product.category] || '#00aeef'}cc 50%, ${categoryColors[product.category] || '#00aeef'} 100%)`,
                      zIndex: 1,
                    }} />
                    <img
                      className="product-img"
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
                      background: `linear-gradient(to bottom, transparent 50%, ${categoryColors[product.category] || '#00aeef'}20 100%)`,
                      pointerEvents: 'none',
                    }} />
                    {/* Category Badge */}
                    <Tag
                      style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        background: `linear-gradient(135deg, ${categoryColors[product.category] || '#00aeef'} 0%, ${categoryColors[product.category] || '#00aeef'}dd 100%)`,
                        color: '#fff',
                        border: 'none',
                        borderRadius: '20px',
                        fontWeight: '700',
                        fontSize: '11px',
                        padding: '6px 16px',
                        boxShadow: `0 4px 12px ${categoryColors[product.category] || '#00aeef'}40`,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        zIndex: 2,
                      }}
                    >
                      {product.category}
                    </Tag>
                    {/* Wishlist Button */}
                    <div
                      className="wishlist-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleWishlist(product.id)
                      }}
                      style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        width: '42px',
                        height: '42px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 2,
                        border: '2px solid rgba(255,255,255,0.8)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#fff'
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)'
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)'
                      }}
                    >
                      {wishlist.includes(product.id) ? (
                        <HeartFilled style={{ 
                          color: '#e31e24', 
                          fontSize: '20px',
                          filter: 'drop-shadow(0 2px 4px rgba(227, 30, 36, 0.3))',
                        }} />
                      ) : (
                        <HeartOutlined style={{ color: '#718096', fontSize: '20px' }} />
                      )}
                    </div>
                    {/* Quick Actions */}
                    <div
                      className="product-actions"
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '10px',
                        opacity: 0,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 2,
                      }}
                    >
                      <Link to={`/product/${product.id}`}>
                        <Button
                          icon={<EyeOutlined />}
                          style={{
                            background: '#ffffff',
                            border: 'none',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1) translateY(0)'
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'
                          }}
                        />
                      </Link>
                      <Button
                        icon={<ShoppingCartOutlined />}
                        onClick={(e) => {
                          e.preventDefault()
                          addToCart(product)
                        }}
                        style={{
                          background: `linear-gradient(135deg, ${categoryColors[product.category] || '#00aeef'} 0%, ${categoryColors[product.category] || '#00a651'} 100%)`,
                          border: 'none',
                          borderRadius: '50%',
                          width: '48px',
                          height: '48px',
                          color: '#fff',
                          boxShadow: `0 6px 20px ${categoryColors[product.category] || '#00aeef'}40`,
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'
                          e.currentTarget.style.boxShadow = `0 8px 25px ${categoryColors[product.category] || '#00aeef'}50`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1) translateY(0)'
                          e.currentTarget.style.boxShadow = `0 6px 20px ${categoryColors[product.category] || '#00aeef'}40`
                        }}
                      />
                    </div>
                  </div>
                }
              >
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <Title 
                    level={5} 
                    style={{ 
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
                      letterSpacing: '0.2px',
                    }}
                  >
                    {product.name}
                  </Title>
                </Link>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '14px',
                }}>
                  <Rate 
                    disabled 
                    defaultValue={product.rating} 
                    allowHalf 
                    style={{ fontSize: '15px' }}
                  />
                  <span style={{ 
                    color: '#718096', 
                    fontSize: '13px',
                    fontWeight: '600',
                  }}>
                    ({product.rating})
                  </span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  paddingTop: '12px',
                  borderTop: '1px solid #f0f0f0',
                }}>
                  <div>
                    <span style={{ 
                      fontSize: '24px', 
                      fontWeight: '900', 
                      color: '#e31e24',
                      letterSpacing: '0.3px',
                    }}>
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span style={{ 
                        fontSize: '15px', 
                        color: '#a0aec0', 
                        textDecoration: 'line-through',
                        marginLeft: '10px',
                        fontWeight: '500',
                      }}>
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', marginTop: '12px', display: 'block' }}>
                  <Button
                    type="primary"
                    block
                    style={{
                      background: `linear-gradient(135deg, ${categoryColors[product.category] || '#00aeef'} 0%, ${categoryColors[product.category] || '#00a651'} 100%)`,
                      border: 'none',
                      borderRadius: '12px',
                      height: '42px',
                      fontWeight: '700',
                      fontSize: '14px',
                      boxShadow: `0 4px 15px ${categoryColors[product.category] || '#00aeef'}30`,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = `0 6px 20px ${categoryColors[product.category] || '#00aeef'}40`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = `0 4px 15px ${categoryColors[product.category] || '#00aeef'}30`
                    }}
                  >
                    View Details
                  </Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <Title level={4} style={{ color: '#888' }}>No products found</Title>
            <Paragraph style={{ color: '#aaa' }}>Try adjusting your search or filter criteria</Paragraph>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ant-input:hover, .ant-input:focus {
          border-color: #00aeef !important;
        }
        .ant-input:focus {
          box-shadow: 0 0 0 3px rgba(0,174,239,0.1) !important;
        }
      `}</style>
    </div>
  )
}

export default Products
