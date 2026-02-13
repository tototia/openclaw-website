import Link from 'next/link';
import { ArrowLeft, Book, FileText, Code, Terminal, Settings, Users, HelpCircle, Search, ChevronRight } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function DocsPage() {
  const sections = [
    {
      title: '快速开始',
      icon: <Book className="w-5 h-5" />,
      items: [
        { title: '简介', href: '#introduction' },
        { title: '安装指南', href: '#installation' },
        { title: '快速入门', href: '#quickstart' },
        { title: '配置文件', href: '#configuration' },
      ]
    },
    {
      title: '核心功能',
      icon: <Terminal className="w-5 h-5" />,
      items: [
        { title: '命令执行', href: '#commands' },
        { title: '文件系统', href: '#filesystem' },
        { title: '聊天集成', href: '#chat' },
        { title: '自动化任务', href: '#automation' },
      ]
    },
    {
      title: 'API 文档',
      icon: <Code className="w-5 h-5" />,
      items: [
        { title: 'REST API', href: '#rest-api' },
        { title: 'WebSocket API', href: '#websocket' },
        { title: '事件系统', href: '#events' },
        { title: '插件开发', href: '#plugins' },
      ]
    },
    {
      title: '配置指南',
      icon: <Settings className="w-5 h-5" />,
      items: [
        { title: '环境变量', href: '#env-vars' },
        { title: '数据库配置', href: '#database' },
        { title: '安全设置', href: '#security' },
        { title: '性能优化', href: '#performance' },
      ]
    },
    {
      title: '社区',
      icon: <Users className="w-5 h-5" />,
      items: [
        { title: '贡献指南', href: '#contributing' },
        { title: '问题反馈', href: '#issues' },
        { title: '讨论区', href: '#discussions' },
        { title: '社区项目', href: '#community' },
      ]
    },
    {
      title: '常见问题',
      icon: <HelpCircle className="w-5 h-5" />,
      items: [
        { title: '故障排除', href: '#troubleshooting' },
        { title: '最佳实践', href: '#best-practices' },
        { title: '迁移指南', href: '#migration' },
        { title: '更新日志', href: '#changelog' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-4xl">🦞</span>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">OpenClaw</h1>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/features" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              功能
            </Link>
            <Link href="/install" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              安装
            </Link>
            <Link href="/docs" className="text-sm text-orange-600 dark:text-orange-500 font-medium">
              文档
            </Link>
            <Link
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              GitHub
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Back Button */}
      <section className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回首页
        </Link>
      </section>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Book className="w-16 h-16 text-orange-600 dark:text-orange-500 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            OpenClaw 文档
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            完整的使用指南和 API 文档，帮助你快速上手
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="搜索文档..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <DocSection key={index} {...section} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            快速链接
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <QuickLink
              title="GitHub 仓库"
              description="查看源代码和提交问题"
              href="https://github.com/openclaw/openclaw"
            />
            <QuickLink
              title="API 参考"
              description="完整的 API 文档和示例"
              href="#api-reference"
            />
            <QuickLink
              title="示例代码"
              description="实际使用示例和最佳实践"
              href="#examples"
            />
            <QuickLink
              title="视频教程"
              description="手把手教学视频"
              href="#tutorials"
            />
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
            学习资源
          </h3>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <ul className="space-y-4">
              <ResourceItem
                title="官方教程"
                description="从零开始学习 OpenClaw 的完整教程"
                icon={<FileText className="w-5 h-5" />}
              />
              <ResourceItem
                title="视频课程"
                description="深入浅出的视频教学"
                icon={<Play className="w-5 h-5" />}
              />
              <ResourceItem
                title="博客文章"
                description="技术文章和使用技巧"
                icon={<Book className="w-5 h-5" />}
              />
              <ResourceItem
                title="社区分享"
                description="来自社区的实战经验"
                icon={<Users className="w-5 h-5" />}
              />
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🦞</span>
              <span className="text-slate-600 dark:text-slate-400">OpenClaw - 开源个人 AI 助手</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
              <Link href="/docs" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                文档
              </Link>
              <Link href="/install" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                安装
              </Link>
              <Link
                href="https://github.com/openclaw/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DocSection({ title, icon, items }: { title: string; icon: React.ReactNode; items: Array<{ title: string; href: string }> }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4 text-orange-600 dark:text-orange-500">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuickLink({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a
      href={href}
      className="block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:border-orange-600 dark:hover:border-orange-500"
    >
      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </a>
  );
}

function ResourceItem({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 text-orange-600 dark:text-orange-500">{icon}</div>
      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </li>
  );
}

function Play({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
}
