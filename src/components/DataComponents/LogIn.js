import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import firebaseConfig from "../../firebase";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/profile" />;
  }
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [error, setError] = useState(null);
  //   const signInWithEmailAndPasswordHandler = (event, email, password) => {
  //     event.preventDefault();
  //   };

  //   const onChangeHandler = (event) => {
  //     const { name, value } = event.currentTarget;

  //     if (name === "userEmail") {
  //       setEmail(value);
  //     } else if (name === "userPassword") {
  //       setPassword(value);
  //     }
  //   };

  return (
    <div className="mt-16">
      {/* <h1 className="text-3xl mb-2 text-center font-bold">Log In</h1>
      <div className="mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <form className="">
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign in
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">
          Sign in with Google
        </button>
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link
            to="passwordreset"
            className="text-blue-500 hover:text-blue-600"
          >
            Forgot Password?
          </Link>
        </p>
      </div> */}
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogIn;
