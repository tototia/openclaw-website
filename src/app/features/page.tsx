import Link from 'next/link';
import { ArrowLeft, Zap, Shield, Globe, Terminal, Cpu, Code, MessageSquare, Calendar, FileText, Database, Lock, Smartphone, Check } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function FeaturesPage() {
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
            <Link href="/features" className="text-sm text-orange-600 dark:text-orange-500 font-medium">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            强大的功能特性
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            OpenClaw 提供全面的自动化能力，让你的 AI 助手真正为你工作
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-orange-600 dark:text-orange-500" />
            核心功能
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureDetail
              icon={<Terminal className="w-6 h-6" />}
              title="命令执行"
              description="直接在聊天中执行 shell 命令，自动化系统操作"
              features={[
                '支持所有常用命令',
                '实时输出结果',
                '安全的权限管理'
              ]}
            />
            <FeatureDetail
              icon={<Database className="w-6 h-6" />}
              title="文件系统访问"
              description="读取、写入、管理本地文件和目录"
              features={[
                '完整的文件操作支持',
                '路径智能补全',
                '批量文件处理'
              ]}
            />
            <FeatureDetail
              icon={<MessageSquare className="w-6 h-6" />}
              title="多平台聊天集成"
              description="在你喜欢的聊天应用中使用 OpenClaw"
              features={[
                'Telegram 集成',
                'Discord 集成',
                'Slack 集成'
              ]}
            />
            <FeatureDetail
              icon={<Calendar className="w-6 h-6" />}
              title="日历管理"
              description="智能管理你的日程安排"
              features={[
                '自动创建事件',
                '冲突检测',
                '会议提醒'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <Cpu className="w-6 h-6 text-orange-600 dark:text-orange-500" />
            高级特性
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureDetail
              icon={<Lock className="w-6 h-6" />}
              title="端到端加密"
              description="所有通信都经过加密保护"
              features={[
                'AES-256 加密',
                '密钥本地存储',
                '零知识证明'
              ]}
            />
            <FeatureDetail
              icon={<Smartphone className="w-6 h-6" />}
              title="移动设备支持"
              description="在手机和平板上也能使用"
              features={[
                '响应式界面',
                '离线模式',
                '推送通知'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <Code className="w-6 h-6 text-orange-600 dark:text-orange-500" />
            使用场景
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <UseCase
              title="自动化办公"
              description="自动处理邮件、安排会议、生成报告"
              icon={<FileText className="w-8 h-8" />}
            />
            <UseCase
              title="开发辅助"
              description="代码生成、bug修复、技术查询"
              icon={<Code className="w-8 h-8" />}
            />
            <UseCase
              title="个人助理"
              description="日程管理、提醒事项、信息检索"
              icon={<Calendar className="w-8 h-8" />}
            />
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

function FeatureDetail({ icon, title, description, features }: { icon: React.ReactNode; title: string; description: string; features: string[] }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
      <div className="mb-4 text-orange-600 dark:text-orange-500">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Check className="w-4 h-4 text-green-600 dark:text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UseCase({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-6 text-white">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="opacity-90">{description}</p>
    </div>
  );
}
