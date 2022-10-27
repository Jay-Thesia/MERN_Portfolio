import React, { useEffect, useState } from "react";
import { Link, useNavigate ,useParams} from "react-router-dom";
import "./edit.css";
import axios from "axios";

const EditAbout = (props) => {
  const [aboutValue, setAbout] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {id}=useParams();

  

  //getting the specific id
  useEffect(() => {
    axios.get(`/about/${id}`)
    .then(res=>{
      setAbout(res.data.aboutValue);
    }).catch(err=>console.log(err))
  }, []);


  //onchange
  const onchangeAbout=(e)=>{
    setAbout(e.target.value);
    console.log(aboutValue);
  }

  //update about 

  const updateAbout=(e)=>{
    e.preventDefault();

    const postAbout={
      aboutValue
    }

    axios.put(`/about/update/${id}`,postAbout)
    .then(res=>{
      setMessage(res.data.msg);
    }).catch(err=>console.log(err))

    setAbout('');

    setTimeout(()=>{
      navigate("/admin")
    },2000)
  }
  
  return (
    <div className="edit">
      <div className="main-container">
       
        <div className="same-component">
          <div className="same-form">
          <h3 className="updated">{message}</h3>
            <form onSubmit={updateAbout}>
         

              <label htmlFor="text">About :</label>
              <textarea name="textarea" id="" cols="30" rows="5" value={aboutValue} onChange={onchangeAbout}/>

              <div className="btns">
                <button type="submit" className="update-btn" >
                  Update Item
                </button>

                <Link to="/admin">
                  <button className="cancel-btn">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAbout;
