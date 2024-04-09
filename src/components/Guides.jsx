import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/FAQ',
    name: '获取SSH端口和口令',
    description: '学会如何使用命令行，通过IP地址和端口登录服务器。',
  },
  {
    href: '/FAQ',
    name: '熟悉Linux&安装Python环境',
    description: '熟悉linux操作系统，并且通过命令行安装自己需要的python环境。',
  },
  {
    href: '/FAQ',
    name: '常见问题处理',
    description:
      '我该如何运行我的第一行pyhton代码？出现bug之后如何修复bug？',
  },
  {
    href: '/pytorch',
    name: 'pytorch',
    description:
      '学会如何使用pytorch，并且通过cuda指挥GPU为我工作。',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        教程
      </Heading>
      <div className="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose border-zinc-900/5 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
