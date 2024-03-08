<script setup>
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
const isLogin = localStorage.getItem('isLogin')

if (Boolean(isLogin)) router.push('/')
else router.push('/login')
</script>

<template>
  <RouterView />
</template>
