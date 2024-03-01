<template>
  <div class="relative font-inter antialiased">
    <main
      class="relative min-h-screen flex flex-col justify-center bg-white dark:bg-gray-950 shadow-md overflow-hidden"
    >
      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div class="flex justify-center">
          <div
            class="max-w-md mx-auto text-center bg-gray-200 dark:bg-gray-900 px-4 sm:px-8 py-10 rounded-xl shadow"
          >
            <header class="mb-8">
              <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">
                Xác nhận mã OTP
              </h1>
              <p class="text-[15px] text-slate-500">
                Chúng tôi đã gửi mã OTP đến email của bạn. Vui lòng kiểm tra và xác nhận
              </p>
              <p v-if="isError" class="mt-2 text-sm font-medium text-red-500">
                Mã OTP không chính xác !
              </p>
            </header>
            <form id="otp-form" @submit.prevent="handleSubmitOtp">
              <div class="flex items-center justify-center gap-3">
                <input
                  name="1"
                  type="text"
                  v-model="newValueOTP"
                  class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  pattern="\d*"
                  maxlength="1"
                />
                <input
                  type="text"
                  v-model="newValueOTP"
                  class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  name="2"
                />
                <input
                  type="text"
                  v-model="newValueOTP"
                  class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  name="3"
                />
                <input
                  type="text"
                  v-model="newValueOTP"
                  class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  name="4"
                />
              </div>
              <div class="max-w-[260px] mx-auto mt-4">
                <button
                  type="submit"
                  class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                >
                  Xác nhận
                </button>
              </div>
            </form>
            <div class="text-sm text-slate-500 mt-4">
              Bạn chưa nhận được mã OTP?
              <a class="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Gửi lại</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const CODE_OTP = [1, 2, 3, 4]

onMounted(() => {
  const form = document.getElementById('otp-form')
  const inputs = [...form.querySelectorAll('input[type=text]')]
  const submit = form.querySelector('button[type=submit]')

  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== 'Backspace' &&
      e.key !== 'Delete' &&
      e.key !== 'Tab' &&
      !e.metaKey
    ) {
      e.preventDefault()
    }

    if (e.key === 'Delete' || e.key === 'Backspace') {
      const index = inputs.indexOf(e.target)
      if (index > 0) {
        inputs[index - 1].value = ''
        inputs[index - 1].focus()
      }
    }
  }

  const handleInput = (e) => {
    const { target } = e
    const index = inputs.indexOf(target)
    if (target.value) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus()
      } else {
        submit.focus()
      }
    }
  }

  const handleFocus = (e) => {
    e.target.select()
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text')
    if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
      return
    }
    const digits = text.split('')
    inputs.forEach((input, index) => (input.value = digits[index]))
    submit.focus()
  }

  inputs.forEach((input) => {
    input.addEventListener('input', handleInput)
    input.addEventListener('keydown', handleKeyDown)
    input.addEventListener('focus', handleFocus)
    input.addEventListener('paste', handlePaste)
  })
})
let isError = ref(false)
const valueOTP = ref([])
const newValueOTP = computed({
  get() {
    return valueOTP.value
  },
  set(newValue) {
    if (valueOTP.value.length <= 4) {
      valueOTP.value.push(newValue)
    }
  }
})

const handleSubmitOtp = () => {
  if (valueOTP.value.length === 4) {
    for (let i = 0; i < CODE_OTP.length; i++) {
      if (+valueOTP.value[i] !== CODE_OTP[i]) {
        valueOTP.value = []
        newValueOTP.value = []
        isError.value = true
        return false
      } else {
        isError.value = false
        return router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
