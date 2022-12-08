import "./App.css";
import Navibar from "./Navibar";
import StudentList from "./StudentList";

import { Routes,Route } from "react-router-dom";
import AddMentor from "./AddMentor";
import MentorList from "./MentorList";
import PageNotFound from "./NotFound";
function App() {
  return (
    <div className="App min-h-screen max-h-full">
      <Navibar />
      <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 flex flex-row flex-wrap gap-4 justify-center">
        <Routes>
          <Route path="/" element={<MentorList />}></Route>
          <Route path="/addmentor" element={<AddMentor />}></Route>
          <Route path="/students" element={<StudentList />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>     
      </div>
    </div>
  );
}

export default App;
