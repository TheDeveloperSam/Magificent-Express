import { z } from 'zod'

export const EVENT_TYPES = [
  'Wedding',
  'Corporate Event',
  'Birthday Party',
  'Anniversary',
  'Private Dining',
  'Catering',
  'Other'
] as const

export const REQUEST_STATUSES = [
  'New',
  'Reviewing',
  'Contacted',
  'Completed',
  'Closed'
] as const

export const contactFormSchema = z.object({
  fullName: z.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(255, 'Email must be less than 255 characters'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 characters')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^[+]?[\d\s\-()]+$/, 'Please enter a valid phone number'),
  eventType: z.enum(EVENT_TYPES, {
    required_error: 'Please select an event type'
  }),
  subject: z.string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const statusUpdateSchema = z.object({
  status: z.enum(REQUEST_STATUSES, {
    required_error: 'Please select a valid status'
  })
})

export type StatusUpdateData = z.infer<typeof statusUpdateSchema>