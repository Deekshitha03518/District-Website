import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

function SignIn({ onClose, onLogin , onCreateAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

  const accounts = JSON.parse(
    localStorage.getItem("districtAccounts") || "[]"
  );

  const existingAccount = accounts.find(
    (account) => account.email.toLowerCase() === email.toLowerCase() &&
      account.password === password
  );

  if (!existingAccount) {
    setMessage("Invalid email or password.");
    return;
  }

    const user = {
      email: email
    };

    localStorage.setItem("districtUser", JSON.stringify(user));

    onLogin(user);
    onClose();
  };

  return (
    <div className="signin-overlay">
      <div className="signin-modal">

        <button
          className="signin-close"
          onClick={onClose}
          type="button"
        >
          <X size={22} />
        </button>

        <h2>Welcome to District</h2>
        <p>Sign in to continue your experience.</p>

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {message && <p className="signin-error">{message}</p>}

          <button type="submit" className="signin-submit">
            Sign In
          </button>

        </form>

        <p className="signup-text">
          New to District? {" "}
          <button 
            type="button"
            onClick={onCreateAccount}
            >
            Create an account
            </button>
        </p>


      </div>
    </div>
  );
}

export default SignIn;