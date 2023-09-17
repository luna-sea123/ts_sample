<script setup lang="ts">
  import { ref } from "vue";

  const tweets = ref([
    { id: 0, description: "Hello World" },
    { id: 1, description: "newWorld" },
  ]);

  const inputtingDescription = ref<string>("");

  const postTweet = () => {
    const tweet = {
      id: Math.random(),
      description: inputtingDescription.value,
    };
    tweets.value.push(tweet);
    inputtingDescription.value = "";
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
    <div class="form-container">
      <input v-model="inputtingDescription" />
      <button class="save-button" @click="postTweet">post</button>
    </div>
    <div class="tweet-container">
      <ul>
        <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
          <span>{{ tweet.description }}</span>
          <button @click="deleteTweet(tweet.id)" class="delete-button">
            delete
          </button>
        </li>
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

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    padding: 24px 0;
    width: 60%;
    margin-bottom: 12px;
    border-radius: 4px;
  }

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

  /* button {
    color: green;
    font-weight: bold;
  } */

  .save-button:hover {
    background-color: aliceblue;
  }

  .delete-button:hover {
    background-color: aliceblue;
  }
  .save-button {
    color: aliceblue;
    font-weight: bold;
    background-color: aqua;
    border-radius: 2px;
    border: none;
    width: 60px;
    height: 22px;
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
  input {
    margin-bottom: 16px;
  }
</style>
