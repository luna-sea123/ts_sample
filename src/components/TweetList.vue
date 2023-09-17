<script setup lang="ts">
  import { defineProps, defineEmits } from "vue";

  type Tweet = {
    id: number;
    description: string;
  };

  type Props = {
    tweets: Tweet[];
    //関数をPropsとして渡す場合
    //deleteTweet: (id: number) => void;
  };

  //親コンポーネント側で定義されている変数を子コンポーネントで受け取る
  //値を加えることなく単純に表示するだけ
  defineProps<Props>();

  const emit = defineEmits(["delete-tweet"]);
  const deleteTweet = (id: number) => {
    emit("delete-tweet", id);
  };
</script>

<template>
  <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
    <span>{{ tweet.description }}</span>
    <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
  </li>
</template>

<style scoped>
  .tweet-list {
    list-style: none;
    margin-bottom: 12px;
    border-radius: 4px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    background-color: aqua;
    padding: 8px 20px;
    width: 300px;
  }

  .delete-button {
    color: red;
    font-weight: bold;
    background-color: pink;
    border-radius: 2px;
    border: none;
    width: 60px;
    height: 22px;
  }

  .delete-button:hover {
    background-color: aliceblue;
  }
</style>
