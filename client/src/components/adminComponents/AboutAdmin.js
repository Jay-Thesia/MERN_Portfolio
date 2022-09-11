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
  const onchangeAbout = (e) => {
    setAbout(e.target.value);
    console.log(aboutValue);
  };

  //submit about change
  const handleSubmit = (e) => {
    //not to reload whole page use this
    e.preventDefault();

    const postValue = {
      aboutValue,
    };

    setAbout("");
    axios
      .post("/about", postValue)
      .then((res) => console.log("added"))
      .catch((err) => console.log(err));
  };

  //delete about
  const deleteAbout = (id) => {
    //delete from ui(it is delete from screen but if you reload the page it came why bez it is not deleted from DB )
    const aboutFliterDel = aboutData.filter((item) => item._id !== id);

    //delete from DB
    const Dbdeleted = axios
      .delete(`/about/${id}`)
      .then((res) => {
        setMessageCondition(true);
        setMessage(`${res.data.msg}`);

        setTimeout(() => {
          setMessage("");
          setMessageCondition(false);
        }, 2000);
      })
      .catch((err) => console.log(err));

    setAbout(Dbdeleted.data);

    setAboutData(aboutFliterDel);
  };

  return (
    <div className="same-component">
      <div className="same-form">
   
        <h3 className="aboutAdmin">About Component</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">About :</label>
          <textarea
            name="textarea"
            cols="24"
            rows="6"
            onChange={onchangeAbout}
            value={aboutValue}
          ></textarea>
          <button type="submit" className="updateButton">
            Add item
          </button>
        </form>
      </div>

      <div className="same-item">
      <h3
          className={
            setMessageCondition
              ? "new-delete item-delete-tab"
              : "item-delete-tab"
          }
        >
          {message}
        </h3>
        {aboutData.map((item) => (
          <div className="about-info" key={item._id}>
            <div className="icons">
              <Link to={`/editAbout/${item._id}`}>
                <i
                  style={{ color: "green", fontSize: "20px" }}
                  className="fa-solid fa-edit"
                ></i>
              </Link>
              <i
                style={{ color: "red", fontSize: "20px" }}
                className="fa-solid fa-trash"
                onClick={() => deleteAbout(item._id)}
              ></i>
            </div>

            <p>{item.aboutValue}</p>
          </div>
        ))}
          
      </div>
    </div>
  );
};

export default AboutAdmin;
