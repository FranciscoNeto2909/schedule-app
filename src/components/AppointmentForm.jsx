import { useState } from "react"

export default function AppointmentForm() {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [tStart, setTStart] = useState("")
    const [tEnd, setTEnd] = useState("")
    const [place, setPlace] = useState("")
    const [date, setDate] = useState("")

    function handleToSchedule(e) {
        e.preventDefault()
        console.log({
            name,address,phone,
            tStart,tEnd,place,
            date
        })
    }

    return (
        <div className="container">
            <h2 className="text-light text-center mt-4">Agendar</h2>
            <form className="row mx-auto mt-3 g-2">
                <div className="col-md-12 col-lg-12">
                    <label htmlFor="name" className="form-label text-light">Name</label>
                    <input type="email" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)}
                    placeholder="Antônio"/>
                </div>
                <div className="col-md-12 col-lg-12">
                    <label htmlFor="address" className="form-label text-light">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="123 Main St" value={address} onChange={e => setAddress(e.target.value)}/>
                </div>
                <div className="col-md-12 col-lg-12">
                    <label htmlFor="phone" className="form-label text-light">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="00 000000000" value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                    <label htmlFor="start" className="form-label text-light">Inicio</label>
                    <input type="text" className="form-control" id="start"
                    placeholder="19" value={tStart} onChange={e => setTStart(e.target.value)}/>
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                    <label htmlFor="TimeEnd" className="form-label text-light">End</label>
                    <input type="text" className="form-control" id="timeEnd"
                    placeholder="21" value={tEnd} onChange={e => setTEnd(e.target.value)}/>
                </div>
                <div className="col-md-3 col-6 col-lg-3">
                    <label htmlFor="inputState" className="form-label text-light">Place</label>
                    <select id="inputState" className="form-select" onChange={e => setPlace(e.target.value)}>
                        <option defaultValue>Tocar na missa</option>
                        <option>Tocar em celebração</option>
                        <option>Tocar em casamento</option>
                        <option>Tocar em aniversário</option>
                        <option>Tocar em festa</option>
                    </select>
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                    <label htmlFor="inputPassword4" className="form-label text-light">date</label>
                    <input type="date" className="form-control" id="inputPassword4" value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                    <button type="submit" className="btn btn-primary col-4 mx-auto" onClick={handleToSchedule}>Enviar</button>
            </form>
        </div>
    )
}