import { Routes, Route } from "react-router-dom"
import AppointmentForm from "./components/AppointmentForm"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
export default function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointment" element={<AppointmentForm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

