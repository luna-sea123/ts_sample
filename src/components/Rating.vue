<script setup lang="ts">
  import { ref } from "vue";

  //Form.vueから渡される
  const props = defineProps(["modeValue"]);
  const emits = defineEmits(["update:modeValue"]);

  //初期値として代入
  const isActiveButton = ref<string>(props.modeValue);

  const onClick = (buttonType: string) => {
    isActiveButton.value = buttonType;

    emits("update:modeValue", isActiveButton.value);
  };
</script>

<template>
  <ul>
    <li>
      <button
        :class="{ active: isActiveButton === 'bad' }"
        @click="onClick('bad')"
        type="button"
      >
        Bad
      </button>
    </li>
    <li>
      <button
        :class="{ active: isActiveButton === 'average' }"
        @click="onClick('average')"
        type="button"
      >
        Average
      </button>
    </li>
    <li>
      <button
        :class="{ active: isActiveButton === 'great' }"
        @click="onClick('great')"
        type="button"
      >
        Great
      </button>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
  }

  li {
    margin: 0 1rem;
    border: 1px solid gray;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .active {
    color: pink;
  }
</style>
