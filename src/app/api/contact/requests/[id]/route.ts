import { NextRequest, NextResponse } from 'next/server'
import { getContactRequestById } from '@/lib/contact-storage'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    // Get the specific contact request
    const contactRequest = getContactRequestById(id)
    
    if (!contactRequest) {
      return NextResponse.json(
        { error: 'Contact request not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ request: contactRequest })
    
  } catch (error) {
    console.error('Error fetching contact request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}