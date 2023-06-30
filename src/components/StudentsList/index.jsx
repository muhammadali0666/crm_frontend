import "./studentsListt.css";
import Delete from "../../assets/delete.png"
import Search from "../../assets/search.png"

export const StudentsList = () => {
  return (
    <div className="student_list">
      <div className="student_list_header">
        <h3 className="student_list_paragraph">Bizning o’quvchilar</h3>
        {/* <img src={Search} alt="serach" className="student_list_serch" width={24} height={24}/> */}
        <input type="text" className="student_list_input" placeholder="search..."/>
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
          <tr>
          <th scope="col">1</th>
            <td>Muhammad Aliyev</td>
            <td>+998904565025</td>
            <td>matematika</td>
            <td>Ota-ona(F.I.SH)</td>
            <td>+998904565025</td>
            <td><img src={Delete} alt="delete" className="table_img" width={18} height={18}/></td>
          </tr>
          <hr />
          <tr>
          <th scope="col">1</th>
           <td>Muhammad Aliyev</td>
            <td>+998904565025</td>
            <td>matematika</td>
            <td>Ota-ona(F.I.SH)</td>
            <td>+998904565025</td>
            <td><img src={Delete} alt="delete" className="table_img" width={18} height={18}/></td>
          </tr>
          <hr />
          <tr>
          <th scope="col">1</th>
           <td>Muhammad Aliyev</td>
            <td>+998904565025</td>
            <td>matematika</td>
            <td>Ota-ona(F.I.SH)</td>
            <td>+998904565025</td>
            <td><img src={Delete} alt="delete" className="table_img" width={18} height={18}/></td>
          </tr>
        </tbody>
      </table>
     </div>
    </div>
  );
};
