<template>
  <div id="shipping">
    <h1 class="page-title">結帳</h1>
    <div class="main-content">
      <div class="panel">
        <ProgressBar :currentStep="currentStep"></ProgressBar>
        <div class="form">
          <h1 class="title">運送方式</h1>
        </div>
      </div>
      <Cart />
    </div>
  </div>
</template>

<script>
import Cart from "../components/Cart";
import ProgressBar from "../components/ProgressBar";

export default {
  name: "Shipping",
  components: { Cart, ProgressBar },
  data() {
    return { currentStep: 2 };
  },
  methods: {
    nextStep() {
      // 把 localStorage 的資料拿出來，加上現在新的資料
    },
  },
};
</script>

<style scoped>
.form {
  border: 1px solid #000;
}
</style>