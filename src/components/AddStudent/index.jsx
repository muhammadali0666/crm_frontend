import "./addStudent.css";

import React from "react";

export const AddStudent = () => {
  return (
    <div className="student">
      <h2 className="student_paragraph">
      Yangi o’quvchi qo’shish
      </h2>
      <form className="sudent_form">
        <div className="student_box_wrapper">
          <div className="student_form_box">
            <label htmlFor="ism" className="student_label">
              O’quvchi ismi
            </label>
            <input
              type="text"
              className="student_input"
              placeholder="Muhammadali Shuhratjonov"
              id="ism"
            />
            <label htmlFor="Ota-onasi" className="student_label">
              Ota-onasi ismi
            </label>
            <input
              type="text"
              className="student_input"
              placeholder="Ota-onasi ismi"
              id="Ota-onasi"
            />
          </div>
          <div className="student_form_box">
            <label htmlFor="telefon" className="student_label">
              Telefon raqam
            </label>
            <input
              type="number"
              className="student_input"
              placeholder="+998 90 *** ** **"
              id="telefon"
            />
            <label htmlFor="Ota-onasi-nomeri" className="student_label">
              Ota onasi nomeri
            </label>
            <input
              type="number"
              className="student_input"
              placeholder="+998 90 *** ** **"
              id="Ota-onasi-nomeri"
            />
          </div>
          <div className="student_form_box">
            <label className="student_label">Yo’nalish</label>
            <select className="student_select" defaultValue="">
              <option value="ona-tili" className="student_option">
                ona-tili
              </option>
              <option value="adabiyot" className="student_option">
                adabiyot
              </option>
            </select>
            <label htmlFor="rasm" className="student_label">
              Rasm 3x4
            </label>
            <input
              type="file"
              className="student_input"
              placeholder="Yuklash "
              id="rasm"
            />
            <button className="student_btn" type="submit">
              Qo’shish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
