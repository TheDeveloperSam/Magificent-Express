import { NextRequest, NextResponse } from 'next/server'
import { getContactRequests } from '@/lib/contact-storage'

export async function GET(request: NextRequest) {
  try {
    // Get all contact requests
    const requests = getContactRequests()
    
    // Sort by date (newest first)
    const sortedRequests = requests.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    
    return NextResponse.json({ requests: sortedRequests })
    
  } catch (error) {
    console.error('Error fetching contact requests:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}