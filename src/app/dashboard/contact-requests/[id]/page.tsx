"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, ArrowLeft, Loader2, Save } from "lucide-react"
import type { ContactRequest } from "@/lib/contact-storage"
import { REQUEST_STATUSES } from "@/lib/contact-validation"
import { toast } from "sonner"

export default function ContactRequestDetailPage() {
  const { isSignedIn } = useAuth()
  const router = useRouter()
  const params = useParams()
  const requestId = params.id as string
  
  const [request, setRequest] = useState<ContactRequest | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)
  const [notes, setNotes] = useState("")

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/")
      return
    }

    fetchRequest()
  }, [isSignedIn, router, requestId])

  const fetchRequest = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/contact/requests/${requestId}`)
      
      if (!response.ok) {
        throw new Error("Failed to fetch request")
      }
      
      const data = await response.json()
      setRequest(data.request)
    } catch (err) {
      console.error("Error fetching request:", err)
      setError("Failed to load contact request")
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (newStatus: string) => {
    if (!request) return

    try {
      setIsUpdating(true)
      const response = await fetch(`/api/contact/requests/${requestId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!response.ok) {
        throw new Error("Failed to update status")
      }

      const data = await response.json()
      toast.success("Status updated successfully")
      
      // Refresh the request data
      await fetchRequest()
    } catch (err) {
      console.error("Error updating status:", err)
      toast.error("Failed to update status")
    } finally {
      setIsUpdating(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
      case "Reviewing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
      case "Contacted":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300"
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
      case "Closed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  if (loading) {
    return (
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
            <p className="mt-2 text-gray-600 dark:text-gray-400">Loading request details...</p>
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
  }

  if (error || !request) {
    return (
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            <p className="text-red-600 dark:text-red-400">{error || "Request not found"}</p>
            <Button onClick={() => router.push("/dashboard/contact-requests")} className="mt-4">
              Back to Requests
            </Button>
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/dashboard/contact-requests")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-semibold">Contact Request Details</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Request ID: {request.id}
                </p>
              </div>
            </div>
            <Button
              onClick={() => window.location.href = `mailto:${request.email}`}
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Customer
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Customer Information */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
              <div className="space-y-3">
                <div>
                  <Label className="text-sm text-gray-500 dark:text-gray-400">Full Name</Label>
                  <p className="font-medium text-gray-900 dark:text-white">{request.fullName}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500 dark:text-gray-400">Email</Label>
                  <p className="font-medium">
                    <a
                      href={`mailto:${request.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {request.email}
                    </a>
                  </p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500 dark:text-gray-400">Phone</Label>
                  <p className="font-medium text-gray-900 dark:text-white">{request.phone}</p>
                </div>
              </div>
            </Card>

            {/* Request Details */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Request Details</h2>
              <div className="space-y-3">
                <div>
                  <Label className="text-sm text-gray-500 dark:text-gray-400">Event Type</Label>
                  <p className="font-medium text-gray-900 dark:text-white">{request.eventType}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500 dark:text-gray-400">Subject</Label>
                  <p className="font-medium text-gray-900 dark:text-white">{request.subject}</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500 dark:text-gray-400">Status</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className={getStatusColor(request.status)}>
                      {request.status}
                    </Badge>
                  </div>
                </div>
                <div>
                  <Label className="text-sm text-gray-500 dark:text-gray-400">Submitted</Label>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {formatDate(request.createdAt)}
                  </p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500 dark:text-gray-400">Last Updated</Label>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {formatDate(request.updatedAt)}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Message */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Message</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {request.message}
              </p>
            </div>
          </Card>

          {/* Status Update */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Update Status</h2>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <Label htmlFor="status">New Status</Label>
                <Select
                  value={request.status}
                  onValueChange={handleStatusChange}
                  disabled={isUpdating}
                >
                  <SelectTrigger id="status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {REQUEST_STATUSES.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {isUpdating && (
                <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
              )}
            </div>
          </Card>

          {/* Internal Notes */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Internal Notes</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="notes">Add Notes</Label>
                <Input
                  id="notes"
                  placeholder="Add internal notes about this request..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              <Button
                onClick={() => {
                  toast.success("Notes saved (demo - not persisted)")
                  setNotes("")
                }}
                disabled={!notes.trim()}
                className="flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Notes
              </Button>
            </div>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}