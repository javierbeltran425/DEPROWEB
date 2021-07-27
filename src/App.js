import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home.js'
import Blog from './Pages/Blog.js'
import Quotation from './Pages/Quotation'
import LoginPage from './Pages/LoginPage'
import Products from './Pages/Products.js'
import AdminPage from './Pages/AdminPage.js'
import RegisterPage from './Pages/RegisterPage'
import AboutUsPage from './Pages/AboutUsPage.js'
import AdminPageBlog  from './Pages/AdminPageBlog.js'
import AdminSendEmail from './Pages/AdminSendEmail.js'
import AdminPageUpdate from './Pages/AdminPageUpdate.js'
import YourBenefictPage from './Pages/YourBenefictPage.js'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/products' component={Products}/>
          <Route excat path='/quotation' component={Quotation}/>
          <Route exact path='/login-page' component={LoginPage}/>
          <Route excat path='/about-us' component ={AboutUsPage}/>
          <Route exact path='/register-page' component={RegisterPage}/>
          <Route exact path='/admin-page-upload' component={AdminPage}/>
          <Route exact path='/admin-page-blog' component={AdminPageBlog}/>
          <Route exact path='/your-benefict' component={YourBenefictPage}/>
          <Route exact path='/admin-send-email' component={AdminSendEmail}/>
          <Route exact path='/admin-page-update' component={AdminPageUpdate}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
