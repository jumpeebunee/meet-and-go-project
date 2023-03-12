import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import AuthBanner from "../components/AuthBanner"
import LoginForm from "../components/LoginForm"
import { auth } from "../firebase";
import { ILogin } from "../types/type";

const LoginPage = () => {

  const [serverError, setServerError] = useState('');

  const handleSubmit = async(data: ILogin) => {
    setServerError('');
    try {
      const res = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log(res)
    } catch (error) {
    }
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