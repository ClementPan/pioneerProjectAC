<template>
  <div id="cart">
    <p class="cart-title">購物籃</p>
    <div class="itemContainer">
      <div class="item" v-for="item in products" :key="item.id">
        <div class="photo">
          <img :src="item.photo" alt="" />
        </div>
        <div class="item-info">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-count">
            <i @click="minusCount(item)"
              ><img src="../assets/minusIcon.svg" alt=""
            /></i>
            <p>{{ item.count }}</p>
            <i @click="plusCount(item)"
              ><img src="../assets/plusIcon.svg" alt=""
            /></i>
          </div>
          <div class="item-price">{{ item.price | priceFormat }}</div>
        </div>
      </div>
    </div>
    <div class="shippingFee">
      <p>運費</p>
      <p>免費</p>
    </div>
    <div class="totalFee">
      <p>小計</p>
      <p>{{ totalCount | priceFormat }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    shippingFee: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
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
    };
  },
  methods: {
    plusCount(item) {
      item.count++;
    },
    minusCount(item) {
      if (item.count === 0) return;
      item.count--;
    },
  },
  computed: {
    totalCount() {
      let prices = this.products.map((each) => each.price * each.count);
      return (
        prices.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) + this.shippingFee
      );
    },
  },
  filters: {
    priceFormat(price) {
      // to be optimized
      price = price.toString().split("");
      if (price.length > 3) {
        price = price.reverse();
        price.splice(3, 0, ",");
        return "$" + price.reverse().join("");
      } else {
        return "$" + price.join("");
      }
    },
  },
};
</script>

<style scoped>
#cart {
  width: 440px;
  padding: 32px 24px;
  border: 1px solid var(--borderLight);
  /* border: 1px solid #000; */
  border-radius: 8px;
  margin-left: auto;
}

.cart-title {
  color: var(--fontDark);
  font-weight: var(--fontWeightTitle);
  font-size: 18px;
  margin-bottom: 32px;
}

.item {
  height: 102px;
  display: flex;
  margin-bottom: 32px;
}

.photo {
  width: 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 21px;
}

.photo img {
  width: 100%;
  height: 100%;
}

.item-info {
  position: relative;
  flex: 1;
}

.item-info .item-name {
  font-size: 16px;
  color: var(--fontDark);
  margin-bottom: 18px;
  font-weight: 400;
  height: 24px;
}

.item-info .item-count {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 27px;
}

.item-info .item-count i {
  height: 100%;
}

.item-info .item-count i:hover {
  cursor: pointer;
}

.item-info .item-count p {
  width: 53px;
  height: 100%;
  line-height: 27px;
  text-align: center;
}

.item-info .item-price {
  height: 24px;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 16px;
  font-weight: var(--fontWeightTitle);
}

.shippingFee,
.totalFee {
  height: 36px;
  border-top: 1px solid var(--borderLight);
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.shippingFee p,
.totalFee p {
  font-weight: var(--fontWeightTitle);
  font-size: 14px;
  color: #000;
}

.shippingFee p:first-child,
.totalFee p:first-child {
  font-weight: 400;
  font-size: 14px;
  color: var(--fontDark);
}
</style>
