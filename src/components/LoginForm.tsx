import { FC, useState, MouseEvent } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { EMAIL_CONFIG, PASSWORD_CONFIG } from '../dataConfig/inputConfigs'
import { ILogin } from '../types/type'
import ErrorMessage from './ErrorMessage'
import MainButton from './UI/MainButton/MainButton'

interface LoginFormProps {
  serverError: string;
  submitForm: (data: ILogin) => void;
}

const LoginForm:FC<LoginFormProps> = ({serverError, submitForm}) => {

  const {register, formState: {errors}, handleSubmit} = useForm<ILogin>({});

  const [isVisible, setIsVisible] = useState(false);


  const handleVisible = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(prev => !prev);
  }

  return (
    <form className='auth__form' onSubmit={handleSubmit(submitForm)}>
      <h2>Sign in to Meet and Go</h2>
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
            {...register('password', PASSWORD_CONFIG)}
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
        <ErrorMessage
          message={serverError}
        />
      </div>
      <MainButton text='Login'/>
      <p className='auth__page-toggle'>Not a member? <Link to="/register"><span>Register now</span></Link></p>
    </form>
  )
}

export default LoginForm