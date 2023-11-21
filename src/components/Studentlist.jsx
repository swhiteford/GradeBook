import React from 'react'
import Student from './Student'
function Studentlist(props) {
  return (
    <div>
      {
(props.students.map((data)=>{
 return <Student name = {data.name}
    location = {data.location}
    grade = {data.grade}/>
}))

      }
    </div>
  )
}

export default Studentlist
