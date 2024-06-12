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
    docsDir: "packages/docs/docs"
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true
      }
    ]
  ]
});
