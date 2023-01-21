import * as yup from 'yup';

const NUMBER_REGEXP = /\+?\d{1,4}?[-\d\s]?\(?\d{1,3}?\)?[-\d\s]?\d{1,4}[-\d\s]?\d{1,4}[-\d\s]?\d{1,9}/;
const NUMBERS_ONLY_REGEXP = /^\+?[\d\s-()]*$/;
const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const errorMsg = 'Phone number must be at least 5 digits, can contain spaces, dashes, parentheses and can start with +';
const numbersOnlyMsg = 'Phone number can contain digits, spaces, dashes, parentheses and +';
const invalidPasswordMsg = 'Password should be 8-16 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number' 

export const addContactSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.string().matches(NUMBER_REGEXP, errorMsg).matches(NUMBERS_ONLY_REGEXP, numbersOnlyMsg).required(),
});

export const signUpSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).matches(PASSWORD_REGEXP, invalidPasswordMsg).required(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})