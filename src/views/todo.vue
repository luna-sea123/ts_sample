<script setup lang="ts">
  import TodoList from "../components/TodoList.vue";
  import { injection, InjectionKey, provide, ref } from "vue";
  import { todos, todoKey } from "../useTodo";

  //provide("todos", todos);
  provide(todoKey, todos);
</script>

<template>
  <TodoList />
</template>
