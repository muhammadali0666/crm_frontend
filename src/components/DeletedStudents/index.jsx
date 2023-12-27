import "./deletedstudents.css";
import { useState, useEffect } from "react";
import Delete from "../../assets/delete.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AllDeletedStudents = () => {
  const [deletedStudents, setDeletedStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/get_deleted", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setDeletedStudents(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (e) => {
    fetch(`http://localhost:4001/delete_removing_students/${e}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.info(data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      })
      .catch((error) => console.error(error));
      setTimeout(() => {
        location.reload()
      },3500)
  };
  return (
    <div className="all_student all_student_extra">
       <ToastContainer />
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
            {deletedStudents.length &&
              deletedStudents.map((element, idx) => (
                <tr key={idx}>
                  <th scope="col">{idx + 1}</th>
                  <td>{element.name}</td>
                  <td>{element.phoneNumber}</td>
                  <td>{element.science}</td>
                  <td>{element.parentName}</td>
                  <td>{element.parentNumber}</td>
                  <td className="odd">
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
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
