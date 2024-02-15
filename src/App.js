import React, { useState,useRef } from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';
import { Chat } from './components/Chat';
import {signOut} from 'firebase/auth'
import {auth} from './firebase.config'

const cookies = new Cookies();

console.log(process.env.FIREBASE_API);
function App() {
  const [isAuth,setIsAuth] = useState(cookies.get("auth-token")); 
  const [room,setRoom] = useState(null);

  const roomInputRef = useRef(null);  

  const signUserOut = async () =>{
      await signOut(auth);
      cookies.remove("auth-token");
      setIsAuth(false); 
      setRoom(null);
  }

  if(!isAuth){
  return (
    <div className="App">
      <Auth setIsAuth={setIsAuth}/>
    </div>
  );
  }

  return(
     <>
      {room ? (
        <Chat room={room}/>
      ) : (
        <div className='room'>
           <label>Enter room Name:</label> 
           <input ref={roomInputRef}/>
           <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter </button>
        </div>
      )}
      <div>
          <button onClick={signUserOut} className='sign-out'> Sign out </button>
      </div>
     </>
  )
}

export default App;
