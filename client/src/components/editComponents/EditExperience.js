// editExperience.js

import React,{useEffect,useState} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import "./edit.css"
import axios from 'axios'

const EditExperience = (props) => {


  const [expValue, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {id}=useParams();



  //getting the specific id
  useEffect(()=>{
    axios.get(`/experience/${id}`)
    .then(res=>{
      setExperience(res.data.expValue);
    }).catch(err=>console.log(err))
  },[]);

  //onchange
  const onChangeExperience=(e)=>{
    setExperience(e.target.value);
     console.log(setExperience);
  }

  //update exp
  const updateExperience=(e)=>{
    e.preventDefault();

    const postExperience={
      expValue
    }

    axios.put(`/experience/update/${id}`,postExperience)
    .then(res=>{
      setMessage(res.data.msg);
    }).catch(err=>console.log(err))

    setExperience('');

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
            <form onSubmit={updateExperience}>
              

              <label htmlFor="text">Experience :</label>
              <textarea name="" id="" cols="30" rows="10" value={expValue} onChange={onChangeExperience}></textarea>

              <div className="btns">
                <button type="submit" className="update-btn">Update Experience</button>
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

export default EditExperience;
