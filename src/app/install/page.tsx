import Link from 'next/link';
import { ArrowLeft, Download, Terminal, Play, CheckCircle, AlertCircle, Copy, Terminal as TerminalIcon, Command } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function InstallPage() {
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
            <Link href="/install" className="text-sm text-orange-600 dark:text-orange-500 font-medium">
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
          <div className="mb-6">
            <Download className="w-16 h-16 text-orange-600 dark:text-orange-500 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            快速安装指南
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            在几分钟内完成 OpenClaw 的安装和配置
          </p>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-500" />
            系统要求
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <RequirementCard title="操作系统" items={['Windows 10+', 'macOS 11+', 'Linux (主流发行版)']} />
            <RequirementCard title="运行环境" items={['Node.js 18+', 'npm 或 pnpm', 'Git']} />
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <TerminalIcon className="w-6 h-6 text-orange-600 dark:text-orange-500" />
            安装步骤
          </h3>

          {/* Step 1 */}
          <InstallStep
            step={1}
            title="克隆仓库"
            description="首先从 GitHub 克隆 OpenClaw 仓库到本地"
            code="git clone https://github.com/openclaw/openclaw.git
cd openclaw"
          />

          {/* Step 2 */}
          <InstallStep
            step={2}
            title="安装依赖"
            description="使用包管理器安装项目依赖"
            code="pnpm install"
            note="如果使用 npm，运行 npm install"
          />

          {/* Step 3 */}
          <InstallStep
            step={3}
            title="配置环境变量"
            description="创建 .env 文件并配置必要的 API 密钥"
            code="cp .env.example .env
# 编辑 .env 文件，添加你的 API 密钥"
          />

          {/* Step 4 */}
          <InstallStep
            step={4}
            title="启动服务"
            description="启动 OpenClaw 服务"
            code="pnpm dev"
          />
        </div>
      </section>

      {/* Configuration */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <Command className="w-6 h-6 text-orange-600 dark:text-orange-500" />
            配置说明
          </h3>

          <ConfigCard
            title="OpenAI API 密钥"
            description="用于提供大语言模型能力"
            code="OPENAI_API_KEY=sk-your-openai-api-key-here"
            note="从 https://platform.openai.com/api-keys 获取"
          />

          <ConfigCard
            title="Telegram Bot Token"
            description="用于集成 Telegram 机器人"
            code="TELEGRAM_BOT_TOKEN=your-telegram-bot-token"
            note="通过 @BotFather 创建机器人并获取 token"
          />

          <ConfigCard
            title="数据库配置"
            description="配置本地数据库存储"
            code="DATABASE_URL=postgresql://user:password@localhost:5432/openclaw"
            note="使用 PostgreSQL 或 SQLite"
          />
        </div>
      </section>

      {/* Platform Specific */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <Play className="w-6 h-6 text-orange-600 dark:text-orange-500" />
            平台特定说明
          </h3>

          <PlatformCard
            title="Windows"
            commands={[
              '安装 Node.js: 下载官方安装程序',
              '安装 Git: 下载 Git for Windows',
              '使用 PowerShell 或 Git Bash 运行命令'
            ]}
          />

          <PlatformCard
            title="macOS"
            commands={[
              '安装 Homebrew (如果未安装): /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
              '安装 Node.js: brew install node',
              '安装 Git: brew install git'
            ]}
          />

          <PlatformCard
            title="Linux"
            commands={[
              'Ubuntu/Debian: sudo apt install nodejs npm git',
              'Fedora: sudo dnf install nodejs npm git',
              'Arch Linux: sudo pacman -S nodejs npm git'
            ]}
          />
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-500" />
            常见问题
          </h3>

          <FAQCard
            question="安装依赖时出现错误"
            answer="尝试清除缓存后重新安装: pnpm store prune && pnpm install。如果使用 npm，运行 npm cache clean --force && npm install"
          />

          <FAQCard
            question="启动服务时端口被占用"
            answer="修改 package.json 中的端口号，或者杀死占用端口的进程: lsof -i :5000 | xargs kill -9"
          />

          <FAQCard
            question="API 密钥配置错误"
            answer="检查 .env 文件格式是否正确，确保没有多余的空格或引号，并且密钥有效"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            需要更多帮助？
          </h3>
          <p className="mb-6 opacity-90">
            查看完整文档或加入社区讨论
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              查看文档
            </Link>
            <Link
              href="https://github.com/openclaw/openclaw/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              社区讨论
            </Link>
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

function RequirementCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
      <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InstallStep({ step, title, description, code, note }: { step: number; title: string; description: string; code: string; note?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 bg-orange-600 dark:bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
          {step}
        </div>
        <div>
          <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
        </div>
      </div>
      <CodeBlock code={code} />
      {note && <p className="mt-2 text-sm text-slate-500 dark:text-slate-500 italic">{note}</p>}
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto">
      <pre className="text-sm text-slate-100 font-mono whitespace-pre-wrap">{code}</pre>
    </div>
  );
}

function ConfigCard({ title, description, code, note }: { title: string; description: string; code: string; note: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-6">
      <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <CodeBlock code={code} />
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-500 italic">{note}</p>
    </div>
  );
}

function PlatformCard({ title, commands }: { title: string; commands: string[] }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-6">
      <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">{title}</h4>
      <ul className="space-y-3">
        {commands.map((command, index) => (
          <li key={index} className="text-sm">
            <CodeBlock code={command} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-6">
      <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-500" />
        {question}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400">{answer}</p>
    </div>
  );
}
