//流式传输是一种数据传输技术，允许您将路由分解为更小的“块”，并在准备就绪时将它们逐步从服务器流式传输到客户端。
//通过流式传输，您可以防止缓慢的数据请求阻塞整个页面。这允许用户查看页面的部分内容并与之交互，而无需等待所有数据加载后再向用户显示任何 UI。
// 使用骨架屏幕 通过分组避免骨架屏应用于其他页面
import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  //   return <div>Loading...</div>;
  return <DashboardSkeleton />;
}
