<script setup></script>
<template>
  <div class="info-search">
    <input class="info-search__input" type="text" />
    <button class="info-search__btn">
      <img class="info-search__img" src="../assets/svg/Search11.svg" alt="search1" />
    </button>
  </div>
</template>
<style lang="scss" scoped>
.info-search {
    display: flex;
    align-content: center;
  &__input {
    width: 200px;
    height: 30px;
  }
  &__btn {
    background: var(--blueDark);
    border: none;
}
  &__img{
    display:block;
    width:15px;

}
}
</style>
