import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import AppointmentForm from "./components/AppointmentForm"
import Home from "./pages/Home"
export default function App() {
  const data = useSelector(data => data)
  console.log(data)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointment" element={<AppointmentForm/>}/>
      </Routes>
    </>
  )
}

