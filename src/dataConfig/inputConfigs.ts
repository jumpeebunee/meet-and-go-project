export const EMAIL_CONFIG = {
  required: 'Area is requred!',
  pattern: {
    value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,3}$/i,
    message: 'Invalid email address',
  },
}

export const USERNAME_CONFIG = {
  required: 'Area is requred!',
  pattern: {
    value: /^[a-zа-яё ,.'-]+$/i,
    message: 'Invalid username',
  },
  maxLength: {
    value: 25,
    message: 'Maximum of 25 characters'
  },
  minLength: {
    value: 3,
    message: 'Minimum of 3 characters'
  }
}

export const PASSWORD_CONFIG = {
  required: 'Area is requred!',
  pattern: {
    value: /^[a-zA-Z0-9_.\u0400-\u04FF]+$/i,
    message: 'Invalid password',
  },
}