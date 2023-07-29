import "./allteacher.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AllTeachers } from "../../components/AllTeachers";

export const AllTeachersList = () => {

  return (
    <div className="all_teachers">
      <div className="container">
        <div className="all_teachers_inner">
          <div className="all_teachers_left_box">
            <Sidebar />
          </div>
          <div className="all_teachers_right_box">
            <Header name="O'quvchilar"/>
            <div className="all_teachers_right_box_inner">
              <AllTeachers/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
