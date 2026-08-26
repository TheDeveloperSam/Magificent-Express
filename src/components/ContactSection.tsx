"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { MapPin, Phone, Mail, Clock, User, MailIcon, PhoneIcon, MessageSquare, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import EmailContactModal from "./EmailContactModal"
import { EVENT_TYPES } from "@/lib/contact-validation"

// Form schema for the Get in Touch card (no subject, newsletter optional)
const getInTouchSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  phone: z.string().min(10, "Phone must be at least 10 characters").max(20).regex(/^[+]?[\d\s\-()]+$/, "Invalid phone"),
  eventType: z.enum(EVENT_TYPES, { message: "Please select an event type" } as any).or(z.string().min(1)) as any,
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  newsletter: z.boolean().optional(),
})

type GetInTouchData = z.infer<typeof getInTouchSchema>

export default function ContactSection() {
  const [isManualModalOpen, setIsManualModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<GetInTouchData>({
    resolver: zodResolver(getInTouchSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      eventType: "General Inquiry" as any,
      message: "",
      newsletter: false,
    },
  })

  const onSubmit = async (data: GetInTouchData) => {
    setIsSubmitting(true)
    try {
      // Map to existing API shape: subject derived from eventType
      // API only accepts EVENT_TYPES; map "General Inquiry" -> "Other"
      const apiEventType = data.eventType === "General Inquiry" ? "Other" : data.eventType
      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        eventType: apiEventType,
        subject: data.eventType,
        message: data.message,
      }
      const res = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await res.json()
      if (res.ok) {
        setIsSuccess(true)
        toast.success("Your request has been received. We will get back to you within 1–2 business days.")
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        toast.error(result.error || "Failed to submit. Please try again.")
      }
    } catch (e) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-black px-4 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left: Connect With Us */}
        <div className="text-white pt-2 lg:pr-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
            Connect With Us
          </h2>
          <p className="mt-4 text-sm md:text-[15px] leading-6 text-white/70 max-w-xl">
            Have questions about our menu, catering services, or want to know where we&apos;ll be next? Reach out to us through any of the channels below.
          </p>

          <h3 className="mt-8 text-xl font-semibold font-serif" style={{ fontFamily: "Georgia, serif" }}>
            Contact Information
          </h3>

          <div className="mt-6 space-y-6">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Location</p>
                <p className="mt-1 text-sm text-white/70 leading-5">123 Main Street, Your City, TX 00000</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Phone</p>
                <p className="mt-1 text-sm text-white/70">+1 (555) 555-0100</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Email</p>
                <p className="mt-1 text-sm text-white/70">hello@example.com</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Hours</p>
                <p className="mt-1 text-sm text-white/70">Monday - Sunday:</p>
                <p className="mt-1 text-sm text-white/70">11:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Get in Touch Card */}
        <div className="bg-[#f2f2f2] rounded-2xl p-6 md:p-8 shadow-xl">
          <h3 className="text-center text-2xl md:text-3xl font-bold" style={{ fontFamily: "Georgia, serif" }}>
            Get in Touch
          </h3>
          <p className="mt-2 text-center text-sm text-gray-500">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>

          {isSuccess && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-green-800">Thank you! Your request has been received.</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="fullName" className="text-xs font-medium text-gray-700">
                  Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-500" />
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    className={`pl-9 bg-white border-gray-200 rounded-lg h-10 text-sm ${errors.fullName ? "border-red-500" : ""}`}
                    {...register("fullName")}
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-medium text-gray-700">
                  Email
                </Label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`pl-9 bg-white border-gray-200 rounded-lg h-10 text-sm ${errors.email ? "border-red-500" : ""}`}
                    {...register("email")}
                  />
                </div>
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs font-medium text-gray-700">
                  Phone
                </Label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-500" />
                  <Input
                    id="phone"
                    placeholder="(123) 456-7890"
                    className={`pl-9 bg-white border-gray-200 rounded-lg h-10 text-sm ${errors.phone ? "border-red-500" : ""}`}
                    {...register("phone")}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-gray-700">Event Type</Label>
                <Controller
                  name="eventType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value as string}>
                      <SelectTrigger className={`bg-white border-gray-200 rounded-lg h-10 text-sm ${errors.eventType ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="General Inquiry" />
                      </SelectTrigger>
                      <SelectContent>
                        {EVENT_TYPES.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.eventType && <p className="text-xs text-red-500">{(errors.eventType as any).message}</p>}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-xs font-medium text-gray-700">
                Message
              </Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-orange-500" />
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={4}
                  className={`w-full pl-9 pr-3 py-2.5 bg-white border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm placeholder:text-gray-400 ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  }`}
                  {...register("message")}
                />
              </div>
              {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input type="checkbox" id="newsletter" {...register("newsletter")} className="mt-0.5 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
              <Label htmlFor="newsletter" className="text-xs leading-4 text-gray-500 font-normal">
                Subscribe to our newsletter for exclusive promotions and special offers.
              </Label>
            </div>

            <div className="text-center pt-1">
              <button
                type="button"
                onClick={() => setIsManualModalOpen(true)}
                className="text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                Or Manually Send it
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff6b35] hover:bg-[#e85f2e] text-white rounded-full h-11 font-medium text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <EmailContactModal isOpen={isManualModalOpen} onClose={() => setIsManualModalOpen(false)} />
    </section>
  )
}
