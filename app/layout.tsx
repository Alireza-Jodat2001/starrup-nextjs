import MainLayout from '@/components/mainLayout/MainLayout';
import '@/styles/globals.css';
import { MainLayoutProps } from '@/types/components/mainLayout';

export default function RootLayout({ children }: MainLayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
