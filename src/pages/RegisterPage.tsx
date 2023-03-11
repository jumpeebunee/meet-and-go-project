import AuthBanner from "../components/AuthBanner"
import RegisterForm from "../components/RegisterForm"
import { createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; 
import { auth, db } from '../firebase';
import { IRegister } from "../types/type";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../app/features/UserSlice";
import { baseUserInfo } from "../dataConfig/baseUserInfo";
import { useNavigate } from "react-router-dom";
import { user } from "../app/features/UserSlice";

const RegisterPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(user);

  const [serverError, setServerError] = useState('');

  useEffect(() => {
    if (currentUser.uid) {
      signOut(auth);
      dispatch(addUser(baseUserInfo));
    }
  }, [currentUser.uid, dispatch]);  

  const handleSubmit = async(data: IRegister) => {
    setServerError('');
    try {
      const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(response.user, { displayName: data.username });
      const userInfo = {
        ...baseUserInfo,
        username: data.username,
        email: data.email,
        uid: response.user.uid
      }
      dispatch(addUser(userInfo));
      await setDoc(doc(db, 'users', response.user.uid), {...userInfo});
      navigate('/');
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