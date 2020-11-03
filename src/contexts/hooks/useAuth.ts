import { useState, useEffect } from 'react';

import api from '../../services/api';


import history from '../../history'

export default  function useAuth() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem('token');
    
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setIsAuthenticated(true);
    }
    
    setLoading(false);
  }, []);
  
  async function handleLogin( email:string,
    password:string) {
    
    const { data } = await api.post('/login',{
        email,
      password
    });
  

    localStorage.setItem('token', JSON.stringify(data));
    api.defaults.headers.Authorization = `Bearer ${data}`;
    setIsAuthenticated(true);
    history.push('/');
  }

  function handleLogout() {  
   
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
 
  return { isAuthenticated, loading, handleLogin, handleLogout };
}