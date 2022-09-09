import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import e from "cors";

const AboutAdmin = () => {
  const [aboutValue, setAbout] = useState("");
  const [aboutData, setAboutData] = useState([]);

  const [message, setMessage] = useState("");
  const [messageCondition, setMessageCondition] = useState(false);
  

  //fetching data
  const fetchData = async () => {
    const res = await axios.get("/about");
    setAboutData(res.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
    //aboutdata in array use to reload a page
  }, []);

  //onchange
  const onchangeAbout=(e)=>{
    setAbout(e.target.value);
    console.log(aboutValue)
  }

 
  //submit about change
  const handleSubmit=(e)=>{

    //not to reload whole page use this 
    e.preventDefault();

    const postValue={
      aboutValue
    }

    setAbout('');
    axios.post('/about',postValue)
    .then(res=>console.log('added'))
    .catch(err=>console.log(err))
    
  }
  return (
    <div className="same-component">
      <div className="same-form">
        <h4 className="aboutAdmin">About Component: </h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">About :</label>
          <textarea name="textarea" cols="24" rows="6" onChange={onchangeAbout} value={aboutValue}></textarea>
          <button type="submit" className="updateButton">
            Add item
          </button>
        </form>
      </div>

      <div className="same-item">
        {aboutData.map((item) => (
          <div className="about-info" key={item._id}>
            <div className="icons">
              <Link to={"/editAbout"}>
                <i
                  style={{ color: "green", fontSize: "20px" }}
                  className="fa-solid fa-edit"
                ></i>
              </Link>
              <i
                style={{ color: "red", fontSize: "20px" }}
                className="fa-solid fa-trash"
              ></i>
            </div>

            <p>
              {item.aboutValue}
            </p>
          </div>
        ))}
      </div>

      <h3 className={setMessageCondition ? "new-delete item-delete-tab":"item-delete-tab"}>{message}</h3>
    </div>
  );
};

export default AboutAdmin;
