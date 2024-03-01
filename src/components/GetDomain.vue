<template>
  <div class="min-h-[400px] flex items-center justify-center w-full dark:bg-gray-950">
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md min-w-[364px]">
      <div class="mb-4">
        <label for="domain" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >Nhập domain</label
        >
        <input
          type="text"
          id="domain"
          class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="conchimnon.com"
          required
          v-model="domain.value"
        />
        <p v-show="domain.isCheck" class="mt-2 text-sm font-medium text-red-500">
          Domain không xác định
        </p>
      </div>
      <button
        :disabled="!domain.value"
        @click="handleGetDomain"
        type="button"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Xác nhận
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { validateDomain } from '@/utils/validate'
import { reactive } from 'vue'
const emit = defineEmits(['getDomain'])
const router = useRouter()

const domain = reactive({
  isCheck: false,
  value: ''
})
const handleGetDomain = () => {
  if (!domain.value) return (domain.isCheck = true)

  if (!validateDomain(domain.value)) {
    domain.value = ''
    domain.isCheck = true
    return
  }
  emit('getDomain', domain.value.split('.')[0])
  router.push('/')
  domain.value = ''

  domain.isCheck = false
}
</script>

<style lang="scss" scoped></style>
