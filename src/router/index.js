import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/fronted/Front.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/fronted/Index.vue'),
      },
      {
        path: 'about',
        name: '關於我們',
        component: () => import('../views/fronted/About.vue'),
      },
      {
        path: 'products/:selectCategory',
        name: '產品列表',
        component: () => import('../views/fronted/Products.vue'),
      },
      {
        path: 'product/:id',
        name: '產品詳細頁',
        component: () => import('../views/fronted/Product.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        path: 'carts',
        name: '購物車',
        component: () => import('../views/fronted/Carts.vue'),
      },
      {
        path: 'order',
        name: '購物車確認完成',
        component: () => import('../views/fronted/Order.vue'),
      },
      {
        path: 'checkout/:orderId',
        name: '付款頁',
        component: () => import('../views/fronted/Checkout.vue'),
      },
      {
        path: 'completed/:orderId',
        name: '付款完成頁',
        component: () => import('../views/fronted/Completed.vue'),
      },
      {
        path: 'articles',
        name: '部落格列表',
        component: () => import('../views/fronted/Articles.vue'),
      },
      {
        path: 'article/:articleId',
        name: '部落格頁',
        component: () => import('../views/fronted/Article.vue'),
      },
      {
        path: 'favorite',
        name: '我的最愛',
        component: () => import('../views/fronted/Favorite.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: '後台登入',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/backed/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '產品管理頁',
        component: () => import('../views/backed/Products.vue'),
      },
      {
        path: 'orders',
        name: '訂單管理頁',
        component: () => import('../views/backed/Orders.vue'),
      },
      {
        path: 'coupons',
        name: '優惠券',
        component: () => import('../views/backed/Coupons.vue'),
      },
      {
        path: 'articles',
        name: '貼文',
        component: () => import('../views/backed/Articles.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404頁',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  // 切換頁面時滾至頂部
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
