import "react-bootstrap";
import SignUp from "./component/signup";
import DashBoard from "./component/dashboard";
import Login from "./component/login";
import PrivateRoute from "./component/privateRoute";
import { AuthProvider } from "./context/authcontext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./component/forgot-password";
import UpdateProfile from "./component/update-profile";
import Frontend from "./layout/frontend";
import "./utils/global.css";
import Person from "./component/person";
import BookDetail from "./component/book-detail";
import People from "./component/people";
import Search from "./component/search";

function App() {
  return (
    <Router>
      <Frontend>
        <div
          className="justify-content-center mx-0 "
          style={{ minHeight: "100vh" }}
        >
          <div className=" mb-3">
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={DashBoard} />
                <PrivateRoute path="/people" component={People} />
                <Route path="/person/:personId" component={Person} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/books/:id" component={BookDetail} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/search" component={Search} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </div>
        </div>
      </Frontend>
    </Router>
  );
}

export default App;
