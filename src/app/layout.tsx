import { Zen_Old_Mincho } from 'next/font/google';
import './globals.css';

// フォントの設定（latinサブセットを使用）
const zenOldMincho = Zen_Old_Mincho({
  subsets: ['latin'],
  weight: ['400', '700'], // 必要に応じて太さを指定
});

export const metadata = {
  title: 'portfolio',
  description: 'sample Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={zenOldMincho.className}>
        {children}
      </body>
    </html>
  );
}
