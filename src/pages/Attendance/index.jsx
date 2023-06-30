import "./attendance.css"
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"

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
            <h1>atenndance</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}