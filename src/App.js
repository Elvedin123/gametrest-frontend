import Home from "./screens/Home/Home.jsx";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./screens/Login/LoginForm.jsx";
import SignupForm from "./screens/Signup/SignupForm.jsx";
import GameDetail from "./screens/GameDetail/GameDetail.jsx";
import { useEffect, useState } from "react";
import { verifyUser } from "./services/apiConfig.js";
import ProfilePage from "./screens/Profilepage/ProfilePage.jsx";
import AvatarEdit from "./screens/Profilepage/AvatarEdit.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    }
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <Home />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignupForm setUser={setUser} />}></Route>
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<AvatarEdit />} />
      </Routes>
    </div>
  );
}

export default App;
