import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/contact-validation'
import { saveContactRequest, generateUniqueId } from '@/lib/contact-storage'
import type { ContactRequest } from '@/lib/contact-storage'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationResult.error.errors 
        },
        { status: 400 }
      )
    }
    
    const data = validationResult.data
    
    // Create contact request object
    const contactRequest: ContactRequest = {
      id: generateUniqueId(),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      eventType: data.eventType,
      subject: data.subject,
      message: data.message,
      status: 'New',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    // Save to JSON file
    const saved = saveContactRequest(contactRequest)
    
    if (!saved) {
      return NextResponse.json(
        { error: 'Failed to save contact request' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact request submitted successfully',
        requestId: contactRequest.id
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Error processing contact submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}