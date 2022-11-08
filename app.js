// Variables
const { useState, useRef, useEffect } = React;

const FNAME_REGEX = /^[a-zA-Z]+ [a-zA-Z]+$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{8,24}$/;


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


// Reset component
function Reset() {

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
                >
                    Please enter your registered email..!
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
                    <h3>You are successfully logged into your account!</h3> 
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
    const [validFullname, setValidFullname] = useState(false);
    const [fullnameFocus, setFullnameFocus] = useState(false);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

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

    useEffect(() => {
        setErrMsg('');
    }, [fullname, user, email, pwd, matchPwd])

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const v1 = FNAME_REGEX.test(fullname);
        const v2 = USER_REGEX.test(user);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = PWD_REGEX.test(pwd);
        if (!v1 || !v2 || !v3 || !v4) {
            setErrMsg("Invalid Entry");
            return;
        }
        console.log(fullname, user, email, pwd);
        setSuccess(true);
    }

    return (
        <div>
            {success ? (
                <section>
                    <h3>You are successfully registered your account!</h3>
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
                        aria-invalid={validFullname ? "false" : "true"}
                        aria-describedby="fullnamenote"
                        onFocus={() => setFullnameFocus(true)}
                        onBlur={() => setFullnameFocus(false)}
                    />
                    <p id="fullnamenote" className={fullnameFocus && fullname &&
                        !validFullname ? "instructions" : "offscreen"}>
                        <i className="fa-solid fa-circle-info"></i>
                        8 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>

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
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && user &&
                        !validName ? "instructions" : "offscreen"}>
                        <i className="fa-solid fa-circle-info"></i>
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>
    
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
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                    <p id="emailnote" className={emailFocus && email &&
                        !validEmail ? "instructions" : "offscreen"}>
                        <i className="fa-solid fa-circle-info"></i>
                        13 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>
    
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
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <i className="fa-solid fa-circle-info"></i>
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: 
                        <span aria-label="exclamation mark">!</span> 
                        <span aria-label="at symbol">@</span> 
                        <span aria-label="hashtag">#</span> 
                        <span aria-label="dollar sign">$</span> 
                        <span aria-label="dollar sign">_</span>
                        <span aria-label="percent">%</span>
                    </p>
    
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
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <i className="fa-solid fa-circle-info"></i>
                        Must match the first password input field.
                    </p>

                    <button 
                        disabled={!validFullname || !validName || !validEmail || !validPwd || !validMatch ? true : false}
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




