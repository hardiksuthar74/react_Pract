import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import LoginForm from "./components/auth/login-auth";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Home from "./components/main/Home";
import You from "./pages/You";
import PatientList from "./pages/PatientList";
import Education from "./pages/Education";
import { Toaster } from "./components/ui/toaster";

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
            <Route path="/you" element={<You />} />
            <Route path="/patient_list" element={<PatientList />} />
            <Route path="/education" element={<Education />} />
          </Route>
          <Route path={"/login"} element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
