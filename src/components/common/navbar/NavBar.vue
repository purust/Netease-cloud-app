<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  line-height: 0.7rem;
  width: 100%;
  height: 0.7rem;
  text-align: center;
  padding: 0.1rem 0.2rem;
  /* background-color: #fff; */
  /* box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1); */
}
.left,
.right {
  width: 0.6rem;
}
.center {
  flex: 1;
}
</style>
