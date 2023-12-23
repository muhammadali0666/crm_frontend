import "./apeal.css";
import Delete from "../../assets/delete.png";

export const ApealList = () => {
  return (
    <div className="apeal_list">
      <div className="apeal_list_header">
        <h3 className="apeal_list_paragraph">Bizning o’quvchilar</h3>
        {/* <img src={Search} alt="serach" className="apeal_list_serch" width={24} height={24}/> */}
        <input
          type="text"
          className="apeal_list_input"
          placeholder="search..."
        />
      </div>
      <div className="apeal_list_box">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="appeal_one">№</th>
              <th scope="col" className="thead_th">O’quvchi ismi</th>
              <th scope="col" className="thead_th">Telefon nomer</th>
              <th className="long_text" scope="col">Izoh</th>
              <th scope="col" className="appeal_one">#</th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr className="appeal_tr">
              <th className="appeal_one" scope="col">1</th>
              <td className="appeal_td">Muhammad Aliyev</td>
              <td className="appeal_td">+998904565025</td>
              <td className="long_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel
                nisl nisl nec sed.{" "}
              </td>
              <td className="appeal_one">
                <img
                  src={Delete}
                  alt="delete"
                  className="table_img"
                  width={18}
                  height={18}
                />
              </td>
            </tr>
            <hr />
            <tr className="appeal_tr">
              <th className="appeal_one" scope="col">2</th>
              <td className="appeal_td">Muhammad Aliyev</td>
              <td className="appeal_td">+998904565025</td>
              <td className="long_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel
                nisl nisl nec sed.{" "}
              </td>
              <td className="appeal_one">
                <img
                  src={Delete}
                  alt="delete"
                  className="table_img"
                  width={18}
                  height={18}
                />
              </td>
            </tr>
            <hr />
            <tr className="appeal_tr">
              <th className="appeal_one" scope="col">3</th>
              <td className="appeal_td">Muhammad Aliyev</td>
              <td className="appeal_td">+998904565025</td>
              <td className="long_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel
                nisl nisl nec sed.{" "}
              </td>
              <td className="appeal_one">
                <img
                  src={Delete}
                  alt="delete"
                  className="table_img"
                  width={18}
                  height={18}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
