import React from 'react';
import { Route ,RouteProps, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

interface PrivateRouteProps extends RouteProps {   
    component: any;    
}

const  PrivateRoute: React.FC<PrivateRouteProps> = ({ component:Component, ...rest })=> {
    const { authTokens } = useAuth();
        console.log(Object.keys(authTokens).length )
    return (
        <Route {...rest} render={(props) => (
            (Object.keys(authTokens).length !==0  )  ? (
                <Component {...props} />  
              ) : (
                       
                <Redirect to="/login"/>
              )
          )}
          />
      );
 
}

export default PrivateRoute;


