"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { PortalLink } from "@kinde-oss/kinde-auth-react/components"

export default function AccountSettingsPage() {
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
        <div className="flex flex-1 flex-col items-center gap-4 p-4 md:p-6">
          <h1 className="text-2xl font-semibold">Account settings</h1>
          <p className="text-muted-foreground">Manage your account settings through the Kinde portal.</p>
          <PortalLink returnUrl="/dashboard" className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Settings
          </PortalLink>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
