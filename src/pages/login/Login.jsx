import "./login.scss";

const Login = () => {
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png";
  return (
    <>
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img src={logo} alt="" className="logo" />
          </div>
        </div>

        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Emailor Phone number" />
            <input type="password" placeholder="Password" />
            <button className="loginButton">Sign In</button>
            <span>
              New In Netflix? <b>Sign up now</b>
            </span>
            <small>
              This page is protected by google reCAPTCHA to ensure youare not a
              bot <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
