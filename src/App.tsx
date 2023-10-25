import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import LoginForm from "./components/auth/login-auth";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Home from "./components/main/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path={"/login"} element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
