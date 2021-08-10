<template>
  <Loading :active="isLoading"></Loading>
  <div class="banner"></div>
  <div class="container p-4">
    <h1 class="text-center" id="main">部落格</h1>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
      <template v-for="article in articles" :key="article.id">
        <div
          class="col-md-6 col-lg-4"
          v-if="article.isPublic"
          @click="$router.push(`/article/${article.id}`)"
        >
          <div class="card">
            <div
              class="card__img border-bottom border-1 border-muted"
              :style="{ backgroundImage: `url('${article.imageUrl}')` }"
            ></div>
            <!-- <img :src="article.imageUrl" class="card-img-top" /> -->
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <div v-html="article.description" class="card-description text-muted"></div>
            </div>
            <div class="card-footer text-center">
              <router-link
                :to="`/article/${article.id}`"
                v-if="article.isPublic"
                class="btn btn-outline-primary"
              >
                查看文章
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [],
      isLoading: false,
      pagination: {},
      currentPage: 1,
    };
  },
  methods: {
    getArticles(page = 1) {
      this.isLoading = true;
      this.currentPage = page;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
        }
      });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: calc(30vh);
  background-image: url(https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80);
  background-position: 50% 90%;
  background-size: cover;
  background-repeat: no-repeat;
}

.card {
  &:hover {
    box-shadow: 0 0.125rem 0.25rem rgba(#000, 0.15);
  }
  // .card-title,
  // .card-description {
  //   max-width: 100%;
  //   height: 48px;
  // }
  .card__img {
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
    &:hover {
      background-size: 150%;
    }
  }
}
</style>
