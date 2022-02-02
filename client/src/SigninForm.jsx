import React from 'react';
import { useState } from "react"


defaultNewUser = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

function SigninForm() {
  const [newUser, setNewUser] = useState(defaultNewUser)




  return (<div>

  </div>)
}

export default SigninForm;
