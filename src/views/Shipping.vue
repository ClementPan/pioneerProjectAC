<template>
  <div id="shipping">
    <h1 class="page-title">結帳</h1>
    <div class="main-content">
      <div class="panel">
        <ProgressBar :currentStep="currentStep"></ProgressBar>
        <div class="form">
          <h1 class="title">運送方式</h1>
          <div class="input radio">
            <div
              class="row"
              :class="{ selected: form.shippingMethod === 'shipping-standart' }"
            >
              <label for="shipping-standart"></label>
              <input
                id="shipping-standart"
                type="radio"
                value="shipping-standart"
                v-model="form.shippingMethod"
              />
              <div class="shipping-description">
                <div class="shipping-name">
                  <p class="name-title">標準運送</p>
                  <p class="shipping-fee">免費</p>
                </div>
                <p class="name-description">約 3~7 個工作天</p>
              </div>
            </div>
            <div
              class="row"
              :class="{ selected: form.shippingMethod === 'shipping-dhl' }"
            >
              <label for="shipping-dhl"></label>
              <input
                id="shipping-dhl"
                value="shipping-dhl"
                type="radio"
                v-model="form.shippingMethod"
              />
              <div class="shipping-description">
                <div class="shipping-name">
                  <p class="name-title">DHL 運送</p>
                  <p class="shipping-fee">$500</p>
                </div>
                <p class="name-description">48 小時內送達</p>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-panel">
          <button class="btn btn-last" @click.stop.prevent="lastStep">
            <span><img src="../assets/btnLast.svg" alt="" /></span>上一步
          </button>
          <button class="btn btn-next" @click.stop.prevent="saveForm">
            下一步 <span><img src="../assets/btnNext.svg" alt="" /></span>
          </button>
        </div>
      </div>
      <!-- Cart component -->
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
  created() {
    // get user form data from localStorage
    const localStorageForm = JSON.parse(localStorage.getItem("form"));
    if (localStorageForm) {
      this.form = {
        ...this.form,
        ...localStorageForm,
      };
    } else {
      // catch for NavigationDuplicated error
      // this.$router.push("/").catch(() => {});
      this.$router.push("/");
    }
  },
  data() {
    return {
      currentStep: 2,
      form: {
        shippingMethod: "",
      },
    };
  },
  methods: {
    saveForm() {
      // form check
      if (!this.form.shippingMethod) {
        return alert("尚未選擇運送方式！");
      }
      // 取代當前 localStorage 中的 form
      localStorage.setItem("form", JSON.stringify(this.form));
      // push to Shipping.vue
      this.$router.push("/checkout");
    },
    lastStep() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* radio */

.input.radio {
  height: auto;
  width: 435px;
  /* border: 1px solid red; */
}

.radio .row {
  height: 60px;
  border: 1px solid #f0f0f5;
  border-radius: 4px;
  margin: 0;
  margin-bottom: 24px;
}

.radio .row:hover {
  border: 1px solid #2a2a2a;
}

.radio .row.selected {
  border: 1px solid #2a2a2a;
}

.radio .row.selected label::before {
  box-shadow: inset 0 0 0 6px #000;
}

.radio .row .shipping-description {
  flex: 1;
  padding: 11px 20px 11px 0;
}

.shipping-name {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.input input[type="radio"] {
  display: none;
}

.input label {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input label::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 50%;
}

.radio p {
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  color: #000;
}

.radio .shipping-fee p,
.radio .name-description p {
  height: 16px;
  font-size: 12px;
}
</style>