<script setup lang="ts">
  const itemName1 = "desk";
  const itemName2 = "bike";

  const URL = "https://qiita.com/lionecesia/items/b6d68033a11f72350f39";

  const buy = (itemName: string) => {
    alert("Are you sure to buy " + itemName + "?");
  };
</script>

<template>
  <div class="cotainer">
    <a v-bind:href="URL">test</a>
    <h1>Payment</h1>
    <div class="payment">
      <label>{{ itemName1 }}</label>
      <label>{{ itemName2 }}</label>
      <button v-on:click="buy('test')">Buy</button>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .payment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 400px;
    margin-bottom: 8px;
    background-color: green;
  }
  label {
    font-size: 20px;
    font-weight: bold;
  }
</style>
