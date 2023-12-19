import { withAuth } from "next-auth/middleware"
export default withAuth({
    // Matches the pages config in `[...nextauth]`
    pages: {
      signIn: '/Pages/login',
      error: '/not-found',
    }
  })
export const config = {
  matcher: '/users/:path*',
}