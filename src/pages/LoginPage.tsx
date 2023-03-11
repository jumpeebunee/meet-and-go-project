import { useState } from "react"
import AuthBanner from "../components/AuthBanner"
import LoginForm from "../components/LoginForm"
import { ILogin } from "../types/type";

const LoginPage = () => {

  const [serverError, setServerError] = useState('');

  const handleSubmit = (data: ILogin) => {
    console.log(data);
  }

  return (
    <div className="container container__register">
      <div className="container__wrapper container__wrapper-register">
        <AuthBanner/>
        <LoginForm
          serverError={serverError}
          submitForm={handleSubmit}
        />
      </div>
    </div>
  )
}

export default LoginPage