// Animation style helpers
export const getSlideFromLeft = (delay = 0, isActive = false) => ({
  opacity: isActive ? 1 : 0,
  transform: isActive ? 'translateX(0)' : 'translateX(-60px)',
  transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
})

export const getSlideFromRight = (delay = 0, isActive = false) => ({
  opacity: isActive ? 1 : 0,
  transform: isActive ? 'translateX(0)' : 'translateX(60px)',
  transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
})

export const getSlideFromBottom = (delay = 0, isActive = false) => ({
  opacity: isActive ? 1 : 0,
  transform: isActive ? 'translateY(0)' : 'translateY(40px)',
  transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
})

export const getScaleIn = (delay = 0, isActive = false) => ({
  opacity: isActive ? 1 : 0,
  transform: isActive ? 'scale(1)' : 'scale(0.9)',
  transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
})

