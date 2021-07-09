<template>
  <!-- vue-loading -->
  <Loading :active="isLoading"></Loading>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top" :class="classList.navbar">
    <div class="container">
      <router-link class="navbar-brand ff-Otomanopee fs-3" to="/">CAMPING</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto fs-4 text-center">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/about">關於</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/products">產品</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/carts">
              <div class="d-inline position-relative">
                <i class="bi bi-cart-fill"></i>
                <span
                  v-if="cart.carts.length > 0"
                  class="rounded-pill bg-danger text-white text-decoration-none px-2
              fs-6 position-absolute number-position"
                >
                  {{ cart.carts.length }}
                </span>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/articles">部落格</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/admin/products">後台</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from '../methods/eventBus';

export default {
  data() {
    return {
      cart: {
        carts: [],
      },
      isLoading: false,
      classList: {
        navbar: 'py-3',
      },
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.cart = res.data.data;
          } else {
            this.$httpMessageState(res, res.data.message);
          }
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
  mounted() {
    this.getCart();

    // 監聽加入購物車, 重新取得購物車數量
    emitter.on('update-cartNum', () => {
      this.getCart();
    });

    // 加入捲動特效
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY;

      const main = document.querySelector('#main');
      if (main) {
        if (windowY > main.offsetTop) {
          this.classList = {
            navbar: 'py-0',
          };
        } else {
          this.classList = {
            navbar: 'py-3',
          };
        }
      }
    });
  },
};
</script>

<style scoped>
.number-position {
  top: -8px;
  right: -16px;
}

.navbar {
  transition: 0.5s;
}
</style>
