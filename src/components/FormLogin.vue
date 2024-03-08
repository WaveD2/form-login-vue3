<template>
  <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md min-w-[364px]">
      <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">ĐĂNG NHẬP TÀI KHOẢN</h1>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            @blur="handleOnBlur({ type: 'email' })"
            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
            required
            v-model="valueForm.email"
          />
          <p v-show="textEmailError" class="mt-2 text-sm font-medium text-red-500">
            {{ textEmailError }}
          </p>
        </div>
        <div class="mb-4">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Mật khẩu</label
          >
          <input
            type="password"
            id="password"
            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Nhập mật khẩu"
            required
            v-model="valueForm.password"
            @blur="handleOnBlur({ type: 'password' })"
          />
          <p v-show="textPasswordError" class="mt-2 text-sm font-medium text-red-500">
            {{ textPasswordError }}
          </p>
        </div>
        <div class="flex items-center justify-between mb-4">
          <a
            href="#"
            class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Quên mật khẩu?</a
          >
          <RouterLink
            to="/signup"
            class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Đăng ký</RouterLink
          >
        </div>
        <button
          :disabled="!valueForm.password && !valueForm.email"
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { validateEmail } from '../utils/validate'
import { useRouter } from 'vue-router'

const router = useRouter()

const userData = {
  email: 'admin@gmail.com',
  password: '123123123'
}

const valueForm = reactive({
  email: '',
  password: ''
})
const textEmailError = ref('')
const textPasswordError = ref('')

const handleOnBlur = ({ type }) => {
  switch (type) {
    case 'email':
      if (!valueForm.email || valueForm.email.length < 12) {
        return (textEmailError.value = 'Vui lòng nhập email')
      }
      if (!validateEmail(valueForm.email)) {
        return (textEmailError.value = 'Email không chính xác. Vui lòng kiểm tra lại !!!')
      } else {
        textEmailError.value = ''
      }

      break
    case 'password':
      if (!valueForm.password) {
        return (textPasswordError.value = 'Vui lòng nhập mật khẩu')
      }
      if (valueForm.password.length < 8) {
        return (textPasswordError.value = 'Mật khẩu dài tối thiểu 8 kí tự ')
      } else {
        textPasswordError.value = ''
      }
      break
    default:
      break
  }
}

const handleLogin = () => {
  if (textEmailError.value || textPasswordError.value) return
  try {
    // fetch API

    if (
      userData.email !== valueForm.email.trim() ||
      userData.password !== valueForm.password.trim()
    ) {
      textPasswordError.value = 'Tài khoản không chính xác! Vui lòng kiểm tra lại'
    } else {
      router.push('/auth-otp')
      localStorage.setItem('isLogin', true)
    }
    valueForm.email = ''
    valueForm.password = ''
  } catch (error) {
    textPasswordError.value = 'Tài khoản không chính xác! Vui lòng kiểm tra lại'
  }
}
</script>

<style lang="scss" scoped></style>
