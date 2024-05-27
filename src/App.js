import "./App.css";
import AdminHomePage from "./component/AdminHomePage";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import AddResourceForm from "./component/AddResourceForm";
import LoginPage from "./component/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route element={<PrivateComponents />}> */}
          <Route>
            <Route path="/" element={<AdminHomePage />} />
            <Route path="/add-resource" element={<AddResourceForm />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/logout" element={<h1>Log Out</h1>} /> */}
          </Route>
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Logincomp2 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
