<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary pt-3 pb-3">
    <div class="container">
      <router-link class="navbar-brand ff-Otomanopee fs-3" to="/index">CAMPING</router-link>
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
            <router-link class="nav-link" to="/index">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關於</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/carts">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/articles">部落格</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">後台</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
