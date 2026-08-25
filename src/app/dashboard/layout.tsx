import { Show, SignIn } from "@clerk/nextjs"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Show
      when="signed-in"
      fallback={
        <div className="flex min-h-[80vh] w-full items-center justify-center py-10">
          <SignIn />
        </div>
      }
    >
      {children}
    </Show>
  )
}
