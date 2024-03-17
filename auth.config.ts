// 身份验证
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  // 设置需要验证的页面
  pages: {
    signIn: '/login',
  },
  // 登录验证
  callbacks: {
    // 用于验证请求是否有权通过Next.js Middleware访问页面，它在请求完成之前调用，并接收具有auth和request属性的对象。该auth属性包含用户的会话，该request属性包含传入的请求。
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
