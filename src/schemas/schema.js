import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const nameRules =  /^[а-яА-Яa-zA-Z]+$/
const birthDateRules = /([0-3][1]|[0][0-9]|[1-2][0-9])\.([0-9]|[1][0-2])\.([1][9][0-9][0-9])|([2][0][0-2][0-9])/gm;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basic = yup.object().shape({
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Пожалуйста, создайте более надежный пароль" })
    .required("Обязательно"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .required("Обязательно"),
});
export const basicSchema = yup.object().shape({
  firstName: yup
  .string()
  .min(2)
  .matches(nameRules, { message: "Напишите свое имя правильно" })
  .required('Заполните'),
  lastName: yup.string()
  .min(2)
  .matches(nameRules, { message: "Напишите свою фамилию правильно" })
  .required('Заполните'),
  dateOfBirth: yup
  .string()
  .min(6)
  .matches(birthDateRules, { message: "Заполните дату рождения" })
  .required('Заполните'),
  email: yup.string().email('Неверный логин').required('Электронная почта обязательна')
});

export const loginSchema = yup.object().shape({
  email: yup
  .string()
  .min(2)
  .matches(nameRules, { message: "Напишите свое имя правильно" })
  .email('Неверный логин или пароль').required('Электронная почта обязательна'),
  password: yup   
  .string()
  .min(5)
  .matches(passwordRules, { message: "Пожалуйста, создайте более надежный пароль" })
  .required("Обязательно")
});

export const SignupSchema = yup.object().shape({
  email: yup.string().email('Неверный логин').required('Электронная почта обязательна')
});