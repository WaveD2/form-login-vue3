<template>
  <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md min-w-[364px]">
      <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">ĐĂNG KÝ TÀI KHOẢN</h1>

      <form @submit.prevent="validateForm">
        <div class="mb-4">
          <label
            for="fullName"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Họ và tên</label
          >
          <input
            type="text"
            id="fullName"
            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Nguyễn Văn A"
            required
            v-model="formInputSignUp.fullName"
          />
          <p v-if="textError.type === 'fullName'" class="mt-2 text-sm font-medium text-red-500">
            {{ textError?.msg }}
          </p>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
            required
            v-model="formInputSignUp.email"
          />
          <p v-if="textError.type === 'email'" class="mt-2 text-sm font-medium text-red-500">
            {{ textError?.msg }}
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
            v-model="formInputSignUp.password"
          />
          <p v-if="textError.type === 'password'" class="mt-2 text-sm font-medium text-red-500">
            {{ textError?.msg }}
          </p>
        </div>

        <p class="text-xs text-gray-600 mb-3">
          Bạn đã có tài khoản?
          <span>
            <RouterLink
              to="login"
              class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >Đăng nhập</RouterLink
            >
          </span>
        </p>

        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Đăng ký
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { signUpSchema } from '../utils/validateYub'
import { useRouter } from 'vue-router'
const router = useRouter()

const textError = reactive({
  msg: '',
  type: ''
})
const formInputSignUp = reactive({
  fullName: '',
  email: '',
  password: ''
})

const validateForm = () => {
  try {
    signUpSchema.validateSync(formInputSignUp)
    textError.type = ''
    textError.msg = ''
    router.push('/auth-otp')
  } catch (error) {
    console.log('err', error)
    const { path, errors } = error
    textError.type = path
    textError.msg = errors[0]
    return
  }
}
</script>

<style lang="scss" scoped></style>
