import "./App.css";
import { useRef } from "react";
import { useState } from "react";
import studentdata from "./modeldata/studentdata";
import Studentlist from "./components/Studentlist";
import Grades from "./components/Grades";


function App() {
  const studentNameRef = useRef(null);
  const studentLocationRef = useRef(null);
  const studentGradeRef = useRef(null);
  const [studentdatalist, setstudentdatalist] = useState (studentdata);

  function addGrade() {
    console.log (studentNameRef.current.value)
    console.log (studentLocationRef.current.value)
    console.log (studentGradeRef.current.value)
        // {name: "Meena", location: "Jersey City, NJ", grade: "A"},
    const newVariable = {name:studentNameRef.current.value, location: studentLocationRef.current.value, grade: studentGradeRef.current.value}
    // studentdatalist.push (newVariable)
  setstudentdatalist ([...studentdatalist, newVariable])
  }
      
  return (
    <div>
      <Studentlist students={studentdatalist} />
           <Grades
        theGrade={studentGradeRef}
        theName={studentNameRef}
        theLocation={studentLocationRef}></Grades>
        <button onClick={addGrade}>Add Grade</button>

    </div>
  );
}

export default App;
