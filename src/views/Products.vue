<template>
  <div class="container">
    <h1>產品列表</h1>
    <span class="h3">搜尋：</span><input type="text" v-model="searchKey" />
    <div class="row mt-4">
      <div class="col-3">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action"
            @click.prevent="selectCategory = ''"
            >全部商品</a
          >
          <a
            href="#"
            v-for="item in categories"
            :key="item"
            class="list-group-item list-group-item-action"
            @click.prevent="selectCategory = item"
            >{{ item }}</a
          >
        </div>
      </div>
      <div class="col-9">
        <!-- 產品列表 -->
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filterProducts" :key="item.id">
              <td style="width: 200px">
                <div
                  style="height: 100px; background-size: cover; background-position: center"
                  v-if="item.imageUrl"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              </td>
              <td>
                {{ item.title }}
              </td>
              <td>
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price"
                  >原價 {{ $filters.currency(item.origin_price) }} 元</del
                >
                <div class="h5" v-if="item.price">
                  現在只要 {{ $filters.currency(item.price) }} 元
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="pushProductPage(item)"
                    :disabled="loadingStatus.loadingItem === item.id || !item.is_enabled"
                  >
                    查看更多
                  </button>
                  <button type="button" class="btn btn-outline-danger" @click="addMyFavorite(item)">
                    <i v-if="myFavorite.includes(item.id)" class="bi bi-heart-fill"></i>
                    <i v-else class="bi bi-heart"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="addCart(item.id)"
                    :disabled="loadingStatus.loadingItem === item.id || !item.is_enabled"
                  >
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
