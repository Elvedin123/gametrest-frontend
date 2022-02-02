import Home from "./screens/Home/Home.jsx"
import './App.css';
import { Routes, Route } from 'react-router-dom'
import LoginForm from "./screens/Login/LoginForm.jsx"
import SigninForm from "./screens/Signin/SigninForm.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SigninForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
