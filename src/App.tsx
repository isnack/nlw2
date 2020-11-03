import React from 'react';
import "./assets/styles/global.css"
import Routes from './routes';
import { AuthContext } from "./contexts/auth";

function App() {
  return (
    <AuthContext.Provider value={false}>
    <div className="App">
    <Routes></Routes>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
