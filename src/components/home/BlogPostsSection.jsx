import React from 'react'
import { Row, Col, Card, Button, Typography, Tag } from 'antd'
import { ArrowRightOutlined, ReadOutlined } from '@ant-design/icons'
import { getSlideFromBottom } from '../../utils/animations'

const { Title, Paragraph } = Typography

const BlogPostsSection = ({ isVisible }) => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Early Signs of Autism in Children',
      excerpt: 'Learn about the early indicators of autism spectrum disorder and when to seek professional help for your child.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop',
      author: 'Dr. Priya Sharma',
      date: 'March 15, 2024',
      category: 'Autism Awareness',
      readTime: '5 min read',
      color: '#00aeef',
    },
    {
      id: 2,
      title: 'The Importance of Early Intervention in Speech Therapy',
      excerpt: 'Discover how early speech therapy intervention can significantly improve communication skills in children with developmental delays.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      author: 'Dr. Rajesh Kumar',
      date: 'March 10, 2024',
      category: 'Speech Therapy',
      readTime: '4 min read',
      color: '#f7941d',
    },
    {
      id: 3,
      title: 'Occupational Therapy: Building Life Skills for Independence',
      excerpt: 'Explore how occupational therapy helps children develop essential daily living skills and achieve greater independence.',
      image: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=600&h=400&fit=crop',
      author: 'Dr. Sunita Patel',
      date: 'March 5, 2024',
      category: 'Occupational Therapy',
      readTime: '6 min read',
      color: '#00a651',
    },
    {
      id: 4,
      title: 'Parenting Tips: Supporting Your Child with ADHD',
      excerpt: 'Practical strategies and tips for parents to support children with ADHD at home and in school settings.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
      author: 'Dr. Amit Verma',
      date: 'February 28, 2024',
      category: 'Parenting',
      readTime: '7 min read',
      color: '#662d91',
    },
  ]

  return (
    <div
      data-animate-id="blog"
      style={{ padding: '90px 30px', background: '#fff' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{
          color: '#00aeef',
          fontWeight: '700',
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: '13px',
          ...getSlideFromBottom(0, isVisible('blog')),
        }}>
          <ReadOutlined style={{ marginRight: '8px' }} />
          Latest Articles
        </div>
        <Title level={2} style={{
          color: '#1e3a5f',
          marginBottom: '15px',
          fontSize: 'clamp(26px, 4vw, 40px)',
          ...getSlideFromBottom(0.1, isVisible('blog')),
        }}>
          Insights & <span style={{ color: '#00aeef' }}>Resources</span>
        </Title>
        <Paragraph style={{
          color: '#666',
          fontSize: '16px',
          maxWidth: '700px',
          margin: '0 auto',
          ...getSlideFromBottom(0.2, isVisible('blog')),
        }}>
          Stay informed with expert articles, tips, and insights on autism, therapy, and child development
        </Paragraph>
      </div>
      <Row gutter={[24, 30]} justify="center">
        {blogPosts.map((post, index) => (
          <Col xs={24} sm={24} lg={12} key={post.id}>
            <Card
              hoverable
              data-blog-card
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                height: '100%',
                border: '1px solid #e8e8e8',
                transition: 'all 0.4s ease',
                ...getSlideFromBottom(0.1 + index * 0.1, isVisible('blog')),
              }}
              bodyStyle={{ padding: '0', display: 'flex' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.12)'
                const img = e.currentTarget.querySelector('img')
                if (img) img.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                const img = e.currentTarget.querySelector('img')
                if (img) img.style.transform = 'scale(1)'
              }}
            >
              {/* Image */}
              <div style={{ 
                position: 'relative', 
                width: '45%',
                minWidth: '250px',
                height: 'auto',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '250px',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                }}>
                  <Tag
                    style={{
                      background: post.color,
                      color: '#fff',
                      border: 'none',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontWeight: '600',
                      fontSize: '11px',
                    }}
                  >
                    {post.category}
                  </Tag>
                </div>
              </div>

              {/* Content */}
              <div style={{ 
                padding: '30px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '12px',
                    fontSize: '12px',
                    color: '#888',
                  }}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Title level={4} style={{
                    color: '#1e3a5f',
                    marginBottom: '12px',
                    fontSize: '20px',
                    lineHeight: '1.4',
                  }}>
                    {post.title}
                  </Title>
                  <Paragraph style={{
                    color: '#666',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    marginBottom: '15px',
                  }} ellipsis={{ rows: 3 }}>
                    {post.excerpt}
                  </Paragraph>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '15px',
                  borderTop: '1px solid #f0f0f0',
                }}>
                  <div style={{ fontSize: '13px', color: '#888' }}>
                    By <span style={{ color: '#1e3a5f', fontWeight: '600' }}>{post.author}</span>
                  </div>
                  <Button
                    type="link"
                    style={{
                      color: post.color,
                      fontWeight: '600',
                      padding: 0,
                      height: 'auto',
                    }}
                    icon={<ArrowRightOutlined />}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: 'center', marginTop: '40px', ...getSlideFromBottom(0.5, isVisible('blog')) }}>
        <Button
          type="primary"
          size="large"
          style={{
            background: 'linear-gradient(135deg, #00aeef 0%, #662d91 100%)',
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
          icon={<ReadOutlined />}
        >
          View All Articles <ArrowRightOutlined />
        </Button>
      </div>
      <style>{`
        @media (max-width: 992px) {
          [data-blog-card] .ant-card-body {
            flex-direction: column !important;
          }
          [data-blog-card] .ant-card-body > div:first-child {
            width: 100% !important;
            min-width: 100% !important;
            height: 250px !important;
          }
          [data-blog-card] .ant-card-body > div:first-child img {
            min-height: 250px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default BlogPostsSection

