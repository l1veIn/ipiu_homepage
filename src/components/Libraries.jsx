import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoGo from '@/images/logos/go.svg'
import logoNode from '@/images/logos/node.svg'
import logoPhp from '@/images/logos/php.svg'
import logoPython from '@/images/logos/python.svg'
import logoRuby from '@/images/logos/ruby.svg'

const libraries = [
  {
    href: '#',
    name: 'Jupyer notebook',
    description:
      'Jupyter Notebook 是一个开源的 Web 应用程序，它允许你创建和共享包含实时代码、方程、可视化和叙述文本的文档。它是数据科学和科学计算领域中非常流行的工具，因为它支持多种编程语言，如 Python、R 和 Julia，并且特别适合于数据分析和机器学习等任务',
    logo: logoPython,
  },
  {
    href: '#',
    name: 'VSCode',
    description:
      'Visual Studio Code（简称 VS Code）是一款由微软开发的免费、开源的代码编辑器。它支持多种编程语言，如 JavaScript、Python、C++、C# 等，并且具有代码高亮、智能代码补全、代码重构、调试工具等功能。VS Code 的远程访问功能是其强大的 Live Share 扩展的一部分，它允许开发者实时共享和协作编辑代码。通过远程访问功能，你可以连接到远程的服务器或者容器环境，就像在本地操作一样，进行代码编写、运行和调试。',
    logo: logoGo,
  },
  {
    href: '#',
    name: 'PyCharm',
    description:
      'PyCharm 是由 JetBrains 公司开发的一款强大的 Python 集成开发环境（IDE），专门为 Python 开发者设计。PyCharm 的远程访问功能主要体现在其对远程解释器的支持。这意味着你可以在远程服务器上配置 Python 解释器，并通过 PyCharm 直接在本地进行开发工作，而代码实际运行和测试则在远程服务器上执行。',
    logo: logoRuby,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        三种远程访问方式
      </Heading>
      <div className="grid grid-cols-1 pt-10 mt-4 border-t not-prose gap-x-6 gap-y-10 border-zinc-900/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3 dark:border-white/5">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="w-12 h-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
