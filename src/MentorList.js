import { useEffect, useState } from "react";
import { mentorStudentUrl } from "./Global";
import axios from "axios";
import MentorCard from "./MentorCard";

export default function MentorList() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${mentorStudentUrl}/mentors`)
        .then(function (response) {
          // handle success
          console.log(response.data)
          setMentors(response.data)
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
        {mentors.map((mentor)=>
        <MentorCard  mentor={mentor}/>)}
    </div>
  )
}
