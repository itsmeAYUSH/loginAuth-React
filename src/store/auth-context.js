import React, { useContext } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});
            
export default AuthContext;
