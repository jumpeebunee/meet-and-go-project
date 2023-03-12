import { useState, MouseEvent, FC } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { EMAIL_CONFIG, PASSWORD_CONFIG, USERNAME_CONFIG } from '../dataConfig/inputConfigs';
import { IRegister } from '../types/type';
import ErrorMessage from './ErrorMessage';
import MainButton from './UI/MainButton/MainButton';

interface RegisterFormProps {
  serverError: string;
  submitForm: (data: IRegister) => void;
}

const RegisterForm:FC<RegisterFormProps> = ({serverError, submitForm}) => {

  const {register, formState: {errors}, handleSubmit} = useForm<IRegister>({});

  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(prev => !prev);
  }

  return (
    <form className='auth__form' onSubmit={handleSubmit(submitForm)}>
      <h2>Sign up to Meet and Go</h2>
      <div className='auth__form-input-wrapper'>
        <input
          className='input'
          {...register('username', USERNAME_CONFIG)}
          placeholder="Full name"
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
      <MainButton text='Register'/>
      <p className='auth__page-toggle'>Already register? <Link to="/login"><span>Sign in</span></Link></p>
    </form>
  )
}

export default RegisterForm