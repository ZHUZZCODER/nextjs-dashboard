import { Metadata } from 'next';

// 更新标题
export const metadata: Metadata = {
  // title: 'Invoices | Acme Dashboard',
  title: 'Customers',
};

// 客户页面
export default function Customers() {
  return <p>Customers Page</p>;
}
