<template>
  <div class="banner"></div>
  <div class="container">
    <!-- 購物車列表 -->
    <div v-if="!hasCartsItems" class="text-center py-5">
      <p class="h2 mb-5">購物車尚無品項，趕緊去選購吧！</p>
      <button type="button" class="btn btn-outline-primary" @click="$router.push('/products/all')">
        <i class="bi bi-arrow-left me-2"></i>繼續選購
      </button>
    </div>
    <div v-if="cart.carts.length > 0" class="row justify-content-center mt-5">
      <div class="col-md-10 col-lg-8 col-xl-6">
        <h1 class="text-center" id="main">購物車</h1>
        <div class="text-end">
          <button
            class="btn btn-outline-danger"
            type="button"
            :disabled="!hasCartsItems"
            @click="deleteAllCarts"
          >
            清空購物車
          </button>
        </div>
        <table class="table align-middle mb-4 d-none d-sm-table">
          <thead>
            <tr>
              <th></th>
              <th class="table__img">照片</th>
              <th>品名</th>
              <th class="table__number">數量</th>
              <th>金額</th>
            </tr>
          </thead>
          <tbody class="product__list">
            <template v-if="cart.carts">
              <!-- 判斷 購物車是否有資料 -->
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    title="刪除"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(item.id)"
                    :disabled="loadingStatus.loadingItem === item.id"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
                <td>
                  <div
                    class="product__bg"
                    :style="{ backgroundImage: `url('${item.product.imageUrl}')` }"
                  ></div>
                </td>
                <td>
                  {{ item.product.title }}
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group">
                      <input
                        class="form-control text-center"
                        type="number"
                        min="1"
                        v-model.number="item.qty"
                        @blur="updateCart(item)"
                        :disabled="loadingStatus.loadingItem === item.id"
                      />
                      <span class="input-group-text" id="basic-addon2">
                        {{ item.product.unit }}
                      </span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  {{ $filters.currency(item.total) }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
          </tfoot>
        </table>

        <div class="product__list mb-4 d-block d-sm-none">
          <div
            class="border-bottom border-1 mb-3 pb-2"
            v-for="item in cart.carts"
            :key="`${item.id}_`"
          >
            <div class="row align-items-center mb-3">
              <div class="col-3">
                <div
                  class="product__bg"
                  :style="{ backgroundImage: `url('${item.product.imageUrl}')` }"
                ></div>
              </div>
              <div class="col-9">{{ item.product.title }}</div>
            </div>
            <div class="row align-items-center">
              <div class="col-3 text-center">
                <button
                  type="button"
                  title="刪除"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                  :disabled="loadingStatus.loadingItem === item.id"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </div>
              <div class="col-5 text-center">
                <div class="input-group input-group-sm">
                  <div class="input-group">
                    <input
                      class="form-control text-center"
                      type="number"
                      min="1"
                      v-model.number="item.qty"
                      @blur="updateCart(item)"
                      :disabled="loadingStatus.loadingItem === item.id"
                    />
                    <span class="input-group-text" id="basic-addon2">
                      {{ item.product.unit }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col text-center">
                {{ $filters.currency(item.total) }}
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col mb-2">
            <button
              type="button"
              class="btn btn-outline-secondary btn-block"
              @click="$router.push('/products/all')"
            >
              <i class="bi bi-arrow-left me-2"></i>繼續選購
            </button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-primary btn-block" @click="$router.push('/order')">
              <span class="me-2">前往結帳</span>
              <i class="bi bi-arrow-right"></i>
            </button>
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
          <div class="card" @click="$router.push(`/product/${item.id}`)">
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
import emitter from '../../methods/eventBus';

// 取亂數
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  data() {
    return {
      cart: {
        total: 0,
        final_total: 0,
        carts: [],
      },
      hasCartsItems: false,
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
      products: [],
      randomProducts: [],
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.cart = res.data.data;
        } else {
          this.$httpMessageState(res, res.data.message);
        }
      });
    },
    updateCart(item) {
      this.isLoading = true;
      this.loadingStatus.loadingItem = item.id;
      const data = {
        product_id: item.product_id,
        qty: item.qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http.put(url, { data }).then((res) => {
        this.isLoading = false;
        this.loadingStatus.loadingItem = '';
        this.$httpMessageState(res, res.data.message);
        if (res.data.success) {
          this.getCart();
        }
      });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url).then((res) => {
        this.isLoading = false;
        this.$httpMessageState(res, res.data.message);
        if (res.data.success) {
          this.getCart();
          emitter.emit('update-cartNum'); // 更新購物車icon顯示數量
        }
      });
    },
    deleteAllCarts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url).then((res) => {
        this.isLoading = false;
        this.$httpMessageState(res, res.data.message);
        if (res.data.success) {
          this.getCart();
          emitter.emit('update-cartNum'); // 更新購物車icon顯示數量
        }
      });
    },
    getProductsAll() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.getRandomProducts();
        } else {
          this.$httpMessageState(res, res.data.message);
        }
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
      this.$http.post(url, { data }).then((res) => {
        this.isLoading = false;
        this.$httpMessageState(res, res.data.message);
        if (res.data.success) {
          this.qty = 1;
          emitter.emit('update-cartNum'); // 更新購物車icon顯示數量
          this.getCart();
          // this.$router.push('/products');
        }
      });
    },
  },
  watch: {
    cart() {
      // 購物車是否有資料， length>0:true, length=0:false
      this.hasCartsItems = !!this.cart.carts.length;
    },
  },
  created() {
    this.getCart();
    this.getProductsAll();
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: calc(30vh);
  background-image: url(https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80);
  background-position: 50% 55%;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn-block {
  display: block;
  width: 100%;
}

.card {
  &:hover {
    box-shadow: 0 0.125rem 0.25rem rgba(#000, 0.15);
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

.table__img {
  width: 150px;
}

.table__number {
  width: 150px;
}
// .table {
//   display: table;
//   &__number {
//     width: 150px;
//   }
// }
// @media (max-width: 280px) {
//   .table {
//     display: none;
//   }
// }

.product__list {
  .product__bg {
    // width: 100%;
    height: 80px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
