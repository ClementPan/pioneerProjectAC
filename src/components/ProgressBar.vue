<template>
  <div id="progressBar">
    <div class="step one done">
      <i v-if="currentStep === 1">
        <img src="./../assets/stepNum/stepOneDone.svg" alt="" />
      </i>
      <i v-else>
        <img src="./../assets/stepNum/stepChecked.svg" alt="" />
      </i>
      <p>寄送地址</p>
    </div>
    <div class="connectLine done"></div>
    <div
      class="step two"
      :class="{ done: currentStep === 2 || currentStep === 3 }"
    >
      <i v-if="currentStep === 1"
        ><img src="./../assets/stepNum/stepTwoUndone.svg" alt=""
      /></i>
      <i v-else-if="currentStep === 3"
        ><img src="./../assets/stepNum/stepChecked.svg" alt=""
      /></i>
      <i v-else><img src="./../assets/stepNum/stepTwoCurrent.svg" alt="" /></i>
      <p>運送方式</p>
    </div>
    <div class="connectLine" :class="{ done: currentStep === 3 }"></div>
    <div class="step three" :class="{ done: currentStep === 3 }">
      <i v-if="currentStep === 3"
        ><img src="./../assets/stepNum/stepThreeCurrent.svg" alt=""
      /></i>
      <i v-else><img src="./../assets/stepNum/stepThreeUndone.svg" alt="" /></i>
      <p>付款資訊</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style scoped>
#progressBar {
  margin-bottom: 64px;
  height: 24px;
  display: flex;
}

.step {
  width: 96px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.step i {
  margin: 0;
  margin-right: 8px;
  height: 100%;
}

.step p {
  font-size: 16px;
  height: 100%;
  color: var(--undone);
}
.step.done p {
  height: 100%;
  color: var(--done);
}

.connectLine {
  flex: 1;
  margin: 0 33px;
  position: relative;
}

.connectLine::after {
  content: "";
  width: 100%;
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f5;
}

.connectLine.done::after {
  background-color: #000;
}
</style>