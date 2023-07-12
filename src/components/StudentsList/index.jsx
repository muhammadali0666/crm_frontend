import "./studentsListt.css";
import Delete from "../../assets/delete.png";
import { useState, useEffect } from "react";

export const StudentsList = () => {
  const [studentData, setStudentData] = useState([]);
  const [searchStudent, setSearchStudent] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4001/get_students")
      .then((res) => res.json())
      .then((data) => setStudentData(data));
  }, []);

  const handleDelete = (e) => {
    fetch(`http://localhost:4001/student_remove/${e}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    window.location.reload();
  };

  /////////////////////////////////////////////////////////////// SEARCH

  const handleSearch = async(e) => {
    e.preventDefault();
    const { search } = e.target;
   await fetch("http://localhost:4001/search_student", {
      method: "GET",
      headers: { search: search.value },
    })
      .then((res) => res.json())
      .then((data1) => setSearchStudent(data1))
      .catch((error) => console.error(error));
      search.value = "";
  };

  return (
    <div className="student_list">
      <div className="student_list_header">
        <h3 className="student_list_paragraph">Bizning o’quvchilar</h3>
        {/* <img src={Search} alt="serach" className="student_list_serch" width={24} height={24}/> */}
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            className="student_list_input"
            placeholder="search..."
            name="search"
            required
          />
        </form>
      </div>
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
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {searchStudent.length !== 0
              ? searchStudent.map((element, idx) =>
                  element.length !== 0 ? (
                    <tr key={idx}>
                      <th scope="col">{idx + 1}</th>
                      <td>{element.name}</td>
                      <td>{element.phoneNumber}</td>
                      <td>{element.science}</td>
                      <td>{element.parentName}</td>
                      <td>{element.parentNumber}</td>
                      <td>
                        <img
                          src={Delete}
                          alt="delete"
                          className="table_img"
                          width={18}
                          height={18}
                          onClick={() => handleDelete(element.id)}
                        />
                      </td>
                    </tr>
                  ) : null
                )
              : studentData.length !== 0 &&
                studentData.map((element, idx) =>
                  element.length !== 0 ? (
                    <tr key={idx}>
                      <th scope="col">{idx + 1}</th>
                      <td>{element.name}</td>
                      <td>{element.phoneNumber}</td>
                      <td>{element.science}</td>
                      <td>{element.parentName}</td>
                      <td>{element.parentNumber}</td>
                      <td>
                        <img
                          src={Delete}
                          alt="delete"
                          className="table_img"
                          width={18}
                          height={18}
                          onClick={() => handleDelete(element.id)}
                        />
                      </td>
                    </tr>
                  ) : null
                )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
