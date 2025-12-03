import React from 'react'

const ScrollingTags = () => {
  const tags = [
    '🏥 NABH Certified',
    '⭐ India\'s No. 1 Autism Network',
    '💙 98%+ Success Rate',
    '👨‍⚕️ Expert Therapists',
    '🎯 Personalized Care',
    '📚 Special Education',
    '🎨 Play Therapy',
    '💬 Speech & Language Therapy',
    '🔧 Occupational Therapy',
    '🧠 Behavior Therapy',
    '❤️ Family Support',
    '🌟 Award Winning Center',
  ]

  return (
    <div
      style={{
        padding: '20px 0',
        background: 'linear-gradient(135deg, #1e3a5f 0%,rgb(73, 73, 73) 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
          animation: 'scroll 30s linear infinite',
          whiteSpace: 'nowrap',
        }}
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#fff',
              padding: '8px 15px',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '25px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              flexShrink: 0,
            }}
          >
            {tag}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {tags.map((tag, index) => (
          <span
            key={`dup-${index}`}
            style={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#fff',
              padding: '8px 20px',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '25px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              flexShrink: 0,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

export default ScrollingTags

