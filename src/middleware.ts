import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Middleware adicional pode ser adicionado aqui se necessário
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Protege rotas que começam com /minha-conta
        if (req.nextUrl.pathname.startsWith('/minha-conta')) {
          return !!token
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    '/minha-conta/:path*',
    '/admin/:path*'
  ]
}