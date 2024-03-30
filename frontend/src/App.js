import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote from "./screens/SingleNote/SingleNote";
import CreateNote from "./screens/CreateNote/CreateNote";
// import CreateNote from "./screens/SingleNote/CreateNote";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import "./bootstrap.min.css";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
// import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={setSearch} />
      <main className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/createnote" element={<CreateNote />} />;
          {/* <Route path="/profile" element={<ProfileScreen/>}/> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
