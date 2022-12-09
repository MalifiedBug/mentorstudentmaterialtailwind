import { useEffect, useState } from "react";
import { mentorStudentUrl } from "./Global";
import axios from "axios";
import MentorCard from "./MentorCard";
import { Input } from "@material-tailwind/react";

export default function MentorList() {
  const [mentors, setMentors] = useState([]);
  const [search,setSearch] = useState("")
  console.log(search)


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

  //add search filter 

  return (
    <div className="">
      <div className="m-4 bg-white rounded-lg">
      <Input  onInput={(e)=>setSearch(e.target.value)} className="" color="indigo" label="Search" />
      </div>
        <div className="flex flex-row flex-wrap gap-4">
          {mentors.map((mentor)=>
          <MentorCard  mentor={mentor}/>)}
        </div>        
    </div>
  )
}
