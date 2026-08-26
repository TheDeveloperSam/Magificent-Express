import fs from 'fs'
import path from 'path'

const CONTACT_REQUESTS_FILE = path.join(process.cwd(), 'data', 'contact-requests.json')

export interface ContactRequest {
  id: string
  fullName: string
  email: string
  phone: string
  eventType: string
  subject: string
  message: string
  status: 'New' | 'Reviewing' | 'Contacted' | 'Completed' | 'Closed'
  createdAt: string
  updatedAt: string
}

export function getContactRequests(): ContactRequest[] {
  try {
    if (!fs.existsSync(CONTACT_REQUESTS_FILE)) {
      // Ensure directory exists
      const dir = path.dirname(CONTACT_REQUESTS_FILE)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      // Create empty file if it doesn't exist
      fs.writeFileSync(CONTACT_REQUESTS_FILE, '[]', 'utf-8')
      return []
    }
    const data = fs.readFileSync(CONTACT_REQUESTS_FILE, 'utf-8')
    return JSON.parse(data) as ContactRequest[]
  } catch (error) {
    console.error('Error reading contact requests:', error)
    return []
  }
}

export function saveContactRequest(request: ContactRequest): boolean {
  try {
    // Ensure directory exists
    const dir = path.dirname(CONTACT_REQUESTS_FILE)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    const requests = getContactRequests()
    requests.push(request)
    fs.writeFileSync(CONTACT_REQUESTS_FILE, JSON.stringify(requests, null, 2), 'utf-8')
    return true
  } catch (error) {
    console.error('Error saving contact request:', error)
    return false
  }
}

export function updateContactRequestStatus(id: string, status: ContactRequest['status']): boolean {
  try {
    // Ensure directory exists
    const dir = path.dirname(CONTACT_REQUESTS_FILE)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    const requests = getContactRequests()
    const index = requests.findIndex(req => req.id === id)
    
    if (index === -1) {
      return false
    }
    
    requests[index].status = status
    requests[index].updatedAt = new Date().toISOString()
    fs.writeFileSync(CONTACT_REQUESTS_FILE, JSON.stringify(requests, null, 2), 'utf-8')
    return true
  } catch (error) {
    console.error('Error updating contact request status:', error)
    return false
  }
}

export function getContactRequestById(id: string): ContactRequest | null {
  try {
    const requests = getContactRequests()
    return requests.find(req => req.id === id) || null
  } catch (error) {
    console.error('Error getting contact request by id:', error)
    return null
  }
}

export function generateUniqueId(): string {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substring(2, 9)
  return `${timestamp}-${randomStr}`
}