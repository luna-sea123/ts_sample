<script setup lang="ts">
  import { ref } from "vue";
  import TweetPostForm from "./TweetPostForm.vue";
  import TweetList from "./TweetList.vue";

  const tweets = ref([
    { id: 0, description: "Hello World" },
    { id: 1, description: "newWorld" },
  ]);

  const postTweet = (description: string) => {
    const tweet = {
      id: Math.random(),
      description,
    };
    tweets.value.push(tweet);
  };

  const deleteTweet = (id: number) => {
    //一個一個のオブジェクトがtの値に渡ってtの値の中のidプロパティが
    //受け取ったid引数と同じではないものを返す
    tweets.value = tweets.value.filter((t) => t.id !== id);
  };
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <TweetPostForm @post-tweet="postTweet" />
    <div class="tweet-container">
      <!--v-if,else-->
      <p v-show="tweets.length <= 0">No message</p>
      <ul>
        <TweetList :tweets="tweets" @delete-tweet="deleteTweet" />
        <!-- <TweetList :tweets="tweets" :delete-tweet="deleteTweet" /> v-bindの省略形-->
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-bottom: 16px;
  }
</style>
