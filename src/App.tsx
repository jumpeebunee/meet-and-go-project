import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect } from "react"
import AppNavigation from "./components/AppNavigation"
import { auth, db } from "./firebase";
import { useDispatch } from "react-redux";
import { addUser } from "./app/features/UserSlice";
import { IUser } from "./types/type";
import { useNavigate } from "react-router-dom";

const App = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        if (user.email && user.uid && user.displayName) {
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            if (doc.data().uid === user.uid) {
              dispatch(addUser(doc.data() as IUser));
            }
          });
          subscribeUserUpdates(user.uid);
        }
        navigate('/');
      } else {
        navigate('/register');
      }
    })
  }, [])

  const subscribeUserUpdates = (id: string) => {
    onSnapshot(doc(db, "users", id), (doc) => {
      dispatch(addUser(doc.data() as IUser));
    });
  }

  return (
    <>
      <AppNavigation/>
    </>
  )
}

export default App