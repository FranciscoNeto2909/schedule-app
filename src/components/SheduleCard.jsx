import { useSelector, useDispatch } from "react-redux"
import { deleteSchedule, getSchedules } from "../assets/slice"

export default function ScheduleCard({ schedule }) {
    const isAdm = useSelector(data => data.schedule.isAdm)
    const dispatch = useDispatch()
    function handleRemoveSchedule() {
        dispatch(deleteSchedule(schedule.id))
    }
    return (
        <div className="card rounded-4 text-center m-3 text-light border-0 p-1" style={{ backgroundColor: "rgba(255,255,255,0.07)"}}>
            <div className="card-header pb-3 position-relative border-warning">
                <p className="position-absolute top-0">Das {schedule.startTime}h as {schedule.endTime}h</p>
                <p className="position-absolute top-0 end-0"> <strong>Data:</strong> {schedule.date}</p>
            </div>
            <div className="card-body mt-1">
                <h5 className="card-title">Solicitado por: {schedule.requisitioner}</h5>
                <div>
                    <p className="card-text"><strong>Endereço:</strong> {schedule.address}
                    </p>
                    <p><strong>Local:</strong> {schedule.place}</p>
                    <p><strong>contrado para:</strong> {schedule.type}</p>
                </div>
            </div>
            {isAdm === true && <button className="btn btn-danger col-4 mx-auto" onClick={handleRemoveSchedule}>Finalizar</button>}
        </div>
    )
}