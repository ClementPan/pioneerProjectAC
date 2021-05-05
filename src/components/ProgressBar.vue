<template>
  <div id="progressBar">
    <div class="step one done">
      <i><img src="./../assets/stepNum/stepOneDone.svg" alt="" /></i>
      <p>寄送地址</p>
    </div>
    <div class="connectLine" :class="{ done: currentStep === 1 || 2 }"></div>
    <div class="step two">
      <i><img src="./../assets/stepNum/stepTwoUndone.svg" alt="" /></i>
      <p>運送方式</p>
    </div>
    <div class="connectLine" :class="{ done: currentStep === 3 }"></div>
    <div class="step three">
      <i><img src="./../assets/stepNum/stepThreeUndone.svg" alt="" /></i>
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