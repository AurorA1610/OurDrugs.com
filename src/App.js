import './App.css';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails/ServiceDetails';
import LogIn from './pages/LogIn/LogIn/LogIn';
import Register from './pages/LogIn/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/LogIn/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import Stores from './pages/Stores/Stores/Stores';
import Support from './pages/Support/Support';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/stores">
              <Stores></Stores>
            </PrivateRoute>
            <PrivateRoute path="/support">
              <Support></Support>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
