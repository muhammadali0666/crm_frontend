import "./students.css";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { AddStudent } from "../../components/AddStudent";
import { StudentsList } from "../../components/StudentsList";

export const Students = ({ searchStudent, setSearchStudent }) => {
  return (
    <div className="student">
      <div className="container">
        <div className="student_inner">
          <div className="student_left_box">
            <Sidebar />
          </div>
          <div className="student_right_box">
            <Header name="O’quvchilar" />
            <div className="student_right_box_inner">
              <AddStudent />
              <StudentsList searchStudent={searchStudent} setSearchStudent={setSearchStudent}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
