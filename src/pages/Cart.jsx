import React from 'react'
import { Table, Button, InputNumber, Typography, Card, Empty } from 'antd'
import { DeleteOutlined, ShoppingOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const { Title } = Typography

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              background: `linear-gradient(135deg, #ff6b9d 0%, #4ecdc4 100%)`,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
            }}
          >
            {text.split(' ')[0]}
          </div>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{text}</div>
            <div style={{ color: '#999', fontSize: '14px' }}>${record.price} each</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <span style={{ fontWeight: 'bold' }}>${price}</span>,
    },
    {
      title: 'Quantity',
      key: 'quantity',
      render: (_, record) => (
        <InputNumber
          min={1}
          max={10}
          value={record.quantity}
          onChange={(value) => updateQuantity(record.id, value)}
        />
      ),
    },
    {
      title: 'Total',
      key: 'total',
      render: (_, record) => (
        <span style={{ fontWeight: 'bold', color: '#ff6b9d', fontSize: '16px' }}>
          ${(record.price * record.quantity).toFixed(2)}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          danger
          icon={<DeleteOutlined />}
          onClick={() => removeFromCart(record.id)}
        >
          Remove
        </Button>
      ),
    },
  ]

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '50px', textAlign: 'center', minHeight: '80vh' }}>
        <Empty
          description="Your cart is empty"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        >
          <Link to="/products">
            <Button type="primary" size="large">
              Start Shopping
            </Button>
          </Link>
        </Empty>
      </div>
    )
  }

  return (
    <div style={{ padding: '50px', background: '#fff', minHeight: '80vh' }}>
      <Title level={1} style={{ marginBottom: '30px', color: '#2c3e50' }}>
        Shopping Cart 🛒
      </Title>

      <Table
        columns={columns}
        dataSource={cartItems}
        rowKey="id"
        pagination={false}
        style={{ marginBottom: '30px' }}
      />

      <Row gutter={[24, 24]}>
        <Col xs={24} md={16}>
          <Button onClick={() => navigate('/products')} style={{ marginRight: '10px' }}>
            Continue Shopping
          </Button>
          <Button danger onClick={clearCart}>
            Clear Cart
          </Button>
        </Col>
        <Col xs={24} md={8}>
          <Card
            style={{
              background: 'linear-gradient(135deg, #fff9f0 0%, #ffe66d 100%)',
              borderRadius: '15px',
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Subtotal:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontWeight: 'bold', fontSize: '18px' }}>
                <span>Total:</span>
                <span style={{ color: '#ff6b9d', fontSize: '24px' }}>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
            <Button
              type="primary"
              size="large"
              icon={<ShoppingOutlined />}
              block
              style={{
                background: '#ff6b9d',
                borderColor: '#ff6b9d',
                borderRadius: '25px',
                height: '50px',
                fontWeight: 'bold',
              }}
            >
              Proceed to Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cart

