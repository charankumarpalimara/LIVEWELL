import React, { useState, useEffect } from 'react'
import { Layout, Menu, Badge, Button, Drawer } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { 
  ShoppingCartOutlined, 
  HomeOutlined, 
  ShopOutlined, 
  BookOutlined, 
  PlayCircleOutlined,
  MenuOutlined,
  PhoneOutlined,
  UserOutlined,
  TeamOutlined,
  PictureOutlined,
  ContactsOutlined,
  AppstoreOutlined
} from '@ant-design/icons'
import { useCart } from '../context/CartContext'
import logo from '../live-well-rehabilitation-network-logo.png'

const { Header: AntHeader } = Layout

const Header = () => {
  const location = useLocation()
  const { getCartItemCount } = useCart()
  const cartCount = getCartItemCount()
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/" onClick={() => setDrawerVisible(false)}>Home</Link>,
    },
    {
      key: '/services',
      icon: <AppstoreOutlined />,
      label: <Link to="/services" onClick={() => setDrawerVisible(false)}>Our Services</Link>,
    },
    {
      key: '/products',
      icon: <ShopOutlined />,
      label: <Link to="/products" onClick={() => setDrawerVisible(false)}>Shop</Link>,
    },
    {
      key: '/appointment',
      icon: <UserOutlined />,
      label: <Link to="/appointment" onClick={() => setDrawerVisible(false)}>Book Appointment</Link>,
    },
    {
      key: '/programs',
      icon: <BookOutlined />,
      label: <Link to="/programs" onClick={() => setDrawerVisible(false)}>Programs</Link>,
    },
    {
      key: '/gallery',
      icon: <PictureOutlined />,
      label: <Link to="/gallery" onClick={() => setDrawerVisible(false)}>Gallery</Link>,
    },
    {
      key: '/about',
      icon: <TeamOutlined />,
      label: <Link to="/about" onClick={() => setDrawerVisible(false)}>About Us</Link>,
    },
    {
      key: '/contact',
      icon: <ContactsOutlined />,
      label: <Link to="/contact" onClick={() => setDrawerVisible(false)}>Contact</Link>,
    },
  ]

  return (
    <>
      {/* Top Bar */}
      <div
        style={{
          background: 'linear-gradient(90deg, #00aeef 0%, #00a651 100%)',
          padding: '8px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          color: '#fff',
          fontSize: '14px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PhoneOutlined style={{ animation: 'pulse 2s infinite' }} />
          <span>National Helpline:</span>
          <a 
            href="tel:+918977510100" 
            style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}
          >
            +91 8977510100
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span className="animate-wave" style={{ display: 'inline-block' }}>👋</span>
          <span>Mon - Sat: 8:00 AM - 7:30 PM</span>
        </div>
      </div>

      {/* Main Header */}
      <AntHeader
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#fff',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.05)',
          padding: '0 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '70px' : '80px',
          transition: 'all 0.3s ease',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }} className="logo-container">
          <img 
            src={logo} 
            alt="Live Well Rehabilitation Network" 
            style={{ 
              height: scrolled ? '45px' : '55px',
              transition: 'height 0.3s ease',
            }} 
          />
        </Link>
        
        {/* Desktop Menu */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className="desktop-menu">
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{
              borderBottom: 'none',
              background: 'transparent',
              fontSize: '15px',
              fontWeight: '500',
            }}
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/cart">
            <Badge count={cartCount} showZero={false}>
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                className="btn-animated"
                style={{
                  background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  height: '42px',
                  padding: '0 20px',
                  fontWeight: '600',
                }}
              >
                Cart
              </Button>
            </Badge>
          </Link>
          <Link to="/appointment" className="desktop-phone">
            <Button
              type="primary"
              className="btn-animated"
              style={{
                background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                border: 'none',
                borderRadius: '25px',
                height: '42px',
                padding: '0 20px',
                fontWeight: '600',
              }}
            >
              Book Now
            </Button>
          </Link>
          <Button
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
            className="mobile-menu-btn"
            style={{
              border: '2px solid #00aeef',
              color: '#00aeef',
              borderRadius: '8px',
            }}
          />
        </div>
      </AntHeader>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <img src={logo} alt="Live Well" style={{ height: '40px' }} />
        }
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={280}
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ border: 'none' }}
        />
        <div style={{ padding: '20px', borderTop: '1px solid #eee', marginTop: '20px' }}>
          <Link to="/appointment" onClick={() => setDrawerVisible(false)}>
            <Button
              type="primary"
              block
              size="large"
              style={{
                background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                border: 'none',
                borderRadius: '25px',
                height: '45px',
                fontWeight: '600',
              }}
            >
              Book Appointment
            </Button>
          </Link>
          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            <PhoneOutlined style={{ color: '#00aeef' }} />
            <a 
              href="tel:+918977510100" 
              style={{ color: '#00aeef', fontWeight: 'bold', marginLeft: '8px' }}
            >
              +91 8977510100
            </a>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Header
