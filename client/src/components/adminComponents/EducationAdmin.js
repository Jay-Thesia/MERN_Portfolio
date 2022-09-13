import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./admin.css";

const EducationAdmin = () => {
  const [eduValue, setEducation] = useState("");
  const [eduData, setEduData] = useState([]);
  const [message, setMessage] = useState("");
  const [msgCondition, setMsgCondition] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/education");
      setEduData(res.data);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
    //aboutdata in array use to reload a page
  }, []);


  const onChangeEducation=(e)=>{
    setEducation(e.target.value);
  }
  //submit/add education
  const handleSubmit = (e) => {
    e.preventDefault();

    const postEducation={
      eduValue
    }

    setEducation('');
    axios.post('/education',postEducation)
    .then(res=>{
      console.log("added");
    }).catch(err=>console.log(err))
  };


  //delete the entry
  const deleteEducation = (id) => {
    axios
      .delete(`/education/${id}`)
      .then((res) => {
        setMsgCondition(true);
        setMessage(`${res.data.msg}`);

        setTimeout(() => {
          setMessage("");
          setMsgCondition(false);
        }, 2000);
      })
      .catch((err) => console.log(err));

    //delete from ui
    const eduDeleteFilter = eduData.filter((item) => item._id != id);
    setEduData(eduDeleteFilter);
  };

  return (
    <div className="same-component">
      <div className="same-form">
        <h3 className="eduAdmin">Education Component:</h3>
        <form className="eduForm" onSubmit={handleSubmit}>
          {/* <label htmlFor="text">Specialization & Date :</label>
          <input type="text" placeholder="Course Name & date(Ex.2019-23)" require="true" />

          <label htmlFor="text">Organization :</label>
          <input type="text" placeholder="College Name" require="true" />

          <label htmlFor="number">Grades :</label>
          <input type="number" placeholder="GPA" require="true" /> */}
          <label htmlFor="">Education :</label>
          <textarea name="" id="" cols="25" rows="8" value={eduValue} onChange={onChangeEducation}></textarea>

          <br />
          <button type="submit" className="updateButton">
            Add item
          </button>
        </form>
      </div>

      <div className="same-item">
        <h3 className={setMsgCondition?"new-delete item-delete-tab":"item-delete-tab"}>{message}</h3>
        {eduData.map((item) => (
          <div className="about-info" key={item._id}>
            {/* single education */}

            <div className="same-admin">
              <div className="icons">
                <Link to={`/editEducation/${item._id}`}>
                  <i
                    style={{ color: "green", fontSize: "20px" }}
                    className="fa-solid fa-edit"
                  ></i>
                </Link>
                <i
                  style={{ color: "red", fontSize: "20px" }}
                  className="fa-solid fa-trash"
                  onClick={() => deleteEducation(item._id)}
                ></i>
              </div>

              <br />

              <div className="single-education">
                <p>{item.eduValue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationAdmin;
