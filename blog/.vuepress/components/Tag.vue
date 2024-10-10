<!--
 * @Author: wendy chen
 * @Date: 2024-07-10 16:13:45
 * @LastEditTime: 2024-07-10 16:13:49
 * @LastEditors: wendy chen
 * @Description: tag component
-->
<template>
  <ul id="default-layout">
    <li v-for="tag in $tag.list">
      <router-link class="page-link" :to="tag.path">{{ tag.name }}</router-link>
    </li>
  </ul>
</template>
