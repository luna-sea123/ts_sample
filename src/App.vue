<script setup lang="ts">
  import HelloWorld from "./components/HelloWorld.vue";
  import Payment from "./components/Payment.vue";
  import Tweet from "./components/Tweet.vue";
  import { ref, computed } from "vue";
  import CardList from "./components/CardList.vue";
  import SecondCardList from "./components/SecondCardList.vue";
  import TodoList from "./components/TodoList.vue";

  const buy = (itemName: string) => {
    alert("Are you sure to buy " + itemName + "?");
  };

  const activeTag = ref(1);
  // const isFirstTab = ref(true);
  const updateTab = (num: number) => {
    activeTag.value = num;
  };

  const currentComponent = computed(() => {
    switch (activeTag.value) {
      case 1:
        return CardList;
      case 2:
        return SecondCardList;
    }
  });
</script>

<template>
  <nav>
    <router-link to="/menu">menu</router-link>
  </nav>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <HelloWorld msg="Vite + Vue" />
  <Payment />
  <button v-on:click="buy('test')">Buy</button>
  <Tweet />

  <div class="tab-changer">
    <button @click="updateTab(1)">Tab 1</button>
    <button @click="updateTab(2)">Tab 2</button>
  </div>

  <div class="tab-contents">
    <component :is="currentComponent"></component>
  </div>

  <TodoList />
</template>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }

  .tab-contents {
    margin-top: 20px;
  }
</style>
