import { Link } from "react-router-dom"
export default function NavBar() {
    return (
        <nav className="d-flex justify-content-center align-items-center border-bottom" style={{backgroundColor:"#24242a"}}>
            <ul className="d-flex mt-2 justify-content-evenly" style={{width:"200px"}}>
                <li>
                    <Link to="/" className="text-decoration-none">Inicio</Link>
                </li>
                <li>
                    <Link to="/appointment" className="text-decoration-none">Solicitar</Link>
                </li>
            </ul>
        </nav>
    )
}