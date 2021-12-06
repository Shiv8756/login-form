import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const  [myArray , setMyArray] = useState([]);
  const textHandler = (e)=>{
    e.preventDefault();
    let newList = { id: new Date().getTime().toString(), email , password}
    setMyArray([...myArray , newList])
  }
  return (
    <>
      <div className="comtainer">
        <form onSubmit={textHandler}>
          <input type="text" name="Username" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autocomplete='off'/>
          <input type="password" name="password" placeholder="Password" value={password} onChange ={(e) => setPassword(e.target.value)} />
          <button>Login</button>
        </form>
      </div>
     {
       myArray.map((nEle) =>{
         const {id , email , password} = nEle;
         return (<>
           <div key={id}>
             <p>{email}</p>
             <p>{password}</p>

           </div>
          </>
         )
       })
     }

    </>
  );
};
export default LoginForm;
