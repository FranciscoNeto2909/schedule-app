import { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import { getSchedules } from "../assets/slice"
import ScheduleCard from "../components/SheduleCard" 

export default function Home() {
    const schedules = useSelector(data => data.schedule.schedules)
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(getSchedules())
    })
    return(
        <div className="container">
            {schedules.map((schdl, i) => <ScheduleCard key={i} schedule={schdl}/>)}
        </div>
    )
}