import AuthBanner from "../components/AuthBanner"
import RegisterForm from "../components/RegisterForm"
import { createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { IRegister } from "../types/type";
import { useState } from "react";

const RegisterPage = () => {

  const [serverError, setServerError] = useState('');

  const handleSubmit = async(data: IRegister) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(response.user, { displayName: data.username });
    } catch (error: any) {
      const errorMessage = error.message;
      setServerError(errorMessage);
    }
  }

  return (
    <div className="container container__register">
      <div className="container__wrapper container__wrapper-register">
        <AuthBanner/>
        <RegisterForm
          submitForm={handleSubmit}
          serverError={serverError}
        />
      </div>
    </div>
  )
}

export default RegisterPage