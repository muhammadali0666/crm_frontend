import "./allteacher.css";
import { useState, useEffect } from "react";

export const AllTeachers = () => {
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/get_teacher", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setTeacherData(data));
  }, []);
  return (
    <div className="all_student all_student_extra">
      <div className="student_list_box">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">O’qituvchi ismi-familiyasi</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {teacherData.length &&
              teacherData.map((element, idx) => (
                <tr key={idx}>
                  <th scope="col">{idx + 1}</th>
                  <td>{element.oqituvchiIsmi}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
