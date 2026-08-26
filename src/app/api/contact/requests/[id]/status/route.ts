import { NextRequest, NextResponse } from 'next/server'
import { updateContactRequestStatus } from '@/lib/contact-storage'
import { statusUpdateSchema } from '@/lib/contact-validation'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await request.json()
    
    // Validate the request body
    const validationResult = statusUpdateSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationResult.error.errors 
        },
        { status: 400 }
      )
    }
    
    const { status } = validationResult.data
    
    // Update the contact request status
    const updated = updateContactRequestStatus(id, status)
    
    if (!updated) {
      return NextResponse.json(
        { error: 'Contact request not found or update failed' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Status updated successfully',
        status 
      }
    )
    
  } catch (error) {
    console.error('Error updating contact request status:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}