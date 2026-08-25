import { UserProfile } from "@clerk/nextjs"

export const metadata = {
  title: "Account settings",
}

export default function AccountSettingsPage() {
  return (
    <div className="flex flex-1 flex-col items-center gap-4 p-4 md:p-6">
      <h1 className="text-2xl font-semibold">Account settings</h1>
      <UserProfile
        routing="hash"
        appearance={{
          elements: {
            rootBox: "w-full max-w-3xl",
            cardBox: "w-full",
          },
        }}
      />
    </div>
  )
}
