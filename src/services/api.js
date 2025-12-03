/**
 * API Service for Backend Integration
 * 
 * This file contains all API endpoints and service functions.
 * Update the BASE_URL when your backend is ready.
 */

// Configuration
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.livewellrehabilitationnetwork.com/api',
  // Set to true to use demo data, false to use backend
  USE_DEMO_DATA: import.meta.env.VITE_USE_DEMO_DATA !== 'false',
  TIMEOUT: 10000, // 10 seconds
}

/**
 * Generic API request function
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      // Add authentication token if available
      // 'Authorization': `Bearer ${getAuthToken()}`,
    },
    timeout: API_CONFIG.TIMEOUT,
  }

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT)

    const response = await fetch(url, {
      ...config,
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout. Please try again.')
    }
    throw error
  }
}

/**
 * Therapy Service API
 */
export const therapyService = {
  /**
   * Get all therapies
   * @returns {Promise<Array>} Array of therapy objects
   */
  getAllTherapies: async () => {
    if (API_CONFIG.USE_DEMO_DATA) {
      // Return demo data from static files
      const serviceData = await import('../pages/therapy')
      return Object.values(serviceData.default)
    }

    try {
      const response = await apiRequest('/therapies')
      return response.data || response
    } catch (error) {
      console.error('Error fetching therapies:', error)
      // Fallback to demo data on error
      const serviceData = await import('../pages/therapy')
      return Object.values(serviceData.default)
    }
  },

  /**
   * Get therapy by slug/URL path
   * @param {string} slug - Therapy slug (e.g., 'autism-therapy')
   * @returns {Promise<Object>} Therapy object
   */
  getTherapyBySlug: async (slug) => {
    if (API_CONFIG.USE_DEMO_DATA) {
      // Return demo data from static files
      const serviceData = await import('../pages/therapy')
      const urlToServiceKey = {
        'autism-therapy': 'autism-therapy',
        'speech-therapy': 'speech-therapy',
        'occupational-therapy-for-kids': 'occupational-therapy',
        'behavior-therapy-for-kids': 'behavior-therapy',
        'special-education-for-kids': 'special-education',
        'play-therapy': 'play-therapy',
        'music-therapy': 'music-therapy',
        'applied-behavior-analysis-aba': 'aba-therapy',
        'early-intervention': 'early-intervention',
        'sensory-integration-therapy': 'sensory-integration',
        'physiotherapy': 'physiotherapy',
      }
      const serviceKey = urlToServiceKey[slug] || slug
      return serviceData.default[serviceKey] || null
    }

    try {
      const response = await apiRequest(`/therapies/${slug}`)
      return response.data || response
    } catch (error) {
      console.error(`Error fetching therapy ${slug}:`, error)
      // Fallback to demo data on error
      const serviceData = await import('../pages/therapy')
      const urlToServiceKey = {
        'autism-therapy': 'autism-therapy',
        'speech-therapy': 'speech-therapy',
        'occupational-therapy-for-kids': 'occupational-therapy',
        'behavior-therapy-for-kids': 'behavior-therapy',
        'special-education-for-kids': 'special-education',
        'play-therapy': 'play-therapy',
        'music-therapy': 'music-therapy',
        'applied-behavior-analysis-aba': 'aba-therapy',
        'early-intervention': 'early-intervention',
        'sensory-integration-therapy': 'sensory-integration',
        'physiotherapy': 'physiotherapy',
      }
      const serviceKey = urlToServiceKey[slug] || slug
      return serviceData.default[serviceKey] || null
    }
  },

  /**
   * Get therapy by ID
   * @param {string|number} id - Therapy ID
   * @returns {Promise<Object>} Therapy object
   */
  getTherapyById: async (id) => {
    if (API_CONFIG.USE_DEMO_DATA) {
      // Return demo data from static files
      const serviceData = await import('../pages/therapy')
      return Object.values(serviceData.default).find(therapy => therapy.id === id) || null
    }

    try {
      const response = await apiRequest(`/therapies/id/${id}`)
      return response.data || response
    } catch (error) {
      console.error(`Error fetching therapy by ID ${id}:`, error)
      // Fallback to demo data on error
      const serviceData = await import('../pages/therapy')
      return Object.values(serviceData.default).find(therapy => therapy.id === id) || null
    }
  },
}

/**
 * Export API configuration for external use
 */
export const getApiConfig = () => API_CONFIG

/**
 * Update API configuration
 */
export const updateApiConfig = (newConfig) => {
  Object.assign(API_CONFIG, newConfig)
}

export default {
  therapyService,
  getApiConfig,
  updateApiConfig,
}

