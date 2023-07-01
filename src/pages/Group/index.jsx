import "./group.css"
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { AddGroup } from "../../components/AddGroup"
import { GroupList } from "../../components/GroupList"

export const Groups = () => {
  return (
    <div className="group">
    <div className="container">
      <div className="group_inner">
        <div className="group_left_box">
          <Sidebar/>
        </div>
        <div className="group_right_box">
          <Header name='Guruhlar'/>
          <div className="group_right_box_inner">
           <AddGroup/>
           <GroupList/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}