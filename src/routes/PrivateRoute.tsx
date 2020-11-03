import React from 'react';
import { Route ,RouteProps, Redirect } from 'react-router-dom';
import  {useAuthContext}  from '../contexts/auth';

interface PrivateRouteProps extends RouteProps {   
    component: any;    
}

const  PrivateRoute: React.FC<PrivateRouteProps> = ({ component:Component, ...rest })=> {
    const { isAuthenticated ,loading } =  useAuthContext();
   
    return (        
        <Route {...rest} render={(props) => (
          
            (isAuthenticated && !loading  )  ? (
                <Component {...props} />  
              ) : (
                       
                <Redirect to="/login"/>
              )
          )}
          />
      );
 
}

export default PrivateRoute;


