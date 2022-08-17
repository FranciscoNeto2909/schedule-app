import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {admOff } from "../assets/slice"
export default function NavBar() {
    const dispatch = useDispatch()
    const isAdm = useSelector(data => data.schedule.isAdm)
    function handleLogout() {
        dispatch(admOff())
    }
    return (
        <nav className="d-flex align-items-center border-bottom position-relative pt-1" style={{backgroundColor:"#24242a"}}>
            <ul className="d-flex mt-2 justify-content-evenly" style={{width:"200px"}}>
                <li>
                    <Link to="/" className="text-decoration-none">Inicio</Link>
                </li>
                <li>
                    <Link to="/appointment" className="text-decoration-none">Solicitar</Link>
                </li>
                {!isAdm && <li className="bg-transparent border-0 position-absolute top-50 end-0 translate-middle">
                    <Link to="/admin" className="text-decoration-none">Admin</Link>
                </li>}
            </ul>
            {isAdm && <button onClick={handleLogout} className="bg-transparent text-primary border-0 position-absolute top-50 end-0 translate-middle">Sair</button>}
        </nav>
    )
}