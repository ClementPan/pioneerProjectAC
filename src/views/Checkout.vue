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
              <label for="input-ccname">持卡人姓名</label>
              <input
                v-model="form.ccname"
                required
                id="input-ccname"
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
              />
            </div>
          </div>
          <div class="row">
            <div class="input">
              <label for="input-expdate">有效期限</label>
              <input
                v-model="form.expdate"
                required
                id="input-expdate"
                placeholder="MM/YY"
                type="text"
                maxlength="5"
              />
            </div>
            <div class="input">
              <label for="input-cvv">CVC / CCV</label>
              <input
                v-model="form.cvv"
                required
                id="input-cvv"
                placeholder="123"
                type="text"
                maxlength="3"
              />
            </div>
          </div>
        </div>
        <div class="btn-panel">
          <button class="btn btn-last" @click.stop.prevent="lastStep">
            <span><img src="../assets/btnLast.svg" alt="" /></span>上一步
          </button>
          <button class="btn btn-next" @click.stop.prevent="checkout">
            確認下單 <span><img src="../assets/btnNext.svg" alt="" /></span>
          </button>
        </div>
      </div>

      <Modal
        id="modal"
        :class="{ show: isShow }"
        :form="form"
        @closeModal="closeModal"
      ></Modal>

      <div class="modal-backdrop" :class="{ show: isShow }"></div>

      <Cart :form="form" />
    </div>
  </div>
</template>

<script>
import Cart from "../components/Cart";
import Modal from "../components/Modal";
import ProgressBar from "../components/ProgressBar";

export default {
  name: "Checkout",
  components: { Cart, ProgressBar, Modal },
  data() {
    return {
      currentStep: 3,
      form: {},
      isShow: false,
    };
  },
  created() {
    // get user form data from localStorage
    const localStorageForm = JSON.parse(localStorage.getItem("form"));
    if (localStorageForm) {
      this.form = {
        ...localStorageForm,
      };
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    checkout() {
      // form check
      if (
        !this.form.ccname ||
        !this.form.cardNumber ||
        !this.form.expdate ||
        !this.form.cvv
      ) {
        return alert("尚未填妥付款資訊！");
      }
      this.isShow = true;
    },
    lastStep() {
      localStorage.setItem("form", JSON.stringify(this.form));
      this.$router.push("/shipping");
    },
    closeModal() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
.row:nth-child(2) .input,
.row:nth-child(3) .input {
  width: 350px;
}

#modal {
  display: none;
}

#modal.show {
  display: block;
}

.modal-backdrop {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.7;
  z-index: 998;
}

.modal-backdrop.show {
  display: block;
}
</style>