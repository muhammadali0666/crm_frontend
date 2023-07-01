import "./payment.css";
import Completed from "../../assets/completed.png"

export const PaymentsList = () => {
  return (
    <div className="payment_list">
      <div className="payment_list_header">
        <h3 className="payment_list_paragraph">Bizning o’quvchilar</h3>
        {/* <img src={Search} alt="serach" className="payment_list_serch" width={24} height={24}/> */}
        <input type="text" className="payment_list_input" placeholder="search..."/>
      </div>
     <div className="payment_list_box">
     <table className="table">
        <thead>
          <tr>
          <th scope="col">№</th>
            <th scope="col">O’quvchi ismi</th>
            <th scope="col">Telefon nomer</th>
            <th scope="col">Yo’nalish</th>
            <th scope="col">O’qituvchisi</th>
            <th scope="col">To’lov vaqti</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
          <th scope="col">1</th>
            <td>Muhammad Aliyev</td>
            <td>+998904565025</td>
            <td>matematika</td>
            <td>O’qituvchi (F.I.SH)</td>
            <td>06.02.2022</td>
            <td><img src={Completed} alt="delete" className="table_img" width={20} height={16}/></td>
          </tr>
          <hr />
          <tr>
          <th scope="col">1</th>
           <td>Muhammad Aliyev</td>
            <td>+998904565025</td>
            <td>matematika</td>
            <td>O’qituvchi (F.I.SH)</td>
            <td>06.02.2022</td>
            <td><img src={Completed} alt="delete" className="table_img" width={20} height={16}/></td>
          </tr>
          <hr />
          <tr>
          <th scope="col">1</th>
           <td>Muhammad Aliyev</td>
            <td>+998904565025</td>
            <td>matematika</td>
            <td>O’qituvchi (F.I.SH)</td>
            <td>06.02.2022</td>
            <td><img src={Completed} alt="delete" className="table_img" width={20} height={16}/></td>
          </tr>
        </tbody>
      </table>
     </div>
    </div>
  );
};
