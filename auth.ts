import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
// 添加凭证提供者
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
// 查询用户数据
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

// 查询用户
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  // 添加凭证提供者
  providers: [
    // 添加登录功能
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        // 验证成功获取数据
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          // 调用bcrypt.compare检查密码是否匹配：
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
          console.log('Invalid credentials');
          return null;
        }

        return null;
      },
    }),
  ],
});
