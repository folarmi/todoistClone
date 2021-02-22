import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/DataComponents/LogIn";
import SignUp from "./components/DataComponents/Signup";
import ProfilePage from "./components/DataComponents/ProfilePage";
import PasswordReset from "./components/DataComponents/PasswordReset";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./../src/context/Auth";

function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={LogIn}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
            <Route path="/profile" exact component={ProfilePage}></Route>
            <Route
              path="/passwordreset"
              exact
              component={PasswordReset}
            ></Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
