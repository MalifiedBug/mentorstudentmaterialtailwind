import { useEffect, useState } from "react";
import { mentorStudentUrl } from "./Global";
import axios from "axios";
import StudentCard from "./StudentCard";
export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${mentorStudentUrl}/students`)
        .then(function (response) {
          // handle success
          console.log(response.data)
          setStudents(response.data)
        })
        .catch(function (error) {
          // handle error
          alert(error);
        })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-4">
        {students.map((student)=>
        <StudentCard  student={student}/>)}
    </div>
  )
}
