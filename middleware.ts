import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
/**
 * 使用该authConfig对象初始化 NextAuth.js 并导出该auth属性。您还可以使用matcher中间件中的选项来指定它应该在特定路径上运行。
 */

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
