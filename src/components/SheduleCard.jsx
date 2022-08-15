export default function ScheduleCard({ schedule }) {
    return (
        <div class="card text-center m-5">
            <div class="card-header pb-3">
                <p className="position-absolute top-0">,<strong>Horário: </strong>{schedule.startTime}h at {schedule.endTime}h</p>
                <p className="position-absolute top-0 end-0"> <strong>Date:</strong> {schedule.date}</p>
            </div>
            <div class="card-body mt-1">
                <h5 class="card-title">Solicitado por: {schedule.requisitioner}</h5>
                <div className="d-flex justify-content-evenly">
                    <p class="card-text"><strong>address:</strong> {schedule.address}
                    </p>
                    <p><strong> place:</strong> {schedule.place}</p>
                    <p><strong> contrado para:</strong> {schedule.type}</p>
                </div>
            </div>
        </div>
    )
}