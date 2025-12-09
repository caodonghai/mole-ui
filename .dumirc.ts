import { defineConfig } from 'dumi';
const publicPath = process.env.NODE_ENV === 'production' ? `/mole-ui/` : '/';

export default defineConfig({
  outputPath: 'docs-dist',
  exportStatic: {},
  mfsu: false,
  logo: `${publicPath}images/logo.png`,
  favicons: [`${publicPath}images/logo.ico`],
  headScripts: [`window.publicPath='${publicPath}';`],
  locales: [{ id: 'zh-CN', name: '中文' }],
  base: publicPath,
  publicPath: publicPath,
  runtimePublicPath: {},
  themeConfig: {
    name: 'mole-ui',
    hd: {
      rules: [],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
    nav: [
      { title: '指南', link: '/guide', activePath: '/guide' },
      {
        title: '组件',
        link: '/components/board-designer',
        activePath: '/components/board-designer',
      },
      {
        title: '更新日志',
        link: '/changelog',
        activePath: '/changelog',
      },
    ] as any,
    footer: 'Copyright © 2025  Powered by 人生海海',
  },
  // apiParser: {
  //   // 配置 API 解析
  // },
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/index.ts',
  // },
});
