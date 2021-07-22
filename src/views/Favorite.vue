<template>
  <div class="banner"></div>
  <div v-if="myFavoriteProducts.length === 0" class="text-center py-5">
    <p class="h2 mb-5">我的最愛尚無品項，趕緊去選購吧！</p>
    <button type="button" class="btn btn-outline-primary" @click="$router.push('/products/all')">
      <i class="bi bi-arrow-left me-2"></i>繼續選購
    </button>
  </div>
  <div v-else class="container py-4">
    <h1 class="text-center mb-4" id="main">我的最愛</h1>
    <div class="row justify-content-center">
      <div class="col-md-8" v-for="item in myFavoriteProducts" :key="item">
        <div class="card card__favorite mb-3" @click="$router.push(`/product/${item.id}`)">
          <div class="row g-0">
            <div class="col-md-2 border-end border-1 d-flex align-items-center">
              <img :src="item.imageUrl" alt="產品照" />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">
                  <small class="text-muted">{{ item.options.model }}</small>
                </p>
              </div>
            </div>
            <div class="col-md-4 bg-light">
              <div class="card-body text-center">
                <p class="card-text h5 py-1" v-if="item.price">
                  <span
                    v-if="item.price != item.origin_price"
                    class="h6 text-decoration-line-through"
                  >
                    ${{ $filters.currency(item.origin_price) }}
                  </span>
                  <span v-if="item.price != item.origin_price" class="h4 text-danger fw-bold">
                    ${{ $filters.currency(item.price) }}
                  </span>
                  <span v-if="item.price == item.origin_price" class="h4 fw-bold">
                    ${{ $filters.currency(item.price) }}
                  </span>
                  元
                </p>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn__favorite"
                    @click.stop="addMyFavorite(item)"
                  >
                    <i v-if="myFavorite.includes(item.id)" class="bi bi-heart-fill"></i>
                    <i v-else class="bi bi-heart"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    @click.stop="addCart(item.id)"
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
    </div>
  </div>

  <div class="bg-light py-3">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12">
          <h2 class="mb-3 ">推薦商品</h2>
        </div>
        <div class="col-md-6 col-xl-3 mb-4" v-for="item in randomProducts" :key="item.id">
          <div class="card random__products" @click="$router.push(`/product/${item.id}`)">
            <div
              class="card__img position-relative border-bottom border-1 border-muted"
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
                <span
                  v-if="item.price != item.origin_price"
                  class="h6 text-decoration-line-through"
                >
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
  </div>
  <!-- vue-loading -->
  <Loading :active="isLoading"></Loading>
</template>

<script>
import myFavorite from '@/mixins/myFavorite';
import emitter from '../methods/eventBus';

// 取亂數
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default {
  data() {
    return {
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
      products: [],
      randomProducts: [],
      myFavorite: [],
      myFavoriteProducts: [],
    };
  },
  mixins: [myFavorite],
  methods: {
    getProductsAll() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
            this.getFavoriteProduct();
            this.getRandomProducts();
          } else {
            this.$httpMessageState(res, res.data.message);
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    getRandomProducts() {
      // 隨機推薦產品
      const randomArr = new Set([]);
      const maxSize = this.products.length < 4 ? this.products.length : 4;

      // 取得不重複亂數
      for (let index = 0; randomArr.size < maxSize; index + 1) {
        const randomNum = getRandomInt(this.products.length);
        randomArr.add(randomNum);
      }

      this.randomProducts = [];
      randomArr.forEach((item) => {
        this.randomProducts.push(this.products[item]);
      });
    },
    addCart(id, qty = 1) {
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
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    getFavoriteProduct() {
      if (this.myFavorite.length && this.products.length) {
        this.products.forEach((item) => {
          if (this.myFavorite.includes(item.id)) {
            this.myFavoriteProducts.push(item);
          }
        });
      }
    },
  },
  created() {
    this.getProductsAll();
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: calc(30vh);
  background-image: url(https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80);
  background-position: 50% 65%;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn-block {
  display: block;
  width: 100%;
}

.random__products {
  &:hover {
    box-shadow: 0 0.125rem 0.25rem rgba(#000, 0.075);
  }
  .card-title {
    max-width: 100%;
    height: 48px;
  }
  .card__img {
    width: 100%;
    height: 250px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.card__favorite {
  img {
    max-width: 100%;
    height: auto;
  }
  &:hover {
    box-shadow: 0 0.125rem 0.25rem rgba(#000, 0.075);
  }
}

.card__favorite {
  .btn {
    padding: 5px 15px;
    font-size: 16px;
  }
}
</style>
