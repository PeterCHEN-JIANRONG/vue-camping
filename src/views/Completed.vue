<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="banner"></div>
  <div class="container">
    <div class="order py-5">
      <h1 class="text-center mb-5">付款完成</h1>
      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
          <p class="h5">謝謝您的選購，祝您露營愉快！</p>
          <button
            class="btn btn-secondary mb-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            查看明細
          </button>
          <div class="collapse" id="collapseExample">
            <table class="table align-middle border border-1">
              <thead>
                <th>品名</th>
                <th>數量</th>
                <th>金額</th>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }} {{ item.product.unit }}</td>
                  <td class="text-end">{{ item.final_total }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="text-end">總計</td>
                  <td class="text-end">{{ order.total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <h2 class="text-center bg-primary text-white py-2">客戶資訊</h2>
          <table class="table border border-1">
            <tbody>
              <tr>
                <th>Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款時間</th>
                <td>{{ $filters.dateTime(order.paid_date) }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            class="btn btn-outline-primary btn-block"
            @click="$router.push('/products/all')"
          >
            <i class="bi bi-arrow-left me-2"></i>繼續選購
          </button>
        </div>
        <div class="col-md-6 d-none d-md-block">
          <div class="finished__img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
      hasOrder: false,
    };
  },
  methods: {
    getOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            if (res.data.order === null) {
              this.errorAlert('查無訂單');
              this.$router.push('/');
              this.hasOrder = false;
              this.order = {
                user: {},
              };
            } else {
              this.hasOrder = true;
              this.order = res.data.order;
            }
          } else {
            this.$httpMessageState(res, res.data.message);
          }
        })
        .catch((error) => {
          // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
          console.log('error', error.response, error.request, error.message);
          this.isLoading = false;
          this.emitter.emit('push-message', {
            title: '連線錯誤',
            style: 'danger',
            content: error.message,
          });
        });
    },
    successAlert(msg) {
      this.$swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1500,
      });
    },
    errorAlert(msg) {
      this.$swal.fire({
        icon: 'error',
        title: msg,
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: calc(30vh);
  background-image: url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
  background-position: 50% 60%;
  background-size: cover;
  background-repeat: no-repeat;
}

.finished__img {
  height: calc(55vh);
  background-image: url(https://images.unsplash.com/photo-1504591504549-8ce1589ea6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80);
  background-position: 50% 80%;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
