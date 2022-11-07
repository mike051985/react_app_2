// Reset component
function Reset(props) {

  const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail('');
        console.log(email);
        setSuccess(true);
    }

    return (
      <div>
        {success ? (
              <section>
                  <h3>You are successfully reset your password!</h3> 
              </section>
          ) : (
          <section>
              <p ref={errRef} className={errMsg ? "errmsg" :
              "offscreen"} aria-live="assertive">{errMsg}</p>
              <h1>Reset Password</h1>
              <form onSubmit={handleSubmit}>
                  <label htmlFor="email">
                      Email:
                  </label>
                  <input
                      type="email"
                      id="email"
                      ref={emailRef}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                  />
                  
                  <button>
                  Reset Password
                  </button>
              </form>
              <button 
                className="link-btn" 
                onClick={() => props.onFormSwitch('login')}
            >
                Already have an account? Login here.
            </button>
          </section>
      )}
    </div>
  )
}

// Login component
function Login(props) {

  const emailRef = useRef()
  const errRef = useRef()

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      emailRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [email, pwd])

  const handleSubmit = async (e) => {
      e.preventDefault();
      setEmail('');
      setPwd('');
      console.log(email, pwd);
      setSuccess(true);
  }


    return (
    <div>
        {success ? (
            <section>
                <h3>You are logged in!</h3> 
            </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <label htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>
                Login
                </button>
            </form>
            <button 
                className="link-btn" 
                onClick={() => props.onFormSwitch('reset')}
            >
                Forgot your password? Reset here.
            </button>
            <button 
                className="link-btn" 
                onClick={() => props.onFormSwitch('register')}
            >
                Don't have an account? Register here.
            </button>
        </section>
    )}
    </div>
  )
}

// Register component
function Register(props) {

  const fullnameRef = useRef()
    const userRef = useRef()
    const emailRef = useRef()
    const errRef = useRef()
    
    const [fullname, setFullname] = useState('');
    //const [validFullname, setValidFullname] = useState(false);
    //const [fullnameFocus, setFullnameFocus] = useState(false);

    const [user, setUser] = useState('');
    //const [validName, setValidName] = useState(false);
    //const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    //const [validEmail, setValidEmail] = useState(false);
    //const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    //const [validPwd, setValidPwd] = useState(false);
    //const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    //const [validMatch, setValidMatch] = useState(false);
    //const [matchFocus, setMatchFocus] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])
/*
    useEffect(() => {
        setValidFullname(FNAME_REGEX.test(fullname));
    }, [fullname])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])
*/
    useEffect(() => {
        setErrMsg('');
    }, [fullname, user, email, pwd, matchPwd])

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
         // if button enabled with JS hack
         /*
        const v1 = FNAME_REGEX.test(fullname);
        const v2 = USER_REGEX.test(user);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = PWD_REGEX.test(pwd);
        if (!v1 || !v2 || !v3 || !v4) {
            setErrMsg("Invalid Entry");
            return;
        }*/
        console.log(fullname, user, email, pwd);
        setSuccess(true);
    }

    return (
    <div>
        {success ? (
            <section>
                <h3>You are registered!</h3>
            </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">
                    Full Name:
                    
                </label>
                <input
                    type="text"
                    id="fullname"
                    ref={fullnameRef}
                    autoComplete="off"
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    required
                   // aria-invalid={validFullname ? "false" : "true"}
                   // aria-describedby="fullnamenote"
                   // onFocus={() => setFullnameFocus(true)}
                   // onBlur={() => setFullnameFocus(false)}
                />
                

                <label htmlFor="username">
                    Username:
                    
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                   // aria-invalid={validName ? "false" : "true"}
                   // aria-describedby="uidnote"
                  // onFocus={() => setUserFocus(true)}
                    //onBlur={() => setUserFocus(false)}
                />
                

                <label htmlFor="email">
                    Email:
                    
                </label>
                <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                   // aria-invalid={validEmail ? "false" : "true"}
                   //aria-describedby="emailnote"
                    //onFocus={() => setEmailFocus(true)}
                   //onBlur={() => setEmailFocus(false)}
                />
               
                <label htmlFor="password">
                    Password:
          
                </label>
                <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                   // aria-invalid={validPwd ? "false" : "true"}
                   // aria-describedby="pwdnote"
                   // onFocus={() => setPwdFocus(true)}
                    //onBlur={() => setPwdFocus(false)}
                />
               
                <label htmlFor="confirm_pwd">
                    Confirm Password:
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    autoComplete="off"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    //aria-invalid={validMatch ? "false" : "true"}
                    //aria-describedby="confirmnote"
                    //onFocus={() => setMatchFocus(true)}
                    //onBlur={() => setMatchFocus(false)}
                />
                
                <button 
                   // disabled={!validFullname || !validName || !validEmail || !validPwd || !validMatch ? true : false}
                >
                Sign up
                </button>
            </form>
            <button 
                className="link-btn" 
                onClick={() => props.onFormSwitch('login')}
            >
                Already have an account? Login here.
            </button>
        </section>
    )}
    </div>
  )
}
// App component
function MyApp() {
  
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

    return (
      <main className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : 
          currentForm === "register" ? <Register onFormSwitch={toggleForm} /> :
          <Reset onFormSwitch={toggleForm} /> 
        }
      </main>
    )
  }

  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<MyApp />);

// Variables
const { useState, useRef, useEffect } = React;