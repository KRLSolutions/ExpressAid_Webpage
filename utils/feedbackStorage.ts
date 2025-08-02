export interface Feedback {
  id: string
  name: string
  type: 'bug' | 'feature' | 'improvement' | 'general'
  subject: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  timestamp: string
  status: 'new' | 'in-progress' | 'resolved'
}

export const saveFeedback = (feedback: Omit<Feedback, 'id' | 'timestamp' | 'status'>): Feedback => {
  const newFeedback: Feedback = {
    ...feedback,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    status: 'new'
  }

  const existingFeedback = getFeedback()
  const updatedFeedback = [newFeedback, ...existingFeedback]
  
  localStorage.setItem('expressaid-feedback', JSON.stringify(updatedFeedback))
  return newFeedback
}

export const getFeedback = (): Feedback[] => {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem('expressaid-feedback')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error reading feedback from localStorage:', error)
    return []
  }
}

export const updateFeedbackStatus = (id: string, status: Feedback['status']): void => {
  const feedback = getFeedback()
  const updatedFeedback = feedback.map(item => 
    item.id === id ? { ...item, status } : item
  )
  localStorage.setItem('expressaid-feedback', JSON.stringify(updatedFeedback))
  
  // Dispatch a custom event to notify components of the update
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('feedbackUpdated', { detail: { id, status } }))
  }
}

export const deleteFeedback = (id: string): void => {
  const feedback = getFeedback()
  const updatedFeedback = feedback.filter(item => item.id !== id)
  localStorage.setItem('expressaid-feedback', JSON.stringify(updatedFeedback))
} 