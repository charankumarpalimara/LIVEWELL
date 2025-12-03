/**
 * Therapy Service - Backend Integration
 * 
 * This file handles all therapy-related API calls.
 * Currently uses demo data, but can be easily switched to backend API.
 * 
 * To integrate with backend:
 * 1. Set USE_BACKEND_API to true
 * 2. Update API_BASE_URL with your backend endpoint
 * 3. Ensure backend returns data in the same format as demo data
 */

// Configuration
let USE_BACKEND_API = false // Set to true when backend is ready
let API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.livewellrehabilitationnetwork.com/api'

// URL path to service key mapping
const urlToServiceKey = {
  '/autism-therapy': 'autism-therapy',
  '/speech-therapy': 'speech-therapy',
  '/occupational-therapy-for-kids': 'occupational-therapy',
  '/behavior-therapy-for-kids': 'behavior-therapy',
  '/special-education-for-kids': 'special-education',
  '/play-therapy': 'play-therapy',
  '/music-therapy': 'music-therapy',
  '/applied-behavior-analysis-aba': 'aba-therapy',
  '/early-intervention': 'early-intervention',
  '/sensory-integration-therapy': 'sensory-integration',
  '/physiotherapy': 'physiotherapy',
}

// Service key to URL path mapping
const serviceKeyToUrl = {
  'autism-therapy': '/autism-therapy',
  'speech-therapy': '/speech-therapy',
  'occupational-therapy': '/occupational-therapy-for-kids',
  'behavior-therapy': '/behavior-therapy-for-kids',
  'special-education': '/special-education-for-kids',
  'play-therapy': '/play-therapy',
  'music-therapy': '/music-therapy',
  'aba-therapy': '/applied-behavior-analysis-aba',
  'early-intervention': '/early-intervention',
  'sensory-integration': '/sensory-integration-therapy',
  'physiotherapy': '/physiotherapy',
}

/**
 * Fetch therapy data from backend API
 */
const fetchTherapyFromBackend = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/therapies/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add authentication if needed
        // 'Authorization': `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data || data // Adjust based on your API response structure
  } catch (error) {
    console.error('Error fetching therapy from backend:', error)
    throw error
  }
}

/**
 * Fetch all therapies from backend API
 */
const fetchAllTherapiesFromBackend = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/therapies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add authentication if needed
        // 'Authorization': `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data || data // Adjust based on your API response structure
  } catch (error) {
    console.error('Error fetching all therapies from backend:', error)
    throw error
  }
}

/**
 * Get therapy data (from backend or demo)
 * @param {string} pathname - Current route pathname
 * @returns {Promise<Object>} Therapy data object
 */
export const getTherapyByPath = async (pathname) => {
  const serviceKey = urlToServiceKey[pathname]
  
  if (!serviceKey) {
    return null
  }

  if (USE_BACKEND_API) {
    try {
      // Fetch from backend
      const therapy = await fetchTherapyFromBackend(serviceKey)
      return therapy
    } catch (error) {
      console.error('Backend fetch failed, falling back to demo data:', error)
      // Fallback to demo data on error
      const serviceData = await import('../pages/therapy')
      return serviceData.default[serviceKey] || null
    }
  } else {
    // Use demo data
    const serviceData = await import('../pages/therapy')
    return serviceData.default[serviceKey] || null
  }
}

/**
 * Get all therapies (from backend or demo)
 * @returns {Promise<Object>} Object with all therapy data
 */
export const getAllTherapies = async () => {
  if (USE_BACKEND_API) {
    try {
      // Fetch from backend
      const therapies = await fetchAllTherapiesFromBackend()
      
      // Convert array to object format if needed
      if (Array.isArray(therapies)) {
        const therapyObject = {}
        therapies.forEach(therapy => {
          // Map backend data to service key format
          const key = therapy.slug || therapy.id
          therapyObject[key] = therapy
        })
        return therapyObject
      }
      
      return therapies
    } catch (error) {
      console.error('Backend fetch failed, falling back to demo data:', error)
      // Fallback to demo data on error
      const serviceData = await import('../pages/therapy')
      return serviceData.default
    }
  } else {
    // Use demo data
    const serviceData = await import('../pages/therapy')
    return serviceData.default
  }
}

/**
 * Get service URL mapping (for navigation)
 */
export const getUrlMappings = () => {
  return {
    urlToServiceKey,
    serviceKeyToUrl,
  }
}

/**
 * Update configuration
 * @param {Object} config - Configuration object
 */
export const updateConfig = (config) => {
  if (config.useBackendApi !== undefined) {
    USE_BACKEND_API = config.useBackendApi
  }
  if (config.apiBaseUrl) {
    API_BASE_URL = config.apiBaseUrl
  }
}

export default {
  getTherapyByPath,
  getAllTherapies,
  getUrlMappings,
  updateConfig,
}

