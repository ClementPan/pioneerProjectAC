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
                <select
                  required
                  id="input-appellation"
                  name="appellation"
                  v-model="form.appellation"
                >
                  <option value="mister" selected>先生</option>
                  <option value="madam">女士</option>
                </select>
                <i class="dropdownBtn"></i>
              </div>
              <div class="input">
                <label for="input-name">姓名</label>
                <input
                  v-model="form.name"
                  required
                  id="input-name"
                  placeholder="請輸入姓名"
                  type="text"
                />
              </div>
            </div>
            <!-- tel & email -->
            <div class="row">
              <div class="input">
                <label for="input-tel">電話</label>
                <input
                  v-model="form.tel"
                  required
                  id="input-tel"
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
            <!-- county & address -->
            <div class="row">
              <div class="input">
                <label for="input-county">縣市</label>
                <select
                  v-model="form.county"
                  id="input-county"
                  name="county"
                  required
                  :class="{ noValueSelect: this.form.county === '請選擇縣市' }"
                >
                  <option class="placeholder-option" disabled>
                    請選擇縣市
                  </option>
                  <option value="taipei">台北</option>
                  <option value="taichung">台中</option>
                  <option value="taoyuan">桃園</option>
                  <option value="tainan">台南</option>
                  <option value="aohsiung">高雄</option>
                </select>
                <i class="dropdownBtn"></i>
              </div>
              <div class="input">
                <label for="input-address">地址</label>
                <input
                  v-model="form.address"
                  required
                  id="input-address"
                  placeholder="請輸入地址"
                  type="text"
                />
              </div>
            </div>
            <div class="row">
              <button
                class="btn btn-next"
                type="submit"
                @click.stop.prevent="saveForm"
              >
                下一步
              </button>
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
    return {
      currentStep: 1,
      form: {
        appellation: "mister",
        name: "",
        tel: "",
        email: "",
        county: "請選擇縣市",
        address: "",
      },
    };
  },
  methods: {
    saveForm() {
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