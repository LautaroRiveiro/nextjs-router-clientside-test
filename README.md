## This is a minimal reproduction created by "npx create-next-app@latest --typescript"

## Question:
How to prevent the router.push() from remembering the route to which it was redirected
This only happens on production

## To reproduce:

yarn build
yarn start

1. Go to '/' from the browser searchbar repeatedly. You have a 50% chance of being redirected to '/dashboard' and 50% to '/profile' because of middleware.ts
2. Go to '/login' and click on Login button. This will make a router.push('/') and be redirected either to '/dashboard' or to '/profile'.
3. Click on Logout button. This will make a router.push('/login').
4. The next times Login will always redirect to the same route.