import { object, string } from 'yup'

export const signUpSchema = object().shape({
  fullName: string().min(6, ' Vui lòng nhập đầy đủ Họ và tên').required(),
  email: string().email(' Email không hợp lệ.').required(),
  password: string().min(8, ' Mật khẩu dài tối thiểu 8 kí tự').required()
})
export const loginFormSchema = object().shape({
  email: string().required().email(),
  password: string().required()
})
