export default function inputConfig() {
  return {
    required: 'Area is requred!',
    maxLength: {
      value: 15,
      message: 'Maximum of 15 characters'
    },
    minLength: {
      value: 5,
      message: 'Minimum of 5 characters'
    }
  }
}