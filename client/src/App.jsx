import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PasswordRecoveryMailForOTPLayout from "./components/auth/PasswordRecoveryMailForOTPLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import PageNotFound from "./pages/error/PageNotFound";
import PasswordRecoveryMailForOTPPage from "./pages/auth/PasswordRecoveryMailForOTPPage";
import PasswordRecoveryOTPPage from "./pages/auth/PasswordRecoveryOTPPage";

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/password-recovery"
            element={<PasswordRecoveryMailForOTPPage />}
          />
          <Route
            path="/otp-verification"
            element={<PasswordRecoveryOTPPage />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
