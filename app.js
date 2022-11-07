// Reset component
function Reset() {
    return (
    <div>
        <h3>Reset Password</h3>
    </div>
  )
}

// Login component
function Login() {
    return (
    <div>
        <h3>Login</h3>
    </div>
  )
}

// Register component
function Register() {
    return (
    <div>
        <h3>Register</h3>
    </div>
  )
}
// App component
function MyApp() {
  
    return (
      <main className="App">
        <Reset />
        <Login />
        <Register />
      </main>
    )
  }

  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<MyApp />);

// Variables
