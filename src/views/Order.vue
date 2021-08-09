<template>
  <div class="banner"></div>
  <div class="container">
    <!-- 訂單填寫 -->
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <h1 class="text-center mb-3">訂單確認</h1>
        <table class="table align-middle mb-3">
          <thead>
            <tr>
              <th>品名</th>
              <th>數量</th>
              <th>金額</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <!-- 判斷 購物車是否有資料 -->
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  {{ `${item.qty} ${item.product.unit}` }}
                </td>
                <td class="text-end">
                  <small
                    v-if="item.coupon"
                    class="text-muted d-block text-decoration-line-through"
                    >{{ item.total }}</small
                  >
                  <small v-if="item.coupon" class="text-success"
                    >折扣價：{{ $filters.currency(item.final_total) }}</small
                  >
                  <span v-if="!item.coupon">{{ $filters.currency(item.final_total) }}</span>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-end">總計</td>
              <td class="text-end">
                <span
                  :class="{
                    'text-muted': cart.final_total !== cart.total,
                    'text-decoration-line-through': cart.final_total !== cart.total,
                  }"
                  >{{ $filters.currency(cart.total) }}</span
                >
              </td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="2" class="text-end">折扣{{ discountNumber }}</td>
              <td class="text-end">- {{ $filters.currency(cart.total - cart.final_total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="2" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
        <label for="coupon" class="h6">折扣碼</label>
        <div class="input-group mb-3 input-group-sm">
          <input
            type="text"
            id="coupon"
            class="form-control"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-success" type="button" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
        <hr class="my-4" />
      </div>
    </div>
    <!-- 表單送出 -->
    <div class="mb-5 row justify-content-center">
      <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <h2 class="text-center bg-primary text-white py-2">客戶資訊</h2>
        <div class="mb-3">
          <label for="email" class="form-label">Email*</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="請輸入 Email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名*</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            placeholder="請輸入姓名"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話*</label>
          <Field
            id="tel"
            name="電話"
            type="text"
            placeholder="請輸入電話"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            rules="required|min:8|max:10"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址*</label>
          <Field
            id="address"
            name="地址"
            type="text"
            placeholder="請輸入地址"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">訂單備註</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="4"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="row">
          <div class="col mb-2">
            <button
              type="button"
              class="btn btn-outline-secondary btn-block"
              @click="$router.push('/carts')"
            >
              <i class="bi bi-arrow-left me-2"></i>返回購物車
            </button>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary btn-block" :disabled="!hasCartsItems">
              <span class="me-2">送出訂單</span>
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </Form>
    </div>
  </div>

  <!-- vue-loading -->
  <Loading :active="isLoading"></Loading>
</template>
<script>
import emitter from '../methods/eventBus';

export default {
  data() {
    return {
      cart: {
        total: 0,
        final_total: 0,
        carts: [],
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      hasCartsItems: false,
      isLoading: false,
      coupon_code: '',
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
          // 若無購物車資料則返回
          if (this.cart.carts.length === 0) {
            this.successAlert('無購物車資料');
            this.$router.push('/products/all');
          }
        } else {
          this.$httpMessageState(res, res.data.message);
        }
      });
    },
    createOrder() {
      this.isLoading = true;
      const order = this.form;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(url, { data: order }).then((res) => {
        this.isLoading = false;
        this.$httpMessageState(res, '建立訂單');
        if (res.data.success) {
          emitter.emit('update-cartNum'); // 更新購物車icon顯示數量
          this.$router.push(`/checkout/${res.data.orderId}`);
          // 清空表單資料
          this.$refs.form.resetForm();
          this.form.message = '';
        }
      });
    },
    addCouponCode() {
      const data = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http.post(url, { data }).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.$httpMessageState(res, '套用優惠券');
          this.getCart();
        } else {
          this.$httpMessageState(res, res.data.message);
        }
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
  },
  computed: {
    discountNumber() {
      const discount = Math.floor(
        ((this.cart.total - this.cart.final_total) / this.cart.total) * 100,
      );
      return `(${discount}% off)`;
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
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: calc(30vh);
  background-image: url(https://images.unsplash.com/photo-1444124818704-4d89a495bbae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  background-position: 50% 80%;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
