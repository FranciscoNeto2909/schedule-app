import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { admOn } from "../assets/slice"
export default function AdminForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    function handleLogin() {
        if (name === "user" && pass === "fr4n") {
            dispatch(admOn())
            navigate("/")
        }
    }
    return (
        <div className="container text-light py-5 rounded-4 mt-5 p-5" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
            <h3 className="text-center">Login</h3>
            <p className="text-center text-light">Faça login para entrar com administrador da página.</p>
            <div className="my-2">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" autoComplete="none" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="my-2">
                <label htmlFor="pass">Senha</label>
                <input type="password" className="form-control" value={pass} onChange={e => setPass(e.target.value)} />
            </div>
            <div className="button-container row m-0 p-0"><button onClick={handleLogin} className="btn btn-primary mt-2 col-3 mx-auto">Entrar</button></div>
        </div>
    )
}