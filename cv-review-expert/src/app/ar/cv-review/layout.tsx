import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مراجعة السيرة الذاتية - رفع سيرتك الذاتية | خبير مراجعة السيرة الذاتية',
  description: 'قم برفع سيرتك الذاتية واحصل على تقييم مهني مع خدمة المراجعة المدعومة بالذكاء الاصطناعي. احصل على تحليل مفصل واقتراحات لتحسين سيرتك الذاتية.',
};

export default function CVReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
