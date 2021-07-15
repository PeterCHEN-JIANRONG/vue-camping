<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center my-3 h6">
      <!-- 麵包屑 -->
      <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/products/all">產品</router-link></li>
          <li class="breadcrumb-item">
            <router-link :to="`/products/${product.category}`">{{ product.category }}</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
    </div>
    <h1 class="">{{ product.title }}</h1>
    <div class="row">
      <div class="col-sm-6">
        <img class="img-fluid mb-4" :src="product.imageUrl" alt="" />
        <img class="img-fluid mb-1" v-for="item in product.imagesUrl" :src="item" :key="item" />
      </div>
      <div class="col-sm-6">
        <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
        <p>商品描述：{{ product.description }}</p>
        <p>商品內容：{{ product.content }}</p>
        <div class="h5" v-if="!product.price">{{ $filters.currency(product.origin_price) }} 元</div>
        <del class="h6" v-if="product.price"
          >原價 {{ $filters.currency(product.origin_price) }} 元</del
        >
        <div class="h5" v-if="product.price">
          現在只要 {{ $filters.currency(product.price) }} 元
        </div>
        <div>
          <div class="input-group">
            <input type="number" class="form-control" v-model.number="qty" min="1" />
            <button type="button" class="btn btn-primary" @click="addCart">
              加入購物車
            </button>
          </div>
        </div>
      </div>
      <!-- col-sm-6 end -->
    </div>

    <h2>相似產品</h2>
    <div class="row justify-content-center">
      <div class="col-6">
        <swiper class="">
          <swiper-slide v-for="item in similarProducts" :key="item.id">
            <img :src="item.imageUrl" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- <ul class="d-flex">
      <li v-for="item in similarProducts" :key="item.id">
        <h4>{{ item.title }}</h4>
        <img :src="item.imageUrl" style="height:300px; " alt="" />
      </li>
    </ul> -->
  </div>

  <!-- vue-loading -->
  <Loading :active="isLoading"></Loading>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/swiper.scss';
import emitter from '../methods/eventBus';

// 取亂數
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  props: ['id'],
  data() {
    return {
      product: {
        origin_price: 0,
        price: 0,
      },
      qty: 1,
      isLoading: false,
      products: [],
      similarProducts: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getProduct(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.product = res.data.product;
            this.getProductsAll();
          } else {
            this.$httpMessageState(res, res.data.message);
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    addCart() {
      this.isLoading = true;
      const data = {
        product_id: this.product.id,
        qty: this.qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data })
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, res.data.message);
          if (res.data.success) {
            this.qty = 1;
            emitter.emit('update-cartNum'); // 更新購物車icon顯示數量
            // this.$router.push('/products');
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    getProductsAll() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
            this.getSimilarProducts();
          } else {
            this.$httpMessageState(res, res.data.message);
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    getSimilarProducts() {
      // 取得相似產品
      const { category, id } = this.product;
      // 過濾 相同類別 且 id不重複
      const filterProducts = this.products.filter(
        (item) => item.category === category && item.id !== id,
      );
      const randomArr = new Set([]);
      const maxSize = filterProducts.length < 4 ? filterProducts.length : 4;

      // 取得不重複亂數
      for (let index = 0; randomArr.size < maxSize; index + 1) {
        const randomNum = getRandomInt(filterProducts.length);
        randomArr.add(randomNum);
      }

      randomArr.forEach((item) => {
        this.similarProducts.push(filterProducts[item]);
      });
    },
  },
  created() {
    // const { id } = this.$route.params;
    this.getProduct(this.id);
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
