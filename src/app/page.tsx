import Link from 'next/link';
import { Terminal, Shield, Zap, Globe, Code, Cpu, Star, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function OpenClawPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🦞</span>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">OpenClaw</h1>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/features" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              功能
            </Link>
            <Link href="/install" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              安装
            </Link>
            <Link href="/docs" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-8xl">🦞</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent">
            你的个人 AI 助手
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
            任何操作系统 · 任何平台 · 龙虾风格 🦞
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-500 mb-12 max-w-2xl mx-auto">
            OpenClaw 是一个开源的个人 AI 助手，让你真正动手完成工作，而不仅仅是聊天。从清理邮箱到管理日历，一切都在你最喜欢的聊天应用中完成。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/install"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              立即安装
            </Link>
            <Link
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <Star className="w-5 h-5" />
              GitHub Stars 190K+
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            核心特性
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Terminal className="w-8 h-8" />}
              title="本地运行"
              description="在你的设备上运行，数据不离开你的机器，完全掌控你的隐私"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="隐私保护"
              description="所有数据本地存储，不依赖云端服务，你的数据只属于你自己"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="自动执行"
              description="不只是聊天，而是真正执行任务，自动完成重复性工作"
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="跨平台"
              description="支持 Windows、macOS、Linux，在任何设备上无缝运行"
            />
            <FeatureCard
              icon={<Code className="w-8 h-8" />}
              title="开源透明"
              description="MIT 许可证，完全开源，代码可审计，社区共同维护"
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8" />}
              title="深度集成"
              description="可访问本地文件系统、执行 shell 命令、调用本地 API"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            技术栈
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <TechItem name="TypeScript" description="类型安全的现代 JavaScript" />
            <TechItem name="Node.js" description="JavaScript 运行时环境" />
            <TechItem name="React" description="用户界面库" />
            <TechItem name="OpenAI API" description="大语言模型集成" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            准备好开始了吗？
          </h3>
          <p className="text-lg mb-8 opacity-90">
            加入数千名开发者，让 AI 为你自动化生活
          </p>
          <Link
            href="/install"
            className="bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-colors inline-block"
          >
            查看安装指南
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
      <div className="mb-4 text-orange-600 dark:text-orange-500">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}

function TechItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
      <div className="w-12 h-12 bg-orange-600 dark:bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
        {name[0]}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">{name}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </div>
  );
}
