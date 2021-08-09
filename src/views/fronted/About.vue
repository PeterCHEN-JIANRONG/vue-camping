<template>
  <div class="banner"></div>
  <div class="container py-4">
    <h1 class="text-center mb-4" id="main">關於我們</h1>
    <div class="row">
      <div class="col-lg-6 d-flex flex-column justify-content-center border border-1 mb-3">
        <h2 class="text-center">品牌理念</h2>
        <p class="about__content">
          CAMPING是由一群熱愛露營的愛好者共同創辦，目的是為了帶給大家露營的快樂，透過露營找回人們最原始、最簡單的快樂。
        </p>
        <p class="about__content">
          希望透過露營，讓人們從資本主義的社會中得到短暫的脫離、解放。親近大自然，達到身、心靈的放鬆，這是非常美好的。
        </p>
      </div>
      <div class="col-lg-6 d-flex align-items-center mb-3">
        <img
          src="https://images.unsplash.com/photo-1600967499288-2006e06b263a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  height: calc(30vh);
  background-image: url(https://images.unsplash.com/photo-1517824806704-9040b037703b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  background-position: 50% 90%;
  background-size: cover;
  background-repeat: no-repeat;
}

img {
  max-width: 100%;
  height: auto;
}

.about__content {
  font-size: 20px;
  line-height: 2;
  text-indent: 40px;
}
</style>
