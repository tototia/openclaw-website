import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'OpenClaw - 你的个人 AI 助手',
    template: '%s | OpenClaw',
  },
  description:
    'OpenClaw 是一个开源的个人 AI 助手，支持本地运行、数据隐私保护，可访问本地文件系统、执行 shell 命令，真正为你的工作自动化。',
  keywords: [
    'OpenClaw',
    'AI 助手',
    '个人助理',
    '自动化',
    '开源 AI',
    '本地 AI',
    '隐私保护',
    'TypeScript',
    'Node.js',
    'ChatGPT 替代',
  ],
  authors: [{ name: 'OpenClaw Community', url: 'https://github.com/openclaw/openclaw' }],
  generator: 'OpenClaw',
  openGraph: {
    title: 'OpenClaw - 你的个人 AI 助手',
    description:
      '开源的个人 AI 助手，本地运行，隐私保护，真正为你的工作自动化 🦞',
    url: 'https://openclaw.ai',
    siteName: 'OpenClaw',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isDev && <Inspector />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
