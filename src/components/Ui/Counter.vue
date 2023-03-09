<script setup>
import { useProductsStore } from "../../stores/product";
import { ref, computed } from "vue";

const props = defineProps({
  background: {
    type: String,
    required: false,
    default: "#ffffff",
  },
});

const pStore = useProductsStore();

const counter = ref(1);

const emit = defineEmits(["handOver","findItem"]);
const countPlus = () => {
  counter.value++;
  emit("handOver", counter.value);
};
const countMinus = () => {
  counter.value--;
  emit("handOver", counter.value);
};

const find = ()=>{
emit("findItem")
}
</script>
<template>
  <div class="counter">
    <button @click="countMinus" :disabled=" counter === 1 " class="counter__click">-</button>
    <button @click="find" :style="{ backgroundColor: background }" class="counter__btn">
      <slot></slot>
    </button>
    <button @click="countPlus" class="counter__click">+</button>
  </div>
</template>
<style lang="scss" scoped>
.counter {
  &__btn {
    background: var(--blueDark);
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    &:hover {
      background: "red";
      cursor: pointer;
    }
  }
  &__click {
    margin: 20px 20px 10px 20px;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
