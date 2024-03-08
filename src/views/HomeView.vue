<template>
  <nav class="text-center">
    <RouterLink class="text-2xl font-medium mr-4 underline" to="/">Trang chủ</RouterLink>
    <RouterLink class="text-2xl font-medium underline mr-4" to="/login">Đăng nhập</RouterLink>
    <RouterLink class="text-2xl font-medium underline" to="/signup">Đăng ký</RouterLink>
  </nav>
  <div class="text-center">Hello world</div>
  <p v-show="titleDomain" class="mt-2 text-3xl font-medium text-red-500 text-center">
    domain : {{ titleDomain }}
  </p>
  <div class="">
    <get-domain :handleDomain="handleDomain" />
  </div>
</template>

<script setup>
import GetDomain from '@/components/GetDomain.vue'
import { ref } from 'vue'

const titleDomain = ref('')

const handleDomain = (domain) => {
  titleDomain.value = domain
}
</script>

<style lang="scss" scoped></style>
