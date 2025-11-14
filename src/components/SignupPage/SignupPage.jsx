import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import "./SignupPage.css";

const Input = ({
  icon: Icon,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  children,
  ...rest
}) => (
  <div className="input-container">
    {Icon && <Icon className="input-icon" />}
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input-field"
      {...rest}
    />
    {children}
  </div>
);

const EmailInput = (props) => <Input icon={Mail} type="email" {...props} />;

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <Input
      icon={Lock}
      type={show ? "text" : "password"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    >
      <span
        className="password-toggle"
        onClick={() => setShow(!show)}
        style={{ cursor: "pointer" }}
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </span>
    </Input>
  );
};

const Button = ({ children, type = "button", ...rest }) => (
  <button type={type} className="button" {...rest}>
    {children}
  </button>
);

const SignUpForm = ({ addCard }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addCard(username);

    // Reset fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <Input
        icon={User}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <EmailInput
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <PasswordInput
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button type="submit">Sign Up</Button>
    </form>
  );
};

const Layout = ({ title, subtitle, children }) => (
  <div className="signup-layout">
    {title && <h1 className="signup-title">{title}</h1>}
    {subtitle && <p className="signup-subtitle">{subtitle}</p>}
    <div className="signup-content">{children}</div>
  </div>
);

const SignupPage = () => {
  const [cards, setCards] = useState([]);

  const addCard = (username) => {
    const newCard = {
      id: Date.now(),
      name: username,
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (id) => {
    setCards(cards.filter((c) => c.id !== id));
  };

  return (
    <Layout title="Create an Account" subtitle="Join us today!">
      <SignUpForm addCard={addCard} />

      <div className="card-list">
        {cards.map((card) => (
          <div key={card.id} className="welcome-card">
            <h3>Welcome, {card.name}! 🎉</h3>
            <button className="delete-btn" onClick={() => deleteCard(card.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default SignupPage;
