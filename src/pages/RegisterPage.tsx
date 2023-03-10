import AuthBanner from "../components/AuthBanner"
import RegisterForm from "../components/RegisterForm"

const RegisterPage = () => {
  return (
    <div className="container container__register">
      <div className="container__wrapper container__wrapper-register">
        <AuthBanner/>
        <RegisterForm/>
      </div>
    </div>
  )
}

export default RegisterPage