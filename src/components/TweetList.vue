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
  //値を加えることなく単純に表示するだけに留める
  defineProps<Props>();

  const emit = defineEmits(["delete-tweet"]);
  const deleteTweet = (id: number) => {
    if (confirm("delete tweet ?")) {
      emit("delete-tweet", id);
    }
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
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(114, 204, 204);
    padding: 8px 20px;
    width: 300px;
  }

  .delete-button {
    color: black;
    font-weight: bold;
    background-color: rgb(202, 67, 67);
    border-radius: 4px;
    border: none;
  }

  .delete-button:hover {
    background-color: rgb(241, 140, 136);
  }
</style>
