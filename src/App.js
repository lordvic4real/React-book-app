import { Container } from "react-bootstrap";
import SignUp from "./component/signup"
import DashBoard from "./component/dashboard"
import Login from "./component/login"
import PrivateRoute from './component/privateRoute'
import { AuthProvider } from "./context/authcontext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ForgotPassword from "./component/forgot-password";
import UpdateProfile from "./component/update-profile";
import Frontend from './layout/frontend'
import style from './utils/global.css'


function App() {
  return (
    <Router>
    <Frontend>
    <div className="justify-content-center mx-0 my-0" style={{minHeight: "100vh"}}>
      <div className="mt-5 mb-5" >
     
    <AuthProvider>
     <Switch>
     <PrivateRoute exact path="/" component={DashBoard} />
     <PrivateRoute path="/update-profile" component={UpdateProfile} />
       <Route path="/signup" component={SignUp} />
       <Route path="/login" component={Login} />
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
