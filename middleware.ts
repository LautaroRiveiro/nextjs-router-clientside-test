import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  
  // Solution: https://stackoverflow.com/a/73096326/6475432
  if (request.nextUrl.pathname === '/') {
    const redirectUrl = Math.random() > 0.5 ? '/dashboard' : '/profile'
    const response = NextResponse.redirect(new URL(redirectUrl, request.url))
    response.headers.set('x-middleware-cache', 'no-cache') // Disables middleware caching
    return response
  }
}