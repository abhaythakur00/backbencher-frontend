import Backbencher from "./component/Backbencher";
import Create from "./component/Create";
import Login from "./component/Login";
import Nav2 from "./component/Nav2";
// import Footer from "./component/Footer";
import User from "./component/User";
import Form from "./component/Form";
import About from "./component/About";
import Fee from "./component/fee"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/Auth/AuthProvider";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPasswordFlow from "./component/ForgetPassword/ForgetPaswordFlow";
import StudentDataTable from "./component/StudentDataTable";

function App() {
  return (
    <>
    <FloatingWhatsApp
        avatar={`
        whatsapplogo.jpg`}
        phoneNumber={`7351823904`}
        accountName={`BackBencher`} />


    <ToastContainer position="top-center" />
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Backbencher />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nav2" element={<Nav2 />} />
          <Route path="/user" element={<User />} />
          <Route path="/form" element={<Form />} />
          <Route path="/About" element={<About />} />
          <Route path="/fee" element={<Fee/>} />
          <Route path="/studentdata" element={<StudentDataTable/>} />
          <Route path="/forgetpassword" element={<ForgetPasswordFlow/>} />



          {/* <Route path='/Mobile-nav' element={<Mobilenav/>}/> */}
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
