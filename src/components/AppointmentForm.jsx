import { useState } from "react"
import { useDispatch } from "react-redux"
import { postSchedule } from "../assets/slice"
import {v4} from "uuid"

export default function AppointmentForm() {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [tStart, setTStart] = useState("")
    const [tEnd, setTEnd] = useState("")
    const [place, setPlace] = useState("")
    const [cType, setCType] = useState("")
    const [date, setDate] = useState("")
    const dispatch = useDispatch()

    function handleAddNewSchedule() {
        dispatch(postSchedule({
            id:v4(),
            requisitioner:name, 
            reqPhone:phone,
            address:address,
            place:place,
            type:cType,
            date:date,
            startTime:tStart,
            endTime:tEnd,
        }))
    }

    return (
        <div className="container">
            <h2 className="text-light text-center mt-4">Agendar</h2>
            <form className="row mx-auto mt-3 g-2">
                <div className="col-md-12 col-lg-12">
                    <label htmlFor="name" className="form-label text-light">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)}
                        placeholder="Antônio" />
                </div>
                <div className="col-md-12 col-lg-12">
                    <label htmlFor="address" className="form-label text-light">Endereço</label>
                    <input type="text" className="form-control" id="address" placeholder="123 Main St" value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div className="col-md-12 col-lg-12">
                    <label htmlFor="address" className="form-label text-light">Local</label>
                    <input type="text" className="form-control" id="address" placeholder="123 Main St" value={place} onChange={e => setPlace(e.target.value)} />
                </div>
                <div className="col-md-12 col-lg-12">
                    <label htmlFor="phone" className="form-label text-light">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="00 000000000" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                    <label htmlFor="start" className="form-label text-light">Inicio</label>
                    <input type="text" className="form-control" id="start"
                        placeholder="19" value={tStart} onChange={e => setTStart(e.target.value)} />
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                    <label htmlFor="TimeEnd" className="form-label text-light">Fim</label>
                    <input type="text" className="form-control" id="timeEnd"
                        placeholder="21" value={tEnd} onChange={e => setTEnd(e.target.value)} />
                </div>
                <div className="col-md-3 col-6 col-lg-3">
                    <label htmlFor="inputState" className="form-label text-light">Contratado para</label>
                    <select id="inputState" className="form-select" onChange={e => setCType(e.target.value)}>
                        <option defaultValue>Tocar na missa</option>
                        <option>Tocar em celebração</option>
                        <option>Tocar em casamento</option>
                        <option>Tocar em aniversário</option>
                        <option>Tocar em festa</option>
                    </select>
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                    <label htmlFor="inputPassword4" className="form-label text-light">Data</label>
                    <input type="date" className="form-control" id="inputPassword4" value={date} onChange={e => setDate(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary col-4 mx-auto" onClick={handleAddNewSchedule}>Enviar</button>
            </form>
        </div>
    )
}