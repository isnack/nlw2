import  React, { useState } from 'react';

import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import { AuthContext } from "./contexts/auth";
import PrivateRoute from './routes/PrivateRoute'
import api from "./services/api"


 
const Routes = () => {
const existingTokens = JSON.parse(localStorage.getItem('tokens') || '{}');

api.defaults.headers.common['Authorization'] = `Bearer ${existingTokens}`
const [authTokens, setAuthTokens] = useState(existingTokens);

const setTokens = (data:any) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    api.defaults.headers.common['Authorization'] = `Bearer ${data}`
    setAuthTokens(data);
  }

const unSetTokens =() =>{
  localStorage.clear()
  setAuthTokens('{}')
  
}

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens ,unSetAuthTokens:unSetTokens }}>
        <BrowserRouter>
        <Route path="/" exact component={Landing} />        
        <Route path="/give-classes" component={TeacherForm} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/study" component={TeacherList} />
        </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default Routes