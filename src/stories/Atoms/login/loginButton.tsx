import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()} sx={{width:'200px',height:'200px',border:'1px solid green',marginLeft:'40%',marginTop:'20%'}} >Log In</Button>;

};

export default LoginButton;