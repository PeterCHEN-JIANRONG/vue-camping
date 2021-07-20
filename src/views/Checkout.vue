<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="banner"></div>
  <div class="container">
    <p v-if="!hasOrder" class="text-center h1">查無訂單編號</p>
    <div v-else class="order py-5">
      <h1 class="text-center mb-4">訂單付款</h1>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <p class="h5">感謝您的訂購，以下是您本次購物交易詳細。</p>
          <p>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              商品明細
            </button>
          </p>
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
          <form @submit.prevent="payOrder">
            <table class="table">
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
                  <th>訂單時間</th>
                  <td>{{ $filters.dateTime(order.create_at) }}</td>
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
            <p class="text-muted">提醒您訂單需於24小時內完成付款，謝謝您的支持。</p>
            <!-- <div class="text-end" v-if="order.is_paid === false">
              <button type="submit" class="btn btn-danger">確認付款去</button>
            </div> -->
            <div class="row">
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-block"
                  @click="$router.push('/')"
                >
                  <i class="bi bi-arrow-left me-2"></i>返回首頁
                </button>
              </div>
              <div class="col-6">
                <button type="submit" class="btn btn-primary btn-block">
                  <span class="me-2">確認付款</span>
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </form>
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
              if (res.data.order.is_paid) {
                this.$router.push(`/completed/${this.orderId}`);
              }
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
    payOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http
        .post(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.successAlert(res.data.message);
            this.$router.push(`/completed/${this.orderId}`);
            // this.getOrder();
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
  background-image: url(https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  background-position: 50% 48%;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
