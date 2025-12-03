import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Appointment from './pages/Appointment'
import Programs from './pages/Programs'
import Activities from './pages/Activities'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import { CartProvider } from './context/CartContext'

const { Content } = Layout

function App() {
  return (
    <CartProvider>
      <Layout style={{ minHeight: '100vh', background: '#fff' }}>
        <Header />
        <Content style={{ background: '#fff' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </CartProvider>
  )
}

export default App

