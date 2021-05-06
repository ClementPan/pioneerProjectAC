<template>
  <div id="checkout">
    <h1 class="page-title">結帳</h1>
    <div class="main-content">
      <div class="panel">
        <ProgressBar :currentStep="currentStep"></ProgressBar>
        <div class="form">
          <h1 class="title">付款資訊</h1>
          <div class="row">
            <div class="input">
              <label for="input-cardHolderName">持卡人姓名</label>
              <input
                v-model="form.cardHolderName"
                required
                id="input-cardHolderName"
                placeholder="John Doe"
                type="text"
              />
            </div>
          </div>
          <div class="row">
            <div class="input">
              <label for="input-cardNumber">卡號</label>
              <input
                v-model="form.cardNumber"
                required
                id="input-cardNumber"
                placeholder="1111 2222 3333 4444"
                type="tel"
                maxlength="19"
                pattern="[0-9]{13,19}"
              />
            </div>
          </div>
          <div class="row">
            <div class="input">
              <label for="input-expileDate">有效期限</label>
              <input
                v-model="form.expileDate"
                required
                id="input-expileDate"
                placeholder="MM/YY"
                type="date"
              />
            </div>
            <div class="input">
              <label for="input-cvc">CVC / CCV</label>
              <input
                v-model="form.cvc"
                required
                id="input-cvc"
                placeholder="123"
                type="text"
              />
            </div>
          </div>
        </div>
        <div class="btn-panel">
          <button class="btn btn-last" @click.stop.prevent="lastStep">
            <span><img src="../assets/btnLast.svg" alt="" /></span>上一步
          </button>
          <button class="btn btn-next" @click.stop.prevent="saveForm">
            確認下單 <span><img src="../assets/btnNext.svg" alt="" /></span>
          </button>
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
  name: "Checkout",
  components: { Cart, ProgressBar },
  data() {
    return {
      currentStep: 3,
      form: {
        cardHolderName: "",
        cardNumber: "",
        expileDate: "",
        cvc: "",
      },
    };
  },
  created() {
    // get user form data from localStorage
    const localStorageForm = JSON.parse(localStorage.getItem("form"));
    if (localStorageForm) {
      this.form = {
        ...this.form,
        ...localStorageForm,
      };
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    nextStep() {
      // 把 localStorage 的資料拿出來，加上現在新的資料，送出
    },
    lastStep() {
      this.$router.push("/shipping");
    },
  },
  filters: {
    cardNumberFilter(num) {
      num = num.split("");
      if (num.length > 4) {
        num.push(" ");
      }
      // return num.join("");
      return "**********";
    },
  },
};
</script>

<style scoped>
.row:nth-child(2) .input,
.row:nth-child(3) .input {
  width: 350px;
}
</style>