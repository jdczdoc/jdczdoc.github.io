import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '九鼎文档',
  tagline: '深圳市九鼎创展科技有限公司',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://doc.9tripod.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
    // future.v4 默认会禁用 mdx1Compat，此处显式启用 headingIds
    // 以支持 markdown 标题显式锚点语法 {#id}（如 ## ioctl 命令 {#ioctl}）
    mdx1Compat: {
      headingIds: true,
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['zh', 'en'],
        indexDocs: true,
        indexBlog: true,
        explicitSearchResultPath: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '九鼎文档',
      logo: {
        alt: 'JiuDing Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'alldocsSidebar',
          position: 'left',
          label: '所有文档',
        },
        {
          type: 'dropdown',
          label: '其它',
          position: 'left',
          items: [
            {
              label: '关于我们',
              to: '/docs/about',
            },
            {
              label: '官方网站',
              href: 'http://www.9tripod.com',
            },
	    {
              label: '社区论坛',
              href: 'http://bbs.9tripod.com',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '关于',
              to: '/docs/about',
            },
            {
              label: '瑞芯微官方文档',
              to: '/docs/category/瑞芯微官方文档',
            },
            {
              label: '全志官方文档',
              to: '/docs/category/全志官方文档',
            },
            {
              label: 'XSTAR(XOS)官方文档',
              to: '/docs/category/xstarxos官方文档',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '论坛',
              href: 'http://bbs.9tripod.com',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '九鼎官网',
              href: 'http://www.9tripod.com',
            },
            {
              label: '淘宝店',
              href: 'https://armeasy.taobao.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
