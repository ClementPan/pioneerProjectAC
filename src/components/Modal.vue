<template>
  <div id="modal">
    <div class="modal-content">
      <div class="header">
        <i @click="closeModal"><img src="../assets/close.svg" alt="" /></i>
      </div>
      <div class="container">
        {
        <div v-for="(val, key) in form" :key="key">
          <p v-if="key !== 'products'">"{{ key }}": "{{ val }}"</p>
        </div>
        }
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
#modal {
  width: 320px;
  border-radius: 5px;
  height: auto;
  background-color: #fff;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 999;
  border: 1px solid #aaa;
}

.header {
  padding: 0 10px;
  height: 40px;
  line-height: 30px;
  border-bottom: 1px solid #aaa;
  position: relative;
}

.header i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

i:hover {
  cursor: pointer;
}

.header i img {
  width: 20px;
  height: 20px;
}

.container {
  padding: 20px;
}

p {
  padding: 10px;
  width: 100%;
  word-break: break-all;
  margin: 0;
  padding: 0;
  padding-left: 10px;
}
</style>