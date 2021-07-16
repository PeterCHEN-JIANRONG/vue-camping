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
    <hr class="my-4" />
    <div class="row">
      <div class="col-md-6 mb-4">
        <!-- <img class="img-fluid mb-4" :src="product.imageUrl" alt="" /> -->
        <div class="product__img" :style="{ backgroundImage: `url('${product.imageUrl}')` }"></div>
        <!-- 產品次要照 -->
        <!-- <div class="row">
          <div class="col-3">
            <img
              class="img-fluid border border-secondary"
              :src="product.imageUrl"
              alt=""
              @click="showImageUrl = product.imageUrl"
            />
          </div>
          <div class="col-3" v-for="item in product.imagesUrl" :key="item">
            <img
              class="img-fluid border border-secondary"
              :src="item"
              @click="showImageUrl = item"
            />
          </div>
        </div> -->
      </div>
      <div class="col-md-6 product__content mb-4">
        <h1 class="">{{ product.title }}</h1>
        <h5 class="mb-4">
          <span class="badge bg-secondary rounded-pill me-2">
            <router-link
              class="text-white text-decoration-none"
              :to="`/products/${product.category}`"
              >{{ product.category }}</router-link
            >
          </span>
          <span v-if="product.options.sell_status" class="badge bg-danger rounded-pill">
            <router-link class="text-white text-decoration-none" :to="`/products/暢銷商品`">{{
              product.options.sell_status
            }}</router-link>
          </span>
        </h5>
        <h2 class="h5 mb-3">
          產品型號：<span class="text-muted">{{ product.options.model }}</span>
        </h2>
        <div class="mb-3" v-if="product.price === product.origin_price">
          <h2 class="h5">建議售價</h2>
          <span class="h2 ps-3"> {{ $filters.currency(product.origin_price) }} 元</span>
        </div>
        <div class="mb-3" v-if="product.price !== product.origin_price">
          <h2 class="h5">建議售價</h2>
          <span class="h2 text-decoration-line-through ps-3">
            {{ $filters.currency(product.origin_price) }} 元
          </span>
        </div>
        <div class="mb-4" v-if="product.price !== product.origin_price">
          <h2 class="h5">限時特價</h2>
          <span class="h1 me-2 text-danger fw-bold ps-3">{{
            $filters.currency(product.price)
          }}</span
          ><span class="h2">元</span>
        </div>
        <div class="input-group">
          <input type="number" class="form-control text-center" v-model.number="qty" min="1" />
          <button type="button" class="btn btn-primary btn-lg" @click="addCart(product.id, qty)">
            加入購物車
          </button>
        </div>
      </div>
      <!-- col-sm-6 end -->
    </div>
    <div class="row">
      <div class="col product__description">
        <h2 class="h3 border-start border-3 border-secondary ps-2 mb-2">商品描述</h2>
        <p class="mb-4">{{ product.description }}</p>
        <h2 class="h3 border-start border-3 border-secondary ps-2 mb-2">商品內容</h2>
        <p>{{ product.content }}</p>
      </div>
    </div>
    <hr />
    <h2 class="mb-3">相似產品</h2>
    <div class="row mb-5">
      <div class="col-md-6 col-lg-4 mb-4" v-for="item in similarProducts" :key="item.id">
        <div class="card" @click="pushProductPage(item)">
          <div
            class="card__img position-relative"
            :style="{ backgroundImage: `url('${item.imageUrl}')` }"
          >
            <span
              v-if="item.options.sell_status"
              class="bg-danger text-white d-inline-block px-2 py-1"
              >{{ item.options.sell_status }}</span
            >
          </div>
          <div class="card-body d-flex flex-column justify-content-center">
            <h2 class="card-title h5">{{ item.title }}</h2>
            <div class="h5 text-center py-1" v-if="item.price">
              <span v-if="item.price != item.origin_price" class="h6 text-decoration-line-through">
                ${{ $filters.currency(item.origin_price) }}
              </span>
              <span v-if="item.price != item.origin_price" class="h4 text-danger fw-bold">
                ${{ $filters.currency(item.price) }}
              </span>
              <span v-if="item.price == item.origin_price" class="h4 fw-bold">
                ${{ $filters.currency(item.price) }}
              </span>
              元
            </div>
            <div class="btn-group btn-group-sm">
              <button
                type="button"
                class="btn btn-secondary"
                @click.stop="addCart(item.id, 1)"
                :disabled="loadingStatus.loadingItem === item.id || !item.is_enabled"
              >
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- vue-loading -->
  <Loading :active="isLoading"></Loading>
</template>
<script>
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
        options: {},
      },
      qty: 1,
      isLoading: false,
      products: [],
      similarProducts: [],
      loadingStatus: false,
    };
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
    addCart(id, qty) {
      this.isLoading = true;
      const data = {
        product_id: id,
        qty,
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
      const maxSize = filterProducts.length < 3 ? filterProducts.length : 3;

      // 取得不重複亂數
      for (let index = 0; randomArr.size < maxSize; index + 1) {
        const randomNum = getRandomInt(filterProducts.length);
        randomArr.add(randomNum);
      }

      randomArr.forEach((item) => {
        this.similarProducts.push(filterProducts[item]);
      });
    },
    pushProductPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
  },
  created() {
    // const { id } = this.$route.params;
    this.getProduct(this.id);
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}

.product__content {
  p {
    font-size: 20px;
    line-height: 1.5;
  }
}

.product__description {
  p {
    white-space: pre-line;
    line-height: 1.5;
  }
}

.product__img {
  width: 100%;
  height: 450px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.card {
  &:hover {
    box-shadow: 0 0.125rem 0.25rem rgba(#000, 0.075);
  }
  .card-title {
    max-width: 100%;
  }
  .card__img {
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
  }

  .btn__favorite {
    max-width: 50px;
  }
}
</style>
