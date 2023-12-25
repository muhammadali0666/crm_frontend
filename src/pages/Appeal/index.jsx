import "./apeal.css"
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { ApealList } from "../../components/ApealList"
import { ApealTwoList } from "../../components/ApealTwoList"

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
            <ApealTwoList/>
            <ApealList/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}