<script setup lang="ts">
  import { ref, defineEmits, computed } from "vue";

  const inputtingDescription = ref<string>("");

  const emit = defineEmits(["post-tweet"]);
  const postTweet = () => {
    emit("post-tweet", inputtingDescription.value);
  };

  const nameLengthLIMIT = 10;
  //バリデーション判定
  const ValidName = computed(() => {
    if (inputtingDescription.value.length >= nameLengthLIMIT) {
      return false;
    } else {
      return true;
    }
  });
  //colorの値を真偽値に合わせて代入する
  const color = computed(() => {
    return ValidName.value ? "white" : "red";
  });
</script>

<template>
  <div class="form-container">
    <input class="input-name" v-model="inputtingDescription" />

    <span v-if="!ValidName">{{ nameLengthLIMIT }}文字までです</span>

    <button class="save-button" @click="postTweet">post</button>
  </div>
</template>

<style scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    width: 60%;
    margin-bottom: 12px;
    border-radius: 4px;
  }
  .save-button {
    color: aliceblue;
    font-weight: bold;
    background-color: rgb(47, 168, 168);
    border-radius: 2px;
    border: none;
    margin-top: 20px;
  }

  .save-button:hover {
    background-color: rgb(121, 180, 228);
  }

  /* バリデーション　v-bind */
  .input-name {
    background-color: v-bind(color);
    color: black;
  }
</style>
