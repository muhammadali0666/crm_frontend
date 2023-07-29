import "./card.css";
import Icon from "../../assets/icon.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Card = () => {

  const [studentData, setStudentData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [deletedStudents, setDeletedStudents] = useState([]);
///////////////////////////
  useEffect(() => {
    fetch("http://localhost:4001/get_deleted")
      .then((res) => res.json())
      .then((data) => setDeletedStudents(data))
      .catch((err) => console.log(err));
  }, []);
///////////////////////////////////////
  useEffect(() => {
    fetch("http://localhost:4001/get_groups")
      .then((res) => res.json())
      .then((data) => setGroups(data))
      .catch((err) => console.log(err));
  }, []);
///////////////////////////////////////
  useEffect(() => {
    fetch("http://localhost:4001/get_students")
      .then((res) => res.json())
      .then((data) => setStudentData(data));
  }, []);
////////////////////////////////
  useEffect(() => {
    fetch("http://localhost:4001/get_teacher")
      .then((res) => res.json())
      .then((data) => setTeacherData(data));
  }, []);

  return (
    <div className="card_wrapper">
      <div className="card_wrapper_inner">
        <NavLink to='/all_students' className="card">
          <div className="card_one">
            <h3 className="card_paragraph">Jami o’quvchilar soni:</h3>
            <p className="card_text">{studentData.length} ta</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </NavLink>
        <NavLink to='/all_teachers' className="card1 card">
          <div className="card_one">
            <h3 className="card_paragraph">O’qituvchilar soni:</h3>
            <p className="card_text">{teacherData.length} ta</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </NavLink>
      </div>
      <div className="card_wrapper_inner">
        <NavLink to='/all_deleted_students' className="card">
          <div className="card_one">
            <h3 className="card_paragraph">tark etganlar:</h3>
            <p className="card_text">{deletedStudents.length} ta</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </NavLink>
        <div className="card1 card">
          <div className="card_one">
            <h3 className="card_paragraph">Jami guruhlar soni</h3>
            <p className="card_text">{groups.length} ta</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
