import { useNavigate } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import { useAuth } from "./context/useAuth";
import ChatRoomSelectionPage from "./pages/ChatRoomSelectionPage";
import { useEffect } from "react";

function App() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="container">
      <h1> Chat App</h1>
      {user ? <ChatRoomSelectionPage /> : <Signup />}
    </div>
  );
}

export default App;
