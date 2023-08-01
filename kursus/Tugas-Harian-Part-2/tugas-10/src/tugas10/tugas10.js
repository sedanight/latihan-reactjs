import React from "react"
import "./tugas10.css"
import Logo from "../assets/img/logo.png";
const ListCard = (props) => {
      return(
        <>
          <div className="list-card">
            <input type={'checkbox'}/> {props.text}
          </div>
        </>
      )
      
}
const Tugas10 = () => {
  return (
    <>
      <div className="card">
        <img src = {`${Logo}`}/>
        <h1>THINGS TO DO..</h1>
        <small>During Bootcamp With Sanbercode</small>
        <hr/>
        <div>
          <ListCard text ="Belajar GIT & CLI"/>
          <ListCard text ="Belajar HTML & CSS"/>
          <ListCard text ="Belajar javascript"/>
          <ListCard text ="Belajar ReactJS Dasar"/>
          <ListCard text ="Belajar ReactJS Advance"/>
        </div>
        
      </div>
      
    </>
  );
}

export default Tugas10;
