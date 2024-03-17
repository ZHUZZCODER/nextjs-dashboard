'use client';
// 当前路由错误处理
import { useEffect } from 'react';

/**
 * error：这个对象是 JavaScript 原生的一个实例Error目的。
 * reset：这是重置错误边界的功能。执行时，该函数将尝试重新渲染路线段。
 * @param param
 * @returns
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
