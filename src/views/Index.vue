<template>
  <div class="header position-relative">
    <div class="header__content position-absolute top-50 start-50 translate-middle text-center">
      <h1 class="text-white ff-Otomanopee">CAMPING</h1>
      <p class="text-white h4 mb-3">
        <!-- 準備好傾聽大自然的蟲鳴鳥叫了嗎？ -->
        <!-- 受夠了都市的喧囂繁雜嗎？ 找回最原始、初衷的幸福 -->
        帶您找回人類最原始的幸福
      </p>
      <button class="btn btn-primary" @click="$router.push('/products/all')">前往購物</button>
    </div>
    <div class="position-absolute bottom-0 start-50 translate-middle-x pb-3">
      <a href="#" class="h2 text-muted">
        <i class="bi bi-arrow-down-circle"></i>
      </a>
    </div>
  </div>

  <div class="container py-3">
    <section id="main" class="main">
      <h2 class="text-center mb-4">
        <span class="border-start border-end  border-2 border-secondary px-2">經典系列</span>
      </h2>
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-9">
          <div class="row">
            <div class="col-md-4 mb-3">
              <div class="card" @click="$router.push('/products/帳篷')">
                <div
                  class="card__background"
                  style="background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peter1024/1626883241443.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=A%2BC2AERfZjA3JCsjA1VPpvgcMexHR68y5JW5M27NPap71Q0j46zm6CE1gAQItdsrolG%2BP1BXB0gzAMsYiSScFBV4B7JOK5T2XMWYBDtDs7cN5kRDihqiWzvqJoWqikQsuZuhPztHYOyYJKKsPSxIa%2BWOcIxJczqUW8bAtTmuU2Iv2A1ZlKkES0J2maJenBDYSRHHZMwqAOMaV12gmBZc6R%2FeJnvoX5vckZgoqAYwl7eMocaS2CwPcWv%2BCreed0bMUkx6gR1bREpCrwqySBKK%2FXosEGeNn2JKXMGiD6kl%2BRSIhchSPEPUcYgAXlAHf8umWFmsSVQPogkCaPUbO4CnQg%3D%3D')"
                ></div>
                <div class="card-body bg-secondary text-center">
                  <p class="card-text text-white text-center h4 border border-1 py-3">
                    帳篷
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card" @click="$router.push('/products/背包')">
                <div
                  class="card__background"
                  style="background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peter1024/1626883643953.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qEn3XS%2BrRREYbyZnF%2Bl1MteFM3C65nL9LihU6Q4mp8JTWEvA3BCkxZgN4Bjvezw%2BR6b%2B4yTJmq1L5KjJNLqKeV%2BrEIO%2FS9gHmj8jDQIUUGIlIuFKPDNcqby7OL0OzUvPpnpJ3d5iLXwmMJc84oU0g5rvSiL47FsA15T0viQhAFsBB9am19RNd%2FTNN6emp6QKY6ynAW4KVUNL%2FXBgXqpIlzNJb2EBXOxwi2I7x2XQG%2FpfotN4FjP1KgSSmEJ9yLYUtM9Gbv54OwgX992U5xh3csKAIPAK2mhgfo%2BAIuBOlZvKPOl%2FBS55uaZCcpImsFcAKnRwUUmdMn6DaALkKZFTHw%3D%3D')"
                ></div>
                <div class="card-body bg-secondary">
                  <p class="card-text text-white text-center h4 border border-1 py-3">
                    登山背包
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card" @click="$router.push('/products/帳篷配件')">
                <div
                  class="card__background"
                  style="background-image: url('https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=916&q=80')"
                ></div>
                <div class="card-body bg-secondary">
                  <p class="card-text text-white text-center h4 border border-1 py-3">
                    露營工具
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section class="on-sell bg-light py-3">
    <h2 class="text-center mb-4">
      <span class="border-start border-end  border-2 border-secondary px-2">熱賣商品</span>
    </h2>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              class="card-img-top"
              alt="產品照"
            />
            <div class="card-body bg-secondary">
              <p class="card-text text-white text-center h4 border border-1 py-3">
                帳篷
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              class="card-img-top"
              alt="產品照"
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              class="card-img-top"
              alt="產品照"
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container py-3">
    <h2 class="text-center mb-4">
      <span class="border-start border-end  border-2 border-secondary px-2">最新文章</span>
    </h2>
    <section class="article">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-9">
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  class="card-img-top"
                  alt="產品照"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  class="card-img-top"
                  alt="產品照"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: calc(100vh - 84px);
  background-image: url(https://images.unsplash.com/photo-1513104399965-f5160d963d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80);
  background-size: cover;
  background-position: center;
  // opacity: 0.5;

  &__content {
    background: hsla(0, 0%, 100%, 0.2);
    padding: 10px 20px;
  }
}

.main {
  .card {
    &:hover {
      box-shadow: 0 0.125rem 0.25rem rgba(#000, 0.075);
    }
    &__background {
      width: 100%;
      height: 400px;
      background-size: cover;
      background-position: center;
      // &:hover {
      //   background-size: 150%;
      // }
    }
  }
}
</style>
