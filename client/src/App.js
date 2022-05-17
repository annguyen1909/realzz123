import { useEffect } from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';

import Home from './pages/home'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ForgotPassword from './pages/auth/forgot_password';
import ResetPassword from './pages/auth/reset_password';

import Alert from './components/Alert/Alert.js';

import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'

import Header from './components/Header/Header';
import Footer from './components/Footer/footer.jsx';


function App() {
  const { auth, modal } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])

  return (
    <Router>


      <Alert />
      <input type="checkbox" id="theme" />
      <div className={`App ${modal && 'mode'}`}>
        <div className="main">

          <Header />
          
          <Routes>
            <Route exact path="/" element={ auth.token ? <Home /> : <Login /> } />

            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/login' element={ <Login /> } />
            <Route exact path='/register' element={ <Register /> } />
            <Route exact path='/forgotPassword' element={ <ForgotPassword /> } />
            <Route exact path='/user/reset/:token' element={ <ResetPassword /> } />


            <Route exact path='/' element={ <PrivateRouter/> }>
              <Route exact path="/:page" element={ <PageRender /> } />
              <Route exact path="/:page/:id" element={ <PageRender /> } />
            </Route>
            
          </Routes>

          <Footer />
        </div>
      </div> 
    </Router>
  );
}

export default App;
