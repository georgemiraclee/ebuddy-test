import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')
  if (!accessToken?.value) {
    redirect('/auth')
  }
  return <>{children}</>
}
