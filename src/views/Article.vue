<template>
  <div class="container">
    <div class="row justify-content-center">
      <article class="col-md-8 py-3">
        <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/articles">部落格</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
          </ol>
        </nav>
        <hr />
        <h2 class="text-center">{{ article.title }}</h2>
        <p class="text-end">
          <small class="text-muted">{{ $filters.date(article.create_at) }}</small> -
          <small class="text-muted">作者：{{ article.author }}</small>
        </p>
        <img :src="article.imageUrl" alt="" class="img-fluid mb-3" />
        <div v-html="article.content"></div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {},
      id: '',
    };
  },
  methods: {
    getArticle() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.article = res.data.article;
        }
      });
    },
  },
  created() {
    this.id = this.$route.params.articleId;
    this.getArticle();
  },
};
</script>
