import  React from 'react';
import {Router, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import { AuthContext } from "./contexts/auth";
import useAuth from './contexts/hooks/useAuth'

import PrivateRoute from './routes/PrivateRoute'
import Switch from 'react-bootstrap/esm/Switch';

//import api from "./services/api"
import history from './history'

 
const Routes = () => {
  const { isAuthenticated, loading, handleLogin, handleLogout,} = useAuth();

    return (
      
        <AuthContext.Provider value={{ isAuthenticated, loading, handleLogin, handleLogout }}>
        <Router history={history} >
        <Switch>
        <Route path="/" exact component={Landing} />        
        <Route path="/give-classes" component={TeacherForm} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/study" component={TeacherList} />
        </Switch>
        </Router>
        </AuthContext.Provider>
    )
}

export default Routes