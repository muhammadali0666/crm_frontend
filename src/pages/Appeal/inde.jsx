import "./apeal.css"
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"

export const Apeal = () => {
  return (
    <div className="apeal">
    <div className="container">
      <div className="apeal_inner">
        <div className="apeal_left_box">
          <Sidebar/>
        </div>
        <div className="apeal_right_box">
          <Header name='Murojatlar'/>
          <div className="apeal_right_box_inner">
            <h1>apeal</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}