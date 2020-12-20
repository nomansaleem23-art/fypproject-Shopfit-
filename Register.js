import { Button } from "antd";
import React, {useState , useEffect} from "react";
import {auth} from '../../firebase';
import {toast} from "react-toastify";
import {useSelector} from 'react-redux'

 

const Register = ({history}) => {
    const [email,setEmail] = useState("");
     const {user} = useSelector(state => ({...state }));
     useEffect(()=> {
      if(user && user.token) history.push('/'); 
    }, [user])
    

    const handleSubmit = async (e) => {
        //console.log("ENV --->" , process.env.REACT_APP_REGISTER_REDIRECT_URL)
          e.preventDefault()
          console.log("ENV--->", process.env.REACT_APP_REGISTER_REDIRECT_URL)
          console.log("Noman")
          const config = {
              url : process.env.REACT_APP_REGISTER_REDIRECT_URL,
              handleCodeInApp: true
          };
          await auth.sendSignInLinkToEmail(email , config)
          toast.success(`Email is sent to ${email}. Click the link to complete your registration.`);
          window.localStorage.setItem("emailForRegistration", email )
          setEmail("");
    };
     const registerform = () => (<form onSubmit={handleSubmit}>
         <input type="email" className="form-control" value = {email} placeholder = "Email" onChange={e =>setEmail(e.target.value)} 
           
         />

         <br />
         <Button type="submit" className="btn btn-raised">
         Registerz 
         </Button>
     </form> );
    return (
      <div className="container p-5">
         <div className="row">
             <div className= "col-md-6 offset-md-3">
                <h4>Register</h4>
                
               {registerform()}
             </div>
         </div>

      </div>
    );
};

export default Register;