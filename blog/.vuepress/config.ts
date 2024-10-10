/*
 * @Author: wendy chen
 * @Date: 2024-05-30 13:49:15
 * @LastEditTime: 2024-10-10 15:46:39
 * @LastEditors: wendy chen
 * @Description: 
 */
import { defineConfig } from "vuepress/config";

export default defineConfig({
  /**
   * Type is `DefaultThemeConfig`
   */
  title: 'Wendy Chen',
  description: "Wendy Chen's personal website",
  theme: '@vuepress/theme-blog',
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true
      }
    ],
      [
        '@vuepress/blog',
        {
          directories: [
            {
              // 当前分类的唯一 ID
              id: 'post',
              // 目标文件夹
              dirname: '_posts',
              // `entry page` (或者 `list page`) 的路径
              path: '/post/',
              pagination: {
                perPagePosts: 2
              }
            },
          ],
          frontmatters: [
            {
              id: "tag",
              keys: ['tag', 'tags'],
              path: '/tag/',
              layout: 'Tag',
              frontmatter: { title: 'Tag' },
              itemlayout: 'Tag',
              pagination: {
                perPagePosts: 3
              }
            },
          ]
        },
      ],
  ]
});
