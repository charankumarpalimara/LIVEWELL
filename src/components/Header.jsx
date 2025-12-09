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
  AppstoreOutlined,
  CloseOutlined,
  GlobalOutlined,
  BranchesOutlined,
  SolutionOutlined,
  BankOutlined,
  FileTextOutlined,
  CalendarOutlined
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
      key: '/about',
      icon: <TeamOutlined />,
      label: <Link to="/about" onClick={() => setDrawerVisible(false)}>About Us</Link>,
    },
    {
      key: '/services',
      icon: <AppstoreOutlined />,
      label: <Link to="/services" onClick={() => setDrawerVisible(false)}>Our Services</Link>,
    },
    {
      key: '/products',
      icon: <ShopOutlined />,
      label: <Link to="/products" onClick={() => setDrawerVisible(false)}>Products</Link>,
    },
    // {
    //   key: '/quiz',
    //   icon: <FileTextOutlined />,
    //   label: <Link to="/quiz" onClick={() => setDrawerVisible(false)}>Screening Quiz</Link>,
    // },
    {
      key: '/patron-health-care',
      icon: <BankOutlined />,
      label: <Link to="/patron-health-care" onClick={() => setDrawerVisible(false)}>Patron Health Care</Link>,
    },
    // {
    //   key: '/appointment',
    //   icon: <UserOutlined />,
    //   label: <Link to="/appointment" onClick={() => setDrawerVisible(false)}>Book Appointment</Link>,
    // },
    // {
    //   key: '/programs',
    //   icon: <BookOutlined />,
    //   label: <Link to="/programs" onClick={() => setDrawerVisible(false)}>Programs</Link>,
    // },
    {
      key: '/branches',
      icon: <BranchesOutlined />,
      label: <Link to="/branches" onClick={() => setDrawerVisible(false)}>Branches</Link>,
    },
    {
      key: '/franchise',
      icon: <GlobalOutlined />,
      label: <Link to="/franchise" onClick={() => setDrawerVisible(false)}>Franchise</Link>,
    },
    {
      key: '/careers',
      icon: <SolutionOutlined />,
      label: <Link to="/careers" onClick={() => setDrawerVisible(false)}>Careers</Link>,
    },

    {
      key: '/gallery',
      icon: <PictureOutlined />,
      label: <Link to="/gallery" onClick={() => setDrawerVisible(false)}>Gallery</Link>,
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
        className="top-bar"
        style={{
          background: 'linear-gradient(90deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
          padding: '8px 15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          color: '#fff',
          fontSize: '13px',
          animation: 'slideDown 0.5s ease-out',
        }}
      >
        <div
          className="top-bar-item"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 12px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
            e.currentTarget.style.transform = 'scale(1.02)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <PhoneOutlined style={{ animation: 'pulse 2s infinite', fontSize: '14px' }} />
          <span className="top-bar-label">Helpline:</span>
          <a
            href="tel:+918977510100"
            style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none', fontSize: '13px' }}
          >
            +91 89775 10100
          </a>
        </div>
        <div
          className="top-bar-item top-bar-hours"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '50px',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ animation: 'wave 2s infinite' }}>👋</span>
          <span className="top-bar-hours-text">Mon - Sat: 8:00 AM - 7:30 PM</span>
        </div>
      </div>

      {/* Main Header */}
      <AntHeader
        className="main-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#fff',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)',
          padding: '0 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '65px' : '75px',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          flexWrap: 'nowrap',
          overflow: 'hidden',
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: 'none', flexShrink: 0 }}
          className="logo-container"
        >
          <img
            src={logo}
            alt="Live Well Rehabilitation Network"
            className="header-logo"
            style={{
              height: scrolled ? '40px' : '50px',
              maxWidth: '180px',
              width: 'auto',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          minWidth: 0,
          overflow: 'hidden',
        }}>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className="header-menu"
            style={{
              borderBottom: 'none',
              background: 'transparent',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: 0,
              flex: 1,
            }}
            overflowedIndicator={<MenuOutlined />}
          />
        </div>

        <div className="header-actions" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
        }}>


          <Link to="/quiz" className="cart-link">
            <Badge showZero={false}>
              <Button
                type="primary"
                icon={<FileTextOutlined />}
                className="btn-animated cart-btn"
                style={{
                  background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  height: '38px',
                  padding: '0 15px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  fontSize: '13px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,174,239,0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <span className="cart-btn-text">Quiz</span>
              </Button>
            </Badge>
          </Link>
          <Link to="/cart" className="cart-link">
            <Badge count={cartCount} showZero={false}>
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                className="btn-animated cart-btn"
                style={{
                  background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  height: '38px',
                  padding: '0 15px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  fontSize: '13px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,174,239,0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <span className="cart-btn-text">Cart</span>
              </Button>
            </Badge>
          </Link>
          <Link to="/appointment" className="desktop-phone book-now-link">
            <Button
              type="primary"
              className="btn-animated book-now-btn"
              style={{
                background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                border: 'none',
                borderRadius: '25px',
                height: '38px',
                padding: '0 16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                fontSize: '13px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(227,30,36,0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <CalendarOutlined style={{ marginRight: '8px' }} />
              <span className="book-now-text">Book Appointment</span>
            </Button>
          </Link>
          <Button
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
            className="mobile-menu-btn"
            style={{
              border: '2px solid #00aeef',
              color: '#00aeef',
              borderRadius: '10px',
              height: '38px',
              width: '38px',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#00aeef'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#00aeef'
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
        width={300}
        closeIcon={<CloseOutlined style={{ fontSize: '18px', color: '#1e3a5f' }} />}
        styles={{
          body: { padding: 0 },
          header: {
            borderBottom: '1px solid #f0f0f0',
            padding: '16px 20px',
          },
        }}
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{
            border: 'none',
            fontSize: '15px',
          }}
        />
        <div style={{
          padding: '25px',
          borderTop: '1px solid #f0f0f0',
          marginTop: '10px',
          background: '#f8fbff',
        }}>
          <Link to="/appointment" onClick={() => setDrawerVisible(false)}>
            <Button
              type="primary"
              block
              size="large"
              style={{
                background: 'linear-gradient(135deg, #e31e24 0%, #f7941d 100%)',
                border: 'none',
                borderRadius: '25px',
                height: '50px',
                fontWeight: '600',
                fontSize: '16px',
              }}
            >
              Book Appointment
            </Button>
          </Link>
          <div style={{
            marginTop: '20px',
            textAlign: 'center',
            padding: '15px',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
          }}>
            <PhoneOutlined style={{ color: '#00aeef', fontSize: '20px' }} />
            <div style={{ marginTop: '8px' }}>
              <a
                href="tel:+918977510100"
                style={{ color: '#1e3a5f', fontWeight: 'bold', fontSize: '18px' }}
              >
                +91 8977510100
              </a>
            </div>
            <div style={{ color: '#888', fontSize: '12px', marginTop: '5px' }}>
              Available Mon-Sat
            </div>
          </div>
        </div>
      </Drawer>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .header-menu .ant-menu-item {
            padding: 0 12px !important;
            font-size: 13px !important;
          }
        }

        @media (max-width: 992px) {
          .main-header {
            padding: 0 15px !important;
          }
          .desktop-menu {
            display: none !important;
          }
          .desktop-phone {
            display: none !important;
          }
          .cart-link {
            display: block;
          }
          .header-logo {
            height: 45px !important;
            max-width: 150px !important;
          }
          .top-bar {
            padding: 6px 10px !important;
            gap: 10px !important;
            font-size: 12px !important;
          }
          .top-bar-item {
            padding: 4px 10px !important;
            gap: 6px !important;
          }
        }

        @media (max-width: 768px) {
          .main-header {
            padding: 0 10px !important;
            height: 75px !important;
          }
          .header-logo {
            height: 45px !important;
            max-width: 150px !important;
          }
          .cart-btn, .book-now-btn {
            height: 40px !important;
            padding: 0 15px !important;
            font-size: 12px !important;
          }
          .cart-btn-text, .book-now-text {
            display: none;
          }
          .mobile-menu-btn {
            height: 40px !important;
            width: 40px !important;
          }
          .top-bar-hours-text {
            display: inline !important;
          }
          .top-bar-label {
            display: inline !important;
          }
        }

        @media (max-width: 576px) {
          .main-header {
            padding: 0 8px !important;
            height: 70px !important;
          }
          .header-logo {
            height: 42px !important;
            max-width: 140px !important;
          }
          .cart-btn, .book-now-btn {
            height: 38px !important;
            width: 38px !important;
            padding: 0 !important;
            min-width: 38px !important;
          }
          .mobile-menu-btn {
            height: 38px !important;
            width: 38px !important;
          }
          .header-actions {
            gap: 8px !important;
          }
          .top-bar {
            padding: 6px 8px !important;
            font-size: 12px !important;
          }
          .top-bar-item {
            padding: 4px 10px !important;
            font-size: 12px !important;
          }
          .top-bar-hours-text {
            display: inline !important;
          }
          .top-bar-label {
            display: inline !important;
          }
        }

        @media (min-width: 993px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }

        @media (min-width: 1201px) {
          .main-header {
            padding: 0 30px !important;
          }
        }
      `}</style>
    </>
  )
}

export default Header
