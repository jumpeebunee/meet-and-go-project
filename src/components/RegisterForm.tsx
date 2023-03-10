import React, { useState, MouseEvent } from 'react'
import { useForm } from 'react-hook-form'
import inputConfig from '../helpers/inputConfig';
import ErrorMessage from './ErrorMessage';
import MainButton from './UI/MainButton/MainButton';

const EMAIL_CONFIG = {
  required: 'Area is requred!',
  pattern: {
    value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,3}$/i,
    message: 'Invalid email address',
  },
}

const RegisterForm = () => {

  const {register, formState: {errors}, handleSubmit} = useForm({});

  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  }

  const handleVisible = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(prev => !prev);
  }

  return (
    <form className='auth__form' onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign up to Meet and Go</h2>
      <div className='auth__form-input-wrapper'>
        <input
          className='input'
          {...register('username', inputConfig())}
          placeholder="Username"
        />
        <ErrorMessage
          message={errors?.username?.message as string}
        />
      </div>
      <div className='auth__form-input-wrapper'>
        <input
          className='input'
          {...register('email', EMAIL_CONFIG)}
          placeholder="Email"
        />
        <ErrorMessage
          message={errors?.email?.message as string}
        />
      </div>
      <div style={{marginBottom: 20}} className='auth__form-input-wrapper'>
        <div className='auth__form-input_password'>
          <input
            className='input'
            autoComplete={isVisible ? 'false' : 'true'}
            {...register('password', inputConfig())}
            type={isVisible ? 'text' : 'password'}
            placeholder="Password"
          />
          <button 
            onClick={(e) => handleVisible(e)}
            className={isVisible ? 'auth__form-password-icon auth__form-password-icon_active' : 'auth__form-password-icon'}>
          </button>
        </div>
        <ErrorMessage
          message={errors?.password?.message as string}
        />
      </div>
      <MainButton text='Register'/>
      <p className='auth__page-toggle'>Already register? <a><span>Sign in</span></a></p>
    </form>
  )
}

export default RegisterForm