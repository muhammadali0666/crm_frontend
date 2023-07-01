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
              <th scope="col">№</th>
              <th scope="col">O’quvchi ismi</th>
              <th scope="col">Telefon nomer</th>
              <th className="long_text" scope="col">Izoh</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr>
              <th scope="col">1</th>
              <td>Muhammad Aliyev</td>
              <td>+998904565025</td>
              <td className="long_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel
                nisl nisl nec sed.{" "}
              </td>
              <td>
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
            <tr>
              <th scope="col">1</th>
              <td>Muhammad Aliyev</td>
              <td>+998904565025</td>
              <td className="long_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel
                nisl nisl nec sed.{" "}
              </td>
              <td>
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
            <tr>
              <th scope="col">1</th>
              <td>Muhammad Aliyev</td>
              <td>+998904565025</td>
              <td className="long_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel
                nisl nisl nec sed.{" "}
              </td>
              <td>
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
