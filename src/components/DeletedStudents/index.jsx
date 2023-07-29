import "./deletedstudents.css";
import { useState, useEffect } from "react";

export const AllDeletedStudents = () => {
  const [deletedStudents, setDeletedStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/get_deleted")
      .then((res) => res.json())
      .then((data) => setDeletedStudents(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="all_student all_student_extra">
      <div className="student_list_box">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">O’quvchi ismi</th>
              <th scope="col">Telefon nomer</th>
              <th scope="col">Yo’nalish</th>
              <th scope="col">Ota-ona(F.I.SH)</th>
              <th scope="col">Ota-ona (Tel)</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {deletedStudents.length &&
              deletedStudents.map((element, idx) => (
                <tr key={idx}>
                  <th scope="col">{idx + 1}</th>
                  <td>{element.name}</td>
                  <td>{element.phoneNumber}</td>
                  <td>{element.science}</td>
                  <td>{element.parentName}</td>
                  <td>{element.parentNumber}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
