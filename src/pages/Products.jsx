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
    <div style={{ background: '#f8fafc', minHeight: '80vh', fontFamily: "'Inter', 'Poppins', sans-serif" }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.12), transparent 30%), radial-gradient(circle at 80% 0%, rgba(34,197,94,0.15), transparent 28%), linear-gradient(135deg, #0b1224 0%, #0f172a 55%, #111827 100%)',
          padding: '72px 20px',
          textAlign: 'center',
          color: '#e2e8f0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 45%)' }} />
        <div style={{
          fontWeight: 800,
          letterSpacing: '1.8px',
          textTransform: 'uppercase',
          fontSize: '12px',
          opacity: 0.85,
        }}>
          Curated for child development
        </div>
        <Title
          level={1}
          style={{
            color: '#f8fafc',
            marginBottom: '14px',
            fontSize: 'clamp(30px, 4vw, 46px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          Modern tools to help kids thrive
        </Title>
        <Paragraph
          style={{
            fontSize: '16px',
            color: 'rgba(226,232,240,0.85)',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          Shop a finely tuned catalog of sensory, educational, and therapy products—picked for real-world impact.
        </Paragraph>
      </div>

      {/* Filters Section */}
      <div 
        data-animate-id="filters"
        style={{ 
          padding: '28px 20px', 
          background: '#f8fafc',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <Row gutter={[20, 20]} align="middle">
            <Col xs={24} md={12}>
              <div style={getSlideFromLeft(0, isVisible('filters'))}>
                <Input
                  placeholder="Search products..."
                  prefix={<SearchOutlined style={{ color: '#2563eb' }} />}
                  size="large"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    height: '52px',
                    background: '#ffffff',
                    boxShadow: '0 8px 26px rgba(15, 23, 42, 0.06)',
                    fontWeight: 600,
                    letterSpacing: '0.2px',
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
                <FilterOutlined style={{ color: '#0b1224', fontSize: '18px', marginTop: '10px' }} />
                {categories.map((category, index) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      borderRadius: '50px',
                      border: selectedCategory === category ? 'none' : '1px solid #2563eb',
                      background: selectedCategory === category
                        ? 'linear-gradient(135deg, #2563eb 0%, #22c55e 100%)' 
                        : '#fff',
                      color: selectedCategory === category ? '#fff' : '#2563eb',
                      fontWeight: 700,
                      height: '40px',
                      padding: '0 20px',
                      transition: 'all 0.3s ease',
                      boxShadow: selectedCategory === category ? '0 10px 25px rgba(37,99,235,0.25)' : '0 6px 18px rgba(15,23,42,0.06)',
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
        style={{ padding: '50px 20px 70px', maxWidth: '1180px', margin: '0 auto' }}
      >
        <div style={{ 
          marginBottom: '28px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          ...getSlideFromBottom(0, isVisible('products')),
        }}>
          <div>
            <Title level={4} style={{ color: '#0b1224', margin: 0, fontWeight: 800, letterSpacing: '-0.01em' }}>
              Showing {filteredProducts.length} Products
            </Title>
            <Paragraph style={{ color: '#475569', margin: 0, marginTop: '4px', fontWeight: 500 }}>
              Browse curated items by category or search keyword.
            </Paragraph>
          </div>
        </div>

        <Row gutter={[32, 32]}>
          {filteredProducts.map((product, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <Card
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  background: '#ffffff',
                  boxShadow: '0 18px 40px rgba(15,23,42,0.08)',
                  transition: 'transform 0.28s ease, box-shadow 0.28s ease',
                  padding: 0,
                  ...(index % 2 === 0
                    ? getSlideFromLeft(0.05 + (index * 0.03), isVisible('products'))
                    : getSlideFromRight(0.05 + (index * 0.03), isVisible('products'))
                  ),
                }}
                bodyStyle={{ padding: '18px 18px 20px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = `0 18px 40px ${categoryColors[product.category] || '#2563eb'}22`
                  const img = e.currentTarget.querySelector('.product-img')
                  if (img) img.style.transform = 'scale(1.08)'
                  const actions = e.currentTarget.querySelector('.product-actions')
                  if (actions) actions.style.opacity = '1'
                  const wishlistBtn = e.currentTarget.querySelector('.wishlist-btn')
                  if (wishlistBtn) wishlistBtn.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(15,23,42,0.08)'
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
                    background: '#f8fafc',
                  }}>
                    {/* Top accent border */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, ${categoryColors[product.category] || '#2563eb'} 0%, ${categoryColors[product.category] || '#22c55e'} 100%)`,
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
                        top: '14px',
                        left: '14px',
                        background: '#0f172a',
                        color: '#e2e8f0',
                        border: 'none',
                        borderRadius: '16px',
                        fontWeight: 700,
                        fontSize: '11px',
                        padding: '6px 12px',
                        letterSpacing: '0.4px',
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
                        width: '40px',
                        height: '40px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 8px 20px rgba(15,23,42,0.12)',
                        transition: 'all 0.25s ease',
                        zIndex: 2,
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
                          fontSize: '18px',
                          filter: 'drop-shadow(0 2px 4px rgba(227, 30, 36, 0.3))',
                        }} />
                      ) : (
                        <HeartOutlined style={{ color: '#475569', fontSize: '18px' }} />
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
                          width: '46px',
                          height: '46px',
                          boxShadow: '0 8px 24px rgba(15,23,42,0.15)',
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
                          background: '#0f172a',
                          border: 'none',
                          borderRadius: '50%',
                          width: '46px',
                          height: '46px',
                          color: '#fff',
                          boxShadow: '0 8px 24px rgba(15,23,42,0.2)',
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
                      color: '#0f172a', 
                      marginBottom: '10px', 
                      fontSize: '16px',
                      fontWeight: 800,
                      lineHeight: '1.5',
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
                  borderTop: '1px solid #f1f5f9',
                }}>
                  <div>
                    <span style={{
                      fontSize: '22px',
                      fontWeight: 800,
                      color: '#0f172a',
                      letterSpacing: '0.2px',
                    }}>
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span style={{
                        fontSize: '14px',
                        color: '#94a3b8',
                        textDecoration: 'line-through',
                        marginLeft: '10px',
                        fontWeight: 500,
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
                      background: '#0f172a',
                      border: 'none',
                      borderRadius: '12px',
                      height: '44px',
                      fontWeight: 700,
                      fontSize: '14px',
                      boxShadow: '0 10px 30px rgba(15,23,42,0.18)',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 14px 34px rgba(15,23,42,0.22)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(15,23,42,0.18)'
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
