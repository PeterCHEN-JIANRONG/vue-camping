<template>
  <div class="header position-relative mb-4">
    <div class="header__content position-absolute top-50 start-50 translate-middle text-center">
      <h1 class="text-white ff-Otomanopee">CAMPING</h1>
      <p class="text-white h4 mb-3">
        <!-- 準備好傾聽大自然的蟲鳴鳥叫了嗎？ -->
        <!-- 受夠了都市的喧囂繁雜嗎？ 找回最原始、初衷的幸福 -->
        帶您找回人類最原始的幸福
      </p>
      <button class="btn btn-primary" @click="$router.push('/products/all')">前往購物</button>
    </div>
    <div class="position-absolute bottom-0 start-50 translate-middle-x pb-3">
      <a href="#" class="h2 text-muted">
        <i class="bi bi-arrow-down-circle"></i>
      </a>
    </div>
  </div>

  <div class="container py-3 mb-4">
    <section id="main" class="main">
      <h2 class="text-center mb-4">
        <span class="border-start border-end  border-2 border-secondary px-2">經典系列</span>
      </h2>
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-9">
          <div class="row">
            <div class="col-md-4 mb-3">
              <div class="card" @click="$router.push('/products/帳篷')">
                <div
                  class="card__background"
                  style="background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peter1024/1626883241443.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=A%2BC2AERfZjA3JCsjA1VPpvgcMexHR68y5JW5M27NPap71Q0j46zm6CE1gAQItdsrolG%2BP1BXB0gzAMsYiSScFBV4B7JOK5T2XMWYBDtDs7cN5kRDihqiWzvqJoWqikQsuZuhPztHYOyYJKKsPSxIa%2BWOcIxJczqUW8bAtTmuU2Iv2A1ZlKkES0J2maJenBDYSRHHZMwqAOMaV12gmBZc6R%2FeJnvoX5vckZgoqAYwl7eMocaS2CwPcWv%2BCreed0bMUkx6gR1bREpCrwqySBKK%2FXosEGeNn2JKXMGiD6kl%2BRSIhchSPEPUcYgAXlAHf8umWFmsSVQPogkCaPUbO4CnQg%3D%3D')"
                ></div>
                <div class="card-body bg-primary text-center">
                  <p class="card-text text-white text-center h4 border border-1 py-3">
                    帳篷
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card" @click="$router.push('/products/背包')">
                <div
                  class="card__background"
                  style="background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peter1024/1626883643953.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qEn3XS%2BrRREYbyZnF%2Bl1MteFM3C65nL9LihU6Q4mp8JTWEvA3BCkxZgN4Bjvezw%2BR6b%2B4yTJmq1L5KjJNLqKeV%2BrEIO%2FS9gHmj8jDQIUUGIlIuFKPDNcqby7OL0OzUvPpnpJ3d5iLXwmMJc84oU0g5rvSiL47FsA15T0viQhAFsBB9am19RNd%2FTNN6emp6QKY6ynAW4KVUNL%2FXBgXqpIlzNJb2EBXOxwi2I7x2XQG%2FpfotN4FjP1KgSSmEJ9yLYUtM9Gbv54OwgX992U5xh3csKAIPAK2mhgfo%2BAIuBOlZvKPOl%2FBS55uaZCcpImsFcAKnRwUUmdMn6DaALkKZFTHw%3D%3D')"
                ></div>
                <div class="card-body bg-primary">
                  <p class="card-text text-white text-center h4 border border-1 py-3">
                    登山背包
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card" @click="$router.push('/products/帳篷配件')">
                <div
                  class="card__background"
                  style="background-image: url('https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=916&q=80')"
                ></div>
                <div class="card-body bg-primary">
                  <p class="card-text text-white text-center h4 border border-1 py-3">
                    露營工具
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section class="on-sell bg-light py-3 mb-4">
    <h2 class="text-center mb-4">
      <span class="border-start border-end  border-2 border-secondary px-2">暢銷商品</span>
    </h2>
    <div class="container">
      <div class="row">
        <div v-for="item in onSellProducts" :key="item.id" class="col-md-4 mb-3">
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
  </section>

  <div class="container py-3 mb-4">
    <section class="article">
      <h2 class="text-center mb-4">
        <span class="border-start border-end  border-2 border-secondary px-2">最新文章</span>
      </h2>
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-9">
          <div class="row">
            <div v-for="article in latestArticles" :key="article" class="col-md-6 mb-3">
              <div class="card" @click="$router.push(`/article/${article.id}`)">
                <div
                  class="card__img border-bottom border-1 border-muted"
                  :style="{ backgroundImage: `url('${article.imageUrl}')` }"
                ></div>
                <div class="card-body text-center">
                  <h5 class="card-title">{{ article.title }}</h5>
                  <div v-html="article.description" class="card-description text-muted"></div>
                </div>
                <div class="card-footer text-center">
                  <router-link
                    :to="`/article/${article.id}`"
                    v-if="article.isPublic"
                    class="btn btn-outline-secondary"
                  >
                    查看文章
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import emitter from '../methods/eventBus';

// 取亂數
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  data() {
    return {
      isLoading: false,
      products: [],
      onSellProducts: [],
      qty: 1,
      loadingStatus: {
        loadingItem: '',
      },
      articles: [],
      pagination: {},
      latestArticles: [],
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
            this.getOnSellProducts();
          } else {
            this.errorAlert(res.data.message);
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.dir(err);
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
            // this.$router.push('/products');
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    getArticles(page = 1) {
      this.isLoading = true;
      this.currentPage = page;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
          if (this.articles.length > 2) {
            this.latestArticles = [this.articles[0], this.articles[1]];
          } else {
            this.latestArticles = this.articles;
          }
        }
      });
    },
    getOnSellProducts() {
      // 取得熱賣商品
      const filterProducts = this.products.filter((item) => item.options.sell_status !== '');
      const randomArr = new Set([]);
      const maxSize = filterProducts.length < 3 ? filterProducts.length : 3;

      // 取得不重複亂數
      for (let index = 0; randomArr.size < maxSize; index + 1) {
        const randomNum = getRandomInt(filterProducts.length);
        randomArr.add(randomNum);
      }

      this.onSellProducts = [];
      randomArr.forEach((item) => {
        this.onSellProducts.push(filterProducts[item]);
      });
    },
  },
  created() {
    this.getProducts();
    this.getArticles();
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: calc(100vh - 84px);
  background-image: url(https://images.unsplash.com/photo-1513104399965-f5160d963d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80);
  background-size: cover;
  background-position: center;
  // opacity: 0.5;

  &__content {
    // background: hsla(0, 0%, 100%, 0.1);
    width: 100%;
    padding: 10px 20px;
  }
}
// @media (max-width: 992px) {
//   .header {
//     &__content {
//       width: 100%;
//     }
//   }
// }

.main {
  .card {
    &:hover {
      box-shadow: 0 0.125rem 0.25rem rgba(#000, 0.075);
    }
    &__background {
      width: 100%;
      height: 400px;
      background-size: cover;
      background-position: center;
      &:hover {
        background-size: 120%;
      }
    }
  }
}

@media (max-width: 992px) {
  .main {
    .card {
      &__background {
        height: 300px;
      }
    }
  }
}

.on-sell {
  .card {
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
      &:hover {
        background-size: 120%;
      }
    }
  }
}

.article {
  .card {
    &:hover {
      box-shadow: 0 0.125rem 0.25rem rgba(#000, 0.075);
    }
    .card__img {
      width: 100%;
      height: 250px;
      background-size: cover;
      background-position: center;
      &:hover {
        background-size: 120%;
      }
    }
  }
}
</style>
