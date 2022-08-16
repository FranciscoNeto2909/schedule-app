export default function ScheduleCard({ schedule }) {
    return (
        <div className="card text-center m-3 text-light" style={{backgroundColor:"#24242a"}}>
            <div className="card-header pb-3 position-relative">
                <p className="position-absolute top-0"><strong>Horário: </strong>{schedule.startTime}h at {schedule.endTime}h</p>
                <p className="position-absolute top-50 start-50 translate-middle"><strong>Status:</strong> {schedule.status ?? "Pendente"}</p>
                <p className="position-absolute top-0 end-0"> <strong>Date:</strong> {schedule.date}</p>
            </div>
            <div className="card-body mt-1">
                <h5 className="card-title">Solicitado por: {schedule.requisitioner}</h5>
                <div className="d-flex justify-content-evenly">
                    <p className="card-text"><strong>address:</strong> {schedule.address}
                    </p>
                    <p><strong> place:</strong> {schedule.place}</p>
                    <p><strong> contrado para:</strong> {schedule.type}</p>
                </div>
            </div>
        </div>
    )
}