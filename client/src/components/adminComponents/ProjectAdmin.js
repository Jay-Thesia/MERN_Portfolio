import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import photu from "../../images/Profile.jpg";
import axios from "axios"

const initialState={
  product_id:'',
  title:'',
  description:''
}



const ProjectAdmin = () => {

  const [product,setProduct]=useState(initialState);
  const [image,setImage]=useState(false);
  const [message,setMessage]=useState('');
  const [messageCond,setMessageCond]=useState(false)
  const [projectData,setProjectData]=useState([]);

  //upload image functionality

  const handleUpload=async(e)=>{

    e.preventDefault();

    try {

      const file=e.target.files[0];

      if(!file) return alert('no file exist')

      if(file.size()>1024 * 1024){
        return alert('size is too big')
      }

      if(file.type!=='image/jpg' && file.type!=='image/jpeg' &&  file.type!=='image/png')
        return alert('incorrect file format')

      let formData=new FormData();
      formData.append('file',file);

      const res=await axios.post('/upload',formData,{
        headers:{'content-type':'multipart/form-data'}
      })

      setImage(res.data)
      
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }


  return (
    <div className="same-component">
      <div className="same-form">
        <h3 className="eduAdmin">Project Component</h3>

        <form>
          <label htmlFor="text">Id :</label>
          <input type="text" name="product_id" required id="product_id" />

          <label htmlFor="text">Title :</label>
          <input type="text" name="title" required id="title" />

          <label htmlFor="text">Description :</label>
          <textarea
            type="text"
            cols="25"
            rows="6"
            name="title"
            required
            id="title"
          />

          <label htmlFor="link">Github Link :</label>
          <input name="link" id="link" />

          <div className="upload">
            <input type="file" name="file" id="file_upload" />
            <div id="file_img">
              <img
                src="data:image/jpeg;base64,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"
                style={{ alignSelf: "center" }}
                alt="background image"
              />
              
              <span>X</span>
            </div>
          </div>
          
          <button type="submit" className="updateButton">
            Add item
          </button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div className="proects-admin">
            {" "}
            <div className="icons">
              <Link to={"/editProject"}>
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
            <br />
            {/* single project */}
            <div className="single-project">
              <div className="single-project-add-imgage">
                <img src={photu} alt="project img" />
              </div>

              <div className="single-project-info">
                <h3>Hustle</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat consequuntur, harum distinctio quaerat saepe unde ipsa
                  totam id eligendi minima necessitatibus modi perspiciatis
                  mollitia error fuga quam dolor architecto a magni fugit
                  nostrum laboriosam? Consequuntur dolor, est eos nihil aliquid
                  expedita, beatae labore enim quasi iure quis, tenetur earum
                  delectus.
                </p>
              </div>
            </div>

            <h3 className="item-delete-tab">item deleted</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAdmin;
