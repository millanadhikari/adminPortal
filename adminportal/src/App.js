import React, { useEffect } from 'react';
// import { useRoutes } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import { auth } from './firebase';
import {selectUser} from './features/counter/userSlice'
import Login from './Components/Login'
import {login, logout} from './features/counter/userSlice'
import {MainApp} from './Components/MainApp';
// import routes from './routes'
import {Customers} from './Components/Customers'
import {BrowserRouter, BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ProtectedRoutes from './Components/ProtectedRoutes'




function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user is', authUser)
      if (authUser) {
        //logged in
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName: authUser.displayName,
        }))
      } else{
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <div className="App">
      <BrowserRouter>
      {user ? (
        <>
        <ProtectedRoutes path="/app" element={MainApp}/>
      </>
      ):(
        <Route exact path="/" component={Login}/>
      )}
     </BrowserRouter>
    </div>
  );
}

export default App;
