import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

function SignUp({ onClose, onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const accounts = JSON.parse(
      localStorage.getItem("districtAccounts") || "[]"
    );

    const existingAccount = accounts.find(
      (account) => account.email.toLowerCase() === email.toLowerCase()
    );

    if (existingAccount) {
      setMessage("An account with this email already exists.");
      return;
    }

    const newUser = { name, email, password };

    localStorage.setItem(
      "districtAccounts",
      JSON.stringify([...accounts, newUser])
    );

    onRegister({ name, email });
    onClose();
  };

  return (
    <div className="signin-overlay">
      <div className="signin-modal">
        <button
          type="button"
          className="signin-close"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <h2>Create Your Account</h2>
        <p>Join District and enjoy easy restaurant reservations.</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
              placeholder="Create a password"
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

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {message && <p className="signin-error">{message}</p>}

          <button type="submit" className="signin-submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;