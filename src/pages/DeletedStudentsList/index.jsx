import "./deleted.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AllDeletedStudents } from "../../components/DeletedStudents";

export const AllDeletedList = () => {

  return (
    <div className="all_deleted">
      <div className="container">
        <div className="all_deleted_inner">
          <div className="all_deleted_left_box">
            <Sidebar />
          </div>
          <div className="all_deleted_right_box">
            <Header name="O'quvchilar"/>
            <div className="all_deleted_right_box_inner">
              <AllDeletedStudents/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
