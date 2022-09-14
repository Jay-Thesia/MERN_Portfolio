import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import axios from "axios";

const ExperienceAdmin = () => {
  const [expValue, setExperience] = useState("");
  const [expData, setExpData] = useState([]);
  const [message, setMessage] = useState("");
  const [msgCondition, setMsgCondition] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/experience");
      setExpData(res.data);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);


  //on change
  const onChangeExperience=(e)=>{
    setExperience(e.target.value);
    // console.log(expValue);
    
  }

  //submit and add that thing to admin panel and main screen
  const handleSubmit=(e)=>{
    e.preventDefault();

    const postExperience={
      expValue
    }

    setExperience('');
    axios.post('/experience',postExperience)
    .then(res=>{

    })
  }

  //delete
  const deleteExperience=(id)=>{
    axios.delete(`/experience/${id}`)
    .then(res=>{
      setMsgCondition(true);
      setMessage(`${res.data.msg}`);

      setTimeout(() => {
        setMessage('');
        setMsgCondition(false)
      }, 2000);
    }).catch(err=>console.log(err))


    //delete from ui
    const experienceFilterDel=expData.filter(item =>(
      item._id!=id
    ))

    setExpData(experienceFilterDel)
  }



  return (
    <div className="same-component">
      <div className="same-form">
        <h3 className="eduAdmin">Experience Component</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Experience :</label>
          <textarea name="" id="" cols="30" rows="10" value={expValue} onChange={onChangeExperience}></textarea>
          <button type="submit" className="updateButton">
            Add item
          </button>
        </form>
      </div>

      <div className="same-item">
        <h3
          className={setMsgCondition ? "item-delete-tab" : "item-delete-item"}
        >
          {message}
        </h3>
        <div className="about-info">
          {expData.map((item) => (
            <div className="same-admin" key={item._id}>
              <div className="icons">
                <Link to={`/editExperience/${item._id}`}>
                  <i
                    style={{ color: "green", fontSize: "20px" }}
                    className="fa-solid fa-edit"
                  ></i>
                </Link>
                <i
                  style={{ color: "red", fontSize: "20px" }}
                  className="fa-solid fa-trash" onClick={()=>deleteExperience(item._id)}
                ></i>
              </div>

              {/* single Education */}
              <div className="single-experience-add">
                <p>{item.expValue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceAdmin;
