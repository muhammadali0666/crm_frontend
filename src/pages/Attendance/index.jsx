import "./attendance.css"
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { AttendanceList } from "../../components/SawAttendance"

export const Attendance = () => {
  return (
    <div className="atenndance">
    <div className="container">
      <div className="atenndance_inner">
        <div className="atenndance_left_box">
          <Sidebar/>
        </div>
        <div className="atenndance_right_box">
          <Header name='Davomat'/>
          <div className="atenndance_right_box_inner">
            <AttendanceList/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}