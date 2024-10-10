<!--
 * @Author: wendy chen
 * @Date: 2024-07-09 20:55:14
 * @LastEditTime: 2024-10-10 17:39:51
 * @LastEditors: wendy chen
 * @Description: 博文布局组件
-->
<template>
  <div id="vuepress-theme-blog__post-layout">
    <article
      class="vuepress-blog-theme-content"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <header>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title }}
        </h1>
        <PostMeta
          :tags="$frontmatter.tags"
          :author="$frontmatter.author"
          :date="$frontmatter.date"
          :location="$frontmatter.location"
        />
      </header>
      <Content itemprop="articleBody" />
      <footer>
        <hr />
        <Comment />
      </footer>
    </article>
    <Toc />
  </div>
</template>

<script lang="ts" setup name="Post">
  import Toc from '@theme/components/Toc.vue'
  import PostMeta from '@theme/components/PostMeta.vue'
  import Comment from '@vuepress/plugin-blog/lib/client/components/Comment.vue'
</script>

