import AuthBanner from "../components/AuthBanner"
import RegisterForm from "../components/RegisterForm"

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="container__wrapper container__register">
        <AuthBanner/>
        <RegisterForm/>
      </div>
    </div>
  )
}

export default RegisterPage