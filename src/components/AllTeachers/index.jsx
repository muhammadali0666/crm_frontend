import "./allteacher.css";
import { useState, useEffect } from "react";
import Delete from "../../assets/delete.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleDelete = (e) => {
    fetch(`http://localhost:4001/delete_teacher/${e}`, {
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
              <th scope="col" className="appeal_one">
                №
              </th>
              <th scope="col" className="thead_th">
                O’qituvchi ism Familiyasi
              </th>
              <th scope="col" className="appeal_one">
                #
              </th>
            </tr>
          </thead>
          <tbody className="tbody">
            {teacherData.length &&
              teacherData.map((element, idx) => (
                <tr className="appeal_tr">
                <th className="appeal_one" scope="col">
                  {idx + 1}
                </th>
                <td className="appeal_td">{element.oqituvchiIsmi}</td>
                <td className="appeal_one">
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
