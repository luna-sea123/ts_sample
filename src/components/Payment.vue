<script setup lang="ts">
  import {
    ref,
    reactive,
    computed,
    watch,
    toRefs,
    onMounted,
    onBeforeMount,
    onUpdated,
  } from "vue";

  //オブジェクトそのものは定数、値は再代入可能
  //単一の値のリアクティブ化
  //const item = ref<string>("Desk");

  //複数の値のリアクティブ化
  const item = reactive({
    name: "table",
    price: 20000,
  });

  const budget = 50000;

  const priceLabel = computed(() => {
    return item.price > budget ? "too expensive..." : item.price + "yen";
  });

  // const getPriceLabel = () => {
  //   if (item.price > budget) {
  //     return "too expensive...";
  //   } else {
  //     return item.price + "yen";
  //   }
  // };

  const URL = "https://qiita.com/lionecesia/items/b6d68033a11f72350f39";

  const buy = (item: string) => {
    alert("Are you sure to buy " + item + "?");
  };

  const clear = () => {
    item.name = "";
    item.price = 0;
  };

  // const priceLabel = ref<string>(item.price + "yen");

  // const { price } = toRefs(item);
  //第一引数のリアクティブな値が変わると第二引数に与えた関数が実行される
  // watch(price, () => {
  //   if (item.price > budget) {
  //     priceLabel.value = "too expensive...";
  //   } else {
  //     priceLabel.value = price.value + "yen";
  //   }
  // });
</script>

<template>
  <div class="cotainer">
    <a v-bind:href="URL">test</a>
    <h1>Payment</h1>
    <input v-model="item.name" />
    <input v-model="item.price" />
    <!-- <input v-on:input="input" v-bind:value="item.name" />
          <input v-on:input="inputPrice" v-bind:value="item.price" /> -->
    <button v-on:click="clear">Clear</button>

    <div class="payment">
      <label>{{ item.name }}</label>
      <label>{{ priceLabel }}</label>
      <button v-on:click="buy(item.name)">Buy</button>
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

  input {
    margin-bottom: 8px;
    margin-right: 8px;
  }
  label {
    font-size: 20px;
    font-weight: bold;
  }
</style>
