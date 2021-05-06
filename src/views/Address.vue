<template>
  <div id="address">
    <h1 class="page-title">結帳</h1>
    <div class="main-content">
      <div class="panel">
        <ProgressBar :currentStep="currentStep"></ProgressBar>
        <div class="form">
          <h1 class="title">寄送地址</h1>
          <!-- mr/mrs & username -->
          <div class="row">
            <div class="input">
              <label for="input-salutation">稱謂</label>
              <select
                required
                id="input-salutation"
                name="salutation"
                v-model="form.salutation"
              >
                <option value="mister" selected>先生</option>
                <option value="madam">女士</option>
              </select>
              <i class="dropdownBtn"></i>
            </div>
            <div class="input">
              <label for="input-username">姓名</label>
              <input
                v-model="form.username"
                required
                id="input-username"
                placeholder="請輸入姓名"
                type="text"
              />
            </div>
          </div>
          <!-- phone & email -->
          <div class="row">
            <div class="input">
              <label for="input-tel">電話</label>
              <input
                v-model="form.phone"
                required
                id="input-phone"
                placeholder="請輸入行動電話"
                type="text"
              />
            </div>
            <div class="input">
              <label for="input-email">Email</label>
              <input
                v-model="form.email"
                required
                id="input-email"
                placeholder="請輸入電子郵件"
                type="email"
              />
            </div>
          </div>
          <!-- city & addr -->
          <div class="row">
            <div class="input">
              <label for="input-city">縣市</label>
              <select
                v-model="form.city"
                id="input-city"
                name="city"
                required
                :class="{ noValueSelect: this.form.city === '請選擇縣市' }"
              >
                <option class="placeholder-option" disabled>請選擇縣市</option>
                <option value="taipei">台北</option>
                <option value="taichung">台中</option>
                <option value="taoyuan">桃園</option>
                <option value="tainan">台南</option>
                <option value="aohsiung">高雄</option>
              </select>
              <i class="dropdownBtn"></i>
            </div>
            <div class="input">
              <label for="input-addr">地址</label>
              <input
                v-model="form.addr"
                required
                id="input-addr"
                placeholder="請輸入地址"
                type="text"
              />
            </div>
          </div>
        </div>
        <div class="btn-panel">
          <button
            class="btn btn-next"
            type="submit"
            @click.stop.prevent="saveForm"
          >
            下一步 <span><img src="../assets/btnNext.svg" alt="" /></span>
          </button>
        </div>
      </div>
      <Cart :form="form" />
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
    return {
      currentStep: 1,
      form: {
        salutation: "mister",
        username: "",
        phone: "",
        email: "",
        city: "請選擇縣市",
        addr: "",
        products: [
          {
            id: 1,
            photo:
              "https://clementpan.github.io/toUploadImage/cart-item-photo1.svg",
            name: "破壞補丁修身牛仔褲",
            count: 1,
            price: 3999,
          },
          {
            id: 2,
            photo:
              "https://clementpan.github.io/toUploadImage/cart-item-photo2.svg",
            name: "刷色直筒牛仔褲",
            count: 1,
            price: 1299,
          },
        ],
        shippingFee: 0,
        ccname: "",
        cardNumber: "",
        expdate: "",
        cvv: "",
        totalPrice: 5298,
      },
    };
  },
  created() {
    // get user form data from localStorage
    const localStorageForm = JSON.parse(localStorage.getItem("form"));
    if (localStorageForm) {
      this.form = localStorageForm;
    }
  },
  methods: {
    saveForm() {
      // form check
      if (
        this.form.username === "" ||
        this.form.phone === "" ||
        this.form.email === "" ||
        this.form.city === "請選擇縣市" ||
        this.form.addr === ""
      ) {
        return alert("寄送地址尚未填寫完整！");
      }
      // 把資料存進 localStorage
      localStorage.setItem("form", JSON.stringify(this.form));
      // push to Shipping.vue
      this.$router.push("/shipping");
    },
  },
};
</script>

<style scoped>
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