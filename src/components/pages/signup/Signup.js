import React,{useState} from 'react';
import "./Signup.css";

const Signup = ()  => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        phone: "",
        work: "",

    })
    let name, value ;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
    setUser({...user[name] = value});
    }
    return (
        <>
           <section className="signup">
               <div className="container mt-5">
                   <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form className= "register-form" id= "register-form">
                                <div className ="form-group">
                                    <label htmlFor="name">
                                        <i className="Zmdi Zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id= "name" autoComplete="off"
                                    value={user.name}
                                    onChange={handleInputs}
                                     placeholder="Your Name"></input>
                                </div>
                                <div className ="form-group">
                                    <label htmlFor="email">
                                        <i className="Zmdi Zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="email" id= "email" autoComplete="off"
                                      value={user.email}
                                      onChange={handleInputs}
                                     placeholder="Email "></input>
                                </div>
                                <div className ="form-group">
                                    <label htmlFor="password">
                                        <i className="Zmdi Zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="password" id= "password" autoComplete="off"
                                      value={user.password}
                                      onChange={handleInputs}
                                     placeholder="Password"></input>
                                </div>
                                <div className ="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="Zmdi Zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="cpassword" id= "cpassword" autoComplete="off"
                                      value={user.cpassword}
                                      onChange={handleInputs}
                                     placeholder="Conform Password"></input>
                                </div>
                                <div className ="form-group">
                                    <label htmlFor="phone">
                                        <i className="Zmdi Zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="phone" id= "phone" autoComplete="off"
                                      value={user.phone}
                                      onChange={handleInputs}
                                     placeholder="Phone Number"></input>
                                </div>
                                <div className ="form-group">
                                    <label htmlFor="work">
                                        <i className="Zmdi Zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="work" id= "work" autoComplete="off"
                                      value={user.work}
                                      onChange={handleInputs}
                                     placeholder="Work"></input>
                                </div>
                                
                            </form>

                        </div>
                   </div>

               </div>
               </section> 
        </>
    )
}

export default Signup;
