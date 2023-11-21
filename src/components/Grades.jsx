import React from "react";

export default function Grades(props) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" ref = {props.theName}/>
      <label htmlFor="location">Location</label>
      <input name="location" type="text" ref = {props.theLocation} />
      <label htmlFor="grade">Grade</label>
      <input name="grade" type="text" ref = {props.theGrade}/>
    </div>
  );
}
