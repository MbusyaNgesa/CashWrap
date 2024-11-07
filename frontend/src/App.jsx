import { Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage } from "./pages/index";
import { FloatingShape } from "./components/index";

const App = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br 
    from-gray-800 via-fuchsia-800 to-gray-900 flex 
    items-center justify-center relative overflow-hidden "
    >
      <FloatingShape
        color="bg-purple-300"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-purple-200"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-purple-400"
        size="w-32 h-32"
        top="40%"
        g
        left="-10%"
        delay={2}
      />
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
