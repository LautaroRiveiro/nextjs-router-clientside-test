This is a minimal reproduction created by "npx create-next-app@latest --typescript"

Question:
How to prevent the router.push() from remembering the route to which it was redirected

To reproduce:
1. Go to '/' repeatedly. You have a 50% chance of being redirected to '/dashboard' and 50% to '/profile' because of middleware.ts
2. Go to '/login' and click on Login. This will make a router.push('') and be redirected either to '/dashboard' or to '/profile'.
3. Click on logout to return to '/login'.
4. The next times Login will always redirect to the same route.