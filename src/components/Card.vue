<script setup lang="ts">
  import { defineProps } from "vue";

  defineProps<{
    title: string;
  }>();
</script>

<template>
  <div class="card-container">
    <!-- <Card title="Title" class="card"> のtitleを取得して表示  -->
    <span class="title">{{ title }}</span>
    <!-- Cardコンポーネントに対してコンポーネントを直接埋め込める -->
    <slot></slot>
  </div>
  <div class="footer">
    <!-- フォールバック -->
    <slot name="footer">
      <span> Default Footer </span>
    </slot>
  </div>
</template>

<style scoped>
  .card-container {
    box-shadow: 2, 8px, black;
    border-radius: 8px 8px 0px 0px;
    padding: 20px 0px 0px 0px;
    width: 100%;
    height: 100px;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  .footer {
    display: flex;
    height: 30px;
    width: 100%;
    background-color: blue;
    border-radius: 0px 0px 8px 8px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
