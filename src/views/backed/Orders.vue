<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container">
    <h1>訂單管理列表</h1>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in orders" :key="key">
          <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
            <td>{{ $filters.date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ $filters.currency(item.total) }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${item.id}`"
                  v-model="item.is_paid"
                  @change="updatePaid(item)"
                />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="openModal(item)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openDelOrderModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <Pagination :pages="pagination" @get-products="getOrders"></Pagination>
    </div>
  </div>
  <OrderModal ref="orderModal" :order="tempOrder" @update-paid="updatePaid"></OrderModal>
  <DelModal ref="delModal" :item="tempOrder" @del-item="delOrder"></DelModal>
</template>
<script>
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';
import OrderModal from '@/components/OrderModal.vue';

export default {
  data() {
    return {
      orders: {},
      tempOrder: {},
      pagination: {},
      currentPage: 1,
      isLoading: false,
    };
  },
  components: { Pagination, DelModal, OrderModal },
  methods: {
    getOrders(page = 1) {
      this.currentPage = page;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.orders = res.data.orders;
        this.pagination = res.data.pagination;
        this.isLoading = false;
      });
    },
    updatePaid(item) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(url, { data: paid }).then((res) => {
        if (res.data.success) {
          this.$refs.orderModal.hideModal();
          this.getOrders(this.currentPage);
          this.$httpMessageState(res, '更新付款狀態');
        } else {
          this.$httpMessageState(res, '更新付款狀態');
          this.isLoading = false;
        }
      });
    },
    delOrder(item) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.$httpMessageState(res, '刪除訂單');
          this.$refs.delModal.hideModal();
          this.getOrders(this.currentPage);
        } else {
          this.$httpMessageState(res, '刪除訂單');
          this.isLoading = false;
        }
      });
    },
    openModal(item) {
      this.tempOrder = { ...item };
      this.$refs.orderModal.openModal();
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      this.tempOrder.title = `${this.tempOrder.user.email} - ${this.tempOrder.total} 元`;
      this.$refs.delModal.openModal();
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
