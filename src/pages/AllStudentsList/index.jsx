import "./allstudents.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AllStudents } from "../../components/AllStudents";

export const AllStudentsList = () => {

  return (
    <div className="all_students">
      <div className="container">
        <div className="all_students_inner">
          <div className="all_students_left_box">
            <Sidebar />
          </div>
          <div className="all_students_right_box">
            <Header name="O'quvchilar"/>
            <div className="all_students_right_box_inner">
              <AllStudents/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
