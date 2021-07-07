<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
  </div>
  <router-view />
</template>
<script>
import emitter from '@/methods/eventBus';
import ToastMessages from '@/components/ToastMessages.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: { ToastMessages, Navbar },
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
