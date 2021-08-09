<template>
  <Navbar></Navbar>
  <div class="container-fluid position-relative">
    <ToastMessages></ToastMessages>
  </div>
  <router-view />
  <Footer></Footer>
</template>
<script>
import emitter from '@/methods/eventBus';
import ToastMessages from '@/components/ToastMessages.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: { ToastMessages, Navbar, Footer },
  provide() {
    return {
      emitter,
    };
  },
  data() {
    return {};
  },
};
</script>
