<template>
  <div class="container text-center py-5">
    <h1 class="mb-4">404，糟糕沒有此網頁。</h1>
    <div class="row">
      <div class="col mb-4">
        <img
          src="https://images.unsplash.com/photo-1570395623789-d9c9a31598a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="$router.push('/')">回首頁</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
