<template>
  <div id="address">
    <h1 class="page-title">結帳</h1>
    <div class="main-content">
      <div class="panel">
        <ProgressBar :currentStep="currentStep"></ProgressBar>
        <div class="form">
          <h1 class="title">寄送地址</h1>
          <form action="">
            <!-- mr/mrs & name -->
            <div class="row">
              <div class="input">
                <label for="input-appellation">稱謂</label>
                <input id="input-appellation" type="text" />
              </div>
              <div class="input">
                <label for="input-name">姓名</label>
                <input id="input-name" type="text" />
              </div>
            </div>
            <!-- tel & email -->
            <div class="row">
              <div class="input">
                <label for="input-tel">電話</label>
                <input id="input-tel" type="text" />
              </div>
              <div class="input">
                <label for="input-email">Email</label>
                <input id="input-email" type="email" />
              </div>
            </div>
            <!-- county & address -->
            <div class="row">
              <div class="input">
                <label for="input-county">縣市</label>
                <input id="input-county" type="text" />
              </div>
              <div class="input">
                <label for="input-address">地址</label>
                <input id="input-address" type="text" />
              </div>
            </div>
            <div class="row">
              <button class="btn btn-next" type="submit">下一步</button>
            </div>
          </form>
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
  name: "Address",
  components: { Cart, ProgressBar },
  data() {
    return { currentStep: 1 };
  },
  methods: {
    nextStep() {
      // 把資料存進 localStorage
    },
  },
};
</script>

<style scoped>
.form {
  /* border: 1px solid #000; */
}

.row:first-child .input:first-child {
  width: 160px;
}
.row:first-child .input:last-child {
  width: 350px;
}

.row:nth-child(2) .input:first-child {
  width: 160px;
}
.row:nth-child(2) .input:last-child {
  width: 350px;
}
</style> 