import {useSelector} from "react-redux"
import ScheduleCard from "../components/SheduleCard" 
export default function Home() {
    const schedules = useSelector(data => data.schedule.schedules)
    return(
        <div>
            {schedules.map((schdl, i) => <ScheduleCard key={i} schedule={schdl}/>)}
        </div>
    )
}