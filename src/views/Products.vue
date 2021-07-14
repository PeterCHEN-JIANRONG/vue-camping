<template>
  <div class="container">
    <!-- 搜尋 -->
    <div class="text-end my-3 me-4">
      <input
        title="請輸入搜尋關鍵字"
        class="me-2"
        type="text"
        v-model="searchKey"
        placeholder="請輸入搜尋關鍵字"
      /><i class="bi bi-search h4" title="搜尋"></i>
    </div>
    <div class="row mt-4">
      <div class="col-md-3 mb-4">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action list-group-item-secondary"
            :class="{ active: selectCategory === '' }"
            @click.prevent="selectCategory = ''"
            >全部商品</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action list-group-item-secondary"
            :class="{ active: selectCategory === '特價商品' }"
            @click.prevent="selectCategory = '特價商品'"
            >特價商品</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action list-group-item-secondary"
            :class="{ active: selectCategory === '暢銷商品' }"
            @click.prevent="selectCategory = '暢銷商品'"
            >暢銷商品</a
          >
          <a
            href="#"
            v-for="item in categories"
            :key="item"
            class="list-group-item list-group-item-action list-group-item-secondary"
            :class="{ active: selectCategory === item }"
            @click.prevent="selectCategory = item"
            >{{ item }}</a
          >
        </div>
      </div>
      <div class="col-md-9">
        <!-- 產品列表 -->
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4" v-for="item in filterProducts" :key="item.id">
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
                </div>
                <div class="btn-group btn-group-sm">
                  <!-- <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click.stop="pushProductPage(item)"
                    :disabled="loadingStatus.loadingItem === item.id || !item.is_enabled"
                  >
                    查看更多
                  </button> -->
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

  <!-- vue-loading -->
  <Loading :active="isLoading"></Loading>
</template>
<script>
import emitter from '../methods/eventBus';

// localStorage 我的最愛
const localStorageMethods = {
  save(item) {
    const favoriteString = JSON.stringify(item);
    localStorage.setItem('campingFavorite', favoriteString);
  },
  get() {
    return JSON.parse(localStorage.getItem('campingFavorite'));
  },
};

export default {
  data() {
    return {
      products: [],
      product: {},
      isLoading: false,
      loadingStatus: {
        loadingItem: '',
      },
      categories: [],
      selectCategory: '',
      searchKey: '',
      myFavorite: localStorageMethods.get() || [],
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.getCategories();
          } else {
            this.errorAlert(res.data.message);
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getCategories() {
      const categories = new Set();
      this.products.forEach((item) => {
        categories.add(item.category);
      });
      this.categories = [...categories];
    },
    pushProductPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
    addCart(id, qty = 1) {
      this.isLoading = true;
      this.loadingStatus.loadingItem = id;
      const data = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data })
        .then((res) => {
          this.isLoading = false;
          this.loadingStatus.loadingItem = '';
          this.$httpMessageState(res, res.data.message);
          if (res.data.success) {
            emitter.emit('update-cartNum'); // 更新購物車icon顯示數量
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    addMyFavorite(item) {
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
      } else {
        this.myFavorite.push(item.id);
      }
      localStorageMethods.save(this.myFavorite);
    },
  },
  computed: {
    filterProducts() {
      if (this.selectCategory === '') {
        return this.products.filter((item) => item.title
          .trim()
          .toLowerCase()
          .match(this.searchKey.trim().toLowerCase()));
      }
      if (this.selectCategory === '特價商品') {
        return this.products.filter(
          (item) => item.price !== item.origin_price
            && item.title
              .trim()
              .toLowerCase()
              .match(this.searchKey.trim().toLowerCase()),
        );
      }
      if (this.selectCategory === '暢銷商品') {
        return this.products.filter(
          (item) => item.options.sell_status !== ''
            && item.title
              .trim()
              .toLowerCase()
              .match(this.searchKey.trim().toLowerCase()),
        );
      }
      return this.products.filter(
        (item) => item.category === this.selectCategory
          && item.title
            .trim()
            .toLowerCase()
            .match(this.searchKey.trim().toLowerCase()),
      );
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
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
    &:hover {
      background-size: 150%;
    }
  }

  .btn__favorite {
    max-width: 50px;
  }
}
</style>
