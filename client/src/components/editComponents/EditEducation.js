import React ,{useState,useEffect}from "react";
import { Link, useNavigate ,useParams } from "react-router-dom";
import "./edit.css";
import axios from 'axios';



const EditEducation = (props) => {

  const [eduValue, setEducation] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {id}=useParams();

  

  //getting the specific id
  useEffect(() => {
    axios.get(`/education/${id}`)
    .then(res=>{
      setEducation(res.data.eduValue);
    }).catch(err=>console.log(err))
  }, []);


  //onchange
  const onChangeEducation=(e)=>{
    setEducation(e.target.value);
    console.log(setEducation);
  }

  //update Education 

  const updateEducation=(e)=>{
    e.preventDefault();

    const postEducation={
      eduValue
    }

    axios.put(`/education/update/${id}`,postEducation)
    .then(res=>{
      setMessage(res.data.msg);
    }).catch(err=>console.log(err))

    setEducation('');

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
            <form onSubmit={updateEducation}>
              
              <label htmlFor="text">Education :</label>
          <textarea name="textarea" id="" cols="25" rows="8" value={eduValue} onChange={onChangeEducation}></textarea>

              {/* <label htmlFor="text">Specialization :</label>
              <input type="text" placeholder="Course Name" require />

              <label htmlFor="date">Start Date : </label>
              <input type="date" require />

              <label htmlFor="date">End Date : </label>
              <input type="date" require />

              <label htmlFor="text">Organization :</label>
              <input type="text" placeholder="College Name" require />

              <label htmlFor="number">Grades :</label>
              <input type="number" placeholder="GPA" require /> */}

              <div className="btns">
                <button type="submit" className="update-btn">
                  Update Edu
                </button>
                <Link to="/admin"><button className="cancel-btn">Cancel</button></Link> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEducation;
