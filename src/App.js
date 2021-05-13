import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home.js'
import Products from './Pages/Products.js'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import AdminPage from './Pages/AdminPage.js'
import AdminPageUpdate from './Pages/AdminPageUpdate.js'
import Cart from './Pages/Cart'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/products' component={Products}/>
          <Route exact path='/login-page' component={LoginPage}/>
          <Route exact path='/register-page' component={RegisterPage}/>
          <Route exact path='/admin-page-upload' component={AdminPage}/>
          <Route exact path='/admin-page-update' component={AdminPageUpdate}/>
          <Route excat path='/cart' component={Cart}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
